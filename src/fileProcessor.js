const fs = require('fs');
const path = require('path');

const processFiles = (folderPath) => {
    const products = [];
    const encounteredSKUs = new Set();

    fs.readdirSync(folderPath).forEach(filename => {
        if (filename.endsWith('.txt')) {
            const filePath = path.join(folderPath, filename);
            const fileContent = fs.readFileSync(filePath, 'utf8');
            
            // Process file content
            const lines = fileContent.trim().split('\n');
            lines.forEach(line => {
                // Remove pipe "|" 
                line = line.trim().replace(/^\|/, '');

                const [sku, shortDescription, longDescription] = line.split('~');
                if (sku && shortDescription && longDescription) {
                    // Check for duplicate id
                    if (!encounteredSKUs.has(sku.trim())) {
                        products.push({ sku: sku.trim(), shortDescription: shortDescription.trim(), longDescription: longDescription.trim() });
                        encounteredSKUs.add(sku.trim());
                    }
                }
            });
        }
    });

    return products;
}

module.exports = { processFiles };
