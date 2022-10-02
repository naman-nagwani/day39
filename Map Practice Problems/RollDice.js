map = new Map();
let min = 1, max = 1

for ( let i = 1; i < 7; i++) {
    map.set(i, 0);
}

while (true) {
    let n = Math.floor(Math.random() * 6 + 1);
    map.set(n, map.get(n) + 1);
    if (map.get(n) == 10)
        break;
}

for (let [key, value] of map) {
    console.log(key, ": ", value);
}

for (let i = 1; i < 7; i++) {
    if (map.get(max) < map.get(i)) {
        max = i;
    }

    if (map.get(min) > map.get(i)) {
        min = i;
    }
}

console.log(" The least = ", min, " and the most = ", max);