import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useProSidebar } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const SlideBar =() =>{
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl, } = useProSidebar();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      collapseSidebar();
    } else {
      collapseSidebar();
    }
  };
  return(
    <div id="app" style={({ height: "100vh" }, { display: "flex" })}>
        <Sidebar 
         breakPoint="sm"
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
            <h2>Admin</h2>
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>  
        </Menu>
    </Sidebar>
        <main>
        <h1 style={{  marginLeft: "5rem" }}>
          React-Pro-Sidebar
        </h1>
        
      </main>

    </div>
  )
}