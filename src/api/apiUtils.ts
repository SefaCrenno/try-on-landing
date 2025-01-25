export const toBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = reject;
    });
};

const removeMetadata = (base64Image) => {
    // Create a temporary canvas and image
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    return new Promise((resolve) => {
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            // Convert back to base64 without metadata
            resolve(canvas.toDataURL('image/jpeg', 1.0).split(',')[1]);
        };
        img.src = `data:image/jpeg;base64,${base64Image}`;
    });
};

export const checkStatus = async (API_BASE_URL, jobId, retryCount = 0, onProgress) => {
    const POLL_INTERVAL = 2000;
    const MAX_RETRIES = 60;
    
    try {
        const statusResponse = await fetch(`${API_BASE_URL}/status/${jobId}`, {
            headers: {
                Authorization: "rpa_CGPLDPMQT0BZKRHW8BGEQXSUIRCFH24GT61TKG7A14b36r"
            }
        });

        const data = await statusResponse.json();
        const status = data.status;

        switch (status) {
            case "IN_QUEUE":
                onProgress("Waiting in queue...");
                break;
            case "IN_PROGRESS":
                onProgress("Processing images...");
                break;
            case "COMPLETED":
                onProgress("Finishing up...");
                const resultImage = data.output.payload.result;
                const cleanImage = await removeMetadata(resultImage);
                return cleanImage;
            case "FAILED":
                throw new Error("Processing failed. Please try again.");
            default:
                throw new Error("Unknown status received");
        }

        if (retryCount >= MAX_RETRIES) {
            throw new Error("Processing timeout. Please try again.");
        }

        await new Promise(resolve => setTimeout(resolve, POLL_INTERVAL));
        return checkStatus(API_BASE_URL, jobId, retryCount + 1, onProgress);
    } catch (error) {
        if (error.response?.status === 429) {
            onProgress("Rate limit reached. Waiting...");
            await new Promise(resolve => setTimeout(resolve, 5000));
            return checkStatus(API_BASE_URL, jobId, retryCount, onProgress);
        }
        throw error;
    }
};
