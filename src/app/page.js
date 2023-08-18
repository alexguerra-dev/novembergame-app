'use client'

import { useState } from 'react'
import Link from 'next/link'

import Die from '../components/Die'
import DicePanel from '../components/DicePanel'
import RollableDice from '../components/RollableDice'
import UnrollableDice from '../components/UnrollableDice'

function scoreRules(dice) {
    let score = 0
    const counts = new Array(6).fill(0) // To count the occurrence of each dice number

    dice.forEach((die) => counts[die - 1]++)

    // Check for 5 of a kind
    if (counts.some((count) => count === 5)) {
        return counts.indexOf(5) === 0 ? 5000 : 100 * (counts.indexOf(5) + 1)
    }

    // Check for straight
    if (
        counts.slice(0, 5).every((num) => num === 1) ||
        counts.slice(1).every((num) => num === 1)
    ) {
        return 1000
    }

    // Check for 3 of a kind and individual 1 or 5
    counts.forEach((count, i) => {
        if (count >= 3) score += 100 * (i + 1)
        if (i === 0 || i === 4) score += (count % 3) * (i === 0 ? 100 : 50)
    })

    return score
}

export default function Game() {
    const [players, setPlayers] = useState([
        { name: 'Player 1', score: 0 },
        { name: 'Player 2', score: 0 },
    ])
    const [currentPlayer, setCurrentPlayer] = useState(0)
    const [dice, setDice] = useState([
        { value: 1, canRoll: true },
        { value: 2, canRoll: true },
        { value: 3, canRoll: true },
        { value: 4, canRoll: false },
        { value: 5, canRoll: false },
    ])
    const [turnScore, setTurnScore] = useState(0)

    const rollDice = () => {
        // Roll the rollable dice
        const rolledDice = dice.map((die) => ({
            value: die.canRoll ? Math.floor(Math.random() * 6) + 1 : die.value,
            canRoll: die.canRoll,
        }))

        let rollScore = 0

        // Calculate the score for the current roll
        rolledDice.forEach((die) => {
            if (die.value === 1) {
                rollScore += 100
            } else if (die.value === 5) {
                rollScore += 50
            }
        })

        const newTurnScore = turnScore + rollScore

        setDice(rolledDice)
        setTurnScore(newTurnScore)
    }

    const toggleRollability = (index) => {
        const newDice = dice.map((die, i) => {
            if (i === index) {
                return {
                    value: die.value,
                    canRoll: !die.canRoll,
                }
            }
            return die
        })
        setDice(newDice)
    }

    const endTurn = () => {
        const newPlayers = [...players]
        newPlayers[currentPlayer].score += turnScore
        setPlayers(newPlayers)
        setTurnScore(0)
        setCurrentPlayer((currentPlayer + 1) % players.length)
        resetDice()
    }

    const resetDice = () => {
        const newDice = dice.map((die) => ({ ...die, canRoll: true }))
        setDice(newDice)
    }

    const checkWinCondition = () => {
        if (players[currentPlayer].score >= 5000) {
            // TODO: Handle game over
            console.log(`${players[currentPlayer].name} wins the game!`)
        }
    }

    const rollableDice = dice.filter((die) => die.canRoll)
    const unrollableDice = dice.filter((die) => !die.canRoll)

    return (
        <div>
            <div>
                {players.map((player, index) => (
                    <p key={index}>
                        {player.name}: {player.score}
                    </p>
                ))}
            </div>

            <RollableDice dice={rollableDice} onClick={toggleRollability} />
            <UnrollableDice dice={unrollableDice} />

            <button onClick={rollDice}>Roll Dice</button>
            <button onClick={endTurn} disabled={turnScore === 0}>
                End Turn
            </button>

            <p>Current Turn Score: {turnScore}</p>
            <p>Current Player: {players[currentPlayer].name}</p>
        </div>
    )
}

// function Die({ value, canRoll, onClick }) {
//     const bgColor = canRoll ? 'bg-white' : 'bg-red-500'

//     return (
//         <button
//             className={`w-16 h-16 border-2 border-black ${bgColor} text-2xl flex items-center justify-center m-2`}
//             onClick={onClick}
//             disabled={!canRoll}
//         >
//             {value}
//         </button>
//     )
// }
