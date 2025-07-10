// alert 확인
function fnAlert(){
    alert("alert 버튼 클릭됨");
}

// write 확인
function documentWrite(){
    document.write("자바스크립트<br />");      // 권장하지 않는 방법이라 취소선 그음
    document.write("<b>안녕하세요</b><br /><h2>반가워요</h2>");
}





// innterText 읽어오기
function getInnerText(){
    // 변수 = 읽어 들인 값; 
    const test1 = document.getElementById("test1");
    // test1 변수에 대입된 요소에서 내용을 얻어와 console에 출력
    console.log(test1.innerText);
}

// innerText로 변경하기
function setInnerText(){
    //const test1 = document.getElementById("test1");
    // test1 변수에 대입된 요소에 새로운 내용을 작성
    //  출력대상     =  출력값;
    //test1.innerText = "innerText로 <br /> 변경된 내용입니다.";
    document.getElementById("test1").innerText = "innerText로 <br /> 변경된 내용입니다.";
}





// innerHTML로 읽어오기
function getInnerHTML1(){
    const test2 = document.getElementById("test2");
    // test2 요소 내부에 내용(태그 + 속성 + 내용)을 읽어 출력
    console.log(test2.innerHTML);
}

// innerHTML로 변경하기
function setInnerHTML1(){
    const test2 = document.getElementById("test2");
    test2.innerHTML = "<strong>innerHTML</strong>로 변경된 내용<br /> 반갑습니다.";
}




// innerHTML 예제
function print(){
    const title = document.getElementById("title")
    title.innerHTML = "Hello Javascript~~!!"
    title.style.color="orange"
    title.style.backgroundColor="gray"
    title.style.padding="100px"
    title.style.width="400px"
}




// confirm 확인하기
function fnConfirm(){
    const confirmBtn = document.getElementById("confirmBtn");
    if(confirm("버튼 배경색을 오렌지색으로 바꾸시겠습니까?")){
        confirmBtn.style.backgroundColor = "orange";
    }else{
        confirmBtn.style.backgroundColor = "green";
    }
}




// promtp 확인하기
function fnPrompt1(){
    const name = prompt("당신의 이름은 무엇입니까?","홍길동");
    const age = prompt("당신의 나이는 몇살입니까?","30");

    console.log(name);
    console.log(age);

    const divEl = document.getElementById("area2"); 
    divEl.innerHTML = "<b>앗, 당신이 바로 " + age + "살 " + name + "님이군요..!</b>";
    divEl.innerHTML = `<b>앗, 당신이 바로 ${age}살 ${name}님이군요..!</b>`;       // 작은 따옴표가 아니라 백틱(`)

    if (name !== null && name.trim() !== "" && age !== null && age.trim() !== ""){
        divEl.innerHTML = `<b>앗, 당신이 바로 ${age}살 ${name}님이군요..!</b>`;
    } else {
        alert("이름과 나이를 모두 입력해주세요!")
        divEl.innerHTML = ""
    }
}

function fnPrompt2(){
   const input = prompt("이름을 입력해주세요.","");
   const promptResult = document.getElementById("area3");

    if(input !== null && input.trim() !== ""){ // 이름이 입력되었을 때
    promptResult.innerText = input + "님 환영합니다."
    } else { // 취소 버튼을 눌렀을 때
    promptResult.innerText = "이름을 입력해주세요."
    }
}









 // 선택한 input요소.value 확인하기
function fnInput(){
    //변수 = input 요소의 값
    const input1 = document.getElementById("userId");  // 아이디 input 요소
    const input2 = document.getElementById("userPwd"); // 비밀번호 input 요소

    const id = input1.value; // 변수 = input1에 입력한 값. 굳이 이렇게 줄 필요없이 const id = document.getElementById("userId").value; 이렇게 바로 넣어도 됨. 
    const pwd = input2.value; // 변수 = input2에 입력한 값.

    const result = document.getElementById("result");  // 입력박스의 result 다. '결과' 의 result가 아니다. 
    if(id != "" && pwd != "" ){
        result.value = id + ", " + pwd;  //result요소의 값으로 = 다음의 값 설정
        //result.value = `${id}, ${pwd}`;      // 백틱
    } else {
        result.value = "다시 확인해 주세요";
    }
    input1.value = "";  //input요소의 초기화. 이게 없으면 '클릭' 버튼을 눌러도 값이 그대로 있다.  
    input2.value = "";
}



function fnChange(){
    const input = document.getElementById("number1").value;
    document.getElementById("number1").value = document.getElementById("number2").value
    document.getElementById("number2").value = input; 
}



// document.getElementById("btn").onclick = function(){
//       document.getElementById("namePrint").innerHTML = document.getElementById("name").value; 
// }
    
document.getElementById("btn").onclick = function(){
    const nameValue = document.getElementById("name").value;
    document.getElementById("namePrint").innerHTML = nameValue? `${nameValue}님 반갑습니다~.` : "이름을 입력해주세요.";
}



