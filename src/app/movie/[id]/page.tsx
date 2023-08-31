"use client"
import React, { useState, useEffect } from 'react'

import { DetailsMovie, TopRatedMovie } from '@/components'

import { apiMovie } from '@/service/api'

const DetailMovie = ({ params }: any) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)

    const fethMovieById = async () => {
        try {
            const response = await apiMovie.get(`/movie/${params.id}`);
            setData(response.data);
            console.log(response)
            setLoading(false);
        } catch (error) {
            console.error('Error fetching top rated movies:', error);
            setLoading(false);
        }
    }

    // console.log("DATA => ", data?.poster_path)

    useEffect(() => {
        fethMovieById()
    }, [])

    return (
        <div>
            <DetailsMovie language={data?.tagline} releaseDate={data?.release_date} image={`https://image.tmdb.org/t/p/w300${data?.poster_path}`} title={data?.title} vote={data?.vote_average} overview={data?.overview} />

            <div className='mt-12 padding-x padding-y max-width' id='top-rated'>
                <div className='home__text-container'>
                    <h1 className='text-4xl font-extrabold'>Another Top Trend Movie</h1>
                    <p>Explore out top movie you might be like</p>
                </div>
            </div>
            <TopRatedMovie />
        </div>
    )
}

export default DetailMovie