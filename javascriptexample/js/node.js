const createNode = function(){                      // 익명함수(함수 표현식)
    const newItem = document.createElement("li");  // li 태그추가. 
    const subject = document.querySelector("#subject");  

    const newText = document.createTextNode(subject.value);  
    newItem.appendChild(newText);        // 자식 노드를 추가하겠다. 
    
    const itemList = document.querySelector("#itemList");  
    itemList.appendChild(newItem);          // li를 추가하겠다.
    //itemList.insertBefore(newItem, itemList.childNodes[0]);
    subject.value="";

    /*
    let items = document.querySelectorAll("li");  // 모든 항목 가져오기
    for(i=0; i<items.length; i++) {
        items[i].addEventListener("click", function() {  // 항목 클릭했을 때 실행할 함수
            if(this.parentNode) {   // 부모 노드가 있다면 
                this.parentNode.removeChild(this);  // 부모 노드에서 삭제
            }
        });
    }
    */

    let items = document.querySelectorAll("li");  // 모든 항목 가져오기
    items.forEach( target => {
        target.addEventListener("click",function(){
            if(this.parentNode) {                   // 부모 노드가 있다면 
                this.parentNode.removeChild(this);  // 부모 노드에서 삭제
            }    
        });
    });
}

document.getElementById("createBtn").addEventListener("click", createNode);

document.getElementById("subject").addEventListener("keypress", (e)=>{
    if (e.key === 'Enter') {
        e.preventDefault();      // '엔터는 기본기능이 '전송'인데 그거 막겠다.'
        createNode();
    }
});