const Peer = require('simple-peer');
const $ = require('jquery');
var playVideo = require('./playVideo.js');

const openCamera = require('./openCamera');
openCamera(function(stream) {
    playVideo(stream, "client-stream")
        const p = new Peer( {initiator: location.hash === "#1", trickle: false, stream})
        p.on("signal", token => {
            $('#txt-token').val(JSON.stringify(token))
        });
        $("#btnConnect").click(function() {
            const friendToken = JSON.parse($('#friend-token').val());
            p.signal(friendToken);
        })

        p.on('connect', () => {
            console.log('CONNECT')
            p.send('whatever' + Math.random())
        })

        p.on("data", data => console.log(data))

        p.on("stream", friendstream => playVideo(friendstream, "friend-stream"))

        console.log("chao chung dasilva");
});


