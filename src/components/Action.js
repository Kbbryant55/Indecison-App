import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
            what should I do?
             </button>
        </div>
    );
};

export default Action;