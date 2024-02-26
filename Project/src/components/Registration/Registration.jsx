// import { useState } from "react";
// import "./registration.css"; // Import the CSS file

// const Registration = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });
/* Ensure the .get-started component is above the background */
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form submitted:", formData);

//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     });
//   };

//   return (
//     <div className="container">
//       <h2 className="title">Registration</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label className="label" htmlFor="firstName">
//             First Name:
//           </label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={formData.firstName}
//             onChange={handleChange}
//             required
//             className="input"
//           />
//         </div>
//         <div className="form-group">
//           <label className="label" htmlFor="lastName">
//             Last Name:
//           </label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//             required
//             className="input"
//           />
//         </div>
//         <div className="form-group">
//           <label className="label" htmlFor="email">
//             Email:
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="input"
//           />
//         </div>
//         <div className="form-group">
//           <label className="label" htmlFor="password">
//             Password:
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="input"
//           />
//         </div>
//         <div className="form-group">
//           <label className="label" htmlFor="confirmPassword">
//             Confirm Password:
//           </label>
//           <input
//             type="password"
//             id="confirmPassword"
//             name="confirmPassword"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             required
//             className="input"
//           />
//         </div>
//         <button type="submit" className="button">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Registration;

// import React from 'react';
// import { useHistory } from 'react-router-dom';

// // eslint-disable-next-line react/prop-types
// const Registration = ({ onComplete }) => {
//   const history = useHistory();

//   const [formData, setFormData] = React.useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("Form submitted:", formData);

//     // Call the onComplete function passed from parent component
//     onComplete();

//     // Redirect the user to the main page
//     history.push('/');
//   };

//   return (
//     <div className="container">
//       <h2 className="title">Registration</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Your form inputs */}
//         <button type="submit" className="button">
//           Register
//         </button>
//       </form>
//       <button onClick={() => history.push('/')}>Back to Main Page</button>
//     </div>
//   );
// };

// export default Registration;
import React from "react";

// import { useNavigate } from "react-router-dom";
import "./registration.css";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Registration = ({ onComplete }) => {
  // const history = useHistory();
  // const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    // Call the onComplete function passed from parent component
    onComplete();

    // Redirect the user to the main page
    navigate("/FrontPage");
  };

  return (
    <div className="container">
      <h2 className="title">Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange} // Using handleChange for input change
            required
            className="input"
          />
        </div>
        <div className="form-group">
          {" "}
          <label className="label" htmlFor="lastName">
            {" "}
            Last Name:{" "}
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="input"
          />
        </div>

        <button type="submit" className="button">
          Register
        </button>
      </form>
      {/* <button onClick={() => navigate("/")}>Back to Main Page</button> */}
    </div>
  );
};

export default Registration;
