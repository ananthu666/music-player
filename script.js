console.log("Welcome to spotify")
// let audioelement= new Audio("Satisfya.mp3");
// audioelement.play();
let songindex = 0;
let masterplay = document.getElementById("masterplay");
let front = document.getElementById("front");
let back = document.getElementById("back");
let myprogressbar = document.getElementById("myprogressbar");
let gif = document.getElementById("gif");
let songitem = document.getElementsByClassName("songitem");
let songarray = Array.from(songitem);
console.log(songarray);




let songs = [
    { time:"02:52",songname: "Ghaddi Lamborgini", filepath: "Song/Satisfya.mp3", cover: "Icon/lamborgini.png" },
    { time:"00.30",songname: "Pirates", filepath: "Song/pyratessong.mp3", cover: "Icon/pyrates.jpg" },
    { time:"03:17",songname: "Manike Mage Hithe", filepath: "Song/manika maga.mp3", cover: "Icon/yohani.jpg" },
    { time:"03:20",songname: "Yali Li Yali La", filepath: "Song/yalili.mp3", cover: "Icon/yalili.jpg" },
    { time:"02:28",songname: "Astronaut", filepath: "Song/austranaut.mp3", cover: "Icon/austronaut.jpg" },
    { time:"00:30",songname: "Down the river", filepath: "Song/down the river.mp3", cover: "Icon/river.jpg" },
   
]
songarray.forEach((element, i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].cover;
    element.getElementsByClassName("songname")[0].innerHTML = songs[i].songname;
    element.getElementsByClassName("dur")[0].innerHTML=songs[i].time;
    

})
let audioelement = new Audio(songs[0].filepath);
masterplay.addEventListener("click", () => {
    if (audioelement.paused || audioelement.currentTime <= 0) {
        audioelement.play();
        console.log("play");
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        i=songindex;
        document.getElementById(i).classList.remove('fa-play-circle');
        document.getElementById(i).classList.add('fa-pause-circle');

    }
    else {

        audioelement.pause();
        console.log("pause");
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        i=songindex;
        document.getElementById(i).classList.remove('fa-pause-circle');
        document.getElementById(i).classList.add('fa-play-circle');
        

    }
})

audioelement.addEventListener("timeupdate", () => {
    progress = parseInt((audioelement.currentTime / audioelement.duration) * 100);
    // console.log(progress+"%");
    myprogressbar.value = progress;

})

myprogressbar.addEventListener("change", () => {
    audioelement.currentTime = ((myprogressbar.value * audioelement.duration) / 100);
})
const makeallplays = () => {
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName("songitemplay")).forEach((element, i) => {
    // console.log(element,i);
    element.addEventListener("click", (e) => {
        makeallplays();
        console.log(e.target.classList);
        // e.target.classList.remove('fa-play-circle');
        // e.target.classList.add('fa-pause-circle');
        // audioelement.src=songs[i].filepath;
        // audioelement.currentTime=0;
        // audioelement.play();
        // masterplay.classList.add('fa-pause-circle');
        if (audioelement.paused || audioelement.currentTime <= 0) {
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            songindex=i;
            audioelement.src = songs[i].filepath;
            audioelement.currentTime = 0;
            audioelement.play();
            console.log("play");
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
            document.getElementsByClassName("text")[0].innerHTML=songs[i].songname;

        }
        else {

            audioelement.pause();
            console.log("pause");
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
            gif.style.opacity = 0;
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle');

        }
    })
})

back.addEventListener("click", () => {
    makeallplays();
    if (audioelement.played && songindex>0) {
        
        songindex=songindex-1;
        i=songindex;
        console.log(i);
        audioelement.src = songs[i].filepath;
        audioelement.currentTime = 0;
        audioelement.play();
        console.log("play");
        // masterplay.classList.remove('fa-play-circle');
        // masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        document.getElementsByClassName("text")[0].innerHTML=songs[i].songname;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        document.getElementById(i).classList.remove('fa-play-circle');
        document.getElementById(i).classList.add('fa-pause-circle');

    }
    else{
        audioelement.src = songs[0].filepath;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        document.getElementsByClassName("text")[0].innerHTML=songs[0].songname;
        songindex=6;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        document.getElementById(0).classList.remove('fa-play-circle');
        document.getElementById(0).classList.add('fa-pause-circle');

    }

})
front.addEventListener("click", () => {
    makeallplays();
    if (audioelement.played && songindex<5) {
        
        songindex=songindex+1;
        i=songindex;
        console.log(i);
        audioelement.src = songs[i].filepath;
        audioelement.currentTime = 0;
        audioelement.play();
        console.log("play");
        // masterplay.classList.remove('fa-play-circle');
        // masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        document.getElementsByClassName("text")[0].innerHTML=songs[i].songname;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        document.getElementById(i).classList.remove('fa-play-circle');
        document.getElementById(i).classList.add('fa-pause-circle');

    }
    else{
        audioelement.src = songs[0].filepath;
        audioelement.currentTime = 0;
        audioelement.play();
        gif.style.opacity = 1;
        document.getElementsByClassName("text")[0].innerHTML=songs[0].songname;
        songindex=0;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        document.getElementById(0).classList.remove('fa-play-circle');
        document.getElementById(0).classList.add('fa-pause-circle');

    }

})









