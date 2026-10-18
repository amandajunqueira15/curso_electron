import { ReactNode } from "react";
import { Link } from "react-router-dom"

interface LinkProps{
    to: string;
    children: ReactNode;
}

export function LinkContent({to, children}: LinkProps){
    return(
        <Link to={to}>
            {children}
        </Link>
    )
}