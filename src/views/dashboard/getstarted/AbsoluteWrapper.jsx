import React from 'react';

const AbsoluteWrapper = ({ children }) => {
    return(
    <div className="position-absolute">
        {children}
    </div>
    )
}

export default AbsoluteWrapper;