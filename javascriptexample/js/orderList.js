
// 25,000원 => 25000 
const uncomma = function(str) {          
    return str.replace(/[^\d]+/g, '');
}; 
/* 
/.../정규표현식 
g(global): 전체검색. '전체 문자열'에서 숫자가 아닌 문자를 찾아 제거하겠다.
[^\d]: 숫자가 아닌 문자 1개 (\d는 숫자 [0-9], ^는 부정)
[^\d]+: 숫자가 아닌 문자가 하나 이상 연속된 것
''로 대체하겠다. 즉, 없애겠다. 
*/

const jiwon = function() {    
const fruits = ["apple", "banana", "cherry"];
fruits.forEach(fruit => {
    console.log(fruit);
});
}


const update = function() {

    // 총수량 구하기
    let totalNumber = 0;
    const number = document.querySelectorAll("input[type='number']");  // input 태그의 속성 중에 type="number"인 대상들 선택. 여러 값 선택되니 배열. 
    /*for(let i=0; i<number.length; i++){
        totalNumber += parseInt(number[i].value);   
    }*/
    number.forEach(num => {        // ForEach 노션참조. num : 임시로 선언된 매개변수. 
        totalNumber += parseInt(num.value);  
    });
    document.getElementById("totalNumber").value = totalNumber;

    // 총합계 구하기
    let totalPrice = 0;  
    const price = document.querySelectorAll("input[name$='Total']"); // input 태그의 속성 중에 name 속성의 값이 이름이 'Total'로 끝나는 대상만.
    /*for(let i =0; i < price.length; i++){
        totalPrice += parseInt(price[i].value);
    }*/
    price.forEach(num => {
        totalPrice += parseInt(num.value);
    });
    document.getElementById("totalPrice").value = totalPrice;

};




document.getElementById("btn").addEventListener("click", update);
const input = document.querySelectorAll("input[type='number']");    // input의 타입이 number인것 찾아와. 3개. 즉 const input 은 배열 
input.forEach((target) => { 
    target.addEventListener("input", function(e){     // '값이 입력될때마다' 실행시키겠다. 
        console.log(e.target);          
        const id = e.target.id;  // 이벤트가 발생한 대상의 아이디를 가져온다. 
        console.log(id);

        const price = id.replace("Number", "Price"); // number를 Price로 대체 book1Number -> book1Price
        const total = id.replace("Number", "Total"); // number를 Total로 대체 book1Number -> book1Total
        document.getElementById(total).value = uncomma(document.getElementById(price).innerHTML) * parseInt(this.value);
        update();
    });
});