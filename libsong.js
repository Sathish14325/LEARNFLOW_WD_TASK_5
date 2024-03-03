//song list
let All_song = [
   {
     name: "I LIKE YOUR EYES",
     path: "music/1.mp3",
     img: "images/1.jpg",
     singer: "Ysabella cuevas"
   },
   {
     name: "Perfect",
     path: "music/2.mp3",
     img: "images/2.jpg",
     singer: "Ed sheern"
   },
   {
     name: "Safari",
     path: "music/3.mp3",
     img: "images/3.jpg",
     singer: "American Band"
   },
   {
     name: "spectre",
     path: "music/4.mp3",
     img: "images/4.jpg",
     singer: "Alan Walker"
   },
   {
     name: "Who says",
     path: "music/5.mp3",
     img: "images/5.jpg",
     singer: "Salena Gomez"
   },
   {
    name: "Birthday",
    path: "music/6.mp3",
    img: "images/6.jpg",
    singer: "Magic Free Release"
   }
];



/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


