import Die from '../../components/Die' // import the Die component
import Thought from '../../components/Thought'

export default function Notes() {
    return (
        <>
            <h1 className="text-3xl">Notes</h1>
            <p>Notes</p>
            <p>This is where I am to write notes.</p>
            <p>
                I find that when I come back to a project after a long time it
                is hard to get back up to speed. I guess it does not have to be
                a very long time...
            </p>
            <p>Ada is being a butt.</p>
            <p>I forgot what I was going to write... *SIGH*</p>
            <p>
                Oh, I remember now. I was going to make a list of useful
                components for this live development style. I want a component
                for different fleating things.
            </p>
            <ul>
                <li>Currently listing to</li>
                <li>Idea</li>
                <li>Goal</li>
                <li>Rule</li>
            </ul>
            <Thought title="The first thought"></Thought>
            <p>
                Currently there is nothing I can change about the content of
                that thought.
            </p>
            <Thought title="The second thought">
                I think that I can pass the content of this tag into the thought
                component. That is a good thing. Now, when I have a thought I
                can put it in a custom thing. That thing should be really easy
                to use. I think that I can practice making it interactive. I
                guess what I mean by that is I can send it properties and it
                dynamically render. I guess that is the whole thing about React.
                Duh.
            </Thought>
            <Thought title="One thought to fill them all">
                I just need a dummy thought so I can see what thoughts look like
                when the are in a row.
            </Thought>
            <Die /> {/* use the Die component */}
        </>
    )
}
