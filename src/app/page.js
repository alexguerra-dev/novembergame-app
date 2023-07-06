import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <h1>Home</h1>

            <Link href="/history">History</Link>

            <p>
                I made a link from the homepage to the history page. I should be
                able to click back again. That should be the next thing that I
                add.
            </p>

            <Link href="/rules" className="text-3xl">
                Rules
            </Link>
        </main>
    )
}
