import React , {useState} from 'react'
import { Button , Nav , Form , FormControl} from 'react-bootstrap';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
import { SideBar} from './SideBar';
import './SideBar.css';
import { IconContext } from 'react-icons';


function Border () {
const [sidebar , setSidebar] = useState ( false)  
const ShowSidebar  = () => setSidebar (!sidebar) 
  return (
    <IconContext.Provider value={{ color: '#fff' }}>
    <div>

  <div className='NavBar'>
    <Nav className="mr-auto">
      <Link to='#' className='menu-bars'>
        
      <FaIcons.FaBars onClick={ShowSidebar}/>
     </Link>
    </Nav>

    
    <div className='search'>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
             
    </Form>
    <div className='log'>
          <Button variant="outline-info">log out</Button>
         </div> 
</div>
</div>
</div>
<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
  <ul className='nav-menu-items' onClick={ShowSidebar}>
    <li className="navbar-toggel">
      <Link to="#" className='menu-bars'>
        <AiIcons.AiOutlineClose/> 
      </Link>
    </li>
  
    {SideBar.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
             );
            })}
  </ul>
  </nav> 
   
       </IconContext.Provider>

  )
}

export default Border;
