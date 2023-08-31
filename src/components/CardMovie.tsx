"use client"

import React from 'react'
import Image from 'next/image'

import { CardMovieProps } from '@/types'

import ImageStar from '@/assets/image/star.svg'


const CardMovie = ({ title, vote, image, onClick }: CardMovieProps) => {

    return (
        
        <div className='card__movie_container hover:cursor-pointer hover:-translate-y-2 transition-transform transform duration-500' onClick={onClick}>
            <Image className='movie__image w-[100%] h-full rounded-2xl' width={100} height={100} src={image} alt='movie' />
            <div className="text__movie absolute h-[15%] bottom-[2%] left-[2%] w-[95%] rounded-xl bg-[#DADADA] bg-opacity-30 backdrop-blur">
                <div className='w-full p-2'>
                    <h1 className='text-sm truncate text-white font-bold text-center'>{title}</h1>

                </div>
            </div>
            <div className="text__movie absolute w-[30%] h-[40px] top-[2%] right-[2%] rounded-xl bg-[#DADADA] bg-opacity-30 backdrop-blur">
                <div className='flex flex row gap-1 items-center'>
                    <Image src={ImageStar} width={20} height={20} alt='star' />
                    <p className='text-sm'>{vote}</p>
                </div>
            </div>

        </div>
    )
}

export default CardMovie