import React from 'react'
import './Button.scss'

export default function ({ title }: {title: string}) {
    return (
        <button className="UI-Button">{title}</button>
    )
}