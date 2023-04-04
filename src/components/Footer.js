import React from "react";
import '../style/Footer.css'
import { ImShuffle} from 'react-icons/im';
import { FiPlayCircle, FiRepeat } from 'react-icons/fi';
import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { MdPlaylistPlay } from 'react-icons/md';
import { BsVolumeDown } from 'react-icons/bs';
import songImg from '../image/songImg.jpg'

function Footer(){
    return(
        <div className = 'footer'>
            <div className="footer_left">
                <img src={songImg} alt="#" className="albumLogo"/>
                <div className="song_info">
                    <h4>One</h4>
                    <p>Metallica</p>
                </div>
            </div>

            <div className="footer_center">
                <ImShuffle className="shuffle"/>
                
                <BiSkipPrevious className="previous"/>

                <FiPlayCircle className="play"/>

                <BiSkipNext className="next"/>

                <FiRepeat className='repeat'/>
            </div>

            <div className="footer_right">
                <MdPlaylistPlay className="playList-play"/>
                <BsVolumeDown className="volumeDown"/>

                <input type="range" className="volumeRange"/>
            </div>
        </div>
    )
}

export default Footer;