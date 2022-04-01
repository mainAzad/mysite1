// Create Object

let temp = {
    f: 72,
    c: function (){
        return Math.round((this.f - 32) * 5 / 9);
    }
}

// Initialize dashboard

document.getElementById("F").innerHTML = temp.f + "&deg;F";
document.getElementById("C").innerHTML = temp.c() + "&deg;C";

// Modify dashboard

function warmer(){
    temp.f++;
    document.getElementById("F").innerHTML = temp.f + "&deg;F";
    document.getElementById("C").innerHTML = temp.c() + "&deg;C";
}

function colder(){
    temp.f--;
    document.getElementById("F").innerHTML = temp.f + "&deg;F";
    document.getElementById("C").innerHTML = temp.c() + "&deg;C";
}
