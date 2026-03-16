import type { Metadata } from "next";
import PaymentContent from "./PaymentContent";

export const metadata: Metadata = {
    title: "Payments",
};

export default function PaymentPage() {
    return <PaymentContent />;
}
