// Write a function that takes 2 colors as arguments and returns the average color.
// - The parameters will be two 6-digit hexadecimal strings. This does not need to be validated.
// - The return value should be a 6-digit hexadecimal string.
// - The hexadecimal strings represent colors in RGB, much like in CSS.
// - The average color is to be determined by taking the arithmetic mean for each component: red, green and blue.

function returnAverage(firstColor, secondColor) {

    var firstColorConverted = {};
    var secondColorConverted = {};

    function rgbColor(color) {
        var colorConverted = {};
        colorConverted.red = parseInt(color.substring(0, 2), 16);
        colorConverted.green = parseInt(color.substring(2, 4), 16);
        colorConverted.blue = parseInt(color.substring(4), 16);
        (firstColor == color) ? firstColorConverted = colorConverted : secondColorConverted = colorConverted;
    }

    rgbColor(firstColor);
    rgbColor(secondColor);

    var averageResult = {};
    averageResult.red = Math.round(( firstColorConverted.red + secondColorConverted.red ) / 2 ); 
    averageResult.green = Math.round(( firstColorConverted.green + secondColorConverted.green ) / 2);
    averageResult.blue = Math.round(( firstColorConverted.blue + secondColorConverted.blue ) / 2 );
    
    function convToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    console.log('#' + convToHex(averageResult.red) + convToHex(averageResult.green) + convToHex(averageResult.blue));

    return '#' + convToHex(averageResult.red) + convToHex(averageResult.green) + convToHex(averageResult.blue);

}

returnAverage('FF9900', 'CC0066');
