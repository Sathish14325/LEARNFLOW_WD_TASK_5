//song list
let All_song = [
    {
      name: "ORU NALIL",
      path: "music/25.mp3",
      img: "img/u1.jpg",
      singer:"u1",
    },
    {
      name: "KADHAL ASSAI",
      path: "music/26.mp3",
      img: "img/u1.jpg",
      singer:"u1",
    },
    {
      name: "ARABU NADU",
      path: "music/27.mp3",
      img: "img/u1.jpg",
      singer:"u1",
    
    },
    {
      name: "Thuli thuli",
      path: "music/28.mp3",
      img: "img/u1.jpg",
      singer:"u1",
    
    },
    {
     name: "Mash up",
     path: "music/29.mp3",
     img: "img/u1.jpg",
     singer:"u1",
    },
    {
        name: "Thakkuthe",
        path: "music/30.mp3",
        img: "img/u1.jpg" ,
        singer:"U1",
    
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
 
 
 