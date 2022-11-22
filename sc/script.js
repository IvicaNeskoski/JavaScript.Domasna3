// THE HELLO WORLD EXERCISE (if statement)
// Create a variable called "code", that will hold a string (for example: "es" or "de" or "en")
// Based on the value of the variable "code", output in the console: "Hello World" in the language that the code is written. If it's es, write Hello World in Spanish. If it's de, write it in German... etc.

var code = "de";

if(code == "en") {
    console.log("Hello World English ");
} else if (code == "de") {
    console.log("Hallo Welt in German ");
} else if(code == "es") {
    console.log("Hola Mundo Spanish");
};


// SEASONS (if statement)
// Check if the season is Autumn, Winter, Spring or Summer. If the user types (via prompt):
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// Output the results in the console


var seasons = prompt("Please enter a month ");

if (seasons == "September" || seasons == "september" || seasons == "October" || seasons == "october" || seasons == "November" || seasons == "november") {
    console.log("The season is Autumn");
}
else if (seasons == "December" || seasons == "december" ||  seasons == "January" || seasons == "january" || seasons == "February" || seasons == "february" ) {
    console.log("The season is Winter");
}
else if (seasons == "March" || seasons == "march" || seasons == "April" || seasons == "april" || seasons == "May" || seasons == "may" ) {
    console.log("The season is Spring");
}
else if (seasons == "June" || seasons == "june" || seasons == "July" || seasons == "july" || seasons == "August" || seasons == "august"  ) {
    console.log("The season is Summer");
}
else {
    console.error("unknown");
}



// MUSICIANS (switch statement)
// Create a variable called "band_members_num" and store a number from 1 to 10 in it.
// Based on the number, output in the console what kind of a music group it is: If the number is 3 the output is "This band is a trio" etc...

var band_members_num = 4;

switch(band_members_num) {
    case 1 :
        console.log("This band is a 1");
        break;
    case 2 :
        console.log("This band is a 2");
        break;
    case 3 :
        console.log("This band is a 3");
    break;
    case 4 :
        console.log("This band is a 4");
    break;
    case 5 :
        console.log("This band is a 5");
    break;
    case 6 :
        console.log("This band is a 6");
    break;
    case 7 :
        console.log("This band is a 7");
    break;
    case 8 :
        console.log("This band is a 8");
    break;
    case 9 :
        console.log("This band is a 9");
    break;
    case 10 :
        console.log("This band is a 10");
    break;
    default: console.log("Unknown music group");
};