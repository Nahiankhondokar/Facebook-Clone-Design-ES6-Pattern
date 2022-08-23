import React, { Component } from 'react';
import { CloseButton, Modal } from 'react-bootstrap';
import { FaImages } from "react-icons/fa";
import { BsTagsFill, BsEmojiSmile } from "react-icons/bs";
import { BsEmojiLaughing, BsFillFlagFill } from "react-icons/bs";
import { RiMoreFill } from "react-icons/ri";
import { MdLocationOn } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { AiOutlineCaretDown } from "react-icons/ai";
import './PostModal.scss';

class PostModal extends Component {


  render() {

    // props
    const { postModalShow, handlePostModalHide } = this.props;

    return (
      <>
        {/* Create Account Modal */}
        <Modal show={ postModalShow } onHide={ handlePostModalHide } centered >
          <Modal.Header>
            <div className='post-modal-header'>
              <h5 className="post-modal-title">Create Post</h5> 
            </div>
            <CloseButton onClick={ handlePostModalHide }></CloseButton>
          </Modal.Header>
    
          <Modal.Body>
            <div className="post-body-area">

              <div className="post-creator-info">
                <img src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/274738893_3461289187430961_7168829541213425647_n.jpg?stp=c0.25.200.200a_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEztD_GheiTODg75pIq0cNlY3neVO8R6i9jed5U7xHqL9tOOL6zdG7EHczE5MyOPETNcrKB8aLHYUl6J4xxke-g&_nc_ohc=AoQfRwLNF-UAX-Y3t12&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_F8u0vh9AxAk1YWcrU9Brjl234w7S7oqYSs5xCTDI71w&oe=630361E0" alt="" className="user-photo" />
                <div className="post-security-title">
                  <a href='#' className="user-name"> Nahian Khondokar </a>
                  <div className="post-type">
                    <a href='#' className="post-type-name"><IoIosSettings /> Custom  <AiOutlineCaretDown /></a>
                  </div>
                </div>
              </div>
 
              <div className="post-form-area">
                <form action="" className='fb-post-form'>

                  <textarea name="" cols="5" rows="3" className="input-textarea" placeholder="What's on your mind, Nahian ?">
                  </textarea>

                  <div className="text-area-icons">
                    <a href=""><img src="https://www.facebook.com/images/composer/SATP_Aa_square-2x.png" alt="" /></a>
                    <div className="icon">
                      <BsEmojiSmile />
                    </div>
                  </div>

                  <div className="post-features">
                    <div className="post-feature-title">Add to your post</div>
                    <div className="post-features-icons">
                      <a href="#" className="icon-one"><FaImages /></a>
                      <a href="#" className="icon-two"><BsTagsFill /></a>
                      <a href="#" className="icon-three"><BsEmojiLaughing /></a>
                      <a href="#" className="icon-four"><MdLocationOn /></a>
                      <a href="#" className="icon-five"><BsFillFlagFill /></a>
                      <a href="#" className="icon-six"><RiMoreFill /></a>
                    </div>
                  </div>


                  <div className="fb-post-form-sbmt-btn">
                    <input type="submit" className='post-sbmt-btn' value="Post" />
                  </div>
                </form>
              </div>
            </div>
            
          </Modal.Body>
        </Modal>
      </>
    )
  }
}


export default PostModal;