import React, { useState, useRef, useEffect } from "react";
import Head from "../../layout/head/Head";
import Logo from "../../images/logo.png";
import LogoDark from "../../images/logo-dark.png";
import Content from "../../layout/content/Content";
import Dropzone from "react-dropzone";
import {
  Block,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  BlockDes,
  BackTo,
  PreviewCard,
} from "../../components/Component";
import { useForm } from "react-hook-form";
import { Steps, Step } from "react-step-builder";
import { Row, Col,  Button } from "reactstrap";
import { Link } from "react-router-dom";

const ChildForm = (props) => {
  const [formData, setFormData] = useState({
    surName: "baby",
    firstName: "tola",
    otherName: "bunmi",
    email:"test@email.com",
    dob: "10-04-1991",
    phone:"081237654",
    sibling: "yemi",
    currentSchool: "Early life",
    presentClass: "Basic 7",
    examLocation:"Lagos",
  });

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { reset, register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = (data) => {
    props.next();
  };

  // useEffect(() => {
  //   reset(formData)
  // }, [formData]);

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-4">
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="sur-name">
              Surname
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="sur-name"
                className="form-control"
                {...register('surName', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.surName} />
              {errors.surName && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="first-name">
              First Name
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="first-name"
                className="form-control"
                {...register('firstName', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.firstName} />
              {errors.firstName && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="other-name">
              Other Names
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="other-name"
                className="form-control"
                {...register('otherName', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.otherName} />
              {errors.otherName && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="email"
                className="form-control"
                {...register('email', {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.email} />
              {errors.email && errors.email.type === "required" && (
                <span className="invalid">This field is required</span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="invalid">{errors.email.message}</span>
              )}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="dob">
              Date of Birth
            </label>
            <div className="form-control-wrap">
              <input
                type="date"
                id="dob"
                className="form-control"
                {...register('dob', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.dob} />
              {errors.dob && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="phone-no">
              Mobile Number
            </label>
            <div className="form-control-wrap">
              <input
                type="number"
                id="phone-no"
                className="form-control"
                {...register('phone', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.phone} />
              {errors.phone && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="c-school">
              Current School
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="c-school"
                className="form-control"
                {...register('currentSchool', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.currentSchool} />
              {errors.currentSchool && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="present-class">
              Present Class
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="present-class"
                className="form-control"
                {...register('presentClass', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.presentClass} />
              {errors.presentClass && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Next
            </Button>
          </li>
        </ul>
      </div>
    </form>
  );
};

const ParentForm = (props) => {
  const [formData, setFormData] = useState({
    fatherName: "Bankole",
    fatherEmail: "namidi@email.com",
    fatherPhone: "0912748532",
    motherName: "Joy",
    motherEmail: "mail@email.com",
    motherPhone: "0812569874",
    parentAddress: "plot 601 alakia road estate.",
    // password: "",
    // rePassword: "",
    // terms: false,
  });

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const { handleSubmit, register, watch, formState: { errors } } = useForm();

  const submitForm = (data) => {
    props.next();
  };

  // const password = useRef();
  // password.current = watch("password");

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-4">
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="father-name">
              Father Name
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="father-name"
                className="form-control"
                {...register('fatherName', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.fatherName} />
              {errors.username && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="father-email">
              Father Email
            </label>
            <div className="form-control-wrap">
              <input
                type="email"
                id="father-email"
                className="form-control"
                {...register('fatherEmail', {required: "This field is required"})}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.fatherEmail} />
              {errors.fatherEmail && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="father-no">
              Father's Phone
            </label>
            <div className="form-control-wrap">
              <input
                type="number"
                id="father-no"
                className="form-control"
                {...register('fatherPhone', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.fatherPhone} />
              {errors.fatherPhone && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="mother-name">
              Mother's Name
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="mother-name"
                className="form-control"
                {...register('motherName', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.motherName} />
              {errors.motherName && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="mother-email">
              Mother's Email
            </label>
            <div className="form-control-wrap">
              <input
                type="email"
                id="mother-email"
                className="form-control"
                {...register('motherEmail', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.motherEmail} />
              {errors.motherEmail && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
         <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="mother-no">
              Mother's Phone
            </label>
            <div className="form-control-wrap">
              <input
                type="number"
                id="mother-no"
                className="form-control"
                {...register(' motherPhone', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.rePassword} />
              {errors.motherPhone && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
         <Col md="12">
          <div className="form-group">
            <label className="form-label" htmlFor="parent-address">
              Parent's Address
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                id="parent-address"
                className="form-control"
                {...register('parentAddress', { required: true })}
                onChange={(e) => onInputChange(e)}
                defaultValue={formData.parentAddress} />
              {errors.parentAddress && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        {/* <Col md="12">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
              checked={formData.terms}
              {...register('terms', { required: true })}
              id="fw-policy" />
            {errors.terms && <span className="invalid">This field is required</span>}
            <label className="custom-control-label" htmlFor="fw-policy">
              I agreed Terms and policy
            </label>
          </div>
        </Col> */}
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Next
            </Button>
          </li>
          <li>
            <Button color="primary" onClick={props.prev}>
              Previous
            </Button>
          </li>
        </ul>
      </div>
    </form>
  );
};

const PaymentInfo = (props) => {
  const [formData, setFormData] = useState({
    refName: "",
    refPhone: "",
    refEmail: "",
    refAddress: "",
    topics: "",
  });
  const [files1, setFiles1] = useState([]);
  const [files2, setFiles2] = useState([]);

  // handles ondrop function of dropzone
  const handleDropChange = (acceptedFiles, set) => {
    set(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const {  register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = (data) => {
    //window.location.reload();
    props.next();
  };

  return (
    <form className="content clearfix" onSubmit={handleSubmit(submitForm)}>
      <Row className="gy-3">
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="refree-name">
              Name of Refree 
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                className="form-control"
                id="refree-name"
                {...register('refName', { required: true })}
                onChange={(e) => onInputChange(e)} />
              {errors.refName && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="refree-no">
              Refree's Phone 
            </label>
            <div className="form-control-wrap">
              <input
                type="number"
                className="form-control"
                id="refree-no"
                {...register('refPhone', { required: true })}
                onChange={(e) => onInputChange(e)} />
              {errors.refPhone && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="refree-email">
              Refree Email 
            </label>
            <div className="form-control-wrap">
              <input
                type="email"
                className="form-control"
                id="refree-email"
                {...register('refEmail', { required: true })}
                onChange={(e) => onInputChange(e)} />
              {errors.refEmail && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="refree-address">
              Refree Address
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                className="form-control"
                id="refree-address"
                {...register('refAddress', { required: true })}
                onChange={(e) => onInputChange(e)} />
              {errors.refAddress && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col>
        <Col md="12">
            <div className="form-group">
              <label className="form-label" htmlFor="how-ois">
                How did you find out about OIS
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
                    <option value="Newspaper">Newspaper</option>
                    <option value="Social-Media">Social Media</option>
                    <option value="ois-events">OIS Events</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.topics && <span className="invalid">This field is required</span>}
                </div>
              </div>
            </div>
          </Col>
          <Col sm="6">
                <label className="form-label">Dropzone Only Image Upload</label>
                <Dropzone
                  onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles1)}
                  accept={[".jpg", ".png", ".svg"]}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                        <input {...getInputProps()} />
                        {files1.length === 0 && (
                          <div className="dz-message">
                            <span className="dz-message-text">Drag and drop file</span>
                            <span className="dz-message-or">or</span>
                            <Button color="primary">SELECT</Button>
                          </div>
                        )}
                        {files1.map((file) => (
                          <div
                            key={file.name}
                            className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                          >
                            <div className="dz-image">
                              <img src={file.preview} alt="preview" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </Dropzone>
              </Col>
          <Col sm="6">
                <label className="form-label">Dropzone Only Image Upload</label>
                <Dropzone
                  onDrop={(acceptedFiles) => handleDropChange(acceptedFiles, setFiles2)}
                  accept={[".jpg", ".png", ".svg"]}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div {...getRootProps()} className="dropzone upload-zone dz-clickable">
                        <input {...getInputProps()} />
                        {files2.length === 0 && (
                          <div className="dz-message">
                            <span className="dz-message-text">Drag and drop file</span>
                            <span className="dz-message-or">or</span>
                            <Button color="primary">SELECT</Button>
                          </div>
                        )}
                        {files2.map((file) => (
                          <div
                            key={file.name}
                            className="dz-preview dz-processing dz-image-preview dz-error dz-complete"
                          >
                            <div className="dz-image">
                              <img src={file.preview} alt="preview" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}
                </Dropzone>
              </Col>
        {/* <Col md="6">
          <label className="form-label">Upload Passport Photograph </label>
          <ul className="d-flex flex-wrap g-2">
            <li>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  {...register('ethRadio', { required: true })}
                  id="fw-lt1eth"
                  checked={formData.contribute === "leEth" ? true : false}
                  onChange={() => setFormData({ ...formData, contribute: "leEth" })} />
                {errors.ethRadio && <span className="invalid">This field is required</span>}
                <label className="custom-control-label" htmlFor="fw-lt1eth">
                  Less than 1 ETH
                </label>
              </div>
            </li>
            <li>
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  {...register('ethRadio', { required: true })}
                  id="fw-ov1eth"
                  checked={formData.contribute === "ovEth" ? true : false}
                  onChange={() => setFormData({ ...formData, contribute: "ovEth" })} />
                <label className="custom-control-label" htmlFor="fw-ov1eth">
                  Over than 1 ETH
                </label>
              </div>
            </li>
          </ul>
        </Col> */}
        {/* <Col md="6">
          <div className="form-group">
            <label className="form-label" htmlFor="fw-telegram-username">
              Telegram Username
            </label>
            <div className="form-control-wrap">
              <input
                type="text"
                className="form-control required"
                id="fw-telegram-username"
                {...register('telegram', { required: true })}
                onChange={(e) => onInputChange(e)} />
              {errors.telegram && <span className="invalid">This field is required</span>}
            </div>
          </div>
        </Col> */}
      </Row>
      <div className="actions clearfix">
        <ul>
          <li>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </li>
          <li>
            <Button color="primary" onClick={props.prev}>
              Previous
            </Button>
          </li>
        </ul>
      </div>
    </form>
  );
};

const Header = (props) => {
  return (
    <div className="steps clearfix">
      <ul>
        <li className={props.current >= 1 ? "first done" : "first"}>
          <a href="#wizard-01-h-0" onClick={(ev) => ev.preventDefault()}>
            <span className="number">01</span> <h5> Child Details</h5>
          </a>
        </li>
        <li className={props.current >= 2 ? "done" : ""}>
          <a href="#wizard-01-h-1" onClick={(ev) => ev.preventDefault()}>
            <span className="number">02</span> <h5>Parents/Guardians</h5>
          </a>
        </li>
        <li className={props.current >= 3 ? "done" : ""}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="current-info audible">current step: </span>
            <span className="number">03</span> <h5>OIS</h5>
          </a>
        </li>
        <li className={props.current === 4 ? "last done" : "last"}>
          <a href="#wizard-01-h-2" onClick={(ev) => ev.preventDefault()}>
            <span className="current-info audible">current step: </span>
            <span className="number">04</span> <h5>Payment</h5>
          </a>
        </li>
      </ul>
    </div>
  );
};

const Success = (props) => {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center p-3">
      <BlockTitle tag="h6" className="text-center">
        Thank you Admission form was submitted successfuly
      </BlockTitle>
    </div>
    <BlockDes className="text-info">
                {/* <p>You can now sign in with your new password</p> */}
                <a href="https://tayoguesthouse.com.ng/olashore2">
                  <Button color="primary" size="lg">
                    Back to School Website
                  </Button>
                </a>
        </BlockDes>
    </>
  );
};

const config = {
  before: Header,
};

const RegAdmission = () => {
  return (
    <React.Fragment>
    <Head title="Addmision Registration" />
    <Content page="component">
      <BlockHead size="lg" wide="lg">
        <BlockHeadContent>
        <div className="brand-logo text-center">
          <Link to={`${process.env.PUBLIC_URL}/`} className="logo-link">
            <img className="logo-light logo-img logo-img-lg" src={Logo} alt="logo" />
            <img className="logo-dark logo-img logo-img-lg" src={LogoDark} alt="logo-dark" />
          </Link>
        </div>
          <BackTo link="/" icon="arrow-left">
            back
          </BackTo>
          <BlockTitle tag="h4" className="fw-normal">
            Admission Form
          </BlockTitle>
        </BlockHeadContent>
      </BlockHead>

      <Block size="lg">
        {/* <BlockHead>
          <BlockHeadContent>
            <BlockTitle tag="h5">Wizard Form - Basic</BlockTitle>
            <p>A basic demonstration of wizard form basic.</p>
          </BlockHeadContent>
        </BlockHead> */}
        <PreviewCard>
          <div className="nk-wizard nk-wizard-simple is-alter wizard clearfix">
            <Steps config={config}>
              <Step component={ChildForm} />
              <Step component={ParentForm} />
              <Step component={PaymentInfo} />
              <Step component={Success} />
            </Steps>
          </div>
        </PreviewCard>
      </Block>

      {/* <Block size="lg">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle tag="h5">Wizard Form - Vertical</BlockTitle>
            <p>A basic demonstration of wizard form in a vertical format.</p>
          </BlockHeadContent>
        </BlockHead>
        <PreviewCard>
          <div className="nk-wizard nk-wizard-simple is-vertical is-alter wizard clearfix">
            <Steps config={config}>
              <Step component={ChildForm} />
              <Step component={ParentForm} />
              <Step component={PaymentInfo} />
              <Step component={Success} />
            </Steps>
          </div>
        </PreviewCard>
      </Block> */}
    </Content>
  </React.Fragment>
  );
};
export default RegAdmission;
