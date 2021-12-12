import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom';

import ListContext from './context';

const List = () => {// eslint-disable-next-line
    const {announcements} = useContext(ListContext);

    const delItem = (reqId) => {
        const tempList = [...announcements.list];
        const reqIndex = tempList.findIndex(e => e.id === reqId);
        tempList.splice(reqIndex, 1);
        announcements.setList(tempList);
    };

    const renderItem = (item) => {
        return(
            <div className="pre-announcement" key={item.id}>
                <div className="pre-title">
                    <h3>{item.title}</h3>
                        <button
                                className="del"
                                onClick={() => delItem(item.id)}
                                >Delete
                        </button>
                </div>
                <NavLink className="read-more" to={`/announcement/${item.id}`}>Read More &#8594;</NavLink>
            </div>
        )
    }

    return (
        <div className="List-page">
            <div className="container">
                <div className="list">
                    {announcements.list.map(renderItem)}
                </div>
            </div>
            
        </div>
    )
}

export default List;