//song list
let All_song = [
    {
      name: "NAAN",
      path: "music/36.mp3",
      img: "img/pra.jpg",
      singer:"Pradeep",
    },
    {
      name: "Mogathirai",
      path: "music/37.mp3",
      img: "img/pra.jpg",
      singer:"Pradeep",
    },
    {
      name: "Aagayam",
      path: "music/38.mp3",
      img: "img/pra.jpg",
      singer:"Pradeep",
    },
    {
      name: "Life of ram",
      path: "music/39.mp3",
      img: "img/pra.jpg",
      singer:"Pradeep",
    
    },
    {
      name: "Aasai oru pulveli",
      path: "music/40.mp3",
      img: "img/pra.jpg",
      singer:"Pradeep",
    
    },
    {
     name: "Nee mattum pothum",
     path: "music/41.mp3",
     img: "img/pra.jpg",
     singer:"Pradeep",
    },


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
 
 
 