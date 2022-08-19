import React from 'react';
import { BsFacebook } from "react-icons/bs";  
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";  
import { FiMonitor } from "react-icons/fi";  
import { BiHome } from "react-icons/bi";  
import { SiFacebookgaming } from "react-icons/si";  
import { CgMenuGridO } from "react-icons/cg";  
import { FaFacebookMessenger } from "react-icons/fa";  
import { MdNotifications, MdAccountCircle } from "react-icons/md";  
import './TopBar.scss';

const TopBar = () => {
  return (
    <div className='fb-topbar-container shadow-sm'>
        <div className="fb-topbar-wrapper">
            <div className="fb-topbar-left">
                <div className="fb-topbar-logo">
                    <BsFacebook />
                </div>
                <div className="fb-search-area">
                    <form action="" className='fb-search-form-area'>
                        <AiOutlineSearch />
                        <input type="text" placeholder='Search Facebook'/>
                    </form>
                </div>
            </div>
            <div className="fb-topbar-middle">
                <div className="icons" title='Home'><AiFillHome /></div>
                <div className="icons" title='Watch'><FiMonitor /></div>
                <div className="icons" title='Marketplace'><BiHome /></div>
                <div className="icons" title='Gaming'><SiFacebookgaming /></div>
                
                
                
                
            </div>
            <div className="fb-topbat-right">
                <div className="icons">
                    <CgMenuGridO />
                </div>
                <div className="icons">
                    <FaFacebookMessenger />
                </div>
                <div className="icons">
                    <MdNotifications />
                </div>
                <div className="icons">
                    {/* <MdAccountCircle /> */}
                    <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/274738893_3461289187430961_7168829541213425647_n.jpg?stp=c0.5.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEztD_GheiTODg75pIq0cNlY3neVO8R6i9jed5U7xHqL9tOOL6zdG7EHczE5MyOPETNcrKB8aLHYUl6J4xxke-g&_nc_ohc=uXzh4BzkJ0UAX_-X5Zt&_nc_ht=scontent.fdac138-1.fna&oh=00_AT9hdYU7EYQy9Z38LS10R332CV4YMEg4WGQkrTd264t_9Q&oe=630361E0" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar;