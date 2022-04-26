import React from "react";
import { Container, Form, Row } from "reactstrap";
import "./register.scss";
import { bg2 } from "../../assets";
import { Gap, Inputs, Links, Submit } from "../../components";

const Register = () => {
  return (
    <>
      <div className="main-page">
        <div className="left">
          <img src={bg2} alt="background" className="bg-img" />
        </div>
        <div className="right">
          <Container>
            <Row>
              <h1 className="text-center"> Register Form </h1>
              <Form inline>
                <Inputs
                  label="Full Name"
                  id="fullname"
                  name="fullname"
                  placeholder="Full Name"
                  type="text"
                  for="fullname"
                  className="border-color"
                />
                <Gap width={10} height={10} />
                <Inputs
                  label="Email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  for="email"
                  className="border-color"
                />
                <Gap width={10} height={10} />
                <Inputs
                  label="Password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  for="password"
                  className="border-color"
                />
                <Gap width={10} height={40} />
                <Submit
                  label="Submit"
                  type="button"
                  className="button-submit"
                  id="submit"
                  name="submit"
                />
              </Form>
              <Gap width={10} height={20} />
              <Links title="Kembali Ke Login" />
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Register;
