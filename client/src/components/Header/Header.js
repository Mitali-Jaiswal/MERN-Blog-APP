import{Nav, Navbar} from 'react-bootstrap';
import{BrowserRouter,Link, Route} from 'react-router-dom';
import FoodComponent from '../Food/FoodComponent';
import HeaderStyle from './HeaderStyle.css';
import PostPageComponent from './../PostPageWeb1/PostPageComponent';

const Header=()=>{
    return(
        <div className="Header">
            <h3 className="Main-logo">Siren</h3>
        <Navbar  expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto navFlex">
               
               
                <Link to="/Home" className="nav" >Home</Link>
                <Link to="/food" className="nav">Food</Link>
                <Link to="/Technology" className="nav">Technology</Link>
                <Link to="/Hollywood" className="nav">Hollywood</Link>
                <Link to="/Fitness" className="nav">Fitness</Link>
                <Link to="/Bollywood" className="nav">Bollywood</Link>
                
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            <hr />
        
        </div>

    )
}
export default Header;