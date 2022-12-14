document.addEventListener('DOMContentLoaded', function() {
    let openModal = document.querySelectorAll("a.modal.page.show");
    let modal = document.querySelector("div.modal.page");
    let content = modal.querySelector(".content");
    let title = modal.querySelector(".quizl");
    let overlay = document.querySelector("div.overlay");
    let closeModal = document.querySelector("a.modal.page.hide");
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
        })
    }
    closeModal.addEventListener('click', function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    })
})