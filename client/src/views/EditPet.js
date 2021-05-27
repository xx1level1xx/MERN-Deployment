import React, {useState, useEffect} from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
import PetForm from '../components/PetForm';
const EditPet = (props) => {

    const {id} = props;
    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
        .then((res) => {
            console.log("EditPet.js")
            console.log(JSON.stringify(res.data))
            setPet(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    })

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, data)
        .then(res => {
            console.log(res)
            if(res.data.errors){
                setErrors(res.data.errors)
            }else{
                navigate("/")
            }
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
            <h1>Edit {pet.name}</h1>
            
            {loaded &&
                <PetForm
                onSubmitHandler={onSubmitHandler}
                initialName={pet.name}
                initialPetType={pet.petType}
                initialDescription={pet.description}
                initialSkill1={pet.skill1}
                initialSkill2={pet.skill2}
                initialSkill3={pet.skill3}
                />
            }
            {errors.map((err, idx) => {
                return (
                <p key={idx} style={{ color: "red" }}>{err}</p>
                )
            })}
        </div>
    )
}
export default EditPet;