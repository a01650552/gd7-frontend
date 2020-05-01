import React, { useState, useEffect } from 'react';
import '../App.css';
import { Col } from 'react-bootstrap';
import ButtonImg from './ButtonImg';
import ReactTooltip from "react-tooltip";

const ButtonFilter = (props) => {

    const [selectedButton, setSelectedButton] = useState(undefined)

    useEffect(() => {
        if(props.isUndefined){
            setSelectedButton(undefined)
        }  
    }, [props.isUndefined])

    return (
        <Col xs={6} >
            <div className="filter mx-auto"> 
               
                <p className="filterTitle" data-tip={props.props.tooltip}>{props.props.title}</p>
                <ReactTooltip />
                {props.props.buttons.map((button, i) => {
                    return(
                        <ButtonImg 
                            props={button} 
                            key={i}
                            btnNumber={i} 
                            isForma={props.isForma} 
                            setAnswer={props.setAnswer} 
                            title={props.props.title} 
                            selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
                    )
                })}
            </div>
        </Col>
      );
}

export default ButtonFilter;
