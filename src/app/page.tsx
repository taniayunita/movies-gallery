"use client"
import React, { useEffect, useState } from 'react'
import { Filter, Hero, Search, CardMovie, TopRatedMovie } from '@/components'

export default function Home() {

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='top-rated'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Top Rated Movies</h1>
          <p>Explore out top rated movie you might be like</p>
        </div>
      </div>
      <TopRatedMovie />

    </main>
  )
}
