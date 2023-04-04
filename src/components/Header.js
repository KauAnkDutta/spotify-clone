import React from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from "react-icons/io";
import { useDataLayerValue } from "../DataLayer";

import '../style/Header.css'

function Header(){
    const [{user}, dispatch] = useDataLayerValue();

    return(
        <div className="header">
            <div className="headerLeft">
                <IoIosArrowDropleftCircle className="left"/>
                <IoIosArrowDroprightCircle className="right"/>
            </div>

            <div className="headerRight">
                <img src={user?.images[0]?.url} alt="" className="profileImg"/>
                <h4 className="name">{user?.display_name}</h4>
            </div>
        </div>
    )
}

export default Header;