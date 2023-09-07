import React,{useState,useEffect} from 'react'
// import ResponsiveDrawer from '../../components/Sidebar'
import { connect } from "react-redux";
import { Sidebar, Menu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import MenuItem from '../../components/MenuItem';

function HomePage() {
 
  return (
    <Sidebar>
    <Menu
      menuItemStyles={{
        button: {
          [`&.active`]: {
            backgroundColor: '#13395e',
            color: '#b6c8d9',
          },
        },
      }}
    >
      <MenuItem icon={<div>dov</div>} text="Documentation" link="/documentation" />
      <MenuItem icon={<div>dcale</div>} text="Calendar" link="/calendar" />
      <MenuItem icon={<div>dovb</div>} text="E-commerce" link="/e-commerce" />
    </Menu>
  </Sidebar>
  )
}

const mapStateToProps = ({ ExampleReducer }) => ({
    data: ExampleReducer.data
  });
  
  export default connect(mapStateToProps)(HomePage);
  
  