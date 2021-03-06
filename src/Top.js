import React, {useEffect} from 'react'
import hero from "./hero.png"
import Chip from '@material-ui/core/Chip';
import { DiJavascript1, DiHtml5, DiCss3, DiReact,DiAngularSimple,
  DiPhp, DiWordpress, DiNodejsSmall, DiGithubBadge, DiHeroku, DiFirebase, DiMongodb, DiSass,DiPython,DiAws  } from "react-icons/di";
import { IoLogoVue } from "react-icons/io5";
  
import { SiNuxtDotJs,SiTypescript, SiGraphql } from "react-icons/si";

const Top = () => {
  useEffect(() => {
    let nums = [1,2,3,4,5,6,7]
    let k = 3
    const gogo = () => {
      let leftnum = nums.length - k
      let left = nums.slice(0,leftnum)
      let right = nums.slice(leftnum, nums.length)
      
      let meme =  [...right, ...left]      
      console.log(meme)
    }  
    gogo()  
  }, [])

  return (
    <div className="top-wrap">
      <div className="the-wrap">
        <div className="title-wrap">
          <div>
            <div className="thename">Yohan Bae</div>
            <div className="thename">WEB DEVELOPER</div>
          </div>
          <img src={hero} width="50px" />
        </div>
        <div className="desc-wrap">
          Hello, my name is Yohan bae and I'm specialized in Front end developer. I also have basic knowledge of UI and Backend so I can develop a mid-size webpage alone.
        </div>
      </div>


      <div className="the-skills">
        <div className='skill-row'>
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiHtml5 style={{fontSize:'10px'}} />} label="HTML"/>        
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiCss3 style={{fontSize:'20px'}} />} label="CSS3"/>        
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiSass style={{fontSize:'20px'}} />} label="SASS"/>        
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiJavascript1 style={{fontSize:'20px'}} />} label="JAVASCRIPT"/>
          <Chip variant="outlined" size="small" className='chip-style' label="TS"/>        
        </div>
        <div className='skill-row'>
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiReact style={{fontSize:'20px'}} />} label="REACT"/>        
          <Chip variant="outlined" size="small" className='chip-style' icon={<IoLogoVue style={{fontSize:'20px'}} />} label="VUE"/>        
          <Chip variant="outlined" size="small" className='chip-style' label="NEXT.JS"/> 
        </div>
        <div className='skill-row'>
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiNodejsSmall style={{fontSize:'20px'}} />} label="NODE.JS"/>        
          <Chip variant="outlined" size="small" className='chip-style' icon={<SiGraphql style={{fontSize:'20px'}} />} label="GRAPHQL"/>        
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiPython style={{fontSize:'20px'}} />} label="PYTHON"/>                  
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiPhp style={{fontSize:'20px'}} />} label="PHP"/>        
        </div>
        <div className='skill-row'>
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiFirebase style={{fontSize:'20px'}} />} label="FIREBASE"/>        
          <Chip variant="outlined" size="small" className='chip-style' label="BACK4APP"/>   
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiWordpress style={{fontSize:'20px'}} />} label="WORDPRESS"/>        
        </div>
        <div className='skill-row'>
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiGithubBadge style={{fontSize:'20px'}} />} label="GITHUB"/>        
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiHeroku style={{fontSize:'20px'}} />} label="HEROKU"/>        
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiPhp style={{fontSize:'20px'}} />} label="NETLIFY"/>      
          <Chip variant="outlined" size="small" className='chip-style' icon={<DiAws style={{fontSize:'20px'}} />} label="AWS"/>        

          {/* <Chip variant="outlined" size="small" className='chip-style' icon={<DiMongodb style={{fontSize:'20px'}} />} label="MONGODB"/>         */}
        </div>
        
        
      </div>
      {/* <div style={{textAlign:'right'}}><a style={{textDecoration:'none', color:'blue'}} href="https://sweb-weights.netlify.app/resume_YohanBae.pdf">Download Resume</a></div> */}
    </div>
  )


}
export default Top