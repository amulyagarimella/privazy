document.addEventListener('DOMContentLoaded', function() {
    let openModal_pg = document.querySelectorAll("a.modal.page.show");
    let modal_pg = document.querySelector("div.modal.page");
    let content_pg = modal_pg.querySelector(".content");
    let title_pg = modal_pg.querySelector(".quizl");
    let overlay_pg = document.querySelector("div.overlay");
    let closeModal_pg = document.querySelector("a.modal.page.hide");
    for (let i = 0; i < openModal_pg.length; i++) {
        let type = openModal_pg[i].classList[0];
        openModal_pg[i].addEventListener('click', function () {
            if (type == "about") {
                content_pg.innerHTML = '<p>\
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
                title_pg.innerHTML = "About"
                overlay_pg.style.display = "block";
                modal_pg.style.display = "inline";
            }
            else if (type == "feedback") {
                content_pg.innerHTML = '<p>\
                We would love to answer your questions and hear your comments.\
                Feel free to email either or both of us.\
                </p>\
                <p>\
                <emph>Amulya:</emph> agarimella@college.harvard.edu\
                </p>\
                <p>\
                <emph>Taylor:</emph> tfang@college.harvard.edu\
                </p>';
                title_pg.innerHTML = "Feedback"
                overlay_pg.style.display = "block";
                modal_pg.style.display = "inline";
            }
        })
    }
    closeModal_pg.addEventListener('click', function () {
        modal_pg.style.display = "none";
        overlay_pg.style.display = "none";
    })
})