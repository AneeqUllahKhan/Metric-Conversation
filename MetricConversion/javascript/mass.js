var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from, option_to;

// now add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change", myResult);
resultType.addEventListener("change", myResult);

// taking initial value
option_from = inputType.value;
option_to = resultType.value;


function myResult() {


    // when we change the input and output type vale we need to updata the 
    // option_from and option_to

    option_from = inputType.value;
    option_to = resultType.value;


    // now compare the input and resultType value and add formula

    if (option_from === "pounds" && option_to === "kilogram") {
        //this is pounds to kilogram formula 
        result.value = Number(input.value) / 2.2046;
    } else if (option_from === "pounds" && option_to === "ounces") {
        //this is pounds to ounces formula 
        result.value = Number(input.value) * 16;

    }
    else if (option_from === "pounds" && option_to === "grams") {
        //this is pounds to grams formula 
        result.value = Number(input.value) /0.0022046;
    }
    else if (option_from === "pounds" && option_to === "pounds") {
        //this is pounds to pounds formula 
        result.value = input.value
    }




    if (option_from === "kilogram" && option_to === "pounds") {
        //this is kilogram to pounds formula 
        result.value = Number(input.value) * 2.2046;
    } else if (option_from === "kilogram" && option_to === "ounces") {
        //this is kilogram to ounces formula 
        result.value = Number(input.value) * 35.274;
    }
    else if (option_from === "kilogram" && option_to === "grams") {
        //this is kilogram to grams formula 
        result.value = Number(input.value) * 1000;
    }
    else if (option_from === "kilogram" && option_to === "kilogram") {
        //this is kilogram to kilogram formula 
        result.value = input.value
    }


    if (option_from === "ounces" && option_to === "pounds") {
        //this is Ounces to pounds formula 
        result.value = Number(input.value) * 0.0625;
    } else if (option_from === "ounces" && option_to === "kilogram") {
        //this is Ounces to Kilogram formula 
        result.value = Number(input.value) / 35.274;
    }
    else if (option_from === "ounces" && option_to === "grams") {
        //this is Ounces to grams formula 
        result.value = Number(input.value) / 0.035274;
    }
    else if (option_from === "ounces" && option_to === "ounces") {
        //this is Ounces to Ounces formula 
        result.value = input.value
    }

    if (option_from === "grams" && option_to === "pounds") {
        //this is Grams to pounds formula 
        result.value = Number(input.value) * 0.0022046;
    } else if (option_from === "grams" && option_to === "kilogram") {
        //this is Grams to Kilogram formula 
        result.value = Number(input.value) / 1000;
    }
    else if (option_from === "grams" && option_to === "ounces") {
        //this is Grams to grams formula 
        result.value = Number(input.value) * 0.035274;
    }
    else if (option_from === "grams" && option_to === "grams") {
        //this is Grams to Ounces formula 
        result.value = input.value
    }

   






}
