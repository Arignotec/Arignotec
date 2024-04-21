import {UserButton} from "@clerk/nextjs";

export function Header() {
    return <div className="border-b">
        <div className="container mx-auto">
            Arignotec
            <UserButton />
        </div>
    </div>
}