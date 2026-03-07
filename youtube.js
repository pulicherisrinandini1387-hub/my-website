const API_KEY = "AIzaSyDnczqkLTLwbpbgN10pcCYwcHMdNotR66Y";

const params = new URLSearchParams(window.location.search);
const course = params.get("course");

const query = course + " programming tutorial";

let videos = [];
let currentIndex = 0;

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=6&key=${API_KEY}`)
.then(res => res.json())
.then(data => {

videos = data.items;

if(videos.length > 0){
loadVideo();
}

})
.catch(err => console.log(err));

function loadVideo(){

const videoId = videos[currentIndex].id.videoId;

document.getElementById("video-player").innerHTML = `
<iframe
src="https://www.youtube.com/embed/${videoId}"
frameborder="0"
allowfullscreen>
</iframe>
`;

}

function nextVideo(){

if(currentIndex < videos.length-1){

currentIndex++;

localStorage.setItem(course+"Progress", currentIndex);

loadVideo();

}

}

function prevVideo(){

if(currentIndex > 0){

currentIndex--;

loadVideo();

}

}