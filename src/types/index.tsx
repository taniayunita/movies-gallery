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
    title: string;
    options: OptionProps[];
}

export interface CardMovieProps {
    title: string;
    vote: number;
    image: string;
    handleClickMovie? : MouseEventHandler<HTMLButtonElement>
}