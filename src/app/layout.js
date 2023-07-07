import Link from 'next/link'
import './globals.css'

export const metadata = {
    title: 'November Game',
    description: 'Best game ever',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="flex flex-col">
                    <header className=" bg-violet-500">
                        <h2 className="text-4xl">November Game</h2>
                        <h3 className="text-2xl">By Alex Guerra</h3>
                    </header>
                    <main className="bg-slate-800">{children}</main>

                    <footer className=" bg-indigo-700 mt-8">
                        <Link className="text-lg p-5 text-white" href="/">
                            Home
                        </Link>
                        <Link
                            className="text-lg p-5 text-white"
                            href="/thoughts"
                        >
                            Thoughts
                        </Link>
                        <Link className="text-lg p-5 text-white" href="/resume">
                            Resume
                        </Link>
                        <Link className="text-lg p-5 text-white" href="/about">
                            About
                        </Link>

                        <p>Remember to add copyright</p>
                    </footer>
                </div>
            </body>
        </html>
    )
}
