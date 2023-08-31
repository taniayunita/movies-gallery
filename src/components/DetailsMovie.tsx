"use client"
import React from 'react'
import Image from 'next/image'

import { ImageDetailProps } from '@/types'

import ImageStar from "@/assets/image/star.svg"

const DetailsMovie = ({ image, title, vote, overview, releaseDate, language }: ImageDetailProps) => {

    return (
        <div className="hero">
            <Image src={image} alt="poster" className="hero__cover h-[70vh] object-cover bg-center bg-cover" width={100} height={50} />
            <div className="top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className=' padding-x padding-y max-width'>
                <h1 className="hero__detil">
                    {title}
                </h1>
                <p className="hero__subtitle_detil">
                    {overview}</p>
                <div className='flex flex row gap-1 items-center mt-6'>
                    <Image src={ImageStar} width={40} height={40} alt='star' />
                    <p className='text-black text-bold text-md'>{vote}</p>
                </div>
                <p className='text-black text-bold text-md mt-5'>Date Realese : {releaseDate}</p>
                <p className='text-black text-bold text-md mt-5'>Tagline : {language}</p>

            </div>

        </div>
    )
}

export default DetailsMovie