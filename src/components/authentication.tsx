import { UserCircleIcon } from "@heroicons/react/20/solid";
import LabelInput from "./ui/form/labelInput";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { handleGooglAthentication } from "./auth/googleLogIn";
import EmailAuthentication from "./auth/emailLogIn";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function AuthenticationForm(){

  const navigate = useNavigate()

  const [formState, setForm] = useState("logIn");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnter, setReEnter] = useState("");

  useGSAP(() => {
    gsap.fromTo(
      "#formAnimation",
      {
        scale: 0.2,
        rotateY: 360,
      },
      {
        scale: 1,
        rotateY: 0,
        duration: 1,
        ease: "expo.in",
      }
    );
  });

   const handleGoogleAuthClick = async () => {
    await handleGooglAthentication(navigate);
  };
    return(
        <form 
        onSubmit={(e)=>{
          e.preventDefault()
  EmailAuthentication(
  {
    registerLogIn: formState,
    email,
    password,
    reEnterPassword: reEnter,
    userName: username,
    NavigateFunction: navigate
  }
          )
        }}
        id="formAnimation"
        className="backface-hidden bg-[whitesmoke] shadow-2xl shadow-black flex flex-col items-center rounded-lg justify-center border-2 border-white w-full sm:w-1/2 p-2 m-2"
        >
      <UserCircleIcon className="w-30 h-20 text-black/50" />

      {formState === "register" && (
        <LabelInput
          InputType="text"
          title="Usename"
          inputedValue={username}
          sendValue={setUsername}
        />
      )}

      <LabelInput
        InputType="email"
        title="Email"
        inputedValue={email}
        sendValue={setEmail}
      />

      <LabelInput
        InputType="password"
        title="Password"
        inputedValue={password}
        sendValue={setPassword}
      />

      {formState === "register" && (
        <LabelInput
          InputType="password"
          title="Re-enter passwrd"
          inputedValue={reEnter}
          sendValue={setReEnter}
        />
      )}

      {/* socila media log in */}
       <label className="text-black text-xs m-2">
        {formState === "logIn"
          ? "Log In with your social media account"
          : "Create account with social media "}
      </label>

       <div className="w-20 h-20 flex flex-row items-center justify-center">
        <button
          className="text-lg rounded-lg text-black border-4 border-white shadow-lg shadow-white m-2 p-2"
          type="button"
          onClick={handleGoogleAuthClick}
        >
          {/* <SiGoogle className="w-7 h-7" color="4285F4" /> */}
          <img
            className="w-full h-full"
          alt="Google Icon"
          // src="assets/google-image.png"
          src="/google-image.png"
          ></img>
        </button>
      </div>


{/* button logIn */}
      <div className="w-full flex flex-row justify-evenly">
        {formState === "logIn" && (
          <>
            <button
              className="text-black self-start p-2 m-2 rounded-lg"
              type="submit"
            >
              LogIn
            </button>
            <button className="text-black text-xs self-center p-2 m-2">
              Forgot password
            </button>

            {/* reset btn */}
            <button
              className="text-xs text-black self-end p-2 m-2 rounded-lg"
              type="button"
              onClick={() => setForm("register")}
            >
              register an acc
            </button>
          </>
        )}

        {formState === "register" && (
          <>
            <button
              className="text-black self-start p-2 m-2 rounded-lg"
              type="submit"
            >
              Submit
            </button>

            <button
              className="text-black self-start p-2 m-2 rounded-lg"
              onClick={() => setForm("logIn")}
            >
              Back
            </button>
          </>
        )}
      </div>
        </form>
    )
}