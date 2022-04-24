//Feet To Meter

var feet = document.getElementById("ft1");
var meters = document.getElementById("m1");

feet.oninput = () => {
    let output = (parseFloat(feet.value) / 3.2808);
    meters.value = parseFloat(output);
};

//Meter To Feet

meters.oninput = () => {
    let output = (parseFloat(meters.value) *3.2808);
    feet.value = parseFloat(output);
};


//End