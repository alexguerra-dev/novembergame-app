import Link from 'next/link'

export default function Home() {
    return (
        <main>
            <h1>Home</h1>

            <Link href="/history">
                <p className="p-4">History</p>
            </Link>

            <Link href="/about" className="">
                <p className="p-4 bg-blue-400 text-red-600 w-7">About</p>
            </Link>

            <Link href="/games">Game</Link>

            <Link href="/notes">Notes</Link>
            <Link href="/rules">Rules</Link>
            <Link href="/resume">Resume</Link>

            <p>
                What is the best way to style a React component? I feel like
                there might be multiple diffentt ways to try and style them. I
                could try and style to custome components themselves by adding
                the className propetry. But, there is something in my bones that
                says that is not the way to do it. I think If I am going to
                style the link. Then I need the custome link tag wrapping a
                native tag that is styled.
            </p>

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
