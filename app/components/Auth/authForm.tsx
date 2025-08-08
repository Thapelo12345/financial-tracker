"use client";

import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import LabelInput from "./labelInput";

type Prop = {
    sendData:(data: {username:string; password:string}) => void;
}

export default function AuthForm({ sendData }:Prop) {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [reEnter, setReEnter] = useState("");

  return (
    <form
    onSubmit={(e) => {
        e.preventDefault();
        sendData({ username, password });
      }}
    className="bg-gradient-to-t from-blue-600 to-blue-300 shadow-2xl shadow-black flex flex-col items-center rounded-lg justify-center border-2 border-white w-full sm:w-1/2 p-2 m-2">
      <UserCircleIcon className="w-30 h-20 text-white" />

      <LabelInput InputType="text" title="Usename" sendValue={setUsername} />
      <LabelInput InputType="email" title="Email" sendValue={setEmail} />
      <LabelInput
        InputType="password"
        title="Password"
        sendValue={setPassword}
      />
      <LabelInput
        InputType="password"
        title="Re-enter passwrd"
        sendValue={setReEnter}
      />

      <div className="w-full flex flex-row justify-evenly">
        <button className="text-white self-start p-2 m-2 rounded-lg">
          LogIn
        </button>
        <button className="text-white text-xs self-center p-2 m-2">
          Forgot password
        </button>
        <button className="text-xs text-white self-end p-2 m-2 rounded-lg">
          register an acc
        </button>
      </div>
    </form>
  );
}
