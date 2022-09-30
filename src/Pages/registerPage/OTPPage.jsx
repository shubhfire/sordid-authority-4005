import React, { useState } from "react";
import { GiSmartphone } from "react-icons/gi";
import styles from "./Register.module.css";
import { authentication } from "./firebase_config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const OTPPage = () => {
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [expandForm, setExpandForm] = useState(false);
  const [otp, setOtp] = useState();
  const navigation=useNavigate()

  const toast = useToast();


  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };
  const requestOtp = (e) => {
    e.preventDefault();
    alert("requestOTP")

    if (phoneNumber === "" || phoneNumber.length < 10) return;
    setExpandForm(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        alert(error);
      });
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    //
    // console.log("code with number",phoneNumber)
    if (otp.length === 6) {
      let confirmationResult = window.confirmationResult;
      confirmationResult
      .confirm(otp)
      .then((result) => {
        const user = result.user;
        console.log("verify",user)
          toast({
            title: ``,
            position: "bottom",
            description: `Well come to milaap family`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigation("/")

        })
        .catch((error) => {
        console.log("verify",error)

          toast({
            title: "Invalid OTP",
            position: "bottom",
            description: `Well come to milaap family`,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
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
                <GiSmartphone className={styles.phone_icon} />
                Verify your mobile number and receive priority support just
                anytime
              </div>
              <div>
                <div className={styles.form} >
                  <div className={styles.country}>
                    <select
                      className={styles.countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="+91" name="IN">
                        +91
                      </option>
                      <option value="1" name="USA">
                        +1
                      </option>
                      <option value="65" name="singapore">
                        +65
                      </option>
                      <option value="234" name="nigeria">
                        +234
                      </option>
                      <option value="249" name="sudan">
                        +249
                      </option>
                      <option value="48" name="poland">
                        +48
                      </option>
                      <option value="49" name="germany">
                        +49
                      </option>
                    </select>
                    <input
                      type="nummber"
                      placeholder="Phone Number"
                      value={phoneNumber}
                      name="phoneNumber"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className={styles.input_tag}
                      required
                    />
                  </div>
                  <button onClick={requestOtp}>
                    Send OTP
                  </button>

                  <input
                    type="number"
                    placeholder="OTP"
                    value={otp}
                    name="otp"
                    onChange={(e) => setOtp(e.target.value)}
                    className={styles.input_tag}
                  />
                  <div id="recaptcha-container"></div>
                  <button  className={styles.submit_btn} onClick={verifyOTP}>
                    Verify
                  </button>
                </div>
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
        <button className={styles.already_login_btn}>Login</button>
      </div>
    </div>
  );
};

export default OTPPage;
