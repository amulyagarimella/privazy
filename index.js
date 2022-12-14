document.addEventListener('DOMContentLoaded', function() {
    if (sessionStorage.getItem("quizDone") == null) {
        sessionStorage.setItem("quizDone", false);
    }
    if (sessionStorage.getItem("refDone") == null) {
        sessionStorage.setItem("refDone", false);
    }
    if (sessionStorage.getItem("pledgeDone") == null) {
        sessionStorage.setItem("pledgeDone", false);
    }

    let tasks = document.querySelectorAll(".main-text");
    if (sessionStorage.getItem("quizDone") == "true") {
        tasks[0].children[0].style.textDecoration =  "line-through";
        tasks[0].children[0].style.textDecorationColor =  "white";
        tasks[0].children[0].style.textDecorationThickness =  "4px";
        tasks[0].children[0].style.textDecorationStyle =  "straight";
        tasks[0].children[0].disabled=true;
    }
    if (sessionStorage.getItem("refDone") == "true") {
        tasks[1].children[0].style.textDecoration =  "line-through";
        tasks[1].children[0].style.textDecorationColor =  "white";
        tasks[1].children[0].style.textDecorationThickness =  "4px";
        tasks[1].children[0].style.textDecorationStyle =  "straight";
    }
    if (sessionStorage.getItem("pledgeDone") == "true") {
        tasks[2].children[0].style.textDecoration =  "line-through";
        tasks[2].children[0].style.textDecorationColor =  "white";
        tasks[2].children[0].style.textDecorationThickness =  "4px";
        tasks[2].children[0].style.textDecorationStyle =  "straight";
    }

    let completeMessage = document.querySelector(".complete");
    console.log(completeMessage);
    if (sessionStorage.getItem("quizDone") == "true" && sessionStorage.getItem("refDone") == "true" && sessionStorage.getItem("pledgeDone") == "true") {
        completeMessage.style.display = "block";
    }
})