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
                if (sessionStorage.getItem("quizDone") == "true") {
                    content.innerHTML = 'You\'ve already completed this!';
                    overlay.style.display = "block";
                    modal.style.display = "inline";
                }
                else {
                    window.location.href = "quiz/1.html";
                }
            }
            else if (type == "r") {
                if (sessionStorage.getItem("quizDone") == "true" && sessionStorage.getItem("refDone") == "false") {
                    window.location.href = "reflect.html";
                }
                else if (sessionStorage.getItem("refDone") == "true") {
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
                if (sessionStorage.getItem("quizDone") == "true" && sessionStorage.getItem("refDone") == "true" && sessionStorage.getItem("pledgeDone") == "false") {
                    window.location.href = "pledge.html";
                }
                else if (sessionStorage.getItem("pledgeDone") == "true") {
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