
    let questions = document.querySelectorAll('.first-paragraph');
    
questions.forEach((question)=>
        question.addEventListener('click', function() {answerFunc(question)})
    )
  
function answerFunc(e){
    e.classList.toggle('active');
    
}
