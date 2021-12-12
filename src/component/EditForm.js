import React, { useState, useContext } from 'react';

import ListContext from '../context';

const EditForm = (props) => {
    const [defaultValues, setDefaultValues] = useState(props.default)
    const [addTitle, setAddTitle] = useState("");
    const [addDescr, setAddDescr] = useState("");
    const {announcements} = useContext(ListContext);

    const submit = () => {
        const tempList = [...announcements.list];
        const reqIndex = tempList.findIndex(el => el.id === Number(defaultValues.id));
        
        tempList[reqIndex].title = addTitle;
        tempList[reqIndex].descr = addDescr;
        announcements.setList(tempList);
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
                // value={defaultValues.title}
                onClick={handleTitle}
                onChange={handleTitle}
            />
            <textarea
                type="text"
                name="descr"
                placeholder="Announcement description"
                // value={defaultValues.descr}
                onClick={handleDescr}
                onChange={handleDescr}
            />
            <button onClick={() => submit()}>Edit Announcement</button>
        </div>
    )
}

export default EditForm;