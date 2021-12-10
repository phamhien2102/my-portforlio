import React from 'react';
import "./space.scss";

interface Props {
    height?: number
    color?: string
}

function Space({height = 1, color = "transparent" }: Props) {
    return (
        <div className="space" style={{height, backgroundColor: color}} />
    );
}


// function Space({height = 1, color = "transparent" }: Props) {
//     return (
//         <div className="space" />
//     );
// }

export default Space;
