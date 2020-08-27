
    $(function(){
        let oul = $("ul");
        let oli = oul.find("li");
        let index = 0;
        let time =null;

        function change(){
            oul.animate({
            left:-2560 * index
            },1000,function(){
                if(index==oli.length-1){
                    index = 0;
                    oul.css({left:0})
                }
            })
        }
 
    time = setInterval(function(){
        index++;
        change();
    },5000);

    $(".banner").mouseover(function(){
        clearInterval(time);
    })
    $(".banner").mouseout(function(){
        time = setInterval(function(){
            index++;
            change();
        },5000);
    })
});
// //纯的
// var regNum = /^\d+$/;
// var regLetter = /^[a-zA-Z]+$/;
// var regChar = /^[!@#$]+$/;

// //包含
// var _regNum = /\d+/;
// var _regLetter = /[a-zA-Z]+/;
// var _regChar = /[!@#$]+/;

// var oText = document.querySelector(".mima");

// function funabcde(){
//     if(regNum.test(oText.value) || regLetter.test(oText.value) || 
//         regChar.test(oText.value)){
//             yanzhengnamer.innerHtml="弱";
//     }else if(_regNum.test(oText.value) && _regLetter.test(oText.value) && 
//         _regChar.test(oText.value)){
//             yanzhengnamer.innerHtml="强";
//     }else if(oText.value.length==0){
//         yanzhengnamer.innerHtml="账号不能为空";
//     }else{
//         yanzhengnamer.innerHtml="中";
//     }
// }