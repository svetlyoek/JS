function solve(arguments) {

    let catalogue = new Set();

    arguments.forEach(n => {
        catalogue.add(n);
    });

    [...catalogue].sort((a, b) => a.length - b.length || a.localeCompare(b)).forEach(i => console.log(i));

}
solve(['Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston']
);

solve(['Denise',
    'Ignatius',
    'Iris',
    'Isacc',
    'Indie',
    'Dean',
    'Donatello',
    'Enfuego',
    'Benjamin',
    'Biser',
    'Bounty',
    'Renard',
    'Rot']
);