document.addEventListener('DOMContentLoaded', function() {  
    let openBack = document.querySelector("a.back.modal.s");
    let back = document.querySelector("div.back.modal");
    let next = document.querySelector("a.back.modal.n");
    let closeBack = document.querySelector("a.back.modal.h");
    let overlay = document.querySelector(".overlay");
    openBack.addEventListener('click', function () {
        overlay.style.display = "block";
        back.style.display = "inline";
    })
    closeBack.addEventListener('click', function () {
        back.style.display = "none";
        overlay.style.display = "none";
    })
    next.addEventListener('click', function () {
        back.style.display = "none";
        overlay.style.display = "none";
        window.location.href="../index.html";
    })
})