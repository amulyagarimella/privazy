document.addEventListener('DOMContentLoaded', function() {
    let ref = document.querySelector("textarea");

    let openBack = document.querySelector("a.modal.show");
    let back = document.querySelector("div.modal");
    let closeBack = document.querySelector("a.modal.hide");
    let overlay = document.querySelector(".overlay");
    openBack.addEventListener('click', function () {
        if (ref.value != "") {
            window.location.href="index.html";
            localStorage.setItem("refDone", true);
        }
        else {
            overlay.style.display = "block";
            back.style.display = "inline";
        }
    })
    closeBack.addEventListener('click', function () {
        back.style.display = "none";
        overlay.style.display = "none";
    })
})