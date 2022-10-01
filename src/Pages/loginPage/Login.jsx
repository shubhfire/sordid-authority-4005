import React, { useEffect, useState } from "react";
import styles from "../registerPage/Register.module.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";
import { getNameFromLocal } from "../../utils/localStorage";
import * as types from "../../Redux/authReducer/actionType"
import { useSpeechSynthesis } from "react-speech-kit";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storedData, setStoredData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const {speak}=useSpeechSynthesis()

  const toast = useToast();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigation = useNavigate();
  const commingFrom = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault()
    const checkEmails = storedData.map((e) => {
      return e.email;
    });

    const checkPasswords = storedData.map((e) => {
      return e.password;
    });
    if (checkEmails.includes(email) && checkPasswords.includes(password)) {
      for (var i = 0; i < storedData.length; i++) {
        if (email === checkEmails[i]) {
          getNameFromLocal("fullName", storedData[i].fullName);
          dispatch({ type: types.USER_LOGIN_SUCCESS, payload: true });
          dispatch({
            type: types.USER_FULLNAME,
            payload: storedData[i].fullName,
          });
          break;
        }
      }
      let successText="You are login successfuly"
      speak({text:successText})
      toast({
        title: "You are login success",
        position: "bottom",
        description: `Well come to milaap family`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigation(commingFrom, { replace: true });
    } else {
      dispatch({ type: types.USER_LOGIN_FAILURE, payload: false });
      let errorText="Invalid email or password"
      speak({text:errorText})
      toast({
        title: "Wrong email or password",
        position: "bottom",
        description: `You enterd wrong email or password try again`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const getStoredData = () => {
    axios
      .get(`http://localhost:8080/registerData`)
      .then((r) => {
        setStoredData(r.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getStoredData();
  }, []);
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
                {/* <LoginInput
                  setCurrentLoginData={setCurrentLoginData}
                  handleLogin={handleLogin}
                /> */}
              </div>
              <div>
                <form className={styles.form} onSubmit={handleLogin}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type="email"
                      value={email}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className={styles.input_tag}
                      required
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <input
                      type={show ? "text" : "password"}
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      className={styles.input_tag}
                      required
                    />
                    <div onClick={handleClick} className={styles.login_show}>
                      {show ? <BiHide /> : <BiShow />}
                    </div>
                  </div>
                  <button type="submit" className={styles.submit_btn}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.already_signup}>
            <p>New to Milaap? Sign up now, it’s quick & free</p>
            <button>
              <Link to={`/register`}>Signup</Link>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.mobile_already_signup}>
        <p>Not registered yet?</p>
        <button className={styles.already_login_btn}>
          <Link to={`/register`}>Signup</Link>
        </button>
      </div>
    </div>
  );
};
export default Login;
