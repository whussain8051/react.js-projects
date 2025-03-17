// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Users() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3001')
//             .then(result => setUsers(result.data))
//             .catch(err => console.log(err))
//     }, [])

//     const handleDelete = (id) => {
//         axios.delete('http://localhost:3001/deleteUser/' + id)
//             .then(res => {
//                 window.location.reload()
//             }
//             ).catch(err => console.log(err)
//             )
//     }

//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-50 bg-white rounded p-3">
//                 <Link to="/create" className="btn btn-success mb-3">Add +</Link>
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Age</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={index}>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.age}</td>
//                                 <td>
//                                     <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>

//                                     <button onClick={(e) => handleDelete(user._id)} className="btn btn-danger">Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Users;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Users() {
//     const [users, setUsers] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:3001')
//             .then(result => setUsers(result.data))
//             .catch(err => console.log(err));
//     }, []);

//     const handleDelete = (id) => {
//         axios.delete('http://localhost:3001/deleteUser/' + id)
//             .then(() => window.location.reload())
//             .catch(err => console.log(err));
//     };

//     return (
//         <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//             <div className="w-75 bg-white rounded p-3">
//                 <Link to="/create" className="btn btn-success mb-3">Add +</Link>
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Image</th>
//                             <th>Name</th>
//                             <th>Email</th>
//                             <th>Age</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {users.map((user, index) => (
//                             <tr key={index}>
//                                 <td>
//                                     <img
//                                     src={`http://localhost:3001/uploads/${user.image}`}
//                                         alt="User"
//                                         width="80px"  // Set a fixed width
//                                         height="80px" // Set a fixed height
//                                         style={{
//                                             objectFit: "cover",  // Ensures the image covers the area properly
//                                             borderRadius: "10px", // Adds rounded corners
//                                             border: "2px solid #ddd", // Optional border styling
//                                         }}
//                                     />
//                                 </td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td>{user.age}</td>
//                                 <td>
//                                     <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
//                                     <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// }

// export default Users;



import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/' + id)
            .then(() => window.location.reload())
            .catch(err => console.log(err));
    };

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success mb-3">Add +</Link>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Images</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="d-flex flex-wrap">
                                        {user.images && user.images.map((image, imgIndex) => (
                                            <img
                                                key={imgIndex}
                                                src={`http://localhost:3001/uploads/${image}`}
                                                alt="User"
                                                width="80px"
                                                height="80px"
                                                className="m-1"
                                                style={{ objectFit: "cover", borderRadius: "10px", border: "2px solid #ddd" }}
                                            />
                                        ))}
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;

