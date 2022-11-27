import React from 'react';

interface ImagePropType {
    source: string | undefined | null,
    imageAlt: string | undefined | null,
    onClickCallback?: () => void
}

const Image: React.FC<ImagePropType> = (props) => {
    const {source, imageAlt, onClickCallback} = props

    return (
        <img
            src={source || ""}
            alt={imageAlt || ""}
            onClick={onClickCallback}
            className="rounded-md border-2 border-blue-600 w-8 h-8"
        />
    );
};

export default Image;
