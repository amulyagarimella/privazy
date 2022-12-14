document.addEventListener('DOMContentLoaded', function() {
    let show = document.querySelectorAll(".show");
    for (let i=0; i < show.length; i++) {
        show[i].addEventListener('click', function() {
            let hidden = document.querySelectorAll(".hidden." + show[i].classList[1] + "." + show[i].classList[2]);
            for (let j=0; j < hidden.length; j++)
            {
                hidden[j].style.display = "block";
            }
            show[i].innerHTML = "";
        })
    }
    let corrects = document.querySelectorAll(".correct");
    let qCount = document.querySelectorAll(".hidden.correct").length
    let correctCount = 0;
    let count = document.querySelector("#count");
    let last = document.querySelector("#last");
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
            correctCount++;
            count.innerHTML = correctCount;
            console.log(qCount);
            if (correctCount == qCount) {
                last.innerHTML = 'What have we <a href="8.html">learned</a>?';
            }
        })
    }
})