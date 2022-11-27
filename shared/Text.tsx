import React from 'react';

interface TextPropType {
    text: string | number;
    extraStyle?: React.CSSProperties
}

const Text: React.FC<TextPropType> = (props) => {
    const {text, extraStyle} = props

    return (
        <div style={{lineHeight: 1}}>
            <span style={{fontSize: 14, ...extraStyle}} className="text-blue-400">{text}</span>
        </div>
    );
};

export default Text;
