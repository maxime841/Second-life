import React from 'react';
import {
  CDBBox, CDBBtn,
} from 'cdbreact';
import facebook from '../../../public/image/logo_facebook.png';
import twitter from '../../../public/image/logo_twitter.png';
import instagram from '../../../public/image/logo_instagram.jpeg';
import logoSecondLife from '../../../public/image/logosecondlife.jpg';

//= => import style
import './footer.scss';

const Footer = () => (
  <div className="footer">
    <CDBBox
      display="flex"
      justifyContent="between"
      alignItems="center"
      className="mx-auto py-4 flex-wrap"
      style={{ width: '80%' }}
    >
      <CDBBox display="flex" alignItems="center">
        <a href="/" className="d-flex align-items-center p-0 text-dark">
          <img
            alt="logo second life"
            src={logoSecondLife}
            width="30px"
          />
          <span className="ml-4 h5 mb-0 font-weight-bold">Second life</span>
        </a>
      </CDBBox>
      <CDBBox>
        <small className="ml-2">&copy; second life, 2022. All rights reserved.</small>
      </CDBBox>
      <CDBBox display="flex">
        <CDBBtn flat color="dark" className="p-2 button">
          <img className="footer-logo" alt="Facebook icon" srcSet="https://img.icons8.com/fluency/2x/facebook-new.png 2x" />
        </CDBBtn>
        <CDBBtn flat color="dark" className="mx-3 p-2 button">
          <img className="footer-logo" alt="Twitter icon" srcSet="https://img.icons8.com/color/2x/twitter.png 2x" />
        </CDBBtn>
        <CDBBtn flat color="dark" className="p-2 button">
          <img className="footer-logo" srcSet="https://img.icons8.com/color/2x/instagram-new.png 2x" alt="Instagram icon" loading="lazy" />
        </CDBBtn>
      </CDBBox>
    </CDBBox>
  </div>
);

export default Footer;
