import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)
    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    Swal.fire('succesfully deleted')
                }
                const newUsers = users.filter(user => user._id !== _id)
                setUsers(newUsers)
            })
    }
    return (
        <div>
            <h2>loadedUsers:{loadedUsers.length}</h2>
            {
                users?.map(user =>
                    <div className=" mt-4 pl-8" key={user._id}>

                        <li>
                            <p> Email: {user.email}</p>
                            <p>Creation: {user.createAt}</p>
                            <p>lastLogin:{user.lastLogin}</p>
                            <button
                                onClick={() => handleDelete(user._id)}
                                className="btn bg-red-700">X</button>
                               
                        </li>

                    </div>
                )
            }
        </div>
    );
};

export default Users;