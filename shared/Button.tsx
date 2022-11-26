import React from 'react';

interface ButtonPropType {
    onClickCallback?: () => void,
    buttonContext: string
}

const Button: React.FC<ButtonPropType> = (props) => {
    const {onClickCallback, buttonContext} = props

    return (
        <button type="button" onClick={onClickCallback}
                className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-md border-2">
            {buttonContext}
        </button>
    );
};

export default Button;
