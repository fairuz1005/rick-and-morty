import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className='row align-items-center justify-content-center'>
            <div className="spinner-border text-primary" role="status">
            
            </div>
            <p className='text-center'>Loading...</p>
        </div>
    </div>
  );
};

export default Loading;
