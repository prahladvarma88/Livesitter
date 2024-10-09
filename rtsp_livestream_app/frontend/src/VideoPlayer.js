import React, { useState, useEffect } from 'react';

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById('livestream-video');
    if (playing) {
      video.pause();
    } else {
      video.play();
    }
    setPlaying(!playing);
  };

  return (
    <div>
      <video id="livestream-video" controls width="600" autoPlay>
        <source src="YOUR_RTSP_STREAM_URL" type="application/x-rtsp" />
      </video>
      <button onClick={handlePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
