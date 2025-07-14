const mydate = new Date();
console.log(mydate.getFullYear(), mydate.getMonth() + 1, mydate.getDate());  // 0이 1월, 1이 2월이니까 +1?
console.log(mydate.getHours(), mydate.getMinutes(), mydate.getSeconds());

console.log("Date 객체가 가진 toXXXString() 메서드");
console.log(mydate.toLocaleDateString()); // toLocaleDateString(): "년 월 일"를 문자열로 반환 
console.log(mydate.toLocaleTimeString()); // toLocaleTimeString(): "오전/오후 시:분:초"를 문자열로 반환
console.log(mydate.toLocaleString());    // toLocaleString(): "년월일 오전/오후 시:분:초"를 문자열로 반환



//버튼 누르고 3초뒤 출력
document.getElementById("btn1").addEventListener("click", ()=>{
    setTimeout(function () {                            // 익명함수 //setTimeout() : 일정 시간이 지나면 함수 1번 실행.
        alert("setTimeout()을 사용하여 표시됩니다.") 
    }, 3000);      // 밀리초 기준(1/1000초). 3000 = 3초 
});




let time_id;
const startTime = function(){
    let now = new Date();
    //querySelector : css선택자로 아이디 접근. #을 꼭 써준다. getElementId 랑 기능 같음. 
    document.querySelector("#result").value = now.toLocaleTimeString(); //toLocaleTimeString(): "오전/오후 시:분:초"를 문자열로 반환
    time_id = setTimeout(startTime, 1000); //1초 뒤에 출력. 
}
//시계동작
document.getElementById("btn2").addEventListener("click", ()=>{
    startTime();
});
//시계중지
document.getElementById("btn3").addEventListener("click", ()=>{
    clearTimeout(time_id);
    document.querySelector("#result").value="";  // id="result" 인 입력창을 빈 문자열로 바꿈. 즉 지움. 
});




// 책 읽기 제목 클릭
document.getElementById("readBook").addEventListener("click", function(){
    const now = new Date();                // 현재 날짜와 시간
    const firstDay = new Date(2025, 4, 1); // 시작일 : 5월 1일

    const toNow = now.getTime();           // 현재까지 지난 시간 (1970년 1월 1일부터)
    const toFirst = firstDay.getTime();    // 시작일까지 지난 시간

    let passedTime = toNow - toFirst;      // 두 날짜 차이를 콘솔로 출력 (밀리초 단위)
    console.log(passedTime);

	// 밀리초 → 일(day)로 변환. 
    passedTime = Math.floor(passedTime/(24 * 60 * 60 * 1000)); // Math.floor : 소수점 이하 절삭(정수로 표현)
    document.querySelector('#result1').innerText = passedTime; 
});




// 이미지 클릭시 출력 
const image = document.querySelectorAll('.imageChoice');   //imageChoice 클래스를 싹다 가져옴
const targetImg = document.getElementById('target');       //

image.forEach(thumb => {
    thumb.addEventListener('click', function () {
        const newSrc = this.getAttribute('src'); //이벤트가 발생한 요소(this) src 속성값을 가져옴 
        targetImg.setAttribute('src', newSrc);  // src를 newSrc로 설정하겠다.  
    });
});




// 이미지를 교대로 출력
let num = 0;
setInterval(function() {            //setInterval 지정한 간격마다 계속 반복 
    num = (num % 3) + 1;
    document.getElementById("imgView").src = "../image/" + num + ".jpg"
}, 1000);       // 1초마다 변경




//location 객체 ---------------------------------------
//홈페이지 이동
document.getElementById("btn4").addEventListener("click", ()=>{
    if (confirm("정말 네이버로 이동하시겠습니까?")) {
        location.href = "https://www.naver.com/"; //location.replace("https://www.naver.com/");
    }
});
document.getElementById("btn5").addEventListener("click", ()=>{
    location.href = "03_json.html"; //location.replace("03_json.html")
});


// 5자리의 인증번호를 id값이 result인 요소에게 출력하도록 명시.
document.getElementById("btn6").addEventListener("click", function(){
    let value = "";
    for (let i=0; i<5; i++) {
        value += Math.floor(Math.random() * 10);   // value가 문자열이기 때문에 숫자 5개를 순서대로 넣어줘야됨.
    }
    const result2 = document.getElementById("result2");
    result2.innerHTML = value;
    result2.style.color = "blue";
});

// 새로고침 
document.getElementById("btn7").addEventListener("click", function(){
    location.reload();
});











