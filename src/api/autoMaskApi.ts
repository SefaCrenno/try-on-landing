import { toBase64, checkStatus } from './apiUtils';

const API_ENDPOINT = "https://api.runpod.ai/v2/7nl4w4hdnbn4uf";

export const tryOnWithAutoMask = async (imageData, onProgress = () => {}) => {
    try {
        onProgress("Preparing images...");
        const [humanImageB64, garmentImageB64] = await Promise.all([
            toBase64(imageData.humanImage),
            toBase64(imageData.garmentImage)
        ]);

        const payload = {
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

        onProgress("Sending request...");
        const response = await fetch(`${API_ENDPOINT}/run`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'rpa_CGPLDPMQT0BZKRHW8BGEQXSUIRCFH24GT61TKG7A14b36r'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        return await checkStatus(API_ENDPOINT, data.id, 0, onProgress);

    } catch (error) {
        throw new Error(error.message || 'Failed to process images');
    }
};
