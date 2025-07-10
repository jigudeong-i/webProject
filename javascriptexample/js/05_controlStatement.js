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

    /*switch (Math.floor(avg/10)){  // Math.floor() 소수점 버림
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



// 요구사항 -3
/*function button1(){
    
    for (let i=1; i<7; i++){
       ("<h" + i + ">Hello JavaScript</h" + i + ">");

       document.getElementsByName("typebox")
    }



    nums = [1,2,3,4,5,6]
    for (let i : nums){
        "<h" + i + ">Hello JavaScript</h" + i ">"   
    }
}*/