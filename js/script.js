
const title = document.getElementsByClassName("music-info");

const playButton = document.getElementsByClassName("play-pause-btn-wrapper");
const prevButton = document.getElementsByClassName("previous-btn-wrapper");
const nextButton = document.getElementsByClassName("next-btn-wrapper");

const currentTime = document.getElementsByClassName("current-time");
const musicSlider = document.getElementsByClassName("music-slider");
const endTime = document.getElementsByClassName("total-duration");

const volumeSlider = document.getElementsByClassName("volume-slider");

let isPlaying = false;

const music = document.createElement("audio");
music.src = "https://www.dropbox.com/s/ckcsaev4fznwple/01%20-%20Samadhi.mp3";


setInterval(updateMusicSlider, 500);

changePrevNextColor();

playButton.addEventListener("click", () => {
    playPauseTrack();
});

nextButton.addEventListener("click", () => {
    isPlaying = false;
    const resultObj = dll.traverse(1);

    if(resultObj != 0){
        music.src = resultObj.path;
        playPauseTrack();
    }
    changeMusicTitle(resultObj.name);
    changePrevNextColor();
});

prevButton.addEventListener("click", () =>{
    isPlaying = false;
    const resultObj = dll.traverse(-1);

    if(resultObj != 0){
        music.src = resultObj.path;
        playPauseTrack();
    }
    changeMusicTitle(resultObj.name);
    changePrevNextColor();
});


