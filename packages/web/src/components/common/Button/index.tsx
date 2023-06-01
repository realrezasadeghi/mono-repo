import { ButtonHTMLAttributes } from "react";

import "./style/button.scss"

type TButtonProps = ButtonHTMLAttributes<HTMLElement> & {
    label?: string
}

const Button = ({ label, ...props }: TButtonProps) => {
    return (
        <button className="button" {...props}>
            <div className="button__wrapper">
                {label ? <span className="button__wrapper-label">{label}</span> : null}
            </div>
        </button>
    )
}

export default Button;