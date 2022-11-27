import React from 'react';

interface ButtonPropType {
    onClickCallback?: () => void,
    buttonContext: string;
    extraStyle?: React.CSSProperties
}

const Button: React.FC<ButtonPropType> = (props) => {
    const {onClickCallback, buttonContext, extraStyle} = props

    const buttonInitialStyle: React.CSSProperties = {
        backgroundColor: "blue",
        width: "100%",
        whiteSpace: "nowrap",
        color: "white",
        padding: "4px 8px",
        borderRadius: 4
    }

    return (
        <button type="button" onClick={onClickCallback} style={{...buttonInitialStyle, ...extraStyle}}>
            {buttonContext}
        </button>
    );
};

export default Button;
