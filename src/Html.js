import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import sns from './assets/sns.jpg'
import ecommerce from './assets/ecommerce.jpg'
import promise from './assets/promise-mock.png'
import smileland from './assets/smileland-mock.png'
import Divider from '@material-ui/core/Divider';

import Chip from '@material-ui/core/Chip';
import { DiReact, DiPhotoshop, DiPhp, DiWordpress, DiNodejsSmall, DiGithubBadge, DiHeroku, DiFirebase, DiMongodb, DiSass,DiPython,DiAws  } from "react-icons/di";
import { SiNuxtDotJs,SiTypescript, SiGraphql } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";

import { FaStripe } from "react-icons/fa";
import { SiRedux } from "react-icons/si";

import burger from './assets/burger.jpg';
import yoga from './assets/yoga.jpg';
import foodie from './assets/foodie.jpg';
import {useHistory} from 'react-router-dom'

const Html = () => {
  const router = useHistory()

  const onLink = (url) => {
    window.open(url);
  }

  const linkUp = () => {
    router.push('/')
    window.scrollTo(0, 700)    
  }
  return(
    <div className="portfolios-wrap">
      <div className="thewrap">
      <div className="thetitle">PSD to HTML Demonstration</div>
      <Card className="thecard">
      <CardActionArea>
        <CardMedia
          className="media"
          image={burger}
          title="Portofolios SNS"
        />
        <CardContent>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'600'}} gutterBottom variant="h5" component="h2">
            BURGER WEEK
          </Typography>
          <div style={{marginTop:'20px'}}>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="HTML"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="SASS"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="RESPONSIVE WEB"/>        
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>onLink("https://www.freepik.com/free-psd/american-food-website-app-template_7335301.htm#&position=1")}>
          ORIGINAL PSD
        </Button>
        <Button size="small" color="primary" onClick={()=>onLink("https://yohanbae.github.io/html-burger/")}>
          VIEW
        </Button>
      </CardActions>

      
    </Card>


    <Card className="thecard">
      <CardActionArea>
        <CardMedia
          className="media"
          image={yoga}
          title="Portofolios ecommerce"
        />
        <CardContent>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'600'}} gutterBottom variant="h5" component="h2">
            YOGA OM
          </Typography>

          <div style={{marginTop:'20px'}}>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="HTML5"/>                  
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="SASS"/>                  
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="RESPONSIVE WEB"/>     
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="BOOTSTRAP"/>                  
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>onLink("https://www.freepik.com/free-psd/social-media-templates-with-yoga-theme_6951540.htm#&position=20")}>
          ORIGINAL PSD
        </Button>
        <Button size="small" color="primary" onClick={()=>onLink("https://yohanbae.github.io/html-yoga/")}>
          VIEW
        </Button>
      </CardActions>
    </Card>

    <Card className="thecard">
      <CardActionArea>
        <CardMedia
          className="media"
          image={foodie}
          title="Portofolios ecommerce"
        />
        <CardContent>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'600'}} gutterBottom variant="h5" component="h2">
            Delicious Pasta
          </Typography>

          <div style={{marginTop:'20px'}}>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="HTML5"/>                  
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="SASS"/>                  
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="RESPONSIVE WEB"/>     
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>onLink("https://www.freepik.com/free-psd/web-template-restaurant_7011673.htm#&position=5")}>
          ORIGINAL PSD
        </Button>
        <Button size="small" color="primary" onClick={()=>onLink("https://yohanbae.github.io/html-rest/")}>
          VIEW
        </Button>
      </CardActions>
    </Card>
        
      <Button className="thebutton" style={{textDecoration:'underline', marginBottom:'30px'}} onClick={()=> linkUp()}>Click to see my full skills</Button>

      </div>
    </div>
  )

}

export default Html