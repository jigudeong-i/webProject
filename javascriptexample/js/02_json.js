let bbs = {
  "title": ["JavaScript", "HTML", "CSS"],
  "description": "클라이언트 프로그래밍 과목을 정리해 놓은 게시판입니다.",
  "items": [              // 대괄호: 배열
    {
      "no": 3,
      "subject": "JavaScript",  //제목
      "contents": "JavaScript는 웹 페이지를 동적으로 만들기 위한 프로그래밍 언어입니다. 이벤트 처리, DOM 조작, 비동기 통신 등 다양한 기능을 제공합니다.",
      "hit": 6,                 //조회수
      "date": "2025.05.22"      //작성일
    },
    {
      "no": 2,
      "subject": "CSS",
      "contents": "CSS는 웹 페이지의 디자인을 담당하는 스타일시트 언어입니다. 레이아웃 구성, 색상, 폰트, 애니메이션 등을 설정할 수 있습니다.",
      "hit": 15,
      "date": "2025.03.17"
    },
    {
      "no": 1,
      "subject": "HTML",
      "contents": "HTML은 웹 페이지의 구조를 정의하는 마크업 언어입니다. 제목, 단락, 링크, 이미지 등 페이지의 뼈대를 구성합니다.",
      "hit": 19,
      "date": "2025.01.05"
    }
  ]
};


const container = document.getElementById("bbsCards");
document.getElementById("bbsTitle").innerHTML = bbs.title.join(" / ");
document.getElementById("bbsDescription").innerHTML = bbs.description;
    
bbs.items.forEach(item => {
    container.innerHTML += `
        <div class="card">
            <div class="title">
                ${item.subject} <small>(${item.no})</small>
            </div>
            <div class="meta">
                작성일: ${item.date} | 조회수: ${item.hit}
            </div>
            <div class="contents">${item.contents}</div>
        </div>
    `;
});

/* 객체 리터럴을 이용하는 방법 */
const user = {
    name: "홍길동",
    hobby: ["여행", "영화"],
    //greeting: function() { 
    //  console.log('안녕하세요~! 나의 이름은', this.name, '입니다.');
    //}
    // 메서드 축약형
    greeting() { 
        console.log('안녕하세요~! 나의 이름은', this.name, '입니다.');
    }
};

console.log("객체 리터럴을 이용하는 방법 ");
user.greeting(); 
console.log("=========================");

for(let h of user.hobby){
    console.log(h +" ");
} 
console.log("=========================");

console.log('user 객체의 값 출력');
console.log('user.name = ', user.name);      // user가 가지고 있는 name 을 가져와라 
console.log('user.hobby = ', user.hobby.toString());

console.log("=========================");

//프로퍼티 추가
user.age = 25; 
console.log('user.age = ', user.age);
console.log("=========================");

//프로퍼티 삭제
delete user.name;  
console.log('user 객체의 값 출력', user.name, user.hobby.join(" "), user.age);
console.log("=========================");

const member = {
  id : "nodeuser", 
  pw : "node1234",
  name : "김철수",
  mobile : "010-8934-XXXX", 
  country : "대한민국"
}

console.log("for...in으로 출력");
for(let info in member){
  console.log(`${info} : ${member[info]}`);  // 대괄호: 키 값 가져옴. 
}		