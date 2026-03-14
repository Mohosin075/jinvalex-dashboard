import ResetPassword_Form from "@/components/forms/ResetPassword_Form";

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: "url('/bg.jpg')" }}>
            <ResetPassword_Form />
        </div>
    );
};

export default page;
