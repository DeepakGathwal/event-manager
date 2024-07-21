import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import './EventForm.css'
import FormFiles from '../component/formFiles';

const AddEventPage = () => {
    const dispatch = useDispatch();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [event, setEvent] = useState({
        id: '',
        name: '',
        type: '',
        startDate: '',
        endDate: '',
        description: '',
        handledBy: '',
        organisation: '',
        subEvents: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent({
            ...event,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            event.name !== "" &&
            event.type !== "" &&
            event.startDate !== "" &&
            event.endDate !== "" &&
            event.description !== "" &&
            event.handledBy !== ""  &&
            event.subEvents !== ""  &&
            event.organisation !== "" 
          ) {
      
        dispatch({ type: 'ADD_EVENT', payload: { ...event, id: uuidv4() } });
        setEvent({
            id: '',
            name: '',
            type: '',
            startDate: '',
            endDate: '',
            description: '',
            handledBy: '',
            organisation: '',
            subEvents: ''
        });
        setIsFormSubmitted(false);
        toast("Event Added Successfully")
        return 
     } else {
            setIsFormSubmitted(true);
        }
    };
    const navigate = useNavigate();
    return (
        <div className='container'>
             <div className='row m-2'>
            <h1 className='col-6'>Add Event</h1>

            <button className="col-6 styled-link border-0" onClick={() => navigate('/')}>View Events</button>
             </div>
             <FormFiles handleChange={handleChange} handleSubmit={handleSubmit} event={event} isFormSubmitted={isFormSubmitted}/>
       
       <ToastContainer/>
          
         
        </div>
    );
};

export default AddEventPage;
