import React from 'react'
import './VideoSection.css'
// import NavBar from '../../components/navBar/NavBar'
import intro from '../../assets/intro.mp4'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import Footer from '../../components/footer/Footer'
import jsonVideos from "./videos.json";

function VideoSection(videos) {
    return (
    
    <div className='video-section'>
        <div className='nav-bar'>
            {/* <NavBar />    */}
        </div>



        <div className='video-header'>
            <video src={intro} autoPlay={false} controls loop style={{width: '100%' ,height:'300px', backgroundColor: "black"}}/>
            <h2>Welcome to evTop video Section. Get first hand knowledge of our product.</h2>
        </div>



        <div className='latest-views-likes'>
            <div className='latest-views-likes-header'>
                <div className='l-v-l-headers'>
                    <p className='l-v-l-header'>Latest</p>
                    <p className='l-v-l-header'>Most Views</p>
                    <p className='l-v-l-header'>Most Likes</p>
                </div>
                <div className='prev-next'>
                    <BiChevronLeft size={30} className='l-v-l-move' />
                    <BiChevronRight size={30} className='l-v-l-move'/>
                </div>
            </div>

            <div className='latest-views-likes-videos'>
                {
                    jsonVideos.map((video, index) => (
                        <React.Fragment key={index}>
                            <div className='l-v-l-vids'>
                                <video key={video._id} src={intro} autoPlay={false} controls loop style={{width:'300px', height:'300px'}} alt={videos.name} className='l-v-l-videos' />
                                <p className='video-name'>{video.name}</p>
                                <p className="video-date">{video.date}</p>
                                <p className="video-views">{video.views}</p>
                            </div>

                        </React.Fragment>
                    ))
                }  
            </div>
       
        </div>



        <div className='videos-created'>
            <div className='videos-created-content'>
                <h1>Videos created by evTop</h1>
                <p>Admin </p>
                <p> September 5, 2022</p>
                <p>1.3m views</p>
                
            </div>

            <div className='videos-created-vid'>
                <video src={intro}  autoPlay={false} controls loop alt={videos.name} className='v-c-v-videos' />
            </div>

        </div>



        <div className='product-videos'>
            <div className='product-videos-header'>
                <div className='p-v-headers'>
                    <p className='p-v-header'>Product Videos</p>
                    <p className='p-v-header' style={{color:'blue'}}>ALL</p>
                </div>

                <div className='prev-next'>
                    <BiChevronLeft size={30} className='l-v-l-move' />
                    <BiChevronRight size={30} className='l-v-l-move'/>
                </div>
            </div>

            <div className='product-videos-videos'>
                {
                    jsonVideos.map((video, index) => (
                        <React.Fragment key={index}>
                            <div className='p-v-vids'>
                                <video key={video._id} src={intro} autoPlay={false} controls loop style={{width:'300px', height:'300px'}} alt={videos.name} className='p-v-videos' />
                                <p className='video-name'>{video.name}</p>
                                <p className="video-date">{video.date}</p>
                                <p className="video-views">{video.views}</p>
                            </div>
                      
                        </React.Fragment>
                    ))
                }
               
            </div>
       
        </div>



        <div className='footer'>
            <Footer/>
        </div>

    </div>
  )
}

export default VideoSection