import React from 'react';

const Text: React.FC<{ text: string | number }> = (props) => {
    const {text} = props

    return (
        <div>
            <span className="text-xl sm:text-2xl">{text}</span>
        </div>
    );
};

export default Text;
