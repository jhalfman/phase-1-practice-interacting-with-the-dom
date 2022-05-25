const counter = document.getElementById("counter");
let increment = 0;
let heartIncrement = 0;
counter.innerText = increment;
const lister = document.getElementById("list");
const listOfLikes = [];
let pauseState = true;
const commentForm = document.getElementById("comment-form");
const h3List = document.querySelectorAll("h3");

setInterval(() => {
    if (pauseState){
    increment += 1;
    counter.innerText = increment;
    }
    else {
        
    }
}, 1000);

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");

plus.addEventListener("click", () => {
    if (pauseState === true){
        increment += 1;
        counter.innerText = increment;
    }
});

minus.addEventListener("click", () => {
    if (pauseState === true){
        increment -= 1;
        counter.innerText = increment;
    }
});

heart.addEventListener("click", () => {
    if (pauseState === true){
        if (listOfLikes.includes(increment)){
            const tryThis = document.getElementById(increment);
            let newUpdater = parseInt(tryThis.innerText.split(" ")[0]);
            newUpdater += 1;
            tryThis.innerText = newUpdater + "x - You have liked the number " + increment;
        }
        else {
            let placeHolder = 1;
            listOfLikes.push(increment);
            const newLike = document.createElement("ul");
            newLike.innerText = placeHolder + "x - You have liked the number " + increment;
            newLike.id = increment;
            lister.appendChild(newLike);
        }
    }
    
    
});

pause.addEventListener("click", () => {
    if (pauseState === true){
        pauseState = false;
        pause.innerText = "resume";
    }
    else {
        pauseState = true;
        pause.innerText = "pause";
    }
});

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newComment = document.createElement("h5");
    newComment.innerText = document.getElementById("comment-input").value;
    h3List[1].appendChild(newComment);
    document.getElementById("comment-form").reset();
})