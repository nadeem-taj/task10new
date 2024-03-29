const fs = require('fs');

const writeCSV = (csvData) => {
    const csvString = csvData.map(row => row.join(',')).join('\n');
    fs.writeFileSync('report.csv', csvString);
}

const writeJSONCounts = (products) => {
    // Initialize counts for each condition
    let newCount = 0;
    let refurbishedCount = 0;
    let renewCount = 0;
    let remanufacturedCount = 0;
    let recertifiedCount = 0;

    // Count the occurrences of each condition
    products.forEach(product => {
        switch (product.condition) {
            case 'New':
                newCount++;
                break;
            case 'Refurbished':
                refurbishedCount++;
                break;
            case 'Renew':
                renewCount++;
                break;
            case 'Remanufactured':
                remanufacturedCount++;
                break;
            case 'Recertified':
                recertifiedCount++;
                break;
        }
    });

    // Create an object containing counts of products in each condition
    const counts = {
        New: newCount,
        Refurbished: refurbishedCount,
        Renew: renewCount,
        Remanufactured: remanufacturedCount,
        Recertified: recertifiedCount
    };

    // Write counts to a JSON file
    fs.writeFileSync('productCounts.json', JSON.stringify(counts, null, 2));
}

module.exports = { writeCSV, writeJSONCounts };
