const players = [
    { name: "Jovencio", score: 10 },
    { name: "Jeanne", score: 5 },
    { name: "Ian", score: 9 },
    { name: "Drew", score: 12 },
    { name: "Shem", score: 7 },
    { name: "Mark", score: 8 },
    { name: "Jose", score: 15 },
    { name: "Rhea", score: 4 },
    { name: "Papong", score: 11 },
    { name: "Fergs", score: 6 }
];
function getTopScorers(playerList) {
    return playerList
        .filter(player => player.score > 8)
        .map(player => player.name) 
        .join(", ");
}

console.log(getTopScorers(players));
