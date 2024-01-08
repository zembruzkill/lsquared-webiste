'use client'

import Particles from '@tsparticles/react'
// import configs from '@tsparticles/configs'

export default function ParticlesComponent(props: {
    id: string
    done: boolean
}) {
    const options = {
        name: 'Parallax',
        particles: {
            number: { value: 100, density: { enable: true } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: {
                value: { min: 0.1, max: 0.5 },
                animation: { enable: true, speed: 3, sync: false },
            },
            size: {
                value: { min: 1, max: 10 },
                animation: { enable: true, speed: 20, sync: false },
            },
            links: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
            },
            move: { enable: false, speed: 2 },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: 'grab',
                    parallax: { enable: true, smooth: 10, force: 60 },
                },
                onClick: { enable: true, mode: 'push' },
            },
            modes: {
                grab: { distance: 400, links: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 0.8 },
                repulse: { distance: 200 },
                push: { quantity: 4 },
                remove: { quantity: 2 },
            },
        },
        background: { color: '' },
        style: {
            position: 'absolute',
        },
    }

    return props.done && <Particles id={props.id} options={options} />
}
