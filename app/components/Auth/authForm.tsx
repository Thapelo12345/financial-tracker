"use client";

import { createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/lib/firebaseConfig";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { useState } from "react";
import LabelInput from "./labelInput";

type Prop = {
  sendData: (data: {
    username: string;
    email: string;
    password: string;
    reEnter: string;
  }) => void;
};

const googleProvider = new GoogleAuthProvider();
const faceBookProvider = new FacebookAuthProvider()
faceBookProvider.addScope("email")

export default function AuthForm({ sendData }: Prop) {

  const [formState, setForm] = useState("logIn");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnter, setReEnter] = useState("");

  // google login
async function handleGoogleRegister(){
  try {
    const result = await signInWithPopup(auth, googleProvider)
    alert("login successful!.")
  } catch (error) {
   alert(error)
  }
}

//facebook log in
async function handleFacebookRegister(){
  try{
      await signInWithPopup(auth, faceBookProvider)
      alert("successfuly signed in!..")
  }
  catch(error){
    alert(error)
  }
}

  async function handleCreateAccount(){
    try{
      await createUserWithEmailAndPassword(auth, email, password)
      alert("account created successfully!.")
    }
    catch(error){
      alert(error)
      console.log(error)
    }
  }

  return (
    <form
      onSubmit={handleCreateAccount}
      className="bg-gradient-to-t from-black to-blue-300 shadow-2xl shadow-black flex flex-col items-center rounded-lg justify-center border-2 border-white w-full sm:w-1/2 p-2 m-2"
    >
      <UserCircleIcon className="w-30 h-20 text-white" />

      <LabelInput InputType="text" title="Usename" sendValue={setUsername} />

      {formState === "register" && (
        <LabelInput InputType="email" title="Email" sendValue={setEmail} />
      )}

      <LabelInput
        InputType="password"
        title="Password"
        sendValue={setPassword}
      />
      {formState === "register" && (
        <LabelInput
          InputType="password"
          title="Re-enter passwrd"
          sendValue={setReEnter}
        />
      )}

      {/* socila media log in */}

      <label className="text-white text-xs m-2">
{
  formState === 'logIn'?
    "Log In with your social media account" :
    "Create account with social media "
  
}
      </label>
      <div className="w-full flex flex-row items-center justify-center">
        <button 
        className="text-lg rounded-lg text-white hover:border-2 hover:border-white m-2 p-2"
        type="button"
        onClick={handleFacebookRegister}
        >
          <SiFacebook className="w-7 h-7" color="#0866FF" />
        </button>

        <button 
        className="text-lg rounded-lg text-white hover:border-2 hover:border-white m-2 p-2"
        type="button"
        onClick={handleGoogleRegister}
        >
          <SiGoogle className="w-7 h-7" color="4285F4" />
        </button>
      </div>

      {/* button logIn */}
      <div className="w-full flex flex-row justify-evenly">
        {formState === "logIn" && (
          <>
            <button
              className="text-white self-start p-2 m-2 rounded-lg"
              type="submit"
            >
              LogIn
            </button>
            <button className="text-white text-xs self-center p-2 m-2">
              Forgot password
            </button>
            <button
              className="text-xs text-white self-end p-2 m-2 rounded-lg"
              type="button"
              onClick={() => setForm("register")}
            >
              register an acc
            </button>
          </>
        )}

        {formState === "register" && (
          <>
            <button className="text-white self-start p-2 m-2 rounded-lg">
              Submit
            </button>
            <button
              className="text-white self-start p-2 m-2 rounded-lg"
              onClick={() => setForm("logIn")}
            >
              Back
            </button>
          </>
        )}
      </div>
    </form>
  );
}
