import React from "react";
import { Container, Form, Row } from "reactstrap";
import { Gap, Inputs, Links, Submit } from "../../components";
import { bg } from "../../assets";
import "./login.scss";
const Login = () => {
  return (
    <>
      <div className="main-page">
        <div className="left">
          <img src={bg} alt="background" className="bg-img-login" />
        </div>
        <div className="right">
          <Container>
            <Row>
              <h1 className="text-center"> Form Login </h1>
              <Form inline>
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
              <Links title="Belum punya akun? Daftar sekarang" />
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Login;
