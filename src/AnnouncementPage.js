import React, {useState, useContext, useEffect} from 'react';
import Fuse from 'fuse.js';
import dayjs from 'dayjs';

import ListContext from './context';
import DisplayList from './component/DisplayList';
import EditForm from './component/EditForm';

const AnnouncementPage = (props) => {
    const {announcements} = useContext(ListContext);
    const announcementInfo = announcements.list.find(el => el.id === Number(props.match.params.id));
    const [related, setRelated] = useState([]);
    const options = {
        includeScore: true,
        keys: ['title', 'descr']
    }
    const fuse = new Fuse(announcements.list, options);
    const fuseRelated = fuse.search(announcementInfo.descr)
    useEffect(() => {
        let tempRelated = [...fuseRelated];
        for(let i = 0; i < tempRelated.length; i++){
            if(tempRelated[i].score < 0.1){
                tempRelated.splice(i, 1);
            }
        }
        if(tempRelated.length > 3){
            tempRelated = tempRelated.slice(0, 3);
        }
        setRelated(tempRelated);// eslint-disable-next-line
    }, [])
    // console.log(announcementInfo)
    


    return (
        <div className="Announcement-page">
            <div className="container">
                <div className="announcement__info">
                    <div className="announcement__head">
                        <h2 className="announcement__title">{announcementInfo.title}</h2>
                        <span className="announcement__date">{dayjs(announcementInfo.date).format('dddd DD, MMMM YYYY')}</span>
                    </div>
                    <div className="announcement__contain">
                        <p>{announcementInfo.descr}</p>
                    </div>
                </div>
                <EditForm default={announcementInfo}/>
                <div className="related_search">
                    <h2 className="related">Related search</h2>
                    <DisplayList list={related}/>
                </div>
            </div>
        </div>
    )
}

export default AnnouncementPage;