import React from 'react';

interface ButtonPropType {
    onClickCallback?: () => void,
    buttonContext: string;
    extraStyle?: string
}

const Button: React.FC<ButtonPropType> = (props) => {
    const {onClickCallback, buttonContext, extraStyle} = props

    const buttonInitialStyle = "bg-blue-600 hover:bg-blue-700 whitespace-nowrap text-white px-4 py-1 border-2"

    return (
        <button type="button" onClick={onClickCallback} className={buttonInitialStyle + extraStyle}>
            {buttonContext}
        </button>
    );
};

export default Button;
