import React from "react";
import '../style/SongRow.css'

function SongRow({ track }){
    return (
        <div className="songRow">
            <img src={track.album.images[0].url} alt={track.name} className="songRowImg"/>

            <div className="songRowInfo">
                <h1>{track.name}</h1>
                <p>
                   {track.artists.map((artist, key) =>(
                       <span key={key}>{artist.name + ' '}</span>
                   ))}
                   | {track.album.name} 
                </p>
            </div>
        </div>
    )
}

export default SongRow;