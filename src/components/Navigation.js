import React from "react";
import "../styles/styleone.css";
import { HiHome, HiCog, HiUser, HiFire} from "react-icons/hi";
import { GiConsoleController } from "react-icons/gi"

function Navigation() {
  return (
    <div>
      <nav className="navigation">
      <a href="/profile">   
          <HiUser className="iconSizes" color="White" />
        </a> 
        <ul>
          <li>
            <a className="active" href="/">
              <HiHome className="iconSizes" color="white"/>
            </a>
          </li>

          <li>
            <a href="/games"><GiConsoleController className="iconSizes" color="white"/></a>
          </li>

          <li>
            <a href="/news"><HiFire className="iconSizes" color="white"/></a>
          </li>
        </ul>
    <a href="/settings">
        <HiCog className="iconSizes" color="White" />
</a>
        
      </nav>
    </div>
  );
}

export default Navigation;
