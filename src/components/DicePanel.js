import React from 'react'
import Die from './Die'

export default function DicePanel({ dice, onClick }) {
    return (
        <div>
            {dice.map((die, i) => (
                <button key={i} onClick={() => onClick(i)}>
                    {die}
                    <Die value={die} canRoll={die.canRoll} />
                </button>
            ))}
        </div>
    )
}
