import AuthForm from "@/app/components/Auth/authForm";


export default function Auth() {

  function authSubmit(formData: { username: string; password: string }) {
    console.log(`Email: ${formData.username}\n password: ${formData.password}`);
  }
  

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <AuthForm />
    </div>
  );
}
