
export const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tiff'];
        const fileExtension = file.name.slice(((file.name.lastIndexOf(".") - 1) >>> 0) + 2).toLowerCase();

        if (!validExtensions.includes('.' + fileExtension)) {
            return reject(new Error('Invalid file type. Please upload a valid image.'));
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result.split(',')[1]; 
            resolve(base64String);
        };

        reader.onerror = () => {
            reject(new Error('Error reading file'));
        };

        reader.readAsDataURL(file);
    });
};

export const convertBase64ToImage = (base64String, outputElementId) => {
    const img = document.createElement('img');
    img.src = `data:image/png;base64,${base64String}`; // Adjust the MIME type as necessary

    // Optionally, you can set attributes or styles
    img.style.maxWidth = '100%';
    img.style.height = 'auto';

    const outputElement = document.getElementById(outputElementId);
    if (outputElement) {
        outputElement.innerHTML = ''; // Clear previous content
        outputElement.appendChild(img); // Append the new image
    } else {
        throw new Error('Output element not found');
    }
};

