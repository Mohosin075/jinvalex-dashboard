import OTPVerify_Form from "@/components/forms/OTPVerify_Form";

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: "url('/bg.jpg')" }}>
            <OTPVerify_Form />
        </div>
    );
};

export default page;
