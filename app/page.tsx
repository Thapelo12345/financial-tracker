import AuthForm from "@/app/components/Auth/authForm";

async function handleFormSubmit(data: { username: string; password: string }) {
"use server";
  console.log("Data from client:", data);
}

export default function Auth() {

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <AuthForm sendData={handleFormSubmit} />
    </div>
  );
}
