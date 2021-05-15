import React from 'react'
import './Button.css'


const STYLES = [
    'btn--primary',
    'btn--outline'
]

const SIZES = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    // First we check the buttonStyle
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0]

    // Then we use the checked style to dynamically build the button
    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onclick={onClick} type={type} >
            { children}
        </button >

    )

}