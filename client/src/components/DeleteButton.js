import React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const DeleteButton = (props) => {

    const {id, name, successCallback} = props;
    const onClickHandler = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/pets/${id}`)
        .then(res => {
            console.log(res)
            successCallback()
        })
        .catch(err => console.log(err));
    }
    return (
        <button onClick={onClickHandler}>
            Adopt {name}
        </button>
    )
}

export default DeleteButton;