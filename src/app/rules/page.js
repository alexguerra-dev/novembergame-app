import Link from 'next/link'

export default function Rules() {
    return (
        <div>
            <h1>Rules</h1>
            <p>
                This is how we play November Games. It is a pretty easy to learn
                game. There are the mechanics of the game and then the strategy.
                I guess that is true of any game.
            </p>

            <h2>Number of players</h2>
            <p>3-12</p>

            <p>I should have a way to bet back to the home page.</p>

            <Link href="/">Home</Link>
        </div>
    )
}
