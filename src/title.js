const titles = [
    "3",
    "3e",
    "3el",
    "3elk",
    "3elk.",
    "3elk.g",
    "3elk.gi",
    "3elk.git",
    "3elk.gith",
    "3elk.githu",
    "3elk.github",
    "3elk.github.",
    "3elk.github.i",
    "3elk.github.io",
    "3elk.github.i",
    "3elk.github.",
    "3elk.github",
    "3elk.githu",
    "3elk.gith",
    "3elk.git",
    "3elk.gi",
    "3elk.g",
    "3elk.",
    "3elk",
    "3el",
    "3e"
];
let index = 0;
function changeTitle() {
    document.title = titles[index];
    index = (index + 1) % titles.length;
}
setInterval(changeTitle, 200);
