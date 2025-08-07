"use client"

type Props ={
    TypeOf: string;

}

export default function Input({ TypeOf } :Props) {
    return(
        <input
        className="p-2 m-4"
        type={TypeOf}
        required>
        </input>
    )
}