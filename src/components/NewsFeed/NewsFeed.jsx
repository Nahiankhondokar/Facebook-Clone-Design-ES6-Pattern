import React, { Component } from 'react';
import { FaVideo } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { BsEmojiLaughing } from "react-icons/bs";
import { MdVideoCall } from "react-icons/md";
import PostModal from '../PostModal/PostModal';
import AllPostShow from '../AllPostShow/AllPostShow';
import './NewsFeed.scss';



class NewsFeed extends Component {
    constructor(props){
        super(props);

        this.state = {
            postModalShow : false
        }
    }
  render() {
    // state data
    const { postModalShow } = this.state;

    // modal show funciton 
    const handlePostModalShow = (e) => {
        e.preventDefault();

        this.setState((prev) => ({
            ...prev, postModalShow : true
        }));

    }

    // modal hide funciton 
    const handlePostModalHide = () => {

        this.setState((prev) => ({
            ...prev, postModalShow : false
        }));

    }

    return (
    <div className="fb-news-feed-area">
        <PostModal postModalShow={ postModalShow } handlePostModalHide={ handlePostModalHide } />
        
        <div className="fb-create-post-area shadow-sm">
           <div className="post-area-top-part">
                <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/274738893_3461289187430961_7168829541213425647_n.jpg?stp=c0.25.200.200a_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEztD_GheiTODg75pIq0cNlY3neVO8R6i9jed5U7xHqL9tOOL6zdG7EHczE5MyOPETNcrKB8aLHYUl6J4xxke-g&_nc_ohc=AoQfRwLNF-UAX-Y3t12&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_F8u0vh9AxAk1YWcrU9Brjl234w7S7oqYSs5xCTDI71w&oe=630361E0" alt="" />&nbsp; &nbsp;
                <div onClick={ handlePostModalShow } className="fb-post-create-btn">
                    <span>Whta's on your mind, Nahian ?</span>
                </div>
                
           </div>
           <div className="hr-line">
                <hr />
           </div>
           <div className="post-area-down-part">
                <a href="" className='post-area-icon-one'>
                    <div className="icon-one">
                        <FaVideo />
                    </div>
                    <span>Live Video</span>
                </a>
                <a href="" className='post-area-icon-two'>
                    <div className="icon-two">
                        <FaImages />
                    </div>
                    <span>Photo/video</span>
                </a>
                <a href="" className='post-area-icon-three'>
                    <div className="icon-three">
                        <BsEmojiLaughing />
                    </div>
                    <span>Feeling/Activity</span>
                </a>
           </div>
        </div>

        <div className="fb-create-room-area">
            <div className="room-icon">
                <div className="icon">
                    <MdVideoCall />
                </div>
                <a href="#">Create room</a>
            </div>
            <div className="fb-room-active-person-area">
                <div className="active-persons">
                    <img src="https://www.melamorsicata.it/wp-content/uploads/2017/05/Young-Steve-Jobs.jpg" alt="" />
                    <div className="active-status"></div>
                </div>
                <div className="active-persons">
                    <img src="https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3" alt="" />
                    <div className="active-status"></div>
                </div>
                <div className="active-persons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Bill_Gates_June_2015.jpg/800px-Bill_Gates_June_2015.jpg" alt="" />
                    <div className="active-status"></div>
                </div>
                <div className="active-persons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" />
                    <div className="active-status"></div>
                </div>
                <div className="active-persons">
                    <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/283175052_10222301451664954_7874233041930696211_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeE2RT0t2HP8L4hKGobzznK7yLvleOrjCObIu-V46uMI5u3wH-SGNaGS_GhmKVHqsiVd1ep7WS9fbLyzVVtawfOk&_nc_ohc=ICOcMep0s6kAX_fhs5b&_nc_ht=scontent.fdac138-1.fna&oh=00_AT8mgP5gy7HwSp92F2xpVyJfQ7V69X56VBMiB4ZtbJidTg&oe=6308C9B3" alt="" />
                    <div className="active-status"></div>
                </div>
                <div className="active-persons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg/220px-%D0%A2%D0%B8%D0%BC_%D0%9A%D1%83%D0%BA_%2802-09-2021%29.jpg" alt="" />
                    <div className="active-status"></div>
                </div>
            </div>
        </div>
        
        <div className="fb-create-news-area">
            <AllPostShow />
        </div>
    </div>
    )
  }
}

export default NewsFeed;
