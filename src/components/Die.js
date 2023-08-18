import React from 'react'

const Die = ({ value, canRoll, onClick }) => {
    const bgColor = canRoll ? 'bg-white' : 'bg-red-500'
    const dots = {
        1: 'center',
        2: 'top-right bottom-left',
        3: 'top-right bottom-left center',
        4: 'top-left top-right bottom-left bottom-right',
        5: 'top-left top-right bottom-left bottom-right center',
        6: 'top-left top-right middle-left middle-right bottom-left bottom-right',
    }

    return (
        <div
            className={`${bgColor} die flex items-center justify-center w-16 h-16 border border-black rounded-md`}
            onClick={onClick}
            disabled={!canRoll}
        >
            {dots[value]?.includes('top-left') && (
                <span
                    className="dot absolute top-2 left-2"
                    disabled={!canRoll}
                />
            )}
            {dots[value]?.includes('top-right') && (
                <span className="dot absolute top-2 right-2" />
            )}
            {dots[value]?.includes('middle-left') && (
                <span className="dot absolute left-2" />
            )}
            {dots[value]?.includes('middle-right') && (
                <span className="dot absolute right-2" />
            )}
            {dots[value]?.includes('bottom-left') && (
                <span className="dot absolute bottom-2 left-2" />
            )}
            {dots[value]?.includes('bottom-right') && (
                <span className="dot absolute bottom-2 right-2" />
            )}
            {dots[value]?.includes('center') && (
                <span className="dot absolute" />
            )}
        </div>
    )
}

export default Die
