function solve(arguments) {
    let result = "<table>";

    for (let item of arguments) {
        line = item.split(',');
        let obj = JSON.parse(line);
        result += "\n\t<tr>";
        result += "\n\t\t<td>" + obj['name'] + "</td>" + "\n\t\t<td>" + obj['position'] + "</td>" + "\n\t\t<td>" + obj['salary'] + "</td>\n\t</tr>";

    }
    result += "\n</table>"
    console.log(result);
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);