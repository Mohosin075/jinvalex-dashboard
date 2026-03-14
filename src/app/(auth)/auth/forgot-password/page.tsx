import ForgotPassword_Form from "@/components/forms/ForgotPassword_Form";

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: "url('/bg.jpg')" }}>
            <ForgotPassword_Form />
        </div>
    );
};

export default page;
