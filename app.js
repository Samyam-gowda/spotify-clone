let aud2 = new Audio("songs/KAATERA Theme Song Lyrical _ Darshan _ Aradhanaa _ Tharun _ Rockline Venkatesh _ V.Harikrishna (128 kbps).mp3");
let aud1 = new Audio("songs/KALAASTAR - Full Video _ Honey 3.0 _ Yo Yo Honey Singh & Sonakshi Sinha _ Zee Music Originals (128 kbps).mp3");
let aud3 = new Audio("songs/Don Toliver, Lil Durk & Latto - Fast Lane (Official Audio) [from F9 - The Fast Saga] (128 kbps).mp3");
let aud4 = new Audio("songs/GHOST_ OGM _ Dr Shivarajkumar _ Anupam Kher _ Jayaram _ Prashant Narayanan _ Srini _ Sandesh (128 kbps).mp3");
let aud5 = new Audio("songs/Besharam Rang Song _ Pathaan _ Shah Rukh Khan, Deepika Padukone _ Vishal & Sheykhar _ Shilpa, Kumaar (128 kbps).mp3");
let aud6 = new Audio("songs/Rahul Dit-O _ Nanna Kannada _ Ft. MC Bijju _ Official Music Video (4K) _ Kannada Rap (128 kbps).mp3");
let aud7 = new Audio("songs/MC STAN - Basti Ka Hasti (Official Audio) _ INSAAN _ 2022 (128 kbps).mp3");
let aud8 = new Audio("songs/Badshah – Genda Phool _ Jacqueline Fernandez _ Payal Dev _ Hit Anthem of the Year 2021 (128 kbps).mp3");
let aud9 = new Audio("songs/Desi Kalakaar Full Song with LYRICS _ Yo Yo Honey Singh _ Sonakshi Sinha (128 kbps).mp3");

let div1 = document.querySelector(".kalaastar");
div1.addEventListener("click", ()=>{
   aud1.play();
   aud2.pause();
   aud3.pause()
   aud4.pause()
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   
})

let div2 = document.querySelector(".kaatera");
div2.addEventListener("click", ()=>{
    aud2.play();
    aud1.pause();  
    aud3.pause();
    aud4.pause();
    aud5.pause();
    aud6.pause();
    aud7.pause();
    aud8.pause();
    aud9.pause();
   
})

let div3 = document.querySelector(".fast9");
div3.addEventListener("click", ()=>{
   aud3.play();
   aud2.pause();
   aud1.pause();
   aud4.pause();
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   
})

let div4 = document.querySelector(".ghost");
div4.addEventListener("click", ()=>{
   aud4.play();
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   
})

let div5 = document.querySelector(".pathaan");
div5.addEventListener("click", ()=>{
   aud5.play();
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   
})

let div6 = document.querySelector(".kannada");
div6.addEventListener("click", ()=>{
   aud6.play();
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud5.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   
})

let div7 = document.querySelector(".mcstan");
div7.addEventListener("click", ()=>{
   aud7.play();
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud5.pause();
   aud6.pause();
   aud8.pause();
   aud9.pause();
   
})

let div8 = document.querySelector(".genda");
div8.addEventListener("click", ()=>{
   aud8.play();
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud9.pause();
   
})

let div9 = document.querySelector(".honey");
div9.addEventListener("click", ()=>{
   aud9.play();
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   
})


