import "./Intro.css";
// import{Navigate} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Intro = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/login");
    };
    const handleRegister = () => {
      navigate("/register");
    };
  return (
    <div className="desktop-4" id="home">
      <main className="banner">
        <img className="liquid-bg-icon" alt="" src="/liquid-bg.svg" />
        <img className="vector-icon" alt="" src="/vector@2x.png" />
        <div className="text">
          <h3 className="sed-imperdiet-enim">Bringing you closer to people</h3>
          <div className="nam-sollicitud-nunc">
            Chat with your close friends and family with ease
          </div>
        </div>
      </main>
      <div className="option">
        <button className="login" onClick={handleLogin}>Login</button>
        <button className="buttonflatprimary">
          <div className="rectangle" />
          <div className="see-detail" onClick={handleRegister}>Register</div>
        </button>
        <img className="line-icon" alt="" src="/line.svg" />
        {/* <button className="android-settings">
          <img className="shape-icon" alt="" src="/shape.svg" />
        </button> */}
      </div>
    </div>
  );
};

export default Intro;
