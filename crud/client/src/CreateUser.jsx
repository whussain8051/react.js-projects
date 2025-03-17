// import React, { useState } from "react";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";

// function CreateUser() {
//     const [image, setImage] = useState(null)
//     const [name, setName] = useState()
//     const [age, setAge] = useState()
//     const [email, setEmail] = useState()

//     const navigate = useNavigate()

//     const Submit = (e) => {
//         e.preventDefault();
//         axios.post('http://localhost:3001/createUser', { name, email, age })
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
//                 <form onSubmit={Submit}>
//                     <h2>Add User</h2>
//                     <div className="mb-2">
//                         <label htmlFor="image">Upload Image</label>
//                         <input
//                             type="file"
//                             accept="image/*"
//                             className="form-control"
//                             onChange={(e) => setImage(e.target.files[0])}
//                         />
//                     </div>


//                     <div className="mb-2">
//                         <label htmlFor="">Name</label>
//                         <input type="text" placeholder="Enter Name" className="form-control"
//                             onChange={(e) => setName(e.target.value)} />
//                     </div>

//                     <div className="mb-2">
//                         <label htmlFor="">Email</label>
//                         <input type="email" placeholder="Enter Email" className="form-control"
//                             onChange={(e) => setEmail(e.target.value)} />
//                     </div>

//                     <div className="mb-2">
//                         <label htmlFor="">Age</label>
//                         <input type="text" placeholder="Enter Age" className="form-control"
//                             onChange={(e) => setAge(e.target.value)} />
//                     </div>

//                     <button className="btn btn-success">Submit</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default CreateUser;


// ChatGPT Code

// import React, { useState } from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// function CreateUser() {
//     const [name, setName] = useState("");
//     const [age, setAge] = useState("");
//     const [email, setEmail] = useState("");
//     const [image, setImage] = useState();

//     const navigate = useNavigate();

//     const Submit = (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append("name", name);
//         formData.append("email", email);
//         formData.append("age", age);
//         formData.append("image", image); // Append image file

//         axios.post("http://localhost:3001/createUser", formData, {
//             headers: { "Content-Type": "multipart/form-data" },
//         })
//             .then(result => {
//                 console.log(result);
//                 navigate('/');
//             })
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <form onSubmit={Submit}>
//                     <h2>Add User</h2>

//                     <div className="mb-2">
//                         <label htmlFor="image">Upload Image</label>
//                         <input
//                             type="file"
//                             accept="image/*"
//                             className="form-control"
//                             onChange={(e) => setImage(e.target.files[0])}
//                             required
//                         />
//                     </div>

//                     <div className="mb-2">
//                         <label htmlFor="name">Name</label>
//                         <input type="text" placeholder="Enter Name" className="form-control"
//                             onChange={(e) => setName(e.target.value)} required />
//                     </div>

//                     <div className="mb-2">
//                         <label htmlFor="email">Email</label>
//                         <input type="email" placeholder="Enter Email" className="form-control"
//                             onChange={(e) => setEmail(e.target.value)} required />
//                     </div>

//                     <div className="mb-2">
//                         <label htmlFor="age">Age</label>
//                         <input type="text" placeholder="Enter Age" className="form-control"
//                             onChange={(e) => setAge(e.target.value)} required />
//                     </div>

//                     <button className="btn btn-success">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default CreateUser;




import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreateUser() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [images, setImages] = useState([]);

    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setImages(files);
    };

    const Submit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("age", age);

        images.forEach((image, index) => {
            formData.append("images", image);
        });

        axios.post("http://localhost:3001/createUser", formData, {
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
                <form onSubmit={Submit}>
                    <h2>Add User</h2>

                    <div className="mb-2">
                        <label htmlFor="images">Upload Images</label>
                        <input
                            type="file"
                            accept="image/*"
                            className="form-control"
                            multiple
                            onChange={handleImageChange}
                            required
                        />
                    </div>
                    
                    <div className="mb-2">
                        <label>Selected Images:</label>
                        <div className="d-flex flex-wrap">
                            {images.map((image, index) => (
                                <img
                                    key={index}
                                    src={URL.createObjectURL(image)}
                                    alt="Selected"
                                    width="80"
                                    height="80"
                                    className="m-1"
                                    style={{ objectFit: "cover", borderRadius: "10px", border: "2px solid #ddd" }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="mb-2">
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                            onChange={(e) => setName(e.target.value)} required />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter Email" className="form-control"
                            onChange={(e) => setEmail(e.target.value)} required />
                    </div>

                    <div className="mb-2">
                        <label htmlFor="age">Age</label>
                        <input type="text" placeholder="Enter Age" className="form-control"
                            onChange={(e) => setAge(e.target.value)} required />
                    </div>

                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default CreateUser;
