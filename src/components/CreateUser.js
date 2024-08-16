import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function ListUser(){

    const Navigate = useNavigate();

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();

        axios.post(' http://localhost/api/user/save', inputs).then(function(response){
            console.log(response.data);
            Navigate('/');
        });
       
    }


    return (

         <div>

        <h2>Create Users</h2>

        <form onSubmit = {handleSubmit} style={{marginLeft:"35%"}}>

            <table cellSpacing="10">
                <tbody>
                    <tr>
                        <th>
                        <label> Name:</label>
                        </th>

                        <td>
                        <input type="text" name="name" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label> Email:</label>
                        </th>

                        <td>
                        <input type="text" name="email" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label> Age:</label>
                        </th>

                        <td>
                        <input type="number" name="age" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label> Number:</label>
                        </th>

                        <td>
                        <input type="number" name="number" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <th>
                        <label> Address:</label>
                        </th>

                        <td>
                        <input type="text" name="address" onChange={handleChange} />
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2" align="right"> 
                            <button>Save</button>
                        </td>
                    </tr>

                </tbody>
            </table>
           

        </form>
        </div>
    )
}