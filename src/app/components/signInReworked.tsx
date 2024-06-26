import { SignIn } from '@clerk/nextjs';

export default function SignInReworked() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <SignIn routing={"hash"} appearance={{
                elements: {
                    footer: {
                        display: 'none',
                    },
                },
            }}/>
        </div>
    );
};