function playPauseTrack(){
    if(!isPlaying) playTrack();
    else playPauseTrack();
}

function playTrack(){
    music.play();
    isPlaying = true;
    
}