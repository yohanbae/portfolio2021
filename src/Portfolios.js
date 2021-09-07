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


const Portfolios = () => {
  const onLink = (url) => {
    window.open(url);
  }
  return(
    <div className="portfolios-wrap">
      <div className="thewrap">
      <div className="thetitle">Portfolios</div>
      <Card className="thecard">
      <CardActionArea>
        <CardMedia
          className="media"
          image={sns}
          title="Portofolios SNS"
        />
        <CardContent>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'600'}} gutterBottom variant="h5" component="h2">
            MOVIE SNS
          </Typography>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'500', color:'black'}} variant="body2" component="p">
            Social network for movie fans. Users can post about their favorite movies and interact with other users.
          </Typography>
          <div style={{marginTop:'20px'}}>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<DiReact style={{fontSize:'20px'}} />} label="React"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="Next.js"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="Back4App"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="Restful API"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="SWR"/>        
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>onLink("https://github.com/yohanbae/moviesns")}>
          GITHUB
        </Button>
        <Button size="small" color="primary" onClick={()=>onLink("https://moviesns.netlify.app")}>
          VIEW
        </Button>
      </CardActions>

      <Divider />

      <CardActionArea>
        <CardContent>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'600'}} gutterBottom variant="h5" component="h2">
            GRAPHQL SNS
          </Typography>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'500', color:'black'}} variant="body2" component="p">
            A Simple SNS demonstration using GraphQL and Typescript
          </Typography>
          <div style={{marginTop:'20px'}}>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<DiReact style={{fontSize:'20px'}} />} label="React"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<SiGraphql style={{fontSize:'20px'}} />} label="GraphQL"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="URQL"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="TYPESCRIPT"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="Back4App"/>   
          </div>          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={()=>onLink("https://github.com/yohanbae/snsgraphql")}>
          GITHUB
        </Button>
        <Button size="small" color="primary" onClick={()=>onLink("https://snsgraphql.netlify.app")}>
          VIEW
        </Button>
      </CardActions>
      
    </Card>


    <Card className="thecard">
      <CardActionArea>
        <CardMedia
          className="media"
          image={ecommerce}
          title="Portofolios ecommerce"
        />
        <CardContent>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'600'}} gutterBottom variant="h5" component="h2">
            E-COMMERCE with Stripe
          </Typography>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'500', color:'black'}} variant="body2" component="p">
            commerce demonstration using Stripe: React, Stripe, Restful API
          </Typography>
          <div style={{marginTop:'20px'}}>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<DiReact style={{fontSize:'20px'}} />} label="React"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<FaStripe style={{fontSize:'20px'}} />} label="Stripe"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="Restful API"/>                  
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>onLink("https://github.com/yohanbae/hanimall_frontend")}>
          GITHUB
        </Button>
        <Button size="small" color="primary" onClick={()=>onLink("https://hanimall.netlify.app")}>
          VIEW
        </Button>
      </CardActions>


      <Divider />

      <CardActionArea>
        <CardContent>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'600'}} gutterBottom variant="h5" component="h2">
            Kpop merchandise exchange
          </Typography>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'500', color:'black'}} variant="body2" component="p">
            Users can communicate with others and exchange their merchandise goods in safe way using phone verification
          </Typography>
          <div style={{marginTop:'20px'}}>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<IoLogoVue style={{fontSize:'20px'}} />} label="VUE"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<DiFirebase style={{fontSize:'20px'}} />} label="FIREBASE"/>        
          </div>          
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" color="primary" onClick={()=>onLink("https://github.com/yohanbae/ktrade")}>
          GITHUB
        </Button>
        <Button size="small" color="primary" onClick={()=>onLink("https://kexchange.netlify.app")}>
          VIEW
        </Button>
      </CardActions>
    </Card>


    <div className="thetitle">Personal Projects</div>
    <Card className="thecard">
      <CardActionArea>
        <CardMedia
          className="media"
          image={smileland}
          title="Portofolios ecommerce"
        />
        <CardContent>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'600'}} gutterBottom variant="h5" component="h2">
            SMILELAND
          </Typography>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'500', color:'black'}} variant="body2" component="p">
          Enjoyable face exercise app. The camera on your device will detect users' face and encourage them to smile so you use your face muscles.
          </Typography>
          <div style={{marginTop:'20px'}}>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<DiReact style={{fontSize:'20px'}} />} label="React"/>        
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} label="FACE-API"/>     
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<DiPhotoshop style={{fontSize:'20px'}} />} label="Photoshop"/>        
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>onLink("https://github.com/yohanbae/sweb")}>
          GITHUB
        </Button>
        <Button size="small" color="primary" onClick={()=>onLink("https://sweb.netlify.app/")}>
          VIEW
        </Button>
      </CardActions>
    </Card>

    <Card className="thecard">
      <CardActionArea>
        <CardMedia
          className="media"
          image={promise}
          title="Portofolios ecommerce"
        />
        <CardContent>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'600'}} gutterBottom variant="h5" component="h2">
            PROMISE
          </Typography>
          <Typography style={{fontFamily:'Quicksand', fontWeight:'500', color:'black'}} variant="body2" component="p">
            Personal Schedule App with user-friendly UI and functions. You can set up the pattern of your lifestyle as a template and the template will be applied to your plans. Also, you can record the achievement of each task, the app will tell you if your life goal is achieving or not.          </Typography>
          <div style={{marginTop:'20px'}}>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<DiReact style={{fontSize:'20px'}} />} label="React"/>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<SiRedux style={{fontSize:'20px'}} />} label="Redux"/>
            <Chip variant="outlined" size="small" style={{marginRight:'10px', marginBottom:'5px'}} icon={<DiFirebase style={{fontSize:'20px'}} />} label="FIREBASE"/>        
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>onLink("https://github.com/yohanbae/reactpromise")}>
          GITHUB
        </Button>
        <Button size="small" color="primary" onClick={()=>onLink("https://promisehani.netlify.app/")}>
          VIEW
        </Button>
      </CardActions>
    </Card>


      </div>
    </div>
  )

}

export default Portfolios