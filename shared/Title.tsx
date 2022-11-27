import React from 'react';

const Title: React.FC<{ title: string | number }> = (props) => {
    const {title} = props

    return (
        <div style={{lineHeight: 1}}>
            <span style={{fontSize: 26}} className="font-bold">
                {title}
            </span>
        </div>
    );
}

export default Title;
