//song list
let All_song = [
    {
      name: "AMBIKAPATHY",
      path: "music/7.mp3",
      img: "img/arr.jpg",
      singer:"ARR",
    },
    {
      name: "Pachai nirame",
      path: "music/8.mp3",
      img: "img/arr.jpg",
      singer:"ARR",
    },
    {
      name: "Ninaivu iruka",
      path: "music/9.mp3",
      img: "img/arr.jpg",
      singer:"ARR",
    },
    {
      name: "poovukul",
      path: "music/10.mp3",
      img: "img/arr.jpg",
      singer:"ARR",
    
    },
    {
      name: "Nanare",
      path: "music/11.mp3",
      img: "img/arr.jpg",
      singer:"ARR",
    
    },
    {
     name: "Usure poguthu",
     path: "music/12.mp3",
     img: "img/arr.jpg",
     singer:"ARR",
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
 
 
 