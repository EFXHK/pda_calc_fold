import React from "react";


function numPad (props) {
    const numKey = (number) => {
        props.handleNum(number);
    }

    const operatorKey = (operator) => {
        props.handleOperator(operator);

    }

    const clearKey = (clear) => {   ///////change maybe
        props.handleClear(clear);   /////// 
    }


    return (

        // html.
    );


}

export default numPad;

