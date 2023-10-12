console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex=0;
let audioElement= new Audio('song-1.mp3');
let masterPlay= document.getElementById('masterPlay');
let ProgressBar= document.getElementById('ProgressBar');
let gif= document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItems= Array.from(document.getElementsByClassName('songItem'));

let song=[
    {songName:"Love Story", filePath:"song-1.mp3", coverPath:"love story.jpg "},
    {songName:"Bad Blood", filePath:"song-2.mp3", coverPath:"bad blood.jpeg "},
    {songName:"Enchanted", filePath:"song-3.mp3", coverPath:"enchanted.jpeg "},
    {songName:"Shake it off", filePath:"song-4.mp3", coverPath:"shake it off.jpg "},
    {songName:"I Knew You Were Trouble", filePath:"song-5.mp3", coverPath:"i knew you were trouble.jpg "},
    {songName:"Karma", filePath:"song-6.mp3", coverPath:"karma.jpeg "},
    {songName:"Midnight Rain", filePath:"song-7.mp3", coverPath:"midnight rain.jpeg "},
    {songName:"Cruel Summer", filePath:"song-8.mp3", coverPath:"cruel summer.jpeg "},
]

songItems.forEach((element,i)=>{

element.getElementsByClassName("songName")[0].innerText= song[i].songName;
})

//audioElement.play();

//Handle play/pause button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }

    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

// Listen to Events

audioElement.addEventListener('timeupdate', ()=>{

    // Update Seekbar
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    ProgressBar.value= progress;

})

ProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime= ProgressBar.value* audioElement.duration/100;
})


const makeAllPlays= ()=>{ 
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
        element.classList.add('fa-play-circle');
        element.classList.remove('fa-pause-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e)=>{
       makeAllPlays();
       
       songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= 'song-'${songIndex}'.mp3';
        masterSongName.innerText= song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    }) 
})

document.getElementById('next').addEventListener('click',()=>{
if(songIndex>7)
songIndex=0

else
    songIndex +=1;

    audioElement.src= 'song-'${songIndex}'.mp3';
    
    masterSongName.innerText= song[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    songIndex=0
    
    else
        songIndex -=1;
    
        audioElement.src= 'song-'${songIndex}'.mp3';
        masterSongName.innerText= song[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })



