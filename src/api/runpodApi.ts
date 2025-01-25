import axios from "axios";

const API_ENDPOINTS = {
    auto: "https://api.runpod.ai/v2/7nl4w4hdnbn4uf",
    manual: "https://api.runpod.ai/v2/5rq9r0mxjq6i4w"
};

const POLL_INTERVAL = 2000; // 2 seconds
const MAX_RETRIES = 60; // 2 minutes maximum wait

export const tryOnImages = async (
    imageData,
    mode = 'auto',
    onProgress = (status) => {}
) => {
    const API_BASE_URL = API_ENDPOINTS[mode];

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]);
            reader.onerror = reject;
        });
    };

    const checkStatus = async (jobId, retryCount = 0) => {
        try {
            const statusResponse = await axios.get(`${API_BASE_URL}/status/${jobId}`, {
                headers: {
                    Authorization: "rpa_CGPLDPMQT0BZKRHW8BGEQXSUIRCFH24GT61TKG7A14b36r",
                }
            });

            const status = statusResponse.data.status;

            switch (status) {
                case "IN_QUEUE":
                    onProgress("Waiting in queue...");
                    break;
                case "IN_PROGRESS":
                    onProgress("Processing images...");
                    break;
                case "COMPLETED":
                    onProgress("Finishing up...");
                    return statusResponse.data.output.payload.result;
                case "FAILED":
                    throw new Error("Processing failed. Please try again.");
                default:
                    throw new Error("Unknown status received");
            }

            if (retryCount >= MAX_RETRIES) {
                throw new Error("Processing timeout. Please try again.");
            }

            await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL));
            return checkStatus(jobId, retryCount + 1);
        } catch (error) {
            if (error.response?.status === 429) {
                onProgress("Rate limit reached. Waiting...");
                await new Promise(resolve => setTimeout(resolve, 5000));
                return checkStatus(jobId, retryCount);
            }
            throw error;
        }
    };

    try {
        onProgress("Preparing images...");
        let payload;

        if (mode === 'auto') {
            const [humanImageB64, garmentImageB64] = await Promise.all([
                toBase64(imageData.humanImage),
                toBase64(imageData.garmentImage)
            ]);

            payload = {
                input: {
                    human_image_b64: humanImageB64,
                    garment_image_b64: garmentImageB64,
                    cloth_type: imageData.clothType,
                    steps: 8,
                    cfg: 1.0,
                    seed: 42512,
                    sampler_name: "euler",
                    scheduler: "normal",
                    denoise: 1.0,
                    lora_strength_1: 1.0,
                    lora_strength_2: 1.0,
                    image_strength: "highest",
                    output_length: 1536,
                    patch_color: "#FF0000",
                    grow: imageData.grow,
                    blur: imageData.blur,
                    guidance_value: 30.0
                }
            };
        } else {
            const [humanImageB64, garmentImageB64, maskImageB64] = await Promise.all([
                toBase64(imageData.humanImage),
                toBase64(imageData.garmentImage),
                toBase64(imageData.maskImage)
            ]);

            payload = {
                input: {
                    human_image_b64: humanImageB64,
                    garment_image_b64: garmentImageB64,
                    human_mask_b64: maskImageB64,
                    patch_mode: "patch_right",  // Add this line
                    steps: 8,
                    cfg: 1.0,
                    seed: 931724776458245,
                    sampler_name: "euler",
                    scheduler: "normal",
                    denoise: 1.0,
                    lora_strength_1: 1.0,
                    lora_strength_2: 1.0,
                    image_strength: "highest",
                    output_length: 1536,
                    patch_color: "#FF0000",
                    grow: imageData.grow,
                    blur: imageData.blur,
                    guidance_value: 30.0
                }
            };
        }

        onProgress("Sending request...");
        const response = await axios.post(
            `${API_BASE_URL}/run`,
            payload,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: "rpa_CGPLDPMQT0BZKRHW8BGEQXSUIRCFH24GT61TKG7A14b36r",
                },
                timeout: 10000
            }
        );

        return await checkStatus(response.data.id);
    } catch (error) {
        if (error.code === 'ECONNABORTED') {
            throw new Error('Connection timeout. Please check your internet connection.');
        }
        throw new Error(error.response?.data?.error || error.message || 'An unexpected error occurred');
    }
};
