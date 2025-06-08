const buttons = document.querySelectorAll(".drum") as NodeListOf<HTMLButtonElement> 

buttons.forEach(button =>{
    button.addEventListener("click", () =>{
        const audioFile: string | null = button.getAttribute("data-sound");

        if (audioFile){
        const audio:HTMLAudioElement = new Audio(audioFile);
        audio.play();
        }
        button.classList.add("pressed");
        setTimeout(() => button.classList.remove("pressed"),100);
    })
})

document.addEventListener("keydown", (event) =>{
    const wordButton = document.querySelector(`.${event.key}`) as HTMLButtonElement | null;
    if (wordButton) {
        wordButton.click();
    }
});
