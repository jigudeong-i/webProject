const user = {
    name: "javauser",
    email: "javauser@naver.com",
    phone: "02-343-2212"
};

/*사용자에게 입력받은 값으로 설정시
const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value
};
*/

//JSON.stringify(): JSON 객체를 문자열(String)로 변환
let userString = JSON.stringify(user);
console.log(typeof userString);
document.getElementById("string").innerHTML = userString;

let userJson = "";
console.log(typeof JSON.parse(userString));


//JSON.parse(): 문자열(String)을 JSON 객체로 변환
JSON.parse(userString, function(key, value){
    if(key != ""){
        userJson += key + " : " + value + "<br />";
    }
});
document.getElementById("json").innerHTML = userJson;




