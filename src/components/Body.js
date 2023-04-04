import React from "react";
import '../style/Body.css'
import Header from "./Header";
import { useDataLayerValue } from "../DataLayer";

import { BsFillPlayCircleFill, BsThreeDots } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";

import SongRow from "./SongRow";

function Body({spotify}){
    const [{discover_weekly}, dispatch] = useDataLayerValue();

    return(
        <div className="body">
            <Header spotify={spotify}/>

            <div className="bodyInfo">
                <img src={discover_weekly?.images[0].url} alt="" />

                <div className="bodyInfoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <span>{discover_weekly?.description}</span>
                    <p className="infoText"><span>Spotify</span> . {discover_weekly?.followers.total} likes. {discover_weekly?.tracks.total} songs</p>
                </div>
            </div>

            <div className="bodySongs">
                <div className="bodyIcons">
                    <i> < BsFillPlayCircleFill className="play"/> </i>
                    <i> < BiHeart className="fav"/> </i>
                    <i> < BsThreeDots className="dots"/> </i>
                </div>

                {discover_weekly?.tracks.items.map((item, key) => (
                    <SongRow track = {item.track} key={key}/>
                ))}
            </div>
        </div>
    )
}

export default Body;