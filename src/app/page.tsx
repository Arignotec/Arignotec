import { SignOutButton } from "@clerk/nextjs";
import SignInReworked from "@/app/components/signInReworked";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <SignInReworked/>
          <SignOutButton/>
          <h1 className={"text-danger"}>Hello World</h1>
      </main>
  );
}
