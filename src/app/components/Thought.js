export default function Thought(props) {
    return (
        <div className="bg-slate-300 my-4 px-11 w-2/3 rounded-xl">
            <h2 className="text-center text-3xl">{props.title}</h2>
            <p>{props.children}</p>
        </div>
    )
}
