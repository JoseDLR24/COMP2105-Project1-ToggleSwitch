// jQuery - Set DOM ready
$(document).ready(function(){
    // jQuery - Event handler for onclick
    $("#slider").click(function(event){
        
        // IF statement so the text on the "button" changes from OFF to ON and backwards when is clicked again
        var h2 = $("h2");
        if (h2.text() == "OFF") {
            h2.text("ON");
            // make the h1 tag bigger animating and increasing the fontsize
            $("h1").animate({fontSize: "5em"});
        } else {
            h2.text("OFF");
            // make the h1 tag bigger animating and leaving the fontsize a bit bigger than before
            $("h1").animate({fontSize: "3em"});
        }

        // Add/remove CSS class that moves the button
        h2.toggleClass("on");

        
    });
});