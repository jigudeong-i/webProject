const library = {
    books: [
        {
            "title":"자바스크립트 입문",
            "author":"홍길동",
            "year":"2021"
        },
        {
            "title":"HTML/CSS/JavaScript",
            "author":"김철수",
            "year":"2020"
        },
        {
            "title":"오라클",
            "author":"이영희",
            "year":"2022"
        }
    ]
};

const renderTable = function(){
    const tableBody = document.querySelector("#bookTable tbody");
    tableBody.innerHTML="";

    library.books.forEach( book=> {
        let row = `
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.year}</td>
        </tr>
        `;
        tableBody.innerHTML += row;
    });
};

document.getElementById("addBook").addEventListener("click", ()=> {
    const titleTxt = document.getElementById("title");
    const authorTxt = document.getElementById("author");
    const yearTxt = document.getElementById("year");

    const title = titleTxt.value.trim();
    const author = authorTxt.value.trim();
    const year = parseInt(yearTxt.value);

    if(!title || !author || isNaN(year)){
        alert("제목, 저자, 출판 연도 모두 다 입력해야 합니다.");
        return;
    }

    library.books.push(
        {
            "title":title,
            "author":author,
            "year":year
        });
        // library.books.push({title, author, year});
        
        titleTxt.value = "";
        authorTxt.value = "";
        yearTxt.value = "";

        renderTable();
});

//초기 테이블 표시
renderTable();