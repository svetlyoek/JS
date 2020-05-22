function solve(arguments) {
    arguments.sort(mySort);

    function mySort(previous, next) {
        let first = previous.toUpperCase();
        let second = next.toUpperCase();

        if (first.length < second.length) {
            return -1;
        }
        if (first.length > second.length) {
            return 1;
        }
        else {
            if (first < second) {
                return -1;
            }
            if (first > second) {
                return 1;
            }
        }
    }
    console.log(arguments.join('\r\n'));
}
