export const getOverlays = async () => {
    const response = await fetch('http://localhost:5000/api/overlays');
    return response.json();
  };
  
  export const createOverlay = async (data) => {
    const response = await fetch('http://localhost:5000/api/overlays', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };
  
  export const deleteOverlay = async (id) => {
    const response = await fetch(`http://localhost:5000/api/overlays/${id}`, {
      method: 'DELETE',
    });
    return response.json();
  };
  