import React from 'react';
import {useHistory} from 'react-router-dom'

import profilephoto from './assets/profile.jpg';
import { SiFacebook } from "react-icons/si";
import { SiTwitter } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { AiFillPhone } from "react-icons/ai";
import { AiOutlineGlobal } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import Button from '@material-ui/core/Button';



const Email = () => {
  const router = useHistory()

  const onLink = (url) => {
    window.open(url);
  }

  const linkUp = () => {
    router.push('/')
    window.scrollTo(0, 700)    
  }

  return (
    <div>
      <div className="portfolios-wrap">
        <div className="thewrap">
          <div className="thetitle">Email Signature</div>
        </div>
      </div>

      <div class="email-thewrap">
        <div class="thedeco1"></div>
        <div class="thedeco2"></div>

        <div class="topgrid">
          <div class="line"></div>
          <div class="logo">
            <div class="text-top">BRAND</div>
            <div class="text-bottom">NAME HERE</div>
          </div>
        </div>

        <div class="thegrid">
          <div class="profile">
            <img src={profilephoto} alt="" />
            <div class="deco1"></div>
            <div class="deco2"></div>
          </div>
          <div class="content">
            <div class="text1">
              <span class="white">
                MR.JOHN
              </span>
              SMITH
            </div>
            <div class="text2">GRAPHIC DESIGNER</div>
            <div class="contact-wrap">
              <div class="icon">
                {/* <i class="fas fa-phone-alt"></i> */}
                <AiFillPhone />
              </div>
              <div class="contact">
                +001 2345 44889<br />
                +001 2345 44889
              </div>
            </div>
            <div class="contact-wrap">
              <div class="icon">
                {/* <i class="fas fa-globe-europe"></i> */}
                <AiOutlineGlobal />
              </div>
              <div class="contact">
                yourname@gmail.com<br />
                wwwyourwebsite.com
              </div>
            </div>
            <div class="contact-wrap">
              <div class="icon">
                {/* <i class="fas fa-home"></i> */}
                <AiFillHome />
              </div>
              <div class="contact">
                Your address here<br />
                City, Country
              </div>                
            </div>
          </div>

        </div>

        <div class="bottomgrid">
          <div class="icons">
            <SiFacebook style={{fontSize:'14px', marginRight:'8px'}} />
            <SiTwitter style={{fontSize:'14px', marginRight:'8px'}} />
            <SiInstagram style={{fontSize:'14px'}} />
          </div>
          <div class="line"></div>
        </div>
        <div className="desc">
          Responsive template from 300px to 400px width. 100% width also available.
        </div>
      </div>

      <div class="email2-wrap">
        <div class="content">
          <img src={profilephoto} alt="" />
          <div class="right">
            <div class="thecontent">
              <div class="text1">Melanie Rose</div>
              <div class="text2">Creative Desginer Rose Design Studio</div>
              <hr />
              <div class="text2">w: rosedesignstudio.com</div>
              <div class="icons">
                {/* <div class="thebox"><i class="fab fa-facebook ic"></i></div>
                <div class="thebox"><i class="fab fa-twitter ic"></i></div>
                <div class="thebox"><i class="fab fa-instagram icc"></i></div> */}
                
                <div class="thebox"><SiFacebook className="ic" /></div>
                <div class="thebox"><SiTwitter className="ic"  /></div>
                <div class="thebox"><SiInstagram className="icc" /></div>
              </div>
            </div>
          </div>

        </div>
        <div className="desc">
          Template width 350px
        </div>
      </div>

      <div className="portfolios-wrap">
        <div className="thewrap">
          <Button className="thebutton" style={{textDecoration:'underline', marginBottom:'30px'}} onClick={()=> linkUp()}>Click to see my full skills</Button>
        </div>
      </div>

    </div>

  )

}
export default Email;