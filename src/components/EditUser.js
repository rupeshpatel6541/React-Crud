import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function ListUser() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getUser();
    }, []);

    function getUser() {
        axios.get(`http://localhost/api/users/${id}`).then(function(response) {
            console.log(response.data);
            setInputs(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost/api/users/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <h2>Edit user</h2>
            <form onSubmit={handleSubmit} style={{marginLeft:"35%"}}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input value={inputs.name} type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td> 
                                <input value={inputs.email} type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                           <th>
                                <label>Age: </label>
                            </th>
                            <td> 
                                <input value={inputs.age} type="text" name="age" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Number: </label>
                            </th>
                            <td>
                                <input value={inputs.number} type="text" name="number" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                <label>Address: </label>
                            </th>
                            <td>
                                <input value={inputs.address} type="text" name="address" onChange={handleChange} />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </form>
        </div>
    )
}