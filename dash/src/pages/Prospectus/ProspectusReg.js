import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import Head from "../../layout/head/Head";
// import AuthFooter from "./AuthFooter";
import OlaFooter from './../../Olashore-compoonents/Footer';


import {
  Block,
  BlockContent,
  BlockDes,
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  PreviewCard,
} from "../../components/Component";
import { Spinner } from "reactstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const ProspectusReg = () => {
  // const [passState, setPassState] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const handleFormSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      navigate(`${process.env.PUBLIC_URL}/prospectus-success`);
    }, 1000);
  };
  return <>
    <Head title="Register" />
      <Block className="nk-block-middle nk-auth-body  wide-xs">
        <div className="brand-logo pb-4 text-center">
          <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
            <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
            <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
          </Link>
        </div>
        <PreviewCard className="card-bordered" bodyClass="card-inner-lg">
          <BlockHead>
            <BlockContent>
              <BlockTitle tag="h4">Request a Prospectus</BlockTitle>
              <BlockDes>
                <p>You're about to request for OIS Prospectus</p>
              </BlockDes>
            </BlockContent>
          </BlockHead>
          <form className="is-alter" onSubmit={handleSubmit(handleFormSubmit)}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                First Name
              </label>
              <div className="form-control-wrap">
                <input
                  type="text"
                  id="name"
                  {...register('firstname', { required: true })}
                  placeholder="Enter your name"
                  className="form-control-lg form-control" />
                {errors.name && <p className="invalid">This field is required</p>}
              </div>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="name">
                Last Name
              </label>
              <div className="form-control-wrap">
                <input
                  type="text"
                  id="name"
                  {...register('lastname', { required: true })}
                  placeholder="Enter your name"
                  className="form-control-lg form-control" />
                {errors.name && <p className="invalid">This field is required</p>}
              </div>
            </div>
            <div className="form-group">
              <div className="form-label-group">
                <label className="form-label" htmlFor="default-01">
                  Email or Username
                </label>
              </div>
              <div className="form-control-wrap">
                <input
                  type="text"
                  bssize="lg"
                  id="default-01"
                  {...register('email', { required: true })}
                  className="form-control-lg form-control"
                  placeholder="Enter your email address or username" />
                {errors.email && <p className="invalid">This field is required</p>}
              </div>
            </div>
            <div className="form-group">
              {/* <div className="form-label-group">
                <label className="form-label" htmlFor="password">
                  Passcode
                </label>
              </div> */}
            <div className="form-group">
              <label className="form-label" htmlFor="how-ois">
                Please select an Option
              </label>
              <div className="form-control-wrap">
                <div className="form-control-select">
                  <select
                    className="form-control form-select"
                    id="how-ois"
                    {...register('topics', {
                      required: true,
                    })}
                    placeholder="Select a option">
                    <option label="Select a topic" value=""></option>
                    <option value="Newspaper">Junior Secondary</option>
                    <option value="Social-Media">Senior Secondary(Including IGCSE)</option>
                    <option value="ois-events">Foundation Programme</option>
                    <option value="other">All Programmes</option>
                  </select>
                  {errors.topics && <span className="invalid">This field is required</span>}
                </div>
              </div>
            </div>
            </div>
            <div className="form-group">
              <Button type="submit" color="primary" size="lg" className="btn-block">
                {loading ? <Spinner size="sm" color="light" /> : "Send a Request"}
              </Button>
            </div>
          </form>
          {/* <div className="form-note-s2 text-center pt-4">
            {" "}
            Already have an account?{" "}
            <Link to={`${process.env.PUBLIC_URL}/auth-login`}>
              <strong>Sign in instead</strong>
            </Link>
          </div> */}
          {/* <div className="text-center pt-4 pb-3">
            <h6 className="overline-title overline-title-sap">
              <span>OR</span>
            </h6>
          </div> */}
          {/* <ul className="nav justify-center gx-8">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#socials"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                Facebook
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#socials"
                onClick={(ev) => {
                  ev.preventDefault();
                }}
              >
                Google
              </a>
            </li>
          </ul> */}
        </PreviewCard>
      </Block>
      <OlaFooter />
  </>;
};
export default ProspectusReg;
