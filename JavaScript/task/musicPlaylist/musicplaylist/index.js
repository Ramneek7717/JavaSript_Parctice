let songIndex=0;
let repeat = document.getElementById('repeat');
let audioElement = new Audio('covers1/1.mp3');
let audioElement1=new Audio('covers1/1.mp3');
let play=document.getElementById('play');
let gif=document.getElementById('gif');
let backward=document.getElementById('backward');
let shuffle=document.getElementById('shuffle');
let volume=document.getElementById('volume');
let volumeRange=document.getElementById('volumeRange');
let myProgressBar = document.getElementById('myProgressBar');
let yourImg = document.getElementById('yourImgId');
let masterSongName= document.getElementById('masterSongName');
let songName=document.getElementById('songName')
let songcontainer=document.getElementsByClassName('songlist');
let displaysonglist=document.getElementsByClassName('container1');
let songItems = Array.from(document.getElementsByClassName('songItem1'));
let songItemPlay1= Array.from(document.getElementsByClassName('songItem1'));
// silder start
const left=document.querySelector('.left');
const right=document.querySelector('.right');
const silder=document.querySelector('.silder');
let slideNumber=1;
const images=document.querySelectorAll('.image');
const length=images.length;
const bottom=document.querySelector('.bottom');
let songs = [
  {songName: "Baby Calm Down", filePath: "covers1/1.mp3", coverPath: "covers1/1.jpg"},
  {songName: "Born To Shine", filePath: "covers1/2.mp3", coverPath: "covers1/2.webp"},
  {songName: "SOFTLY", filePath: "covers1/3.mp3", coverPath: "covers1/3.jpg"},
  {songName: "Sia-Unstoppable", filePath: "covers1/4.mp3", coverPath: "covers1/4.jpg"},
  {songName: "295(offical Audio)", filePath: "covers1/5.mp3", coverPath: "covers1/5.jpg"},
  {songName: "Ikk Number", filePath: "covers1/6.mp3", coverPath: "covers1/6.jpg"},
  {songName: "Panghat", filePath: "covers1/7.mp3", coverPath: "covers1/7.jpg"},
  {songName: "Street Dreams", filePath: "covers1/8.mp3", coverPath: "covers1/8.jpg"},
  {songName: "Ve Haniya Ve Dil JaniYa", filePath: "covers1/9.mp3", coverPath: "covers1/9.jpg"},
  {songName: "O Mahi O Mahi", filePath: "Covers1/10.mp3", coverPath: "covers1/10.jpg"},
]

function myFunction()
{
    var x = document.getElementById('myDIV');
    if (x.style.visibility === 'hidden') {
      x.style.visibility = 'visible';
      playslider.style.marginRight='100px'; 
    } 
    else {
      x.style.visibility = 'hidden';
      playslider.style.marginRight='300px'; 
    }

}
function myFunction1()
{
    var x = document.getElementById('myDIV');
  if (x.style.visibility === 'visible') 
  {
  x.style.visibility = 'hidden';
  playslider.style.marginRight='300px'; 
  }
  
}
songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    console.log(element.getElementsByTagName("img")[0].src = songs[i].coverPath);
    element.getElementsByClassName("songName1")[0].innerText = songs[i].songName;
    console.log(element.getElementsByClassName("songName1")[0].innerText = songs[i].songName); 
})

Array.from(document.getElementsByClassName('songItemPlay1')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
      if(audioElement.paused||audioElement.currentTime<=0)
      { 
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-circle-play');
      e.target.classList.add('fa-circle-pause');
      audioElement.src = songs[songIndex].filePath;
      songName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      play.classList.remove('fa-circle-play');
      play.classList.add('fa-circle-pause');
      gif.style.opacity=1;
      gif.style.height = '20px';
      gif.style.width = '100px';
      yourImg.style.height = '20px';
      yourImg.style.width = '100px';
    }
  else
   {
   songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-circle-pause');
    e.target.classList.add('fa-circle-play');
    audioElement.src = songs[songIndex].filePath;
    songName.innerText = songs[songIndex].songName;
    audioElement.pause();
    play.classList.remove('fa-circle-pause');
    play.classList.add('fa-circle-play');
    gif.style.opacity=0;
    gif.style.height='0px';
    gif.style.width='0px';
    yourImg.style.height = '50px';
    yourImg.style.width = '100px';
   
 }
 audioElement.addEventListener('timeupdate',()=>{
  //Update Seekbar
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
    // makeAllPlays();
     if (audioElement.currentTime==audioElement||audioElement.paused)
      {  
        console.log(audioElement);
        console.log(songIndex+1); 
          e.target.classList.remove('fa-circle-pause');
          e.target.classList.add('fa-circle-play'); 
          play.classList.remove('fa-circle-pause');
          play.classList.add('fa-circle-play'); 
          gif.style.opacity=0;
          gif.style.height='0px';
          gif.style.width='0px';
          yourImg.style.height = '50px';
          yourImg.style.width = '100px';
      }
      });
 
    })
})
 
// start form dots
for(let i=0;i<length;i++)
{
   const div=document.createElement('div');
   div.className='button';
   bottom.appendChild(div);
}
const buttons=document.querySelectorAll('.button');
buttons[0].style.backgroundColor='white';
const resetBg=()=>{
   buttons.forEach((button)=>{
       button.style.backgroundColor='transparent';
       button.addEventListener('mouseover',stopSlideShow);
       button.addEventListener('mouseout',startSlideShow);
   });
};
buttons.forEach((button,i)=>
{
  button.addEventListener('click',()=>{
   
    silder.style.transform=`translateX(-${i*800}px)`;
   //  console.log(silder.style.transform=`translateX(-${i*800}px)`);
     resetBg();
     slideNumber=i+1;
     button.style.backgroundColor='white';   
  });
});
const chanegcolor=()=>{
   resetBg();
   buttons[slideNumber-1].style.backgroundColor='white';
};
//ends dots
const nextSlide=()=>{
   silder.style.transform=`translateX(-${slideNumber*350}px)`;
   slideNumber++;
}
const getFirstSilde=()=>{
   silder.style.transform=`translateX(0px)`;
   slideNumber=1; 
}
const prevSlide=()=>{
   silder.style.transform=`translateX(-${(slideNumber-2)*350}px)`;
   slideNumber--;
}
const getLastSilde=()=>{
   silder.style.transform=`translateX(-${(length-1)*350}px)`;
   slideNumber=length; 
}
right.addEventListener('click',()=>{
   if(slideNumber<length)
   {
     nextSlide();
   }
   else
   {
       getFirstSilde();
   }
   // slideNumber<length?nextSlide():getFirstSilde();
   chanegcolor();    
});
left.addEventListener('click',()=>{
   slideNumber>1?prevSlide():getLastSilde();
   chanegcolor(); 
});
//start Auto slider
let slideInterval;
const startSlideShow=()=>{
   slideInterval=setInterval(()=>{
       slideNumber<length?nextSlide():getFirstSilde();  
       chanegcolor();
   },2000);

};
const stopSlideShow=()=>{
   clearInterval(slideInterval);
};
const playimagesong=()=>{
    console.log(silder);
  };
startSlideShow();
silder.addEventListener('click',playimagesong)
silder.addEventListener('mouseover',stopSlideShow);
silder.addEventListener('mouseout',startSlideShow);
left.addEventListener('mouseover',stopSlideShow);
left.addEventListener('mouseout',startSlideShow);
right.addEventListener('mouseover',stopSlideShow);
right.addEventListener('mouseout',startSlideShow);
// end slider
// playlist code start


shuffle.addEventListener('click',()=>{
    // for(let i=0;i<=songs.length;i++)
    // {
    // var random_file = songs[Math.floor(Math.random() * songs.length)];
    // console.log(random_file);
    // }

  for (let i = songs.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = songs[i];
    songs[i] = songs[j];
    songs[j] = temp;
    songItems.forEach((element, i)=>{ 
      element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
      console.log(element.getElementsByTagName("img")[0].src = songs[i].coverPath);
      element.getElementsByClassName("songName1")[0].innerText = songs[i].songName;
      console.log(element.getElementsByClassName("songName1")[0].innerText = songs[i].songName);
       const audio1=songs[i].filePath;
      console.log(songs[i].filePath);
        const audio=audio1.className;
        console.log(songs[i].filePath);
        const audio2=audio1.classList;
        console.log(audio2);
     
      

      })
    
  
  }
  console.log(songs);
 
    })
  


backward.addEventListener('click',()=>
{
    if(songIndex<=0){
        songIndex = 0
      
    }
    else{
        songIndex -= 1;
        console.log(audioElement);
        console.log(songIndex+1);
        const class1=document.getElementById(songIndex+1);
        console.log(class1);
        const className1=class1.className;
        console.log(className1);
         if(class1.classList.contains('fa-circle-pause'))
        {
        class1.classList.remove('fa-circle-pause');
      class1.classList.add('fa-circle-play');
      }
    }
    
    audioElement.src = songs[songIndex].filePath;
    songName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    console.log(audioElement);
    console.log(songIndex+1);
    
    gif.style.opacity=1;
    gif.style.height = '20px';
    gif.style.width = '100px';
    const class2=document.getElementById(songIndex);
    console.log(class2);
    const className2=class2.className;
    console.log(className2);
    if(class2.classList.contains('fa-circle-play'))
    {
      class2.classList.remove('fa-circle-play');
    class2.classList.add('fa-circle-pause');
    }
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
    
});
forward.addEventListener('click',()=>{
    console.log("Forward Function");
    // makeAllPlays();
    if(songIndex>=9){
        songIndex = 9
      
        
    }
    else{
          songIndex += 1;
          console.log(audioElement);
          console.log(songIndex-1);
          const class1=document.getElementById(songIndex-1);
          console.log(class1);
          const className1=class1.className;
          console.log(className1);
           if(class1.classList.contains('fa-circle-pause'))
          {
          class1.classList.remove('fa-circle-pause');
        class1.classList.add('fa-circle-play');
        }
        audioElement.src = songs[songIndex].filePath;
    songName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity=1;
    gif.style.height = '20px';
    gif.style.width = '100px';
    const class2=document.getElementById(songIndex);
    console.log(class2);
    const className2=class2.className;
    console.log(className2);
    if(class2.classList.contains('fa-circle-play'))
    {
      class2.classList.remove('fa-circle-play');
    class2.classList.add('fa-circle-pause');
    }
    play.classList.remove('fa-circle-play');
    play.classList.add('fa-circle-pause');
        
    }
});
repeat.addEventListener( 'click',function(){
    
    if(audioElement.loop!= true ){
      audioElement.loop = true;
      console.log("repeat apply");
      }
    else 
    {
        console.log("repeat remove");
      audioElement.loop = false;
     }
    
});    

//handle play/pause click
play.addEventListener('click',()=>{
    console.log("play");
   if(audioElement.paused||audioElement.currentTime<=0 )
    {
        audioElement.play();
        console.log(audioElement);
        console.log(songIndex);
        const class1=document.getElementById(songIndex);
        console.log(class1);
        const className1=class1.className;
        console.log(className1);
        if(class1.classList.contains('fa-circle-play'))
        {
          class1.classList.remove('fa-circle-play');
        class1.classList.add('fa-circle-pause');
        }
        else
        {
          class1.classList.remove('fa-circle-pause');
          class1.classList.add('fa-circle-play');      
        }
        play.classList.remove('fa-circle-play');
        play.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        gif.style.height = '20px';
        gif.style.width = '100px';
        yourImg.style.height = '20px';
        yourImg.style.width = '100px';
      } 
   else
   {
    audioElement.pause();
    console.log(audioElement);
    console.log(songIndex);
    console.log(audioElement);
    console.log(songIndex);
    const class1=document.getElementById(songIndex+1);
    console.log(class1);
    const className1=class1.className;
    console.log(className1);
    if(class1.classList.contains('fa-circle-pause'))
    {
      class1.classList.remove('fa-circle-pause');
      class1.classList.add('fa-circle-play');

    }
    else
    {
      class1.classList.remove('fa-circle-play');
      class1.classList.add('fa-circle-pause');
    }
    play.classList.remove('fa-circle-pause');
    play.classList.add('fa-circle-play');
   
    gif.style.opacity=0
    gif.style.height='0px';
    gif.style.width='0px';
    yourImg.style.height = '50px';
    yourImg.style.width = '100px';  
}
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
//Update Seekbar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  myProgressBar.value=progress;
  // console.log(audioElement.currentTime);
  //   console.log(audioElement.duration);
if (audioElement.currentTime==audioElement.duration||audioElement.paused)
    {    
      play.classList.remove('fa-circle-pause');
        play.classList.add('fa-circle-play'); 
     const class1=document.getElementById(songIndex+1);
    console.log(class1);
    const className1=class1.className;
    console.log(className1);
    if(class1.classList.contains('fa-circle-pause'))
    {
      class1.classList.remove('fa-circle-pause');
      class1.classList.add('fa-circle-play');

    }
    else
    {
      class1.classList.remove('fa-circle-play');
      class1.classList.add('fa-circle-pause');
    }     
        gif.style.opacity=0;
        gif.style.height='0px';
        gif.style.width='0px';
        yourImg.style.height = '50px';
        yourImg.style.width = '100px';
    }
    });
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
});
volumeRange.addEventListener('change',()=>{
   audioElement.volume = document.getElementById("volumeRange").value;
});

//  songIndex = parseInt(e.target.id);
//  audioElement.src = `covers1/${songIndex+1}.mp3`;
//  <i class="fas fa-random fa-2x" title="random"></i>
// let randomIcon = document.querySelector('.fa-random');
// let isRandom = false;
// function randomTrack(){
//     isRandom ? pauseRandom() : playRandom();
// }
// function playRandom(){
//     isRandom = true;
//     randomIcon.classList.add('randomActive');
// }
// function pauseRandom(){
//     isRandom = false;
//     randomIcon.classList.remove('randomActive');
// }