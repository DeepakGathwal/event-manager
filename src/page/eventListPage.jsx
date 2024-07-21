import React, { useState } from 'react';
import { MdDelete, MdEditSquare ,MdOutlineSearch} from "react-icons/md";
import EventList from '../component/eventList';
import { useNavigate } from 'react-router-dom';

const EventListPage = () => {
    const [query, setQuery] = useState("");
    
    const navigate = useNavigate();
    return (
        <div className='container'>
            <div className='row'>
            <h1 className='col-6'>Events</h1>
            <div className="col-6 d-md-block d-lg-flex justify-content-between">
              <div className="search-input m-3">
              <div className="search-box">
                <input type="search"  placeholder="Search..." onChange={event => setQuery(event.target.value)} />
                <MdOutlineSearch />
              </div>
              <span className='' style={{color : 'red'}}>Search added on Event-Name* and Event-Type* Fileds</span>
            </div>
            </div>
            
         </div>
            <EventList query={query}/>
            
             <button className="styled-link" onClick={() => navigate('/add-event')}>Add New Event</button>
        </div>
    );
};

export default EventListPage;
