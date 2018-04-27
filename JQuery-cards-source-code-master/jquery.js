$(document).ready(function() {
    $(".switchOff").click(function() {
        if ($(".bulbOff").attr("src") == "img/bulboff.gif") {
            $(".bulbOff").attr("src", "img/bulbon.gif")
            $(".switchOff").attr("src", "img/switchOn.png");
            // $(".switchOff").addClass("switchOn").removeClass("switchOff");
        }
        else {
            $(".bulbOff").attr("src", "img/bulboff.gif")
            $(".switchOff").attr("src", "img/switchOff.png")
            // $(".switchOn").addClass("switchOff").removeClass("switchOn")

        }
    })
})




// $("#myParagraph").click(function(){
    //     for (let i=1; i<=10;i++){
    //         $("#myParagraph").append("<p>This is just a test.</p>");
    //     }
    // })
    
    
    // $(".test").click(function(){
    //     $("p").addClass("testing");

// })