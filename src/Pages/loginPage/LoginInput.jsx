import React, {  useState } from 'react'
import styles from "../registerPage/Register.module.css";
import { BiShow, BiHide } from "react-icons/bi";

const LoginInput = ({setCurrentLoginData,handleLogin}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);


    const handlClick=(e)=>{
        e.preventDefault()
        let temp={
            email,
            password
        }
        setCurrentLoginData(temp)
        handleLogin()
        
    }

  return (
    <div>
    <form className={styles.form} onSubmit={handlClick}>
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
      <button type="submit" className={styles.submit_btn} >
        Submit
      </button>
    </form>
  </div>
  )
}

export default LoginInput