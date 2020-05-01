import React from 'react';
import {Col} from 'react-bootstrap';
import '../App.css';


const ButtonForm = (props) => {
    
    return (
      <Col xs={6} className="mx-auto topRow">
        <button className={props.isBuscar ? 'buttonForm1' : 'buttonForm2'} onClick={() => props.action()}>
          {props.props.title}
        </button>
      </Col>
    )
}

export default ButtonForm;