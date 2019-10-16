import React from 'react';

function TemperlatureInput(props){



    return(
            <fieldset>
                <legend>The input {props.scale}</legend>
                <input value={props.temperature} onChange={(event) => props.handleChange(event , props.scale)}/> {props.scale}
            </fieldset>
    )

}

export default TemperlatureInput;