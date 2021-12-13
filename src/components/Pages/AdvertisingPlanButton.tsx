import './AdvertisingPlanButton.css';

function AdvertisingPlanButton(props:any) {
  
    return (
      <div>
            <button className="ViewPlanButton">{props.children}</button>          
      </div>
    ); 
  }
  export default AdvertisingPlanButton;