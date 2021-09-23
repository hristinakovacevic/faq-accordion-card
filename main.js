
    let paragraphs = document.querySelectorAll('.first-paragraph');
    
paragraphs.forEach((paragraph)=>
        paragraph.addEventListener('click', function() {answerFunc(paragraph)})
    )
  
function answerFunc(e){
    e.classList.toggle('active');
    
}
