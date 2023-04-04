import React from "react";
import '../style/Sidebar.css';
import SidebarMenu from "./SidebarMenu";
import { BiHome } from 'react-icons/bi';
import { BiSearch } from 'react-icons/bi';
import { BiLibrary } from 'react-icons/bi';
import { useDataLayerValue } from "../DataLayer";

function Sidebar(){
    const[{playlists}, dispatch] = useDataLayerValue()
    return(
        <div className="sidebar">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="noImage" className="SpotifyLogo"/>

            <SidebarMenu title='Home' logo={<BiHome/>}/>
            <SidebarMenu title='Search' logo={<BiSearch/>}/>
            <SidebarMenu title='Your Library' logo={<BiLibrary/>}/>

            <br />
            <strong className="sidebar_playlist">PLAYLISTS</strong>
            <hr />
            {console.log('list',playlists)}

            {playlists?.items?.map((playlist, key) => {
                let playlist_name = playlist.name;

                // if (playlist_name.length) {
                // playlist_name = playlist_name;
                // }

                return <SidebarMenu title={playlist_name} key={key}/>;
            })}
                    
        </div>
    )
}

export default Sidebar;