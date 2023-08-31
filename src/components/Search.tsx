import React from 'react'
import Image from 'next/image';
import ImageSearch from '@/assets/image/magnifying-glass.svg'


const SearchButton = ({ otherClasses }: { otherClasses: string }) => (

    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src={ImageSearch}
            alt={"search"}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
);

const Search = () => {
    return (
        <div className='searchbar__item'>
            <input
                type='text'
                name='model'
                // value={model}
                // onChange={(e) => setModel(e.target.value)}
                placeholder='Moving...'
                className='searchbar__input'
            />
            <SearchButton otherClasses='' />
        </div>
    )
}

export default Search