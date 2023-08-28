import "./navbar.css";
import { Link ,useNavigate} from "react-router-dom";

const Navbar = () => {
  // const { dispatch } = useContext(AuthContext);
  // const navigate = useNavigate()

  // const handleLogout = () => {
  //   // Clear localStorage
  //   localStorage.clear();
    
  //   // Dispatch the "LOGOUT" action
  //   dispatch({ type: 'LOGOUT' });
  //   navigate("/")

  //   // Redirect to the login page or perform other actions
  // };

  return (


    <>
    <div className="navbar">
      <div className="navContainer">
        <Link to="/home" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
       

        </Link>
        
          <div className="navItems">
          
            <div className="navItems">
              <p>INR</p>
          <img src='https://flagsweb.com/Flag_Emoji/India_Flag_Emoji.png'/>  
            </div>
          
             
        
         
          </div>
       
      </div>
      
    </div>
    <div class="header-navbar-divider"></div>
    </>
  );
};

export default Navbar;
