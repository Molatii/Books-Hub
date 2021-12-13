import './ButtonAtFooter.css';

function ButtonAtFooter(props:any) {

    return (
      <div>
            <button className="footer_Button">{props.children}</button>          
      </div>
    ); 
  }
  export default ButtonAtFooter;