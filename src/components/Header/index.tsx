import { AlignJustify, Search } from "react-feather";
import { Separator } from "../ui/separator";

export function Header() {
    return (
        <header className="w-full">
            <div className="h-full flex justify-between items-center">
                <h1 className="scroll-m-20 text-3xl font-bold tracking-tight lg:text-4xl">Nanotes</h1>
                <div className="flex gap-3">
                    <Search />
                    <AlignJustify />
                </div>
            </div>
            <Separator />
        </header>
    )
}