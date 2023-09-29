import Spinner from 'react-bootstrap/Spinner';
import React from 'react';

function LoadingBox() {
    return (
        <Spinner animation='border' role='status'>
            <span className='visually-hidden'>Loading...</span>
        </Spinner>
    )
}

export default LoadingBox;