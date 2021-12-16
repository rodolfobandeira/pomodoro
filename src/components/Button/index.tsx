import React from 'react';

interface Props {
    text: string
    type?: "button" | "submit" | "reset"
    onClick?: () => void
}

function Button({ onClick, type, text }: Props) {
    return (
        <button
        onClick={onClick}
        type={type}
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
        {text}
    </button>
    )
}

export default Button;
