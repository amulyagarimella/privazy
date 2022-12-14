document.addEventListener('DOMContentLoaded', function() {
    let ref = document.querySelector("textarea");
    let open = document.querySelector("a.modal.show");
    let modal = document.querySelector("div.modal");
    let close = document.querySelector("a.modal.hide");
    let overlay = document.querySelector(".overlay");
    open.addEventListener('click', function () {
        if (ref.value != "") {
            window.location.href="index.html";
            localStorage.setItem("refDone", true);
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