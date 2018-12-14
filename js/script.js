/* global $ */

$(document).ready(function() {
    $("button").click(function() {
        var name = $("#name").val();
        var techPlacement = "TBD";
        var imgSrc = "https://media.giphy.com/media/22zgHX8aop488/giphy.gif";
        var q1Result = $("#question1").val();
        var q2Result = $("#question2").val();
        var q3Result = $("#question3").val();
        var totalScore = q1(q1Result) + q2(q2Result) + q3(q3Result);
        if(totalScore <= 3){
            var finalResult = "All For One";
            var img = "https://vignette.wikia.nocookie.net/bokunoheroacademia/images/3/32/All_For_One_Profile.png/revision/latest/scale-to-width-down/243?cb=20180528014920";
        }
        $(".result").html("<p>Hello "+name+" you are "+finalResult+"</p>");
    });
    function q1(q1Result){
        if(q1Result === "Honest"){
            return 4;
        } else if(q1Result === "Smart"){
            return 3;
        } else if(q1Result === "Pragmatic"){
            return 2;
    } else if(q1Result === "Sneaky"){
            return 1;
        }
    }
    function q2(q2Result){
        if(q2Result === "Dolphins"){
            return 4;
        } else if(q2Result === "Cats"){
            return 3;
        } else if(q2Result === "Vultures"){
            return 2;
    } else if(q2Result === "Snakes"){
            return 1;
        }
    }
     function q3(q3Result){
        if(q3Result === "Get the purse for the lady"){
            return 4;
        } else if(q3Result === "Call the cops"){
            return 3;
        } else if(q3Result === "Ignore and not get in trouble"){
            return 2;
    } else if(q3Result === "Get the purse from the robber and take some for yourself"){
            return 1;
        }
    }
    
});
