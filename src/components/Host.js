import React from 'react';

const Host = (host) => {
    return (
        <div className='host'>
            <p>{host.data.name}</p>
            <img src={host.data.picture} alt="host's face" />
        </div>
    );
};

export default Host;