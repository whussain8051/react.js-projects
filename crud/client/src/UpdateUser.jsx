// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";


// function UpdateUser() {
//     const { id } = useParams()
//     const [name, setName] = useState()
//     const [age, setAge] = useState()
//     const [email, setEmail] = useState()
//     const navigate = useNavigate()

//     useEffect(() => {
//         axios.get('http://localhost:3001/getUser/' + id)
//             .then(result => {
//                 setName(result.data.name)
//                 setEmail(result.data.email)
//                 setAge(result.data.age)
//             }
//             )
//             .catch(err => console.log(err))
//     }, [])

//     const Update = (e) => {
//         e.preventDefault();
//         axios.put('http://localhost:3001/updateUser/' + id, { name, email, age })
//             .then(result => {
//                 console.log(result);
//                 navigate('/')
//             })
//             .catch(err => console.log(err)

//             )
//     }
//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <form onSubmit={Update}>
//                     <h2>Update User</h2>
//                     <div className="mb-2">
//                         <label htmlFor="">Name</label>
//                         <input type="text" placeholder="Enter Name" className="form-control"
//                             value={name} onChange={(e) => setName(e.target.value)} />
//                     </div>

//                     <div className="mb-2">
//                         <label htmlFor="">Email</label>
//                         <input type="email" placeholder="Enter Email" className="form-control"
//                             value={email} onChange={(e) => setEmail(e.target.value)} />
//                     </div>

//                     <div className="mb-2">
//                         <label htmlFor="">Age</label>
//                         <input type="text" placeholder="Enter Age" className="form-control"
//                             value={age} onChange={(e) => setAge(e.target.value)} />
//                     </div>

//                     <button className="btn btn-success">Update</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default UpdateUser;



import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/' + id)
            .then(result => {
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
            })
            .catch(err => console.log(err));
    }, [id]);

    const Update = (e) => {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("age", age);
        if (image) formData.append("image", image); // Only append image if updated
        

        axios.put('http://localhost:3001/updateUser/' + id, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(result => {
            console.log(result);
            navigate('/');
        })
        .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>

                    <div className="mb-2">
                        <label htmlFor="image">Change Image</label>
                        <input 
                            type="file" 
                            accept="image/*" 
                            className="form-control" 
                            onChange={(e) => setImage(e.target.files[0])} 
                        />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control"
                            value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control"
                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="age">Age</label>
                        <input type="text" className="form-control"
                            value={age} onChange={(e) => setAge(e.target.value)} required />
                    </div>

                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateUser;
