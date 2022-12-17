import React from 'react'

export default function Bookmarked({fll = "#FFB800"}) {
    return (
        <svg width="25" height="30" viewBox="0 0 25 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_368_13)">
            <path d="M0 6.4375V28.766C0 29.4465 0.539323 30 1.20234 30C1.44974 30 1.69219 29.9238 1.89505 29.7766L9.5 24.3125L17.1049 29.7766C17.3078 29.9238 17.5503 30 17.7977 30C18.4607 30 19 29.4465 19 28.766V6.4375C19 5.0918 17.9362 4 16.625 4H2.375C1.0638 4 0 5.0918 0 6.4375Z" fill={fll}/>
            </g>
            <circle cx="17.5" cy="7.5" r="7.5" fill="#FF0000"/>
            <path d="M13.333 7.08335L16.4012 10L20.833 4.16669" stroke={fll} stroke-width="1.66667" stroke-linecap="round"/>
            <defs>
            <clipPath id="clip0_368_13">
            <rect width="19" height="26" fill="white" transform="translate(0 4)"/>
            </clipPath>
            </defs>
        </svg>
    )
}
