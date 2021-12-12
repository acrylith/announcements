import React, { useState, useContext } from 'react';
import dayjs from 'dayjs';

import ListContext from '../context';

const AddForm = () => {
    const [addTitle, setAddTitle] = useState("");
    const [addDescr, setAddDescr] = useState("");
    const {announcements} = useContext(ListContext);

    const submit = () => {
        const tempList = [...announcements.list];
        const addId = tempList[tempList.length - 1].id + 1;
        let item = {
            id: addId,
            title: addTitle,
            descr: addDescr,
            date: dayjs().format('YYYY.MM.DD')
        }
        
        tempList.push(item);
        announcements.setList(tempList);
        console.log(announcements.list)
    }

    const handleTitle = (event) => {
        const target = event.target;
        const value = target.value;
        setAddTitle(value);
    }

    const handleDescr = (event) => {
        const target = event.target;
        const value = target.value;
        setAddDescr(value);
    }

    return (
        <div className="fields">
            <input
                type="text"
                name="title"
                placeholder="Announcement title"
                onChange={handleTitle}
            />
            <textarea
                type="text"
                name="descr"
                placeholder="Announcement description"
                onChange={handleDescr}
            />
            <button onClick={() => submit()}>Add Announcement</button>
        </div>
    )
}

export default AddForm;