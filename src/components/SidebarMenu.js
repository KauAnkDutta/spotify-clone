import React from "react";
import '../style/SidebarMenu.css'

function SidebarMenu({title, logo}){
    return(
        <div className="SidebarMenu">
            <i className="SidebarMenu_icon">{logo}</i>
            <p>{title}</p>
        </div>
    )
}

export default SidebarMenu;