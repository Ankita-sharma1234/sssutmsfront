import React from 'react';

const StudentWaiting =()=> {
  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        {/* (A) BACKGROUND IMAGE */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            background: 'url(https://www.mpnvva.in/Image/UniversityPicture?instituteID=12)',
            backgroundSize: 'cover',
            filter: 'blur(2px)',
          }}
        />
        {/* (B) FOREGROUND CONTENT */}
        <div
          style={{
            overflow: 'auto',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* (X) VISIT CODE-BOXX */}
          <div
            id="code-boxx"
            style={{
              padding: '20px',
              fontWeight: 600,
              backgroundColor: '#fff',
              borderRadius: '20px',
            }}
          >
            <h2 style={{ marginBottom: '50px' }}>
             Dear Student Currently Unable to Login  !!! <br/> 
             Please Contact to your HOD for approvel.
            </h2>
          
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentWaiting