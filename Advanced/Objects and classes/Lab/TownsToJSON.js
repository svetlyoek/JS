function solve(arguments) {

    var result = new Array();

    let headers = arguments[0].split("|").map(item => item.trim()).filter(i => i != "");

    let town = headers[0];
    let latitude = headers[1];
    let longitude = headers[2];

    for (let i = 1; i < arguments.length; i++) {

        let values = arguments[i].split("|").map(item => item.trim()).filter(i => i != "");

        let townName = values[0];
        let latitudeValue = Number(values[1]) == 0 ? 0 : Number(values[1]).toFixed(2) * 1;
        let longitudeValue = Number(values[2]) == 0 ? 0 : Number(values[2]).toFixed(2) * 1;

        result.push(`{\"${town}\":\"${townName}\",\"${latitude}\":${latitudeValue},\"${longitude}\":${longitudeValue}}`)
    }
    console.log(`[${result.join(",")}]`);

}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
);