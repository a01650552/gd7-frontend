import React from 'react';
import '../App.css';


const ButtonImg = (props) => {
    let title = props.title;
    let label = props.props.label.split('\u200c')[0];
    let answer = {
        [title] : label
    }

    const sendAnswer =(value) => {
        props.setAnswer(value)
        props.setSelectedButton(props.btnNumber)
    }
    
    return (
        <button className={props.isForma ? "buttonForma" : "buttonImg"} style={{backgroundColor: props.btnNumber === props.selectedButton ? '#b7cded' : 'white'}} onClick={() => sendAnswer(answer)}>
            <img src={props.props.src} alt={props.props.label} />
            {props.props.label.split('\u200c').map((item, i) => {
                return (<p key={i}>{item}</p>)
            })}
        </button>
      
    );
}

export default ButtonImg;