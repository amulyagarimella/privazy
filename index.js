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
})