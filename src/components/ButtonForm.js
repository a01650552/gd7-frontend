import React from 'react';
import '../App.css';


const ButtonForm = (props) => {
    
    return (
      <div className="mx-auto topRow">
        <button className={props.isBuscar ? 'buttonForm1' : 'buttonForm2'} onClick={() => props.action()}>
          {props.props.title}
        </button>
      </div>
    )
}

export default ButtonForm;