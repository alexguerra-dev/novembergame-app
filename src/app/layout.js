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
                <div className="flex flex-col h-screen justify-between">
                    <header className="h-10 bg-violet-500">
                        <p>Header</p>
                    </header>
                    <main className="mb-auto h-10 bg-slate-200">
                        {children}
                    </main>

                    <footer className="h-10 bg-indigo-700 ">
                        <Link href="/">Home</Link>
                        <Link href="/thoughts">Thoughts</Link>
                        <Link href="/resume">Resume</Link>
                        <Link href="/about">About</Link>
                    </footer>
                </div>
            </body>
        </html>
    )
}
