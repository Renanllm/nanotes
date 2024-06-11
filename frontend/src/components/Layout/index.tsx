import { PropsWithChildren } from "react";
import { Header } from "../Header";

export function Layout({ children }: PropsWithChildren) {
    return (
        <div className="w-full h-full">
            <main className="max-w-screen-lg h-full mr-auto ml-auto grid gap-5">
                <Header />
                {children}
            </main>
        </div>
    )
}