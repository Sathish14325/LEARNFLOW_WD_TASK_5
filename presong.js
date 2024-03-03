//song list
let All_song = [
    {
      name: "BAD LIAR",
      path: "music/15.mp3",
      img: "images/15.jpg",
      singer: "Imagine dragons"
    },
    {
      name: "Poradalam",
      path: "music/19.mp3",
      img: "images/19.jpg",
      singer: "Besabriyan"
    },
    {
      name: "Pudhidha",
      path: "music/18.mp3",
      img: "images/18.jpg",
      singer: "Gopi sundar"
    },
    {
      name: "En roja neeye",
      path: "music/17.mp3",
      img: "images/17.jpg",
      singer: "Hesham abdul"
    },
    {
      name: "Treat you better",
      path: "music/24.mp3",
      img: "images/24.jpg",
      singer: "Shawn mendes"
    },
    {
     name: "legends never die",
     path: "music/22.mp3",
     img: "images/22.jpg",
     singer: "Against the current"
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
 
 
 