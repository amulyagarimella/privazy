document.addEventListener('DOMContentLoaded', function() {
    let show = document.querySelectorAll(".show");
    for (let i=0; i < show.length; i++) {
        show[i].addEventListener('click', function() {
            for (let j=0; j < i; j++) {
                show[j].innerHTML = "";
            }
        })
    }
})