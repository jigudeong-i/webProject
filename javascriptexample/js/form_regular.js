document.getElementById("btn1").addEventListener("click", function(){
    const div1 = document.getElementById("div1");
    div1.innerHTML = ""; 

    // a (일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML = regExp1.test("apple") +"<br /><hr />"      // innerHTML은 html입력. innerText은 text그대로 입력. 
    div1.innerHTML += `
        /a/ , apple : ${regExp1.test("apple")} <hr />  
        /a/ , price : ${regExp1.test("price")} <hr />
    `;

    // [abcd] : 문자열 내에 a,b,c,d 중 하나라도 일치하는 문자가 있는지 검색
    let regExp2 = /[abcd]/; 
    div1.innerHTML += `
        /[abcd]/ , apple : ${regExp2.test("apple")}<hr />  
        /[abcd]/ , sub : ${regExp2.test("sub")}<hr />
        /[abcd]/ , qwert :${regExp2.test("qwert")}<hr />
    `;    
    regExp2 = /[^abcd]/;                                                
    div1.innerHTML += `/[^abcd]/ , html : ${regExp2.test("html")}<hr />`; // abcd가 아닌 문자 하나라도 있으면 true  
    
    // ^(캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/; // 문자열의 시작이 "group"인지 확인
    div1.innerHTML += `
        /^group/ , group100 : ${regExp3.test("group100")}<hr /> 
        /^group/ , 100group : ${regExp3.test("100group")}<hr />
    `;
    
    // $ : 문자열의 끝을 의미
    const regExp4 = /group$/; // 문자열의 끝이 "group"인지 확인
    div1.innerHTML +=   `
        /group$/ , group100 : ${regExp4.test("group100")}<hr /> 
        /group$/ , 100group : ${regExp4.test("100group")}
    `;    
});




// 이름 유효성 검사
document.getElementById("inputName").addEventListener("keyup", function(){    //키를 눌렀다가 뗐을 때 실행
    const span = document.getElementById("inputNameResult");

    // 한글 2~5글자 정규 표현식(정규식)
    // [가-힣] : 한글(단일 자음, 모음 제외)
    const regExp = /^[가-힣]{2,5}$/;    // 만약$없이 /[가-힣]{2,5}/만 적으면 "문자열 시작이 한글 2-5글자로 시작하면 true"

    // 유효성 검사
    if( regExp.test(this.value) ){
        span.innerText = "유효한 이름 형식입니다.";
        span.style.color = "green";
        span.style.fontWeight = "bold";
    } else{
        span.innerText = "이름 형식이 유효하지 않습니다.";
        span.style.color = "red";
        span.style.fontWeight = "bold";
    }

    if (this.value.trim().length === 0) {     // trim: 앞뒤 공백제거 " hi " => "hi"
        span.innerText = "";
        return;
    }
});


// 아이디 유효성 검사
document.getElementById("idCheck").addEventListener("click", function(){
    const mid = document.getElementById("mid");
    const span = document.getElementById("inputIdResult");

    // 영문자 + 숫자 또는 문자
    //const pattern = /^[a-zA-Z][0-9a-zA-Z]{4,7}$/;
    // 최소 하나 이상의 숫자를 포함할 때
    const pattern = /^(?=[a-zA-Z][0-9a-zA-Z]{4,7}$)(?=.*\d).*/

    console.log("test반환값: " + pattern.test(mid.value));
    
    if(pattern.test(mid.value)){
        span.innerHTML =  "유효한 아이디입니다.";
        span.className = "confirm";
    }else{
        span.innerHTML = "아이디는 5~8자로, 첫글자 영문자로 나머지 숫자와 영문자만 가능합니다.";
         span.className = "error";
    }
     mid.value = "";
});    
document.getElementById("mid").addEventListener("focus", function(e){
   document.getElementById("inputIdResult").innerHTML = "";
});



// 공백 유효성 검사
document.getElementById("nameCheck").addEventListener("click", function(){
    const userName = document.getElementById("userName");
    const span = document.getElementById("msg");

    if( userName.value.replace(/\s/g, "") === ""){
        /*alert("이름을 입력해 주세요.");
        userName.value = "";
        userName.focus();*/
        
        span.innerHTML = "이름을 입력해 주세요.";
        span.style.color = "red";
        userName.value = ""; 
    } else {
        span.innerHTML = "입력이 완료되었습니다.";
        span.style.color = "green";
    }
});   
document.getElementById("userName").addEventListener("focus", function(){
    document.getElementById('msg').innerHTML = "";
}); 




// 비밀번호 유효성 검사
document.getElementById("pwdCheck").addEventListener("click", function(){
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/

    const input = document.getElementById("userPwd");
    const message = document.getElementById("message");
    
    if (regex.test(input.value)) { 
        message.innerHTML = "유효한 비밀번호입니다"; 
        message.style.color = "green";
    } else { 
        message.innerHTML = "유효하지 않은 비밀번호입니다"; 
        message.style.color = "green";
    }
});  