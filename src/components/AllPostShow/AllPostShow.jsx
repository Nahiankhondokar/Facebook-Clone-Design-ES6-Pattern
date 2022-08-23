import React, { Component } from 'react';
import { GiWorld } from "react-icons/gi";
import { RiMoreFill } from "react-icons/ri";
import { BsEmojiLaughingFill, BsEmojiAngryFill, BsEmojiFrownFill } from "react-icons/bs";
import './AllPostShow.scss';

class AllPostShow extends Component {
  render() {
    return (
      <div className='fb-all-post-area'>
        <div className="post-top-part">
           <div className="post-img-title">
                <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/283175052_10222301451664954_7874233041930696211_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeE2RT0t2HP8L4hKGobzznK7yLvleOrjCObIu-V46uMI5u3wH-SGNaGS_GhmKVHqsiVd1ep7WS9fbLyzVVtawfOk&_nc_ohc=ICOcMep0s6kAX_fhs5b&_nc_ht=scontent.fdac138-1.fna&oh=00_AT8mgP5gy7HwSp92F2xpVyJfQ7V69X56VBMiB4ZtbJidTg&oe=6308C9B3" alt="" />
                <div className="post-title">
                    <a href="#" className="user-name">Ashraful Haque</a>
                    <div className="time-icon">
                        <div className="post-time">6d</div>
                        <div className="post-type-icon" title='Public'><GiWorld /></div>
                    </div>
                </div>
           </div>
            <a href='#' className="post-more-option-btn" >
                <RiMoreFill />
            </a>
        </div>
        <div className="post-caption">Your Assignments are here...</div>
        <hr />
        <div className="fb-post-feature-img-area">
            <img src="http://www.ealingu3a.org.uk/wp-content/uploads/2014/03/Assignment-Help.png" alt="" />
        </div>


      </div>
    )
  }
}

export default AllPostShow;