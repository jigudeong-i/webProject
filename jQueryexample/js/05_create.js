
let number = 1;

$("button:eq(0)").on("click", function() {    // 0번째 버튼을 가져오겠다
    
    // 동적 요소의 생성
    let li1 = $("<li>").css("color", "red").html("추가항목" + (number++));  // li로 쓰면 기존 문서에 있는 li 태그 선택. <li>로 해야 새로 생성할 요소로 인식.
    li1.addClass("liEvent");                                                // addClass : 선택한 요소에 CSS 클래스 추가. 
    // 즉, <li1 class="liEvent" style="color:red">추가항목1</li> 추가
    
    let li2 = $("<li>").css("color", "green").html("추가항목" + (number++));
    li2.addClass("liEvent");
    let li3 = $("<li>").css("color", "blue").html("추가항목" + (number++));
    li3.addClass("liEvent");
    


    // 새로 생성된 요소 클릭시 해당 요소 삭제
    li1.click(function() {
        $(this).remove();
    });
    li2.click(function() {
        $(this).remove();
    });
    li3.click(function() {
        $(this).remove(); 
    });
    
        

    // ul 태그에 동적요소로 추가한 li 태그 추가
    $("ul").append(li1).append(li2).append(li3)

    //$("ul").append(li1); 
    //$("ul").append(li2);
    //$("ul").append(li3);
});



/*
// 동적 요소에 이벤트 처리
$(document).on("click", ".liEvent", function(){
    $(this).remove();
});
*/


$("button:eq(1)").on("click", function() {
    $("ul").empty(); // ul 태그를 두고 하위 요소만 삭제
    //$("ul").remove();  // ul 태그를 포함하여 하위 요소 삭제
});