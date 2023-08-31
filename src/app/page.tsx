import Image from 'next/image'
import { Filter, Hero, Search } from '@/components'
import { yearsOfMovieRelease } from '@/constants'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='top-rated'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Top Rated Movies</h1>
          <p>Explore out top rated movie you might be like</p>
        </div>
        <div className='home__filters z-10'>
          <Search/>
          <Filter title='Year' options={yearsOfMovieRelease}/>

          <div className='home__filter-container'>
            {/* <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} /> */}
          </div>
        </div>
      </div>
    </main>
  )
}
