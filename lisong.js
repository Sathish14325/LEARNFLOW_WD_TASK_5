//song list
let All_song = [
    
    {
      name: "Raja raja",
      path: "music/31.mp3",
      img: "img/il.jpg",
      singer:"ilayaraja",
    },
    {
      name: "Thendral vanthu",
      path: "music/32.mp3",
      img: "img/il.jpg",
      singer:"ilayaraja",
    
    },
    {
      name: "Per vechalum",
      path: "music/33.mp3",
      img: "img/il.jpg",
      singer:"ilayaraja",
    
    },
    {
     name: "Kattumalli",
     path: "music/34.mp3",
     img: "img/il.jpg",
     singer:"ilayaraja",
    },
    {
        name: "Ennai thalatta",
        path: "music/35.mp3",
        img: "img/il.jpg" ,
        singer:"ilayaraja",
    
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
 
 
 