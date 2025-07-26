
// form 예제1
document.getElementById("word").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {       // 누른 키가 엔터일 때에만           
        e.preventDefault();        // 텍스트가 하나일 때 엔터 기본 동작은 '서버전송'인데 그걸 방지. 

        console.log(e);
        console.log(e.target);     // e.target : 이벤트가 발생한 대상이 누구인가. 즉, input의 word

        const word = e.target;    
        const result = document.getElementById("result");
       
        result.value += word.value + "\n";    // 누적되게 만든다. 

        word.value = "";           // 입력창 초기화 (다음 입력 편하게)
        word.focus();              // 커서를 다시 입력창에 둠. (사용자가 바로 다시 입력 가능)
    } 
});


"keydown", (e)=> {
    if (e.key === "Enter")
}

// form 예제2
document.getElementById("btnPrint").addEventListener("click", () => {
    const width = parseInt(document.getElementById("widthTxt").value);
    const height = parseInt(document.getElementById("heightTxt").value);
    const color = document.getElementById("color").value;
    const contents = document.getElementById("contentsTxt").value.trim(); // trim() : 문자열 앞뒤 공백을 제거

    const display = document.getElementById("display");
    display.style.width = `${width}px`;
    display.style.height = `${height}px`;
    display.style.backgroundColor = color;
    display.innerHTML = contents;          
    
    // 텍스트 중앙 정렬
    display.style.display = "flex";
    display.style.justifyContent = "center";  // 수평 중앙
    display.style.alignItems = "center";      // 수직 중앙
});


