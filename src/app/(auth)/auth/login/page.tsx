import Login_Form from "@/components/forms/Login_Form";

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-4" style={{ backgroundImage: "url('/bg.jpg')" }}>
            <Login_Form />
        </div>
    );
};

export default page;
