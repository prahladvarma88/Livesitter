import React, { useState, useEffect } from 'react';
import { getOverlays, createOverlay, deleteOverlay, updateOverlay } from './api';

const OverlayManager = () => {
  const [overlays, setOverlays] = useState([]);
  const [newOverlay, setNewOverlay] = useState('');

  useEffect(() => {
    fetchOverlays();
  }, []);

  const fetchOverlays = async () => {
    const data = await getOverlays();
    setOverlays(data);
  };

  const handleCreate = async () => {
    await createOverlay({ content: newOverlay, position: 'top-left', size: 'small' });
    setNewOverlay('');
    fetchOverlays();
  };

  const handleDelete = async (id) => {
    await deleteOverlay(id);
    fetchOverlays();
  };

  return (
    <div>
      <h2>Overlay Manager</h2>
      <input
        type="text"
        value={newOverlay}
        onChange={(e) => setNewOverlay(e.target.value)}
        placeholder="New overlay text"
      />
      <button onClick={handleCreate}>Create Overlay</button>
      <ul>
        {overlays.map((overlay) => (
          <li key={overlay.id}>
            {overlay.content} <button onClick={() => handleDelete(overlay.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayManager;
