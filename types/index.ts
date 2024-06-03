export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    textStyles?: string;
}

export interface MentorCardProps {
    name: string;
    position: string;
    location: string;
    sessions: number;
    reviews: number;
    experience: string;
    attendance: string;
    profilePic: string;
}

export interface ButtonIconProps {
    iconURL: string;
    title: string;
    handleClick?: () => void;
}