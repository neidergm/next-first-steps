import { Navbar } from "@/components";

export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col p-24 items-center">
                {children}
            </main>
        </>
    );
}