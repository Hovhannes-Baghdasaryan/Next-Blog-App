import React from 'react';
import {flyoutMenuOptions} from "../../constant/flyoutMenuConstant";

const FlyoutMenu: React.FC<{ isMenuHidden: boolean; userName: string | null | undefined }> = (props) => {
    const {isMenuHidden, userName} = props

    return (
        <div className={`absolute mt-2`}>
            {flyoutMenuOptions(userName).map((element) => {
                const hiddenStyle = isMenuHidden ? `opacity-0 translate-x-${element.translateX}` : "opacity-1 translate-x-0"
                const animationDuration = `duration-${element.transitionDuration}`

                const spacingNotButton = element.id !== "1" ? "py-1" : ""

                const menuItemStyle = `${element.border} border-gray-600 dark:border-white ${element.roundStyle} ${spacingNotButton} w-full bg-blue-600 text-center text-white ${hiddenStyle} transition-all ease-out ${animationDuration} hover:bg-gray-500`

                return (
                    <div key={element.id} className={menuItemStyle}>
                        {element.menuName}
                    </div>
                );
            })}
        </div>
    );
};

export default FlyoutMenu;
