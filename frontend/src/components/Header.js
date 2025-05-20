import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs';

import Link from 'next/link';

function Header() {
    return (
        <header className="w-full bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-purple-500"
                        >
                            <path d="M2 12c.5-4.5 4-8 8-8s7.5 3.5 8 8c-.5 4.5-4 8-8 8s-7.5-3.5-8-8Z" />
                            <path d="M12 12v.01" />
                            <path d="M10 10v.01" />
                            <path d="M14 14v.01" />
                        </svg>
                    </Link>
                    <nav className="hidden md:flex items-center gap-6">
                        <Link href="./" className="text-white font-medium px-3 py-2 rounded-md bg-slate-800">
                            Inicio
                        </Link>
                        <Link href="/musicApp" className="text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800/60">
                            Escuchar
                        </Link>
                        <Link
                            href="/conoceme"
                            className="text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800/60"
                        >
                            Conoceme
                        </Link>
                        <Link
                            href="/subeMusica"
                            className="text-slate-300 hover:text-white px-3 py-2 rounded-md hover:bg-slate-800/60"
                        >
                            Sube Tu Muscia
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    {/* Aquí podrías colocar UserButton o SignIn/SignOut si deseas */}
                    <SignedOut>
                        <SignInButton />
                        <SignUpButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </header>
    );
}

export default Header;