function getRndInteger (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

export function  getRandomTeam (collection, sideTeam) {
    let randomIndex;
    if (sideTeam === "home") {
        randomIndex = getRndInteger(0, collection.length/2);
    } else if (sideTeam === "away") {
        randomIndex = getRndInteger(collection.length/2 + 1, collection.length - 1);
    }
    const team = collection[randomIndex] && { 
        name: collection[randomIndex].name,
        flagCode: collection[randomIndex].flagCode
    };
    return team;
}