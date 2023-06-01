import { InputHTMLAttributes } from 'react'

import "./style/text-field.scss"

type TTextFieldProps = InputHTMLAttributes<HTMLElement> & { label?: string }

const TextField = ({ label, ...props }: TTextFieldProps) => {

    return (
        <div className='text-field'>
            <input placeholder={label} type="text" className='text-field__input' {...props} />
        </div>
    )
}

export default TextField;