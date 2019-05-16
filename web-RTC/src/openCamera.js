var playVideo = require('./playVideo.js');

function openCamera(cb) {
    navigator.mediaDevices.getUserMedia( {audio: false, video: true})
	.then(stream => {
        cb(stream);
        
	})
	.catch(error => console.log(error))
}

module.exports = openCamera;