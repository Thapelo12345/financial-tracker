import Avatar from "../ui/avatar"

type Props = {
    username: string;
}

export default function DashAvatar({ username }:Props){

   return(
     <div className="flex flex-col items-center justify-center m-2">
        <div className="flex flex-col items-center justify-center m-2">
            <Avatar name={username} />
      <h1 className='hidden md:block font-bold text-sm text-white'>{username}</h1>
        </div>
    </div>
   )
}