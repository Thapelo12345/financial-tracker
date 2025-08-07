"use client"

import Label from "../ui/formUi/label"
import Input from "../ui/formUi/input"

export default function AuthForm(){
    return(
        <form className="border-2 bg-blue-500 mx-auto p-10">
<Label title={"Username"} />
<Input TypeOf={"text"} />
<br />

<Label title={"Email"} />
<Input TypeOf={"email"} />
<br />

<Label title={"Password"} />
<Input TypeOf={"password"} />
<br />

        </form>
    )
}