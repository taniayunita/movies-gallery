"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import ImageArrow from '@/assets/image/chevron-up-down.svg'

import { FilterProps } from "@/types";
import { updateSearchParams } from "@/utils";

export default function Filter({ options, selected, onYearChange }: FilterProps) {
    // const router = useRouter();
    // const [selected, setSelected] = useState(options[0]); // State for storing the selected option



    return (
        <div className='w-fit'>
            <Listbox
                value={selected || options[0]}
                onChange={(e) => {onYearChange(e)}}
            >
                <div className='relative w-fit z-10'>
                    {/* Button for the listbox */}
                    <Listbox.Button className='custom-filter__btn'>
                        <span className='block truncate'>{selected?.title || 'All'}</span>
                        <Image src={ImageArrow} width={20} height={20} className='ml-4 object-contain' alt='chevron_up-down' />
                    </Listbox.Button>
                    {/* Transition for displaying the options */}
                    <Transition
                        as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Listbox.Options className='custom-filter__options'>
                            {/* Map over the options and display them as listbox options */}
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option.title}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 px-4 ${active ? "bg-primary-purple text-white" : "text-gray-900"
                                        }`
                                    }
                                    value={option}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`} >
                                                {option.title}
                                            </span>
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}