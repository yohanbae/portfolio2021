import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <div>
      {'Copyright © '}
      <Link color="inherit">
        Yohan Bae
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}



export default function Footer() {

  return (
    <div className="footer">
        <div className="footer-middle">
          <div>yohanbae1040@gmail.com</div>
          <Copyright />
        </div>
    </div>
  );
}