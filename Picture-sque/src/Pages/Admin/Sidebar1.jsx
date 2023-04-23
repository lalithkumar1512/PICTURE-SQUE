import React, { useState } from "react";
import "./Sidebar.css";
import { useNavigate, Link } from "react-router-dom";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(1);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <span>
          pict<span>uresq</span>ue
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              // console.log()
              onClick={() =>{
                if(item.heading==="Portal") {
                  setSelected(index)
                 navigate("/Admin")
                }
                if(item.heading==="Contests") {
                  setSelected(index)
                 navigate("/Admin1")
                }
                if(item.heading==="Customer reports") {
                  setSelected(index)
                 navigate("/Admin2")
              }
            }
            }
            >
              <item.icon />
              <span >{item.heading}</span>
            </div>
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem"  onClick={() =>{navigate("/")}} >
          <UilSignOutAlt />
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
