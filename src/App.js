import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEventPage from './page/addEventPage';
import EventListPage from './page/eventListPage';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
        <Router>
            <Routes>
                <Route path="/add-event" element={<AddEventPage/>} />
           
                <Route index path="*" exact element={<EventListPage/>} />
            </Routes>
        </Router>
        </>
    );
};

export default App;