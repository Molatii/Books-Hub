import './LoginButton.css'
import {useNavigate} from "react-router-dom";

function LoginButton(props:any) {
  let navigate = useNavigate();

  function log_user(){
      navigate('/SignIn');
  }

    return (
      <div>
            <button className="login_Button" onClick={log_user}>{props.children}</button>          
      </div>
    ); 
  }
  export default LoginButton;
  