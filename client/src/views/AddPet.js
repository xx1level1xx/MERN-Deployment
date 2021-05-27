import React, {useState} from 'react';
import { Link, navigate } from '@reach/router';
import Axios from 'axios';
import PetForm from '../components/PetForm';

const AddPet = (props) => {

    const [errors, setErrors] = useState([]);
    const [pets, setPets] = useState([]);
    const onSubmitHandler = (e, data) => {
        console.log("AddPet.js")
        console.log(JSON.stringify(data))
        
        
        e.preventDefault();
        Axios.post(`http://localhost:8000/api/pets/`, data)
        .then(res => {
            console.log("response")
            console.log(res)
            navigate('/')
        })
        .catch(err => {
            console.log(err);
            const errorResponse = err.response.data.errors;
            console.log("error response")
            console.log(errorResponse);
            const errorArr = [];
                
            for(const key of Object.keys(errorResponse)){
                console.log(errorResponse[key]);
                errorArr.push(errorResponse[key].properties.message);
            }
            console.log(errorArr);
            setErrors(errorArr);
        });
    }
    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to="/">Back to home</Link>
            </div>
            <h1>Know a pet needing a home?</h1>
            <PetForm
            onSubmitHandler={onSubmitHandler}
            initialName=""
            initialPetType=""
            initialDescription=""
            initialSkill1=""
            initialSkill2=""
            initialSkill3=""
            />
            {errors.map((err, idx) => {
                return (
                <p key={idx} style={{ color: "red" }}>{err}</p>
                )
            })}
        </div>
    )
}
export default AddPet;
