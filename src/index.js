
var kitty = {
    idle: "=^.^=",
    blink: "=>.<=",
    blinky: "=-.-=",
    sad: "=v.v=",
    claw: "=^^==3",
    bet: "     ",
    
    choices: ["=^.^=", "=>.<=", "=-.-="],

    animate: function choose(choices) {
        var index = Math.floor(Math.random() * choices.length);
        return choices[index];
    
    }


};

var app = document.getElementById("main").innerHTML = kitty.animate();

app;
