export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
}

// Define an interface for a mentor
export interface MentorCardProps {
    name: string;
    position: string;
    location: string;
    sessions: string;
    reviews: string;
    experience: string;
    attendance: string;
    image: string;
}

export interface ButtonIconProps {
    iconURL: string;
    title: string;
    handleClick?: () => void;
}
