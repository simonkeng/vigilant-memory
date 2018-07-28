
var Kitty = function () {
    this.idle = "=^.^=";
    this.blink = "=>.<=";
    this.blinky = "=-.-=";
    this.sad = "=v.v=";
    this.between = "     ";
    
    this.choices = ["=^.^=", "=>.<=", "=-.-="];

    var animate = function (choices) {
        var index = Math.floor(Math.random() * this.choices.length)
        return choices[index];
    
    }


};

var app = document.getElementById("main").innerHTML = Kitty.animate;

app;
