import type { Metadata } from "next";
import FreeUserContent from "./FreeUserContent";

export const metadata: Metadata = {
    title: "Free Users",
};

export default function FreeUserPage() {
    return <FreeUserContent />;
}
