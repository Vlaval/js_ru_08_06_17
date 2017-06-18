import React from 'react';

export default function Comment({comment}) {
    return (
        <div>
            <p>{comment.user}</p>
            <p>{comment.text}</p>
        </div>
    )
}