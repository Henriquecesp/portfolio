import React from 'react'

interface Props {
    children: React.ReactNode;
    message: string | JSX.Element;
}

export function Tooltip({ children, message }: Props): JSX.Element {
    const tipRef = React.createRef<HTMLDivElement>();
    function handleMouseEnter() {
        tipRef.current.style.opacity = '1';
        tipRef.current.style.marginLeft = "20px";
    }
    function handleMouseLeave() {
        tipRef.current.style.opacity = '0';
        tipRef.current.style.marginLeft = "10px";
    }
    return (
        <div
            className="relative flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="absolute whitespace-no-wrap bg-gradient-to-r from-purple-500 to-purple-300 text-white px-4 py-2 rounded flex items-center transition-all duration-150"
                style={{ left: "100%", opacity: 0 }}
                ref={tipRef}
            >
                <div
                    className="bg-black h-3 w-3 absolute"
                    style={{ left: "-6px", transform: "rotate(45deg)" }}
                />
                {message}
            </div>
            {children}
        </div>
    );
}