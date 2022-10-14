import React from 'react';

const Tag = (tag) => {
    return (
        <div className='tag'>
            {tag.data}
        </div>
    );
};

export default Tag;