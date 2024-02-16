'use client'

import { Carousel } from 'flowbite-react'
import Image from 'next/image'

export default function DefaultCarousel() {
    return (
        <Carousel className="w-full h-80 object-cover  ">
            <Image className='h-full'
                alt="slider image" width={1200} height={1200}
                src="/images/096A0522.jpg"
            />
            <Image className='h-full'
                alt="slider image" width={1200} height={1200}
                src="/images/096A0583.jpg"
            />
            <Image className='h-full'
                alt="slider image" width={1200} height={1200}
                src="/images/096A0599.png"
            />
            <Image className='h-full'
                alt="slider image"  width={1200} height={1200}
                src="/images/rock.jpg"
            />
            <Image className='h-full'
                alt="slider image" width={1200} height={1200}
                src="/images/head-office.jpg"
            />
        </Carousel>
    )
}


