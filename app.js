$("button").first().click(random_bg_color)



function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log("Background Color: " + bgColor);

    $("body").css("backgroundColor", bgColor )
  
    }


$("button:eq(1)").click(random_txt_color)
// bla

function random_txt_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var txtColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log("h1: " + txtColor);

    $("h1").css("color", txtColor )
  
    }



$("button:eq(2)").click(random_txt2_color) 


function random_txt2_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var txt2Color = "rgb(" + x + "," + y + "," + z + ")";
 console.log("Button color: " + txt2Color);

    $("button").css("color", txt2Color )
  
    }

