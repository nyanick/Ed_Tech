import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useProSidebar } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './SubScreens/Home';
import Courses from './SubScreens/Courses';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button } from 'react-bootstrap';
import Contacts from './SubScreens/Contact';

function HomePage() {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl, } = useProSidebar();
 const navigate = useNavigate()
  const [active, setActive] = useState('active')
  const Logout =() =>{
    navigate('/login')
  }
  const students = ()=>{
    navigate('/home')
    console.log('hommm');
  }
  return (
      <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
          <Sidebar 
          //  breakPoint="sm"
           transitionDuration={800}
          backgroundColor="rgb(0, 249, 249)"
          rtl={false}
          style={{ height: "100vh" }}
          >
          <Menu>
            <MenuItem
              icon={<MenuOutlinedIcon />}
              onClick={() => {
                collapseSidebar();
              }}
              style={{ textAlign: "center" }}
            >
              {" "}
              <h2>
                {localStorage.getItem("profile") == 'teacher' ? 'Teacher' : 'Admin'}
                </h2>
            </MenuItem>
            <MenuItem
            onClick={()=>setActive('active')}
            icon={<HomeOutlinedIcon />}>Dashboard</MenuItem>
            <MenuItem onClick={()=>setActive('courses')} icon={<PeopleOutlinedIcon />}>Courses</MenuItem>
            <MenuItem onClick={()=>setActive('contacts')} icon={<ContactsOutlinedIcon />}>Students</MenuItem>
            
          </Menu>
          <div>
            <Menu>
              <MenuItem onClick={Logout} icon={<LogoutIcon/>}>
                Logout
              </MenuItem>
            </Menu>
          </div>
      </Sidebar>
          <main style={{  marginLeft: "1rem",padding:10 }}>
          {active === 'active' && <Home/>}
          {active === 'courses' && <Courses/>}
          {active === 'contacts' && <Contacts/>}

          {/* <Button onClick={students}> Updates</Button> */}
        </main>
  
      </div>
  ) 
}
  
  export default HomePage;
  
  
