document.addEventListener('DOMContentLoaded', function() {
    let pledge = document.querySelector("textarea");
    let signature = document.querySelector("input");
    let open = document.querySelector("a.modal.show");
    let modal = document.querySelector("div.modal");
    let close = document.querySelector("a.modal.hide");
    let overlay = document.querySelector(".overlay");
    open.addEventListener('click', function () {
        if (pledge.value != "" && signature.value != "") {
            window.location.href="index.html";
            localStorage.setItem("pledgeDone", true);
        }
        else {
            overlay.style.display = "block";
            modal.style.display = "inline";
        }
    })
    close.addEventListener('click', function () {
        modal.style.display = "none";
        overlay.style.display = "none";
    })
})