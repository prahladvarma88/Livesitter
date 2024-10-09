import React from 'react';
import VideoPlayer from './VideoPlayer';
import OverlayManager from './OverlayManager';

function App() {
  return (
    <div className="App">
      <h1>Livestream with Overlays</h1>
      <VideoPlayer />
      <OverlayManager />
    </div>
  );
}

export default App;
