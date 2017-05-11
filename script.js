$(document).ready(function() {
    console.log("ready!")


    $("#resume").click(function() {
        $.getJSON("teachers.json", function(response) {
            console.log(response);
            //alert("Hi")
            console.log(response.basics.name)
            $("p").append("<b><br>" + response.basics.name + "</b><br>");
            $("p").append("<b>" + response.basics.label + "</b><br>");
            $("p").append("<b>" + response.basics.email + "</b><br>");
            $("p").append("<b>" + response.basics.phone + "</b><br>");
            $("p").append("<b>" + response.basics.website + "</b><br>");
            $("p").append("<b>" + response.education[0].institution + "</b><br>");
        })
        
    });
});
