export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
}

// Define an interface for a mentor
export interface Mentor {
    name: string;
    position: string;
    location: string;
    sessions: number;
    reviews: number;
    experience: string;
    attendance: string;
    image: string
}

export interface ButtonIconProps {
    iconURL: string;
    title: string;
    handleClick?: () => void;
}
