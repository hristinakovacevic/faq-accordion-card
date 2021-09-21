let btn = document.getElementsById('icon')
let text = documnet.getElementsById('text')
let h3 = document.getElementsById('faq-text')
btn.addEventListener('click', toggleFunc)

function toggleFunc(){
    if(text.style.display === "none"){
        text.style.display = "block"
        h3.classList.add('active')
    }else{
        text.style.display = "none"
    }
}
