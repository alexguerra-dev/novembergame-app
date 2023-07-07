export default function Thought(props) {
    return (
        <div>
            <h1 className="text-3xl">Thought</h1>
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            <p>
                Thought... This is the content of the thought. It should be
                passed through the body of the thought.
            </p>
        </div>
    )
}
