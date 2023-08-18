import React from 'react'

export default function UnrollableDice({ dice }) {
    return (
        <div>
            {dice.map((die, index) => (
                <button
                    key={index}
                    className="w-16 h-16 border-2 border-black bg-gray-300 text-gray-600 text-2xl flex items-center justify-center m-2"
                    disabled
                >
                    {die.value}
                </button>
            ))}
        </div>
    )
}
