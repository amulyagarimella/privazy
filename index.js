document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem("quizDone") == null) {
        localStorage.setItem("quizDone", false);
    }
    if (localStorage.getItem("refDone") == null) {
        localStorage.setItem("refDone", false);
    }
    if (localStorage.getItem("pledgeDone") == null) {
        localStorage.setItem("pledgeDone", false);
    }

    let tasks = document.querySelectorAll(".main-text");
    if (localStorage.getItem("quizDone") == "true") {
        tasks[0].children[0].style.textDecoration =  "line-through";
        tasks[0].children[0].style.textDecorationColor =  "white";
        tasks[0].children[0].style.textDecorationThickness =  "4px";
        tasks[0].children[0].style.textDecorationStyle =  "straight";
        tasks[0].children[0].disabled=true;
    }
    if (localStorage.getItem("refDone") == "true") {
        tasks[1].children[0].style.textDecoration =  "line-through";
        tasks[1].children[0].style.textDecorationColor =  "white";
        tasks[1].children[0].style.textDecorationThickness =  "4px";
        tasks[1].children[0].style.textDecorationStyle =  "straight";
    }
    if (localStorage.getItem("pledgeDone") == "true") {
        tasks[2].children[0].style.textDecoration =  "line-through";
        tasks[2].children[0].style.textDecorationColor =  "white";
        tasks[2].children[0].style.textDecorationThickness =  "4px";
        tasks[2].children[0].style.textDecorationStyle =  "straight";
    }

    let completeMessage = document.querySelector(".complete");
    console.log(completeMessage);
    if (localStorage.getItem("quizDone") == "true" && localStorage.getItem("refDone") == "true" && localStorage.getItem("pledgeDone") == "true") {
        completeMessage.style.display = "block";
    }

    let openModal = document.querySelectorAll("a.modal.show");
    let modal = document.querySelector("div.modal");
    let content = modal.querySelector(".content");
    let title = modal.querySelector(".quizl");
    let overlay = document.querySelector("div.overlay");
    let closeModal = document.querySelector("a.modal.hide");
    for (let i = 0; i < openModal.length; i++) {
        let type = openModal[i].classList[0];
        openModal[i].addEventListener('click', function () {
            if (type == "about") {
                content.innerHTML = '<p>\
                <emph>Hi there! We\'re Taylor and Amulya,</emph> two college students who \
                wanted to create a fun way for teens to learn about digital privacy\
                in the modern age.\
                </p>\
                <p>\
                <emph>Privazy</emph> is our final project for <b>CS105</b>, taught by the incomparable\
                Prof. Jim Waldo at Harvard University.\
                <emph>Thank you to:</emph> Prof. Waldo, the course staff, our\
                wonderful classmates, and <b>you</b>!\
                </p>';
                title.innerHTML = "About"
                overlay.style.display = "block";
                modal.style.display = "inline";
            }
            else if (type == "feedback") {
                content.innerHTML = '<p>\
                We would love to answer your questions and hear your comments.\
                Feel free to email either or both of us.\
                </p>\
                <p>\
                <emph>Amulya:</emph> agarimella@college.harvard.edu\
                </p>\
                <p>\
                <emph>Taylor:</emph> tfang@college.harvard.edu\
                </p>';
                title.innerHTML = "Feedback"
                overlay.style.display = "block";
                modal.style.display = "inline";
            }
            else if (type == "q") {
                if (localStorage.getItem("quizDone") == "true") {
                    content.innerHTML = '<p>\
                    You\'ve already completed this!\
                    </p>';
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
                    content.innerHTML = '<p>\
                    You\'ve already completed this!\
                    </p>';
                    overlay.style.display = "block";
                    modal.style.display = "inline";
                }
                else {
                    content.innerHTML = '<p>\
                    Be sure to complete the quiz first!\
                    </p>';
                    overlay.style.display = "block";
                    modal.style.display = "inline";
                }
            }
            else if (type == "p") {
                if (localStorage.getItem("quizDone") == "true" && localStorage.getItem("refDone") == "true" && localStorage.getItem("pledgeDone") == "false") {
                    window.location.href = "pledge.html";
                }
                else if (localStorage.getItem("pledgeDone") == "true") {
                    content.innerHTML = '<p>\
                    You\'ve already completed this!\
                    </p>';
                    overlay.style.display = "block";
                    modal.style.display = "inline";
                }
                else {
                    content.innerHTML = '<p>\
                    Be sure to complete the quiz and reflection first!\
                    </p>';
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