import React, { useContext, useEffect, useState } from 'react';
import { userContext } from "../../App";

const Bookings = () => {
    const [bookings , setBookings] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    useEffect(()=>{
        fetch('http://localhost:5000/bookings?email = '+loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <h3>You have {bookings.length}</h3>
            {
                bookings.map(book => <li> Name:{book.name} From : {(new Date(book.checkIn).toDateString('dd/mm/yyyy'))}  To : {(new Date(book.checkOut).toDateString('dd/mm/yyyy'))}</li>)
            }
        </div>
    );
};

export default Bookings;