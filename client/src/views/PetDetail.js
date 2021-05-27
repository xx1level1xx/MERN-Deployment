import React, {useState, useEffect} from 'react';
import DeleteButton from '../components/DeleteButton';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
const PetDetail = (props) => {

    const {id} = props;
    const [pet, setPet] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res) => {
            console.log("petDetail")
            console.log(res)
            setPet(res.data)
        })
        .catch((err) => console.log(err));
    }, [])
    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to="/">Back to home</Link>
            </div>
            <h2>Details about: {pet.name}</h2>
            <DeleteButton id={pet._id} name={pet.name} successCallback={()=>{window.location.href = '/';}}/>
            <div>
                <p>Pet Type: {pet.petType}</p>
                <p>Description: {pet.description}</p>
                <h3>Skills</h3>
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>
            </div>
        </div>
    )
}

export default PetDetail;