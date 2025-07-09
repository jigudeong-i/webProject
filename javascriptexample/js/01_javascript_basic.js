
// js파일은 <script> 태그 내부라고 생각하면 됨
function btnClick2(){
    alert("외부 알림창 출력!!");
}

function changeColor1(){
    document.querySelector("#box").style.backgroundColor = "red";         // querySelector는 선택자 요소를 찾기 때문에 id는 #id, class는 .class, 태그는 tag 형식으로 쓴다.
    // document.getElementById("box").style.backgroundColor = "red";
}

function changeColor2(){
    document.getElementById("box").style.backgroundColor = "yellow";      // getElementById는 id만 찾기 때문에 앞에 #을 안 붙임. 
}