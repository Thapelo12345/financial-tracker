"use client"

type Props = {
    title: string;
}
export default function Label({ title }: Props){
    return(
        <label>{ title }</label>
    )
}