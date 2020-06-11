function solve(arguments) {

    let parsedArguments = JSON.parse(arguments);
    let result = '<table>\n   <tr><th>name</th><th>score</th></tr>\n';

    function escapeHtml(string) {
        "use strict";
        string = string.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        return string;
    };

    for (let item of parsedArguments) {

        result += `   <tr><td>${escapeHtml(item.name)}</td><td>${item.score}</td></tr>\n`;
    }

    result += '</table>';

    console.log(result);
}

