import React from 'react';

const Title: React.FC<{ title: string | number }> = (props) => {
    const {title} = props

    return (
        <span className="text-5xl font-bold">
            {title}
        </span>
    );
}

export default Title;
