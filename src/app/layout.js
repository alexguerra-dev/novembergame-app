import Link from 'next/link'
import './globals.css'

export const metadata = {
    title: 'November Game',
    description: 'Best game ever',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="h-screen bg-gradient-to-r from-violet-600 to-indigo-600">
                <div className="flex flex-col">
                    <header className=" bg-opacity-50 bg-slate-700 pb-2 mb-8">
                        <Link href="/">
                            <h2 className="text-4xl text-white">
                                November Game
                            </h2>
                        </Link>
                        <h3 className="text-2xl text-gray-300 font-thin">
                            By Alex Guerra
                        </h3>
                    </header>
                    <main className="pt-5">{children}</main>

                    <footer className="bg-black bg-opacity-60 mt-8">
                        <Link className="text-lg p-5 text-white" href="/">
                            Home
                        </Link>
                        <Link className="text-lg p-5 text-white" href="/resume">
                            Resume
                        </Link>
                        <Link className="text-lg p-5 text-white" href="/about">
                            About
                        </Link>

                        <p className="font-thin text-lg font-mono text-white">
                            Created by Alex Guerra. &copy; 2023
                        </p>
                    </footer>
                </div>
            </body>
        </html>
    )
}
