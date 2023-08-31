import { MouseEventHandler } from "react";

export interface ButtonProps {
    isDisabled?: boolean;
    btnType?: "button" | "submit";
    containerStyles?: string;
    textStyles?: string;
    title: string;
    rightIcon?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface FilterProps {
    options: OptionProps[];
    selected: OptionProps | null;
    onYearChange: (year: OptionProps | null) => void;
    //   onClearFilter: () => void;

}

export interface CardMovieProps {
    title: string;
    vote: number;
    image: string;
    onClick: () => void;
}

export interface ImageDetailProps {
    title: string;
    vote: number;
    image: string;
    overview: string;
    releaseDate: string;
    language: string;
}