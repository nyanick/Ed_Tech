import React from 'react'
import './service.css'
import { Box, Grid, Hidden, Stack } from '@mui/material'
// import StatsItem from '../../components/StatsItem'
import StatsItem from '../../StatsItem'
import { FlexContainer, Optimal, SoftwareForAdvancedBusiness, SoftwareTypesCard, Technologies } from '../../Extra'
// import SideNav from '../../SideNav/SideNav'




function ServiceHeader() {
  return (
    <div>
      <div className="icp-header-container">
        <div className="icp-header">
        <h1 className="icp-title">
        Software Development Services
        </h1>   
        <p className="icp-text">Our Passion is to Deliver Software that Helps You Succeed</p>
        <div className="icp-header-phrase">
        <div className='text'>Combining over 30 years of experience in IT and a great drive for innovation, ScienceSoft designs and builds software to rely on: secure, high-performing, scalable, and user-friendly.</div>
        </div>
        <div className="icp-header-link-wrapper">
        <button  className="icp" >
        Get a custom quote
        </button>
        <button className="icp2">
        Request software development
        </button>
        </div>
        
        </div>
        <div className="icp-image-wrapper ">
        <img  
        className='img'
        src="https://www.scnsoft.com/software-development-services/software-development/cro/cover-pic-sw-development.svg"/>
        </div>
        </div>
        <div className='main-service-pages'>
          <div className='left'>
            <div className='section-text'><strong>
            Software development services
              </strong>  help plan, design, develop, integrate, test, manage and evolve software solutions. Quality-centered and adherent to mature software development practices, ScienceSoft provides application development services to startups, software companies, and enterprises across 30+ industries. We are ready to offer <strong>end-to-end development</strong> that covers everything from business analysis to software delivery and support, help modernize your legacy software, or augment your team with our IT experts at any stage of SDLC.</div>
          <h1 className='hp-title'>
          Why Choose ScienceSoft for Your Software Development Project Read more on 
          </h1>
          <Box mt={10} mb={15}>
          <Stack direction="row" mb={4} spacing={{ xs: 1, sm: 2, md: 12 }} variant='div'>
            <StatsItem number="34" title="years in IT" />
            <StatsItem number="750+" title="IT professionals" />
           <Hidden smDown>
           <StatsItem number="1600+" title="success stories" />
            <StatsItem number="30+" title="industry covers" />
           </Hidden>
          </Stack>
        </Box>
        <h1 className='hp-title'>
        Guaranteed service quality </h1>
        <div className='Busines_schoose' >
          <ul >
            <li className='box_geography_text'> Quality-first approach based on a mature ISO 9001-certified quality management system.</li>d
            <li className='box_geography_text'>ISO 27001-certified security management that relies on comprehensive policies and processes, advanced security technology, and skilled professionals.</li>
            <li className='box_geography_text'>A leading outsourcing provider featured on the Global Outsourcing 100 list by IAOP.</li>
          </ul>
        
        </div>
        <h1 className='hp-title'>
          Different Collaboration Scenarios for Your Software Development 
          </h1>
    <div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginBottom:'10px',justifyContent:'space-between'}}>
          <FlexContainer/>
          <FlexContainer/>
          <FlexContainer/>
          <FlexContainer/>
    </div>
    <div className='SoftwareTypes'>
      <h1 className='hp-title'>60+ Software Types in Our Portfolio</h1>
      <div>
      Along with the deep knowledge of software architecting and coding principles, we have accumulated vast domain experience and understanding of the context that our software operates in.
      </div>
      <h1 style={{fontSize:'30px',color:'#000',paddingTop:'20px'}}>By business function</h1>
      <div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginBottom:'10px',justifyContent:'space-around'}} >
      <SoftwareTypesCard/>
      <SoftwareTypesCard/>
      <SoftwareTypesCard/>
      <SoftwareTypesCard/>
      <SoftwareTypesCard/>
      <SoftwareTypesCard/>

      </div>
      <h1 className='hp-title'>Software for Advanced Business Tasks </h1>
      <div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginBottom:'10px',justifyContent:'space-between'}}> 
          <SoftwareForAdvancedBusiness/>
          <SoftwareForAdvancedBusiness/>
          <SoftwareForAdvancedBusiness/>
      </div>
    </div>

    <div>
      <h1 className='hp-title'>Reliable Techs & Tools We Are Proficient In </h1>
      <Technologies/>
    </div>

    <div>
      <h1 className='hp-title'>Choosing an Optimal Pace for Your Project</h1>
      < div style={{display:'flex',flexWrap:'wrap',gap:'10px',marginBottom:'10px'}}>
      <Optimal/>
      <Optimal/>

      </div>
      <h1 className='hp-title'>Costs of Software Development Services at ScienceSoft</h1>
      <div>Major cost factors:</div>
      <ul>
        <li>Application type (web, mobile, desktop); number of platforms and OS versions supported.</li>
        <li>The number and complexity of application features.</li>
        <li>The number of user roles </li>
        <li>The number and complexity of integrations with third-party systems. </li>
        <li>Application availability, performance, security, latent capacity and scalability requirements. </li>
        <li>Special features required (e.g.,ML-based). </li>
      </ul>
      
    </div>
          
          </div>
          

        </div>
        </div>
  )
}

export default ServiceHeader
