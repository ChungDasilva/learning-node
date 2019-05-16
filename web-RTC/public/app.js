openCamera();

const Peer = require('simple-peer');
const p = new Peer( {initiator: location.hash === "#1", trickle: false})
p.on("signal", token => console.log(token));

function openCamera() {
    navigator.mediaDevices.getUserMedia( {audio: false, video: true})
	.then(stream => {
		playVideo(stream, "client-stream")
	})
	.catch(error => console.log(error))
}

function playVideo(stream, idVideo) {
    const video = document.getElementById(idVideo);
    video.srcObject = stream;
    video.onloadedmetadata = function() {
        video.play();
    }
}