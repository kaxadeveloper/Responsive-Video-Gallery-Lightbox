const section = document.querySelector("section"),
    mainVideo = document.querySelector(".main-video video"),
    videos = document.querySelectorAll(".videos"),
    close = document.querySelector(".close");

for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("click", (e) => {
        const target = e.target;
        section.classList.add("active");
        target.classList.add("active");
        let src = document.querySelector(".videos.active video").src;
        mainVideo.src = src;

        close.onclick = () => {
            section.classList.remove("active");
            target.classList.remove("active");
            mainVideo.src = "";
        }
    });
}