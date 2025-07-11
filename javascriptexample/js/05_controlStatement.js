// 요구사항 -1
function input(){ 
    const kor = parseInt(document.getElementById("kor").value)
    const eng = parseInt(document.getElementById("eng").value)
    const math = parseInt(document.getElementById("math").value)
    
    // 유효성 검사 
    if (isNaN(kor) || isNaN(eng) || isNaN(math)){      // isNaN : 숫자가 아닙니까? true:아니다. false:숫자다.
        alert("모든 과목에 숫자를 입력해주세요.");
        return;
    }

    const sum = kor + eng + math;
    document.getElementById("sum").value = sum;

    const avg = (kor + eng + math)/3
    document.getElementById("avg").value = avg;
    
    let grade;

    if (avg<=100 && avg>=90) {
        grade = 'A'
    } else if (avg>=80) {
        grade = 'B'
    } else if (avg>=70) {
        grade = 'C'
    } else {
        grade = 'F'
    }
    document.getElementById("grade").value = grade;
}

    /*방법 2
    switch (Math.floor(avg/10)){    // Math.floor() 소수점 버림
        case 10:
        case 9:
            grade = "A"; 
            break;
        case 8:
            grade = "B";
            break;
        case 7:
            grade = "C"
            break;
        default:
            grade = "F";
    }
    document.getElementById("grade").value = grade;
}*/




// 요구사항 -2
const computerNumber = Math.floor((Math.random() * 10) + 1);
let nGuesses = 0;
let gameOver = false;

function guess(){
    if (gameOver) return;

    // 아래 초기화 작업이 존재하지 않는다면
    // let number = parseInt(document.getElementById("user").value);

    let input = document.getElementById("user");
    let number = parseInt(input.value);
    let result = "";

    // 입력값 유효성 검사 
    if (isNaN(number) || number<1 || number>10){
        alert("1부터 10사이의 숫자를 입력해 주세요.");
        input.value = "";
        input.focus();
        return;
    }
    nGuesses++;

    if (number === computerNumber){
        result = "성공입니다!";
        gameOver = true;
    } else if (number < computerNumber){
        result = "입력한 숫자가 너무 낮습니다.";
    } else {
        result = "입력한 숫자가 너무 높습니다.";
    }

    document.getElementById("result").value = result;
    document.getElementById("guesses").value = nGuesses;

    input.value = "";
    input.focus();
}






//요구사항 -3
function print(){
    const hprint = document.getElementById("hprint");
    const imgprint = document.getElementById("imgprint");

    hprint.innerHTML = "";
    imgprint.innerHTML = "";

    for(let i=1; i<=6; i++){
        hprint.innerHTML += `<h${i}> Hello JavaScript </h${i}`;
    }
    for(let j=1; j<=3; j++){
        imgprint.innerHTML += `<img src='../image/${i}.jpg' />`;
    }
}



function gugudanPrint() {
    let data = "";
    const gugudan = document.getElementById("gugudan");

    for (let i = 1; i <= 9; i++) {
        data += "<table>";
        data += `<tr><th>${i}단</th></tr>`;
        for (let j = 1; j <= 9; j++) {
            data += `<tr><td>${i} x ${j} = ${i * j}</td></tr>`;
        }
        data += "</table>";
    }
    gugudan.innerHTML = data; 
}