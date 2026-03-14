import LoginForm from "@/components/forms/LoginForm";

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: "url('/bg.jpg')" }}>
            <LoginForm />
        </div>
    );
};

export default page;
