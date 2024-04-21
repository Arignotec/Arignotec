import { SignIn, SignOutButton } from "@clerk/nextjs";
import SignInForm from "@/app/components/signInForm";
import SignInReworked from "@/app/components/signInReworked";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <SignInReworked />
        <SignOutButton />
    </main>
  );
}
