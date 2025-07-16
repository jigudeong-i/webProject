
const checks = document.querySelectorAll(".check");
checks.forEach( target => {                                // 요소가 순차적으로 target에 들어옴
    target.addEventListener("click", function(){
        this.style.color = "#ccc";
        this.parentNode.style.color = "#ccc";              // 부모 요소는 감싸고 있는 것. 즉 span의 부모는 li, li의 부모는 ul
        this.parentNode.style.textDecoration="line-through";
    });
});








