function area() {
    return this.x * this.y;
}

function volume() {
    return this.x * this.y * this.z;
}

function solve(area, volume, arguments) {

    let objects = JSON.parse(arguments);

    function calculate(object) {
        let objArea = Math.abs(area.call(object));
        let objVolume = Math.abs(volume.call(object));

        return { area: objArea, volume: objVolume };
    }

    return objects.map(calculate);
}

solve(area, volume, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`);

solve(area, volume, `[
        {"x":"10","y":"-22","z":"10"},
        {"x":"47","y":"7","z":"-5"},
        {"x":"55","y":"8","z":"0"},
        {"x":"100","y":"100","z":"100"},
        {"x":"55","y":"80","z":"250"}
        ]`);


