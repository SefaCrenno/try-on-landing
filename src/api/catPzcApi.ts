import { toBase64, checkStatus } from './apiUtils';

const API_ENDPOINT = "https://api.runpod.ai/v2/tz2mtg1ln5l7g7";

export const tryOnWithCatPzc = async (imageData, onProgress = () => {}) => {
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
                steps: imageData.steps || 50,
                cfg: imageData.cfg || 2.5,
                seed: 42,
                mixed_precision: "fp16"
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
