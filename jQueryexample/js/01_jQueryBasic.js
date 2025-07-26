// 자바스크립트 
// document.querySelector("#jsBtn").addEventListener("click", function(){
//     this.style.backgroundColor = "black";
//     this.style.color = "yellow";
//     this.style.fontSize = "20px";
// });
// document.getElementById("colorChange").addEventListener("click", function(){
//     let wrapper = document.getElementById("wrapper");   //div태그
//     let ul = wrapper.getElementsByTagName("ul");        //div하위 ul태그    Element's' 쓰면 요소가 하나밖에 없어도 무조건 배열 
//     let li = ul[0].getElementsByTagName("li");          //ul하위 li태그
    
//     for(let i=0; i < li.length; i++){
//         let l = li[i];
//         if(l.className=="three"){// li태그의 클래스명
//             let txt = l.getElementsByTagName("span");
//             txt[0].style.color = "red";//span 태그의 글자색 변경
//         }
//     }
// });
// jQuery (javascript 주석처리 후 확인 )
$("#jQueryBtn").on("click", function(){        // $:jQuery란 뜻.  #jQueryBtn를 id로 가진 요소를 기능을 주겠다(on)   
    $(this).css("background-color", "black")
           .css("color", "white")
           .css("font-size", "20px");
    /*$(this).css({
        "background-color":"black",
        "color":"white",
        "font-size":"20px"
    });*/
});
$("#colorChange").on("click", function(){
    $("#wrapper > ul > li.three > span").css("color", "blue");
});





// 예제-1
//$("#hello").html("Hello jQuery").css("color","green").css("font-size","72px");
$("#hello").html("Hello jQuery").css({
    "color":"green",
    "font-size":"72px"
});
$("#btnChange").on("click", function(){
    $("#hello").html("오늘도 최선을 다해... "); //설정
    $("#text").html("읽어온 문자: "+$("#hello").html());      // html() : '읽어오겠다'
    console.log($("#text").html());              //접근 
});





// 예제-2
$("#img").hover(            // hover : 마우스 올림, 마우스 내림
  
  // 마우스를 올렸을 때
    function() {   
        $(this).attr("src", "../image/easys-2.jpg");    // attribute(속성)
  },

  // 마우스를 뗐을 때
    function() {
        $(this).attr("src", "../image/easys-1.jpg");
  }
);
/*
$("#img").on({
    mouseenter: function(){                         
        $(this).attr("src","../image/easys-2.jpg");
    }, 
    mouseleave: function(){
        $(this).attr("src","../image/easys-1.jpg");
    }
});
*/




// 예제-3
$("#phone").on("keyup", function(){
    const regExp = /^01[016789]-\d{3,4}-\d{4}$/;    // 옛날 번호쓰는 사람들까지 배려 011-342-4543 

    // $("#phone").val();      아이디가 phone 요소에 작성된 값(value)을 얻어옴
    // $("#phone").val("값");  아이디가 phone 요소에 값을 설정함.

    if( regExp.test( $("#phone").val() ) ){
        $("#phoneResult").text("유효한 전화번호입니다.").css("color", "green"); // method chaining : 하나의 대상에 대하여 여러 메소드를 연달아 작성하는 기술 $().text().css()
    } else{
        $("#phoneResult").text("전화번호 형식이 유효하지 않습니다. (예: 010-1234-5678)");
        $("#phoneResult").css("color", "red");
    }

    if( $("#phone").val().length === 0){
        $("#phoneResult").text("");
    }
});




// 예제-4
$("#singleButton").on("click", function(){
    $(this).html("오늘도 파이팅합시다~!!");          
});

$(".multiButton").on("click", function(){
    console.log($(this).index());       // '인덱스가 발생한 요소의 index를 가져올게요'

    let index = $(this).index();       // index() : index 값을 가져오겠다(순번). this가 첫번째 버튼이면 index()는 0이 된다.
    let result = index + "번째 요소를 눌렀습니다.";
    $(this).html(result);
});




// 예제-5
let number = 1;
$("#treeImage").on("click", function() {
    number = (number % 6) + 1;                                   // attr : 속성 변경 메서드 
    $(this).attr("src", "../image/tree-" + number + ".jpg");     // src의 속성을 number.jpg로 설정하겠다.  
});