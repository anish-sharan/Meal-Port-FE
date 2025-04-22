import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "outline";
};

const CustomButton: React.FC<ButtonProps> = ({ variant = "primary", className, onClick, title }) => {
    return (
        <button
            className={cn(
                "px-4 py-2 rounded text-white font-semibold transition",
                {
                    "bg-blue-500 hover:bg-blue-600": variant === "primary",
                    "bg-gray-500 hover:bg-gray-600": variant === "secondary",
                    "border border-gray-500 text-gray-500 hover:bg-gray-100": variant === "outline",
                },
                className
            )}
            onClick={onClick}
        >{title}</button>
    );
};

export default CustomButton;
