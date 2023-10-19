import React from "react";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import Head from "../../layout/head/Head";
import OlaFooter from './../../Olashore-compoonents/Footer';
// import AuthFooter from "./AuthFooter";
import { Block, BlockContent, BlockDes, BlockHead, BlockTitle } from "../../components/Component";
import { Link } from "react-router-dom";
import {Button} from "../../components/Component";
// import { email } from 'src/store/apps/email';

const ProspectusSuccess = () => {
  return (
    <>
      <Head title="Success" />
        <Block className="nk-block-middle nk-auth-body">
          <div className="brand-logo pb-5">
            <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
              <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
              <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
            </Link>
          </div>
          <BlockHead>
            <BlockContent>
              <BlockTitle tag="h4">Thank you for submitting a Request</BlockTitle>
              <BlockTitle tag="h4">We would get back to you soon</BlockTitle>
              <BlockDes className="text-success">
                <p>We wold send you an email soon</p>
                <a to="https://tayoguesthouse.com.ng/olashore2">
                  <Button color="primary" size="lg">
                    Back to Login
                  </Button>
                </a>
              </BlockDes>
            </BlockContent>
          </BlockHead>
        </Block>
        <OlaFooter />
    </>
  );
};
export default ProspectusSuccess;
