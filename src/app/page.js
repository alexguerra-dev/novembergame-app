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

            <p>
                I am not sure why but I still keep going back to thinking about
                how to style custome react components. It seems like I might
                have to wrap everything in divs.
            </p>

            <p>
                Here is an idea. I should make a thought component that takes as
                the inside of the tag the thought and as a parameter it takes a
                title and a rating. That is a simple way for me to review what I
                have learned in React.
            </p>

            <p>Question: Would it be a good idea to install Faker?</p>

            <p>Remember to keep reading the docs.</p>

            <Link href="/rules" className="text-3xl bg-green-500 rounded-md">
                Rules
            </Link>
        </main>
    )
}
