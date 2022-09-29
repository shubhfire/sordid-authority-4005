import React, { useState } from "react";
import { GiSmartphone } from "react-icons/gi";
import styles from "./Register.module.css";

const OTPPage = () => {
  const [otp, setOtp] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  // const clickVerifire = (e) => {
  //   e.preventDfault()
  //   let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha-container");

  //   firebase
  //     .auth()
  //     .signInWithPhoneNumber(phoneNumber, recaptcha)
  //     .then((e) => {
  //       if (otp == null) {
  //         return;
  //       }
  //       e.confirm(otp)
  //         .then((e) => {
  //           console.log("Verified");
  //         })
  //         .catch((e) => {
  //           alert("Wrong OTP");
  //         });
  //     });
  // };

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
                <form className={styles.form}>
                  <div className={styles.country}>
                    <select className={styles.countryCode}>
                      <option value="91" name="IN">
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
                      onChange={(e)=>setPhoneNumber(e.target.value)}
                      className={styles.input_tag}
                      required
                    />
                  </div>

                  <input
                    type="number"
                    placeholder="OTP"
                    value={otp}
                    name="otp"
                    onChange={(e)=>setOtp(e.target.value)}
                    className={styles.input_tag}
                    required
                  />
                  <div id="recaptcha-container"></div>
                  <button type="submit" className={styles.submit_btn} >
                    Verify
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
        <button className={styles.already_login_btn}>Login</button>
      </div>
    </div>
  );
};

export default OTPPage;
