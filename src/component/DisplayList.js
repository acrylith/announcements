import React from 'react';
import { NavLink } from 'react-router-dom';

const DisplayList = (props) => {
    const renderItem = (pos) => {
        return(
            <div className="pre-announcement" key={pos.item.id}>
                <h3>{pos.item.title}</h3>
                <NavLink className="read-more" to={`/announcement/${pos.item.id}`}>Read More &#8594;</NavLink>
            </div>
        )
    }
    
    return(
        <div className="list">
            {props.list.map(renderItem)}
        </div>
    )
}

export default DisplayList;