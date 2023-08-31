import React from 'react'
import Image from 'next/image';
import ImageSearch from '@/assets/image/magnifying-glass.svg'
import { SearchProps } from '@/types';


const SearchButton = ({ otherClasses, handleSearch }: { otherClasses : string, handleSearch: () => void }) => (

    <button type='button' className={`-ml-3 z-10 ${otherClasses}`} onClick={handleSearch}>
        <Image
            src={ImageSearch}
            alt={"search"}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
);

const Search = ({onChange, value, onSearch }: SearchProps) => {

    return (
        <div className='searchbar__item'>
            <input
                type='text'
                name='model'
                value={value}
                onChange={onChange}
                placeholder='Moving...'
                className='searchbar__input'
            />
            <SearchButton otherClasses='' handleSearch={onSearch}/>
        </div>
    )
}

export default Search