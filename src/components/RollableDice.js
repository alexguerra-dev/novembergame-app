import React from 'react'

export default function RollableDice({ dice, onClick }) {
    return (
        <div>
            {dice.map((die, index) => (
                <button
                    key={index}
                    className="w-16 h-16 border-2 border-black bg-white text-2xl flex items-center justify-center m-2"
                    onClick={() => onClick(index)}
                >
                    {die.value}
                </button>
            ))}
        </div>
    )
}
