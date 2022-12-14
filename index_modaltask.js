document.addEventListener('DOMContentLoaded', function() {
    let openModal = document.querySelectorAll("a.modal.task.show");
    let modal = document.querySelector("div.modal.task");
    let content = modal.querySelector(".content").children[0];
    let overlay = document.querySelector("div.overlay");
    let closeModal = document.querySelector("a.modal.task.hide");
    for (let i = 0; i < openModal.length; i++) {
        let type = openModal[i].classList[0];
        openModal[i].addEventListener('click', function () {
            if (type == "q") {
                if (localStorage.getItem("quizDone") == "true") {
                    content.innerHTML = 'You\'ve already completed this!';
                    overlay.style.display = "block";
                    modal.style.display = "inline";
                }
                else {
                    window.location.href = "quiz/1.html";
                }
            }
            else if (type == "r") {
                if (localStorage.getItem("quizDone") == "true" && localStorage.getItem("refDone") == "false") {
                    window.location.href = "reflect.html";
                }
                else if (localStorage.getItem("refDone") == "true") {
                    content.innerHTML = 'You\'ve already completed this!';
                    overlay.style.display = "block";
                    modal.style.display = "inline";
                }
                else {
                    content.innerHTML = 'Be sure to complete the quiz first!';
                    overlay.style.display = "block";
                    modal.style.display = "inline";
                }
            }
            else if (type == "p") {
                if (localStorage.getItem("quizDone") == "true" && localStorage.getItem("refDone") == "true" && localStorage.getItem("pledgeDone") == "false") {
                    window.location.href = "pledge.html";
                }
                else if (localStorage.getItem("pledgeDone") == "true") {
                    content.innerHTML = 'You\'ve already completed this!';
                    overlay.style.display = "block";
                    modal.style.display = "inline";
                }
                else {
                    content.innerHTML = 'Be sure to complete the quiz and reflection first!';
                    overlay.style.display = "block";
                    modal.style.display = "inline";
                }
            }
        })
    }
    closeModal.addEventListener('click', function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    })
})