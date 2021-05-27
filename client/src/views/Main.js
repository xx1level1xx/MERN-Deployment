import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios'
import '../styles/pet.module.css';

const Main = (props) => {

    const [pets, setPets] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then(
            (res) => {
                setPets(res.data)
                if(pets.length>0){
                    setLoaded(true);
                }
            }
        )
        .catch((err) => console.log(err));
    },[])

    return (
        <div>
            <div>
                <h1>Pet Shelter</h1>
                <Link to="/pets/new">add a pet to the shelter</Link>
            </div>
            <h1>These pets are looking for a good home</h1>
            <table>
                <tbody>
                    {loaded && "<tr>"}
                        {loaded && "<td>"}
                            <h3>
                                {loaded && "Name"}
                            </h3>
                        {loaded && "</td>"}
                        {loaded && "<td>"}
                            <h3>
                                {loaded && "Type"}
                            </h3>
                        {loaded && "</td>"}
                        {loaded && "<td>"}
                            <h3>
                                {loaded && "Actions"}
                            </h3>
                        {loaded && "</td>"}
                    {loaded && "</tr>"}
                    {pets.sort((pet2,index) => (pet2.petType.toLowerCase() > index.petType.toLowerCase()) ? 1 : -1).map((pet, idx) => {
                        return (
                            <tr>
                                <td>{pet.name}</td>
                                <td>{pet.petType}</td>
                                <td><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Main;