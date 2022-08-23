import React from 'react';
import TopBar from '../../components/TopBar/TopBar';
import { BiChevronDown } from "react-icons/bi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import './Home.scss';
import NewsFeed from '../../components/NewsFeed/NewsFeed';

const Home = () => {
  return (
    <>
    <TopBar />
      <div className="fb-home-container">
        <div className="fb-home-wrapper">
          <div className="fb-home-left">
            <div className='fb-account'>
              <img className='fb-acc-img' src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/274738893_3461289187430961_7168829541213425647_n.jpg?stp=c0.5.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEztD_GheiTODg75pIq0cNlY3neVO8R6i9jed5U7xHqL9tOOL6zdG7EHczE5MyOPETNcrKB8aLHYUl6J4xxke-g&_nc_ohc=uXzh4BzkJ0UAX_-X5Zt&_nc_ht=scontent.fdac138-1.fna&oh=00_AT9hdYU7EYQy9Z38LS10R332CV4YMEg4WGQkrTd264t_9Q&oe=630361E0" alt="" /> 
              <span className='fb-acc-user-name'>Nahian&nbsp;Khondokar</span>
            </div>

            <div className="fb-left-side-icons">
              <ul>
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png?_nc_eui2=AeGjVnqxtdxlDGc8z1x-ZFGpqfpKmA4GtxSp-kqYDga3FO_3RF86S2EtSVV6Y1AzBqHS4TqZLV766W4iM7Fp6v7K" alt="" /> <span className='fb-left-side-text'>Friends</span> </li>
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png?_nc_eui2=AeF4XwHvaL4P8uWOv2fU2ZXxZ3xAUM5_bWpnfEBQzn9tankRf-IaYV5RP3yjhmBt3iB9s1zI5Ls9mgW3mWAOMBfZ" alt="" /> <span>Groups</span></li>
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeFU7z7cc-Lj9YqzLVKnErqh-vsl1K9A-9v6-yXUr0D72-v4_PXNFcGFhJQHLehe7rO3nwSX4NczRr-stpN7FMEA" alt="" /> <span>Marketplace</span></li>
                <li><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png?_nc_eui2=AeFFwD_2NYw-OXSwiczx56zUa4YXxTz5jX9rhhfFPPmNf93b4TGJa9dfbCaC1-L0mf3eKD4woht4XDdQ6U3VELjN" alt="" /> <span>Memories</span></li>
                <li>
                  <div className="fb-left-drop-down">
                    <div className="down-icon">
                      <BiChevronDown /> 
                    </div>
                    <span>See more</span>
                  </div>
                </li>
              </ul>
            </div>
            <hr />
          </div>
          <div className="fb-home-middle">
            <div className="fb-store-area">

              {/* user story area */}
              <div className="fb-store-items">
                <div className="store-image-area">
                  <img className='store-image' src="https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-1/274738893_3461289187430961_7168829541213425647_n.jpg?stp=c0.25.200.200a_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEztD_GheiTODg75pIq0cNlY3neVO8R6i9jed5U7xHqL9tOOL6zdG7EHczE5MyOPETNcrKB8aLHYUl6J4xxke-g&_nc_ohc=AoQfRwLNF-UAX-Y3t12&_nc_ht=scontent.fdac138-1.fna&oh=00_AT_F8u0vh9AxAk1YWcrU9Brjl234w7S7oqYSs5xCTDI71w&oe=630361E0" alt="" />
                </div>
                <div className="user-name">
                  <div className="store-icon">
                    <BsFillPlusCircleFill />
                  </div>
                  <p>Create story</p>
                </div>
              </div>

                {/* friends story area */}
              <div className="friend-store-items">
                <div className="friend-store-image-area">
                  <img className='friend-store-image' src="https://i.pinimg.com/736x/c8/a1/e7/c8a1e746d61c77db8ce00152dbb18158.jpg" alt="" />
                </div>
                <div className="friend-profile-image">
                  <img src="https://www.melamorsicata.it/wp-content/uploads/2017/05/Young-Steve-Jobs.jpg" alt="" />
                </div>
                <div className="friend-name">
                  <p>Steve Jobs</p>
                </div>
              </div>

              <div className="friend-store-items">
                <div className="friend-store-image-area">
                  <img className='friend-store-image' src="https://yqmedia.mogiio.com/post/720/0/0/29/696/MpZY9029.webp" alt="" />
                </div>
                <div className="friend-profile-image">
                  <img src="https://assets.entrepreneur.com/content/3x2/2000/20150224165308-jeff-bezos-amazon.jpeg?crop=4:3" alt="" />
                </div>
                <div className="friend-name">
                  <p>Jeff Bezos</p>
                </div>
              </div>


              <div className="friend-store-items">
                <div className="friend-store-image-area">
                  <img className='friend-store-image' src="https://www.askideas.com/wp-content/uploads/2020/05/the-more-the-plans-fail-the-more-the-planners-plan.-ronald-reagan.jpg" alt="" />
                </div>
                <div className="friend-profile-image">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Bill_Gates_June_2015.jpg/800px-Bill_Gates_June_2015.jpg" alt="" />
                </div>
                <div className="friend-name">
                  <p>Bill Gets</p>
                </div>
              </div>


              <div className="friend-store-items">
                <div className="friend-store-image-area">
                  <img className='friend-store-image' src="https://quotesbook.com/quotes/imagination-quotes/lailah-gifty-akita/use-your-imagination-to-create-your-beautiful-life-1440x2560-1127.jpg" alt="" />
                </div>
                <div className="friend-profile-image">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg" alt="" />
                </div>
                <div className="friend-name">
                  <p>Elon Musk</p>
                </div>
              </div>


            </div>

            <NewsFeed />
           
          </div>
          <div className="fb-home-right"></div>
        </div>
      </div>
    </>
  )
}

export default Home;