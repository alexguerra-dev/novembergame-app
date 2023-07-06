import Link from 'next/link'

export default function History() {
    return (
        <>
            <h1>History</h1>

            <p>
                This is where I will document what I am doing. I can make it
                look pretty as I go. I think the first thing I want is to make a
                few pages.
            </p>

            <ul>
                <li>Home</li>
                <li>History</li>
                <li>Resume</li>
                <li>About</li>
            </ul>

            <p>I think that is a good place to start.</p>

            <p>
                A note to myself. Tailwind does not have any styling at all. So,
                even unordered lists look unstyled.
            </p>

            <h2>Thinking in steps</h2>

            <ol>
                <li>Make some pages</li>
                <li>Be able to click between the pages</li>
                <li>Have a central sense of home</li>
            </ol>

            <Link href="/">Home</Link>

            <p>It really does look strange with this styling.</p>
        </>
    )
}
