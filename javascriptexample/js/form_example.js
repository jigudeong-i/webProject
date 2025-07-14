
document.getElementById("word").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {       // 누른 키가 엔터일 때에만
        e.preventDefault();        // 엔터 기본 동작 방지. (줄바꿈 방지)

        const word = e.target;     // e.target 이벤트가 발생한 입력창 그 자체. 즉, 사용자가 글자를 입력한 요소.
        const result = document.getElementById("result");

        result.value += word.value + "\n";    // 누적되게 만든다. 

        word.value = "";            // 입력창 초기화(다음 입력 편하게)
        word.focus();               // 커서를 다시 입력창에 둠. (사용자가 바로 다시 입력 가능)
    }
});
