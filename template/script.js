const videoElement =document.getElementById('video');
const button= document.getElementById('button');
// prompt to select media MediaStream, pass to video Element, then play 
async function selectMediaStream(){
    try{
        // constant which will have mediastream data 
        // anything that needs to be resolved after we complete our call will wait  until the try has completed instead of just throwing an error 

const mediaStream= await navigator.mediaDevices.getDisplayMedia();
videoElement.srcObject =mediaStream;
videoElement.onloadedmetadata = () =>{
    videoElement.play();
}
}
    catch (error) {
        console.log('whoops, error here:', error);
    }
}

button.addEventListener('click', async ()=> {
    selectMediaStream();
// disable button as you click on it
button.disabled=true;
// start Picture in Picture
// waiting for videoElement to request 
await videoElement.requestPictureInPictue();
// reset button 
button.disabled=false;
});

// onload
// selectMediaStream();