import Link from 'next/link'

import Die from './components/Die'

export default function Home() {
    return (
        <main>
            <p className="text-white text-4xl text-center">
                Feel free to look around the page. I am looking for job
                opportunities so please feel free to contact me.
            </p>
            <div className="w-3/4 bg-gray-700 flex ">
                <Link href="/history">
                    <p className="p-4 bg-red-400 m-5 rounded shadow-lg shadow-gray-800">
                        History
                    </p>
                </Link>
                <Link href="/about">
                    <p className="p-4 bg-blue-400 text-red-600">About</p>
                </Link>

                <Link href="/games">
                    <p className="p-4 bg-lime-400">Game</p>
                </Link>
                <Link href="/notes">
                    <p className="p-4 bg-cyan-400">Notes</p>
                </Link>
                <Link href="/rules">
                    <p className="p-4 bg-pink-400">Rules</p>
                </Link>
                <Link href="/resume">
                    <p className="p-4 bg-orange-400">Resume</p>
                </Link>
            </div>
            <div className="m-5 bg-gray-400">
                <p>Here are some dice to play with</p>

                <Die />
                <Die />
                <Die />
                <Die />
                <Die />

                <p>Currently they don't do very much yet.</p>
            </div>
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
                how to style custom react components. It seems like I might have
                to wrap everything in divs.
            </p>
            <p>
                Here is an idea. I should make a thought component that takes as
                the inside of the tag the thought and as a parameter it takes a
                title and a rating. That is a simple way for me to review what I
                have learned in React.
            </p>
            <p>Question: Would it be a good idea to install Faker?</p>
            <p>Remember to keep reading the docs.</p>!
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Tailwind Snippets
            </button>
            <iframe
                src="https://open.spotify.com/embed/track/3GgvAt2Cyp7GRhYy9Luus1?utm_source=generator"
                width="100%"
                height="152"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
            <iframe
                src="https://open.spotify.com/embed/track/53ygARQf1f30Z0EmXPHWGT?utm_source=generator"
                width="100%"
                height="352"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            ></iframe>
        </main>
    )
}
