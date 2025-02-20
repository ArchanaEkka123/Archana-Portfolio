
import { Link } from 'react-router-dom';
import './navbar.scss'; // Optional for styling

const Navbar = () => {
  return (
   
<div className="nav">
                <nav className="navbar">
               
              <img
                class="nav_icon"
                src="/images/A_logo.svg"
                alt="Description of the image"
                width={90}
                height={90}
              />
                 <ul className='nav_ul'>
                
                  <li><Link to="/"  className='nav_content' >Home</Link>

                  </li>
                  <li><Link to="/about" className='nav_content'>About</Link>

                  </li>
                  <li>
                  <Link to="/services" className='nav_content'>Services</Link>

                  </li>
                  <li><Link to="/contact" className='nav_content'> Contact</Link>
                   
                  </li>
                  <li><Link to="/ImageSlider" className='nav_content'> Gallery</Link>
                   
                  </li>
                </ul>
              </nav>
              
              </div> 

  );
};

export default Navbar;
