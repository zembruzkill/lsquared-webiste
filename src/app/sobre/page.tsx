'use client'

import Header from '@/components/layout/headers/Header'
import ImgSlider from '@/components/ImgSlider'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import AboutComponent from '@/components/AboutComponent'

const RevealOnScroll = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const onWindScroll = () => {
            const element = ref.current as HTMLElement | null
            if (element) {
                const { top } = element.getBoundingClientRect()
                const isVisible = top < window.innerHeight
                setIsVisible(isVisible)
            }
        }

        window.addEventListener('scroll', onWindScroll)
        return () => {
            window.removeEventListener('scroll', onWindScroll)
        }
    }, [])

    const classes = `transition-opacity duration-3000
        ${isVisible ? 'opacity-100' : 'opacity-0'}`

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    )
}

export default function Sobre() {
    return (
        <>
            <div className="bg-white items-center justify-center">
                <Header backgroundColor="blackground" />
                <AboutComponent />
            </div>
        </>
    )
}
