document.addEventListener('DOMContentLoaded', function() {
    let show = document.querySelectorAll(".show");
    for (let i=0; i < show.length; i++) {
        show[i].addEventListener('click', function() {
            let hidden = document.querySelectorAll(".hidden." + show[i].classList[1]);
            let replace = document.querySelectorAll(".replace." + show[i].classList[1]);
            for (let j=0; j < hidden.length; j++)
            {
                hidden[j].style.display = "block";
                
            }
            let samelvl = document.querySelectorAll(".show." + show[i].classList[1]);
            for (let j=0; j < samelvl.length; j++) {
                samelvl[j].style.textDecoration = "none";
                samelvl[j].style.cursor = "auto";
            }
            for (let j=0; j < replace.length; j++) {
                replace[j].innerHTML = "";
            }
        })
    }
})