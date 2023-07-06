import './globals.css'

export const metadata = {
    title: 'November Game',
    description: 'Best game ever',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
