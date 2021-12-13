import '../../App.css';
import './WelcomePage.css';
import '../Login/LoginButton.css';
import './WelcomePageMediaQuery.css';
import '../Navigation/Navigation.css';
import {Carousel} from 'react-bootstrap';
import LoginButton from '../Login/LoginButton';
import WelcomeNav from '../Navigation/Navigation';
import Img_two from   '../../books_imgs/booksImages/books.png';
import Img_one from '../../books_imgs/booksImages/reading-human.jpg';
import Img_three from '../../books_imgs/booksImages/books-ontop.jpg';

function Welcome() {
  const buttonName = "Login";

  return (
  <div className="welcomePage-container"> 
    <Carousel fade controls={false}>  
      <Carousel.Item interval={7000}>  
       <WelcomeNav/>
        <img className="d-block w-100" src={Img_one} alt="First slide" />
        <Carousel.Caption>     
           <p className="description-text">
             Explore the world of books with Literacy~Hub.
           </p>           
           <h3>
            <LoginButton>{buttonName}</LoginButton>
           </h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={7000}> 
       <WelcomeNav/>
        <img className="d-block w-100"  src={Img_two}  alt="Second slide" />
          <Carousel.Caption>       
              <p className="description-text">
              Literacy~Hub allows you to sell books, rent books,
                lease books and publish your own blog.
              </p>            
              <h3>
                <LoginButton>{buttonName}</LoginButton>
              </h3>
          </Carousel.Caption>
       </Carousel.Item>
      
      <Carousel.Item interval={7000}>
       <WelcomeNav/>
        <img className="d-block w-100" src={Img_three} alt="Third slide"  />
          <Carousel.Caption>        
             <p className="description-text">
                Feed your mind and satisfy the thirst of knowledge with 
                content available on our Platform.
             </p>                           
             <h3>
                <LoginButton>{buttonName}</LoginButton>
             </h3>
          </Carousel.Caption>
      </Carousel.Item>
    </Carousel>            
  </div>
  );
}
export default Welcome;
