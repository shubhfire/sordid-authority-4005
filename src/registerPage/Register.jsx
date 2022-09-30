import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { useDispatch } from "react-redux";
import { registerData } from "../redux/authReducer/action";
import { useToast } from "@chakra-ui/react";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && email && password) {
      const payload = {
        fullName,
        email,
        password,
      };
      dispatch(registerData(payload)).then(() => {
        toast({
          position: "top",
          title: `Hi, ${fullName}`,
          description: "Your account registered succussfully",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        navigate("/OTPPage");
      });
    }
  };
  return (
    <div className={styles.main}>
      <div className={styles.milaap_logo_mobile_view}>
        <div className={styles.mobile_view_logo}>
          <div className={styles.mobile_logo}>
            <img
              src="https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png"
              alt="milaap_logo"
              width="30px"
            />
          </div>
          <div className={styles.title}>Welcome to Milaap,</div>
          <div className={styles.sub_title}>
            India’s largest crowdfunding site
          </div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.milaap_logo}>
          <div>
            <div className={styles.logo}>
              <img
                src="https://assets.milaap.org/assets/milaap-trasparent-logo-25f6253e0156e2f82e2c3daf85575d169864e35ffffd21033ac59da0b4dd88e0.png"
                alt="milaap_logo"
                width="55px"
              />
            </div>
            <div className={styles.title}>Welcome to Milaap,</div>
            <div className={styles.sub_title}>
              India’s largest crowdfunding site
            </div>
          </div>
        </div>

        <div className={styles.vr}></div>
        <div className={styles.form_container}>
          <div className={styles.first_child}>
            <div className={styles.signup}>
              <div className={styles.signup_title}>
                Sign up & manage fundraisers, donations & more
              </div>
              <div>
                <form className={styles.form} onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={fullName}
                    placeholder="Full name"
                    className={styles.input_tag}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                  {/* <p className={styles.input_error}>Error</p> */}

                  <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    className={styles.input_tag}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  {/* <p className={styles.input_error}>Error</p> */}

                  <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.input_tag}
                    required
                  />
                  {/* <p className={styles.input_error}>Error</p> */}
                  <button type="submit" className={styles.submit_btn}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.already_signup}>
            <p>Already signed up with Milaap?</p>
            <button>Login</button>
          </div>
        </div>
      </div>
      <div className={styles.mobile_already_signup}>
        <p>Already signed up with Milaap?</p>
        <button className={styles.already_login_btn}>Login</button>
      </div>
    </div>
  );
};

export default Register;
