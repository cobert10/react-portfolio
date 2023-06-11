import 'font-awesome/css/font-awesome.min.css';
import './Sidebar.css'
import profilepic from './images/Gilbert Co.jpg';


function Navbar() {
    return (    
    <>
            <div className='sidebar'>
                <img className='profile-photo' src={profilepic}></img>
                <h1 className='profile-name'>Gilbert Co</h1>
                <div className='profile-menu'>
                    <ul className='profile-menu-items'>
                        <li className='profile-menu-item' >
                            <a href='#home' className='menu-link'>Home</a>
                        </li>
                        <li className='profile-menu-item'>
                            <a href='#about-me' className='menu-link'>About Me</a>
                        </li>
                        <li className='profile-menu-item'>
                            <a href='#services' className='menu-link'>Services</a>
                        </li>
                        <li className='profile-menu-item'>
                            <a href='#resume' className='menu-link'>Resume</a>
                        </li>
                        <li className='profile-menu-item'>
                            <a href='#portfolio' className='menu-link'>Projects</a>
                        </li>
                        <li className='profile-menu-item'>
                            <a href='#contact' className='menu-link'>Contact</a>
                        </li>
                    </ul>
                </div>
                    <ul className='sidebar-footer-items'>
                        <li className='footer-item' >
                            <i class="fa fa-facebook"></i>
                        </li>
                        <li className='footer-item'>
                            <i class="fa fa-twitter"></i>
                        </li>
                        <li className='footer-item'>
                            <i class="fa fa-linkedin"></i>
                        </li>
                        <li className='footer-item'>
                            <i class="fa fa-github"></i>
                        </li>
                    </ul>
            </div>
    </>
  )
}

export default Navbar