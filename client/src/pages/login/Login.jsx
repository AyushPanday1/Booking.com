import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = () => {
  // const [credentials, setCredentials] = useState({
  //   email: undefined,
  //   password: undefined,
  // });

  // // const { loading, error, dispatch } = useContext(AuthContext);

  // const navigate = useNavigate()

  // const handleChange = (e) => {
  //   setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  // };

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //  // dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("/auth/login", credentials);
  //     console.log(res.data)
  //    // dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
  //     navigate("/")
  //   } catch (err) {
  //     //dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //   }
  // };

  const [formData, setFormData] = useState({
    username: '',
    Password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('https://ser-cytv.onrender.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        alert("Logged In succesfully")
        window.location.replace("/home")
      })
      .then((data) => {
        // Handle the successful login response here
        console.log(data);
      })
      .catch((error) => {
        // Handle error if the login API call fails
        setError('Invalid email or password. Please try again.');
        console.error('Error:', error);
      });
  };


  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="email"
          id="email"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button  onClick={handleClick} className="lButton">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
