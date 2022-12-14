document.addEventListener('DOMContentLoaded', function() {
    let show = document.querySelectorAll(".show");
    let correctCount = 0;
    for (let i=0; i < show.length; i++) {
        show[i].addEventListener('click', function() {
            let hidden = document.querySelectorAll(".hidden." + show[i].classList[1] + "." + show[i].classList[2]);
            for (let j=0; j < hidden.length; j++)
            {
                hidden[j].style.display = "block";
            }
            show[i].innerHTML = "";
            if (show[i].classList[2] == "correct") {
                correctCount++;
            }
        })
    }
    let corrects = document.querySelectorAll(".correct");
    let qs = document.querySelectorAll(".hidden.correct")
    let count = document.querySelector("#count");
    let last = document.querySelector(".last");
    for (let i=0; i < corrects.length; i++) {
        corrects[i].addEventListener('click', function() {
            let incorrects = document.querySelectorAll("." + corrects[i].classList[1] + ".incorrect");
            for (let j=0; j < incorrects.length; j++)
            {
                incorrects[j].parentElement.remove();
            }
            let sameshows = document.querySelectorAll(".show." + corrects[i].classList[1] + ".correct");
            for (let j=0; j < sameshows.length; j++)
            {
                sameshows[j].innerHTML = "";
            }
            count.innerHTML = correctCount;
            if (correctCount == qs.length) {
                last.innerHTML = last.id;
            }
        })
    }
})