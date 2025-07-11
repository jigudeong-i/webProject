// 선언적 함수(= 함수 선언식)
function test1(){
    alert("함수 선언식");
}

function bgChange(color){
    document.getElementById("divBg").style.background = color;
}

function clickCount(btn){
    btn.innerText = parseInt(btn.innerText) + 1;
}
/*function clickCount(){
    const btn = document.getElementById("btn1");
    btn.innerText = parseInt(btn.innerText) + 1;
}*/



function add() {
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    const val1 = number1.value.trim();
    const val2 = number2.value.trim();

    if (val1 === "" || val2 === "" || isNaN(val1) || isNaN(val2)) {
        alert("숫자만 입력해 주세요.");
        number1.value = "";
        number2.value = "";
        number1.focus();
        return;
    }

    const num1Value = Number(val1);
    const num2Value = Number(val2);

    document.getElementById("result").value = sum(num1Value, num2Value);
}


/* 익명함수와 화살표 함수(함수 표현식)
HTML 요소에서 특정 이벤트(클릭하거나, 키를 누르거나, 마우스를 움직이는 등)가 발생했을 때, 
실행할 함수를 등록하는 방법

document.getElementById("요소id").addEventListener("이벤트", function(){

 }); 
 */ 



// 화살표 함수
// 1. 기본 형태: ([매개변수]) => {}
document.getElementById("btn2-1").addEventListener("click", () => {             // 클릭했을 때 함수를 주겠다 
    alert("화살표 함수 기본 형태 입니다.");
});

// 2. 매개변수가 하나일 경우: 매개변수 => {}
document.getElementById("btn2-2").addEventListener("click", e => {
    console.log(e.target.id);
    e.target.style.background = "yellow";
})




function printConsole(fn){  // 매개변수로 함수가 전달됨
    // 아래 1), 2) 실행 시 필요
    console.log( fn(2) );
    // 아래 3) 실행문 시 필요 
    // console.log( fn("홍길동", 20));
}

// 3.{}, return 생략
document.getElementById("btn2-3").addEventListener("click", () => {
    // 1) 함수 호출(익명 함수)
    // printConsole( function(num) {return num * 10} );

    // 2) 함수 호출(화살표 함수)
     printConsole( num => num * 5 );

    // 3) {}, return 생략
    // printConsole( (name, age) => { "name" : name, "age" : age} ); // 문법 오류 
    //printConsole( (name, age) => { return { "name" : name, "age" : age} } );
    //printConsole((name, age) => ({ name: name, age: age }));
})




// this(이벤트가 발생한 요소)의 사용
// 1) 익명 함수는 this 사용 가능
document.getElementById("btn2-4").addEventListener("click", function(){
    this.style.background = "pink";
})

// 2) 화살표 함수는 this 사용 불가
document.getElementById("btn2-4").addEventListener("click", (e)=>{
    // 화살표 함수에서 this는 창 자체를 나타내는 객체(window)이다. 다시말해 this는 window를 참조함.
    console.log(e.target);

    //this.tyle.color = "white"; // 불가능
    e.target.style.color = "white"; // 가능 
})


// 글자색 변경 

// 버튼 클릭하면 변경
document.getElementById("fontChange").addEventListener("click", function(){         // click이 되면 함수를 출력
    const fontColor = document.getElementById("fontColor").value;
    document.getElementById("bicycle").style.color = fontColor;
});

// 버튼 클릭 안 해도 변경
/*document.getElementById("fontColor").addEventListener("input", e => {
    const fontColor = e.target.value;
    document.getElementById("bicycle").style.color = fontColor;
});*/














