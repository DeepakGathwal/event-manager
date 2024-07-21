import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdDelete, MdEditSquare ,MdOutlineSearch} from "react-icons/md";
import Modal from 'react-bootstrap/Modal'
import { FaSort } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import FormFiles from './formFiles';

const EventList = ({query}) => {
    const events = useSelector((state) => state.events.events);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [show, setShow] = useState(false)
   
    const dispatch = useDispatch();
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


  const handleClose = () => {
    setShow(false) 
    setEvent("")
   
  };

  const handleEdit = (el) => {
    if (el) {
      setEvent(el)
      return setShow(true)
    } else return alert("Module Not Selected")

  }

  const handleChange = (e) => {
      const { name, value } = e.target;
      setEvent({
          ...event,
          [name]: value
      });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
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
       dispatch({ type: 'UPDATE_EVENT', payload: event });
       setIsFormSubmitted(false);
       toast("Event Edit Successfully")
      setShow(false)
    } else {
      setIsFormSubmitted(true);
  }
  };

    const handleDelete = async (id) => {
      const value = window.confirm("Are you Sure want to delete");
      if (value) {
        dispatch({ type: 'DELETE_EVENT', payload: id });
             toast("Event Deleted Successfully")
      } else return false
    }
  
  
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const filds = [
      {name : "Id", label : "id"},
      {name : "Event Name", label : "name"},
      {name : "Event Type", label : "type"},
      {name : "Start Date", label : "startDate"},
      {name : "End Date", label : "endDate"},
      {name : "Description", label : "description"},
      {name : "Handled By", label : "handledBy"},
      {name : "Organisation", label : "organisation"},
      {name : "Sub-Events", label : "subEvents"},
      {name : "Action", label : ""},

    ]

  const sortedData = events.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
  
  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

    return (
      <>
      
       <div className='m-1 p-1'>
       
       <table className='table table-bordered'>
              <thead>
                <tr style={{cursor : "pointer"}}>
                {filds && filds.map((ab) => (
                  <th onClick={() => requestSort(ab.label)}>{ab.name} <FaSort /></th>

                ))}

              
                </tr>
              </thead>
              <tbody>
            
                {sortedData && sortedData.length > 0 ? sortedData.filter((obj) => {
                  if (query == "") return obj;
                  else if (
                    obj.name.toLowerCase().includes(query.toLowerCase()) ||
                    obj.type.toLowerCase().includes(query.toLowerCase())    
                  ) return obj;
                }).map((el, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{el.name}</td>
                    <td>{el.type}</td>
                    <td>{el.startDate}</td>
                    <td>{el.endDate}</td>
                    <td>{el.description}</td>
                    <td>{el.handledBy}</td>
                    <td>{el.organisation}</td>
                    <td>{el.subEvents}</td>
                     <td style={{ cursor: "pointer" }}>   <MdEditSquare onClick={(e) => handleEdit(el)} />
 /                     <MdDelete onClick={(e) => handleDelete(el.id)} />
                    </td>

                  </tr>
                )) : <h1>No Data</h1>}
              </tbody>
            </table>
       </div><ToastContainer/>
      


            <Modal show={show} onHide={handleClose}>

<Modal.Header closeButton>
  <Modal.Title>Edit Event</Modal.Title>
</Modal.Header>
<Modal.Body>
  

  
<FormFiles handleChange={handleChange} handleSubmit={handleSubmit} event={event} isFormSubmitted={isFormSubmitted}/>
 
</Modal.Body>
</Modal>

      </>
    );
};

export default EventList;
