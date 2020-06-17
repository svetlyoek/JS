function solve(input) {

    let newObj = {};

    Object.assign(newObj, input);

    if (newObj.dizziness == true) {

        let hydration = Number(0.1 * newObj.weight * newObj.experience);
        newObj.dizziness = false;
        newObj.levelOfHydrated += hydration;
    }

    return newObj;
}

solve({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
);
solve({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
);

solve({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
}
);