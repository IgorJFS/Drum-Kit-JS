const buttons = document.querySelectorAll(".drum");

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        const audioFile = button.getAttribute("data-sound");

        const audio = new Audio(audioFile);
        audio.play();

        button.classList.add("pressed");
        setTimeout(() => button.classList.remove("pressed"),100);
    })
})

document.addEventListener("keydown", (event) =>{
    const wordButton = document.querySelector(`.${event.key}`);
    if (wordButton) {
        wordButton.click();
    }
})
