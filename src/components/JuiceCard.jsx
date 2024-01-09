/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const JuiceCard = ({ juice }) => {
    const {_id, name, quantity, supplier, taste, category, image, details } = juice
    console.log(juice);
    
    
    const handleDelete=_id=>{
            fetch(`http://localhost:5000/juice/${_id}`,{
                method:"DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "successfully deleted",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        }
        
    return (

        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={image} alt="Movie" /></figure>
            <div className=" flex gap-8 w-full">
                <div>
                    <h1 className="mt-6 mb-6">Name:{name}</h1>
                    <p>taste:{taste}</p>
                    <p className="mt-6 mb-6">Category:{category}</p>

                </div>
                <div>
                    <div className="join join-vertical">
                        <button className="btn join-item  mt-6 mb-6">View</button>
                      <Link to={`updateJuice/${_id}`}>
                      <button className="btn join-item mt-6 mb-6">Edit</button>
                      </Link>
                        <button
                        onClick={()=>handleDelete(_id)}
                        className="btn join-item bg-red-600  mt-6 mb-6">X</button>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default JuiceCard;