import React from 'react';
import { Link, useMatch, useResolvedPath } from 
"react-router-dom";
const NavLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div className="py-2">
        <Link
          style={{ textDecoration : "none" , borderRadius:  "5px", fontFamily: 'serif', borderBottom: match? "2px solid white" : "none", padding: match? "5px" : "4px", color : match? "yellow" : "white"  }
        
        
        
        }
          to={to}
          {...props}
        >
          {children}
        </Link>
       
      </div>
    );
};

export default NavLink;