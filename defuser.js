let timerEle = document.getElementById("timer");
let defuserEle = document.getElementById("defuser");
let countDown = 10;

let setIntervalEle = setInterval(function() {
    countDown = countDown -1;
    timerEle.textContent = countDown;
    if (countDown === 0) {
        timerEle.textContent = "BOOM!!!";
        clearInterval(setIntervalEle);
    }
}, 1000);
defuserEle.addEventListener("keydown", function(event) {
    let bombDefuserText = defuserEle.value;
    if(event.key === "Enter" && bombDefuserText === "defuse" && countDown !== 0){
       timerEle.textContent = "You did It!!";
       clearInterval(setIntervalEle);
    }
})



