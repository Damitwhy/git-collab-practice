const myBox = document.getElementById("myBox");

/** Arrow controls for myBox div */
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if (event.key.startsWith("Arrow")) {
        event.preventDefault();
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
        myBox.textContent = "😮";
        myBox.style.backgroundColor = "tomato";
    }
});

/** Emoji changes when key is released */
document.addEventListener("keyup", event => {
    myBox.textContent = "😊";
    myBox.style.backgroundColor = "lightblue";
});

/** Emoji changes to default state when clicked */
document.addEventListener("click", event => {
    myBox.textContent = "😄";
    myBox.style.backgroundColor = "lightblue";
});

//** Creates an event that happens when the Emoji (myBox) is inside the target box (targetBox) */

const targetBox = document.getElementById("targetBox");

const checkCollision = () => {
    const boxRect = myBox.getBoundingClientRect();
    const targetRect = targetBox.getBoundingClientRect();
    const myCongrats = document.getElementById("myCongrats");

    if (
        boxRect.left >= targetRect.left &&
        boxRect.right <= targetRect.right &&
        boxRect.top >= targetRect.top &&
        boxRect.bottom <= targetRect.bottom
    ) {
        // Emoji is inside the target box
        // Add your desired event code here

        // console.log("myBox is inside targetBox");

        // Your event code here
        myCongrats.innerHTML = `<p>Wow... Now that's good arrow key skills!!</p><br>
        <p>You should work for NASA.. 😅 </p>
        <img src="./assests/nasa.png" alt="Congratulations" style="width: 60px; height: 50px;"> `;
        myCongrats.style.display = "block";
        myBox.textContent = "😄";
    } else {
        // Emoji is not inside the target box
        myCongrats.style.display = "none";
    }
};

setInterval(checkCollision, 100);
