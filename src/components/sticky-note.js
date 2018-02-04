import React from 'react';
import './sticky-note.css'
const StickyNote = (props) => {
    return (
        <li className='sticky'>
            <h2 className='sticky-title'>{props.title}</h2>
            <p className='sticky-content'>{props.content}</p>
        </li>
    );
};

export default StickyNote;