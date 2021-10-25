
    let questions = document.querySelectorAll('h3, .icon ');

    questions.forEach((question) => {
        question.addEventListener("click", function() {
    
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active")
        }
        else{
            questions.forEach(question => question.parentNode.classList.remove("active"))
            question.parentNode.classList.add("active")
            }
        })
    })
    

