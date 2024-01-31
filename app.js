let aud1 = new Audio("songs/KALAASTAR - Full Video _ Honey 3.0 _ Yo Yo Honey Singh & Sonakshi Sinha _ Zee Music Originals (128 kbps).mp3");
let aud2 = new Audio("songs/KAATERA Theme Song Lyrical _ Darshan _ Aradhanaa _ Tharun _ Rockline Venkatesh _ V.Harikrishna (128 kbps).mp3");
let aud3 = new Audio("songs/Don Toliver, Lil Durk & Latto - Fast Lane (Official Audio) [from F9 - The Fast Saga] (128 kbps).mp3");
let aud4 = new Audio("songs/GHOST_ OGM _ Dr Shivarajkumar _ Anupam Kher _ Jayaram _ Prashant Narayanan _ Srini _ Sandesh (128 kbps).mp3");
let aud5 = new Audio("songs/Besharam Rang Song _ Pathaan _ Shah Rukh Khan, Deepika Padukone _ Vishal & Sheykhar _ Shilpa, Kumaar (128 kbps).mp3");
let aud6 = new Audio("songs/Rahul Dit-O _ Nanna Kannada _ Ft. MC Bijju _ Official Music Video (4K) _ Kannada Rap (128 kbps).mp3");
let aud7 = new Audio("songs/MC STAN - Basti Ka Hasti (Official Audio) _ INSAAN _ 2022 (128 kbps).mp3");
let aud8 = new Audio("songs/Badshah – Genda Phool _ Jacqueline Fernandez _ Payal Dev _ Hit Anthem of the Year 2021 (128 kbps).mp3");
let aud9 = new Audio("songs/Desi Kalakaar Full Song with LYRICS _ Yo Yo Honey Singh _ Sonakshi Sinha (128 kbps).mp3");

let songInfo = ["Kalaastar (From Honey 3.0)",'Kaatera Theme song(from "Kaatera")','Fast Lane (Fast9)',' OGM  (from "Ghost")','Besharam Rang (from "Pathaan")','Nanna Kannada','Basti Ka Hasti','Genda Phool( feat.Palyal Dev)','Desi Kalakaar'];
let songDesc = ['Yo Yo Honeysingh, Rony Ajnali, Gill Machhrai','Darshan,V,Harikrishna','Don Toliver, Lil Durk, Latto','Aishwarya Ranjarajan MC Chethan, Jithin raj','Vishal-shekar, Shilpa Rao, Caralisa Monterio','Rahul Dit-O, MC Bijju','MC STAN','Badshah, Payal Dev','Yo Yo Honey Singh'];

let img1 = document.querySelector(".kalla");
let songName = document.querySelector(".song-name")
let songDesp = document.querySelector(".songinfo")

let playBtn1 = document.querySelector(".pp1");
playBtn1.addEventListener("click", () => {
   aud1.play();
   playBtn1.addEventListener("dblclick", () => {
      aud1.pause();
   })
   aud2.pause();
   aud3.pause()
   aud4.pause()
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   img1.src = "requirements/kalaastar.jpeg"
   img1.style.opacity = 1;
   songName.innerText = songInfo[0];
   songDesp.innerText = songDesc[0];
   songDesp.style.marginLeft = '0px';
})

let playBtn2 = document.querySelector(".pp2");
playBtn2.addEventListener("click", () => {
   aud2.play();
   playBtn2.addEventListener("dblclick", () => {
      aud2.pause();
   })
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   img1.src = "requirements/kaatera.jpg";
   img1.style.opacity = 1;
   songName.innerText = songInfo[1];
   songDesp.innerText = songDesc[1];
   songDesp.style.marginLeft = "55px"
})

let playBtn3 = document.querySelector(".pp3");
playBtn3.addEventListener("click", () => {
   aud3.play();
   playBtn3.addEventListener("dblclick", () => {
      aud3.pause();
   })
   aud2.pause();
   aud1.pause();
   aud4.pause();
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   img1.src = "requirements/fast9.jpg";
   img1.style.opacity = 1;
   songName.innerText = songInfo[2];
   songDesp.innerText = songDesc[2];
   songDesp.style.marginLeft = "5px"

})

let playBtn4 = document.querySelector(".pp4");
playBtn4.addEventListener("click", () => {
   aud4.play();
   playBtn4.addEventListener("dblclick", () => {
      aud4.pause();
   })
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   img1.src = "requirements/ghost.jpg";
   img1.style.opacity = 1;
   songName.innerText = songInfo[3];
   songDesp.innerText = songDesc[3];
   songDesp.style.marginLeft = "5px"
   

})

let playBtn5 = document.querySelector(".pp5");
playBtn5.addEventListener("click", () => {
   aud5.play();
   playBtn5.addEventListener("dblclick", () => {
      aud5.pause();
   })
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   img1.src = "requirements/Pathaan.jpg";
   img1.style.opacity = 1;
   songName.innerText = songInfo[4];
   songDesp.innerText = songDesc[4];
   songDesp.style.marginLeft = "5px"

})

let playBtn6 = document.querySelector(".pp6");
playBtn6.addEventListener("click", () => {
   aud6.play();
   playBtn6.addEventListener("dblclick", () => {
      aud6.pause();
   })
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud5.pause();
   aud7.pause();
   aud8.pause();
   aud9.pause();
   img1.src = "requirements/rahuldito.jpeg";
   img1.style.opacity = 1;
   songName.innerText = songInfo[5];
   songDesp.innerText = songDesc[5];
   songDesp.style.marginLeft = "20px"

})

let playBtn7 = document.querySelector(".pp7");
playBtn7.addEventListener("click", () => {
   aud7.play();
   playBtn7.addEventListener("dblclick", () => {
      aud7.pause();
   })
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud5.pause();
   aud6.pause();
   aud8.pause();
   aud9.pause();
   img1.src = "requirements/mcstan.png";
   img1.style.opacity = 1;
   songName.innerText = songInfo[6];
   songDesp.innerText = songDesc[6];
   songDesp.style.marginLeft = "30px"


})

let playBtn8 = document.querySelector(".pp8");
playBtn8.addEventListener("click", () => {
   aud8.play();
   playBtn8.addEventListener("dblclick", () => {
      aud8.pause();
   })
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud9.pause();
   img1.src = "requirements/badshah.jpg";
   img1.style.opacity = 1;
   songName.innerText = songInfo[7];
   songDesp.innerText = songDesc[7];
   songDesp.style.marginLeft = "20px"

})

let playBtn9 = document.querySelector(".pp9");
playBtn9.addEventListener("click", () => {
   aud9.play();
   playBtn9.addEventListener("dblclick", () => {
      aud9.pause();
   })
   aud2.pause();
   aud1.pause();
   aud3.pause();
   aud4.pause();
   aud5.pause();
   aud6.pause();
   aud7.pause();
   aud8.pause();
   img1.src = "requirements/honeysingh.jpg";
   img1.style.opacity = 1;
   songName.innerText = songInfo[8];
   songDesp.innerText = songDesc[8];
   songDesp.style.marginLeft = "20px"

})