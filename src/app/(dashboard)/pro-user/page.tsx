import type { Metadata } from "next";
import ProUserContent from "./ProUserContent";

export const metadata: Metadata = {
    title: "Pro Users",
};

export default function ProUserPage() {
    return <ProUserContent />;
}
