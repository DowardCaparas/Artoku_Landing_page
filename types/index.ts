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
    sessions: number;
    reviews: number;
    experience: string;
    attendance: string;
    profilePic: string; // Adjust this type based on your setup
}

export interface ButtonIconProps {
    iconURL: string;
    title: string;
    handleClick?: () => void;
}