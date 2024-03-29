const determineCondition =(shortDescription, longDescription) =>{
    if (!shortDescription || !longDescription) {
        return 'Unknown';
    }

    const keywords = ['renew', 'refurb', 'remanufactured', 'recertified'];

    if (keywords.some(word => shortDescription.toLowerCase().includes(word) || longDescription.toLowerCase().includes(word))) {
        if (shortDescription.toLowerCase().includes('renew') || longDescription.toLowerCase().includes('renew')) {
            return 'Renew';
        } else if (shortDescription.toLowerCase().includes('remanufactured') || longDescription.toLowerCase().includes('remanufactured')) {
            return 'Remanufactured';
        } else if (shortDescription.toLowerCase().includes('recertified') || longDescription.toLowerCase().includes('recertified')) {
            return 'Recertified';
        } else {
            return 'Refurbished';
        }
    } else {
        return 'New';
    }
}

module.exports = determineCondition;