$(document).ready(function(){
    
    $("#myParagraph").click(function(){
        for (let i=1; i<=10;i++){
            $("#myParagraph").append("<p>This is just a test.</p>");
        }
    })
    
    
    $(".test").click(function(){
        $("p").addClass("testing");

})

})