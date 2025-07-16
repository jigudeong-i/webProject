

$("#operation").click(function(){
    const number1 = $("#number1").val();
    if (number1.replace(/\s/g,"")=="" || isNaN(number1)) {
        alert("첫번째 숫자를 입력해 주세요.");
        $("#number1").val("");         // 문자나 공백이 올 경우 빈공백으로 초기화하겠다.
        $("#number1").focus();         
        return;
    }

    const number2 = $("#number2").val();
    if (number2.replace(/\s/g,"")=="" || isNaN(number2)) {
        alert("두번째 숫자를 입력해 주세요.");
        $("#number2").val("");
        $("#number2").focus();
        return;
    }
    
    const symbol = $("#symbol > option:selected").val();    // 선택한 옵션(option:selected)의 값 가져오겠다. 
    switch(symbol){
    case "+":
        result = parseInt(number1) + parseInt(number2);
        break;
    case "-":
        result = parseInt(number1) - parseInt(number2);
        break;
    case "*":
        result = parseInt(number1) * parseInt(number2);
        break;
    case "/":
        result = parseInt(number1) / parseInt(number2);
        // isFinite(123.123) 123.123은 유한한 숫자이므로 true를 반환.
        // isFinite(5/0) Infinity는 무한한 숫자이므로 false를 반환.
        if(!isFinite(result)){
            $("#result").val("0으로 나눌 수 없음");
            return;
        }
        break;
    }
    $("#result").val(result);   //값을 설정하겠다. 
});






