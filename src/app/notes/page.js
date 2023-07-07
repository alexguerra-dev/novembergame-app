import Image from 'next/image'
import Die from '../../components/Die' // import the Die component
import Thought from '../../components/Thought'
import Task from '../../components/Task'

export default function Notes() {
    return (
        <div className="text-white">
            <h1 className="text-3xl font-serif font-light">Notes</h1>
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
                for different fleeting things.
            </p>
            <ul>
                <li>Currently listing to</li>
                <li>Idea</li>
                <li>Goal</li>
                <li>Rule</li>
            </ul>
            <Thought title="The first thought">
                <p>
                    Currently there is nothing I can change about the content of
                    that thought.
                </p>
            </Thought>
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
            <p>
                Not everything is a thought. I think that might actually be the
                case. There is a difference between a thought and an idea.
                Maybe, there are three. Thoughts, ideas, and... Dang, I forgot.
                That might actually be the thing I was forgetting. That was a
                sentence that made no sense. It is pretty late and I should
                probably go to bed. I think I found a good stopping place. I
                pushed it to github and I am waiting to see it on
            </p>
            <a href="https://develop.novembergame.com/">
                https://develop.novembergame.com/
            </a>
            <p>
                Using the p tag does seem to give me kind of a linear view of
                the progression of thoughts and notes. The more you add to the
                record the longer the document is. You are moving down through
                the passage of time. How is that different from scrolling into
                the most current time? If there is a difference does it have any
                implications in the advancement of notes or journalizing? This
                is something that I am going to have to think about. I think
            </p>
            <p>Make a component for sitting down to work.</p>
            <p>July 7, 2023</p>
            <p>
                I have a keyboard maestro shortcut for inserting the date. This
                is is going to be useful in writing notes about when I come back
                to the project.
            </p>
            <p>I want to make my coding experience fun.</p>
            <Task>Make the task component</Task>
            <Image src="/dummy_600x400.png" width={600} height={400} />
        </div>
    )
}
