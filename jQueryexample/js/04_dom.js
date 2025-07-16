
//eq(n): 요소의 n번째 index 요소를 반환. 
$("td:eq(4)").css("background", "#ffff00"); 
$("td").eq(2).css("background", "#ff0000");

$("td:eq(4)").next().css("background-color", "#00ff00");  // 현재 요소의 다음 요소반환
$("td").eq(4).prev().css("background", "#0000ff");        //현재 요소의 이전요소반환

//현재 요소의 부모요소반환
$("td:eq(4)").parent().css("color", "#fc4efcff");
$("td:eq(4)").parent().next().css("color", "#ff0000");
$("td").eq(4).parent().prev().css("color", "#0000ff");

//children() 현재 요소의 자식 요소 반환
$("td:eq(4)").parent().next().children().css("text-decoration", "underline"); 
$("td").eq(4).parent().next().children().eq(1).css("font-weight", "bold");


/* 
.css() 여러 속성 한번에 설정하는 경우 
    $(요소).css({
        "color":     "red",
        "font-size": "20px"
    });
*/


//링크 클릭시 사진출력 
$(".item > a").on("click", function(event){         // 클래스명이 item인 요소들의 a 
    event.preventDefault();

     
    let image = $(this).html();                        // 읽어오겠다. 
    $(this).parent().parent().parent().css({
        "background-image" : "url('" + image + "')",    //("background-image", "url'" + image + "')");
        "background-repeat" : "no-repeat",
        "background-size" : "cover"
    }); 
    
    $("ul").css("background-color", "rgb(225,225,225,0.8)");

    /*
    $(this).parents("div#area").css({
        "background-image" : "url('" + image + "')"
    }); 
    */

});





