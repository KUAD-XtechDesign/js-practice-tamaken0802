$(function(){

    let txt1 =  "おはよう〜";
    let txt2 = "元気ですk！？";
    let num1 = 1642374681230;
    let num2 = 367312482;

    $("#button01").on("click",function(){
        $("#content").text("こんにちは〜");
    })

    $("#button02").on("click",function(){
        $("#content").text(txt1);
    })

    $("#button03").on("click",function(){
        $("#content").text(txt1 + txt2);
    })

    $("#button04").on("click",function(){
        $("#content").text(num1 +num2);
    })

    $("#button05").on("click",function(){
        $("#content").text(num1+ "かける" + num2 + "は"　+ (num1 * num2) + "です");
    })

});