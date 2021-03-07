module.exports = function toReadable(number) {

    let string = number.toString();

    string = string.replace(/[, ]/g, "");

    if (parseInt(string) === 0) {
        return 'zero';
    }

    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let start = string.length;
    let chunks = [];
    while (start > 0) {
        let end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    let chunksLen = chunks.length;

    let words = [];
    for (i = 0; i < chunksLen; i++) {

        let chunk = parseInt(chunks[i]);

        if (chunk) {
            let ints = chunks[i].split('').reverse().map(parseFloat);
            if (ints[1] === 1) {
                ints[0] += 10;
            }
            if ((word = units[ints[0]])) {
                words.push(word);
            }
            if ((word = tens[ints[1]])) {
                words.push(word);
            }
            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }
        }
    }
    return words.reverse().join(' ');
}