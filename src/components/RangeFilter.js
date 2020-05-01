import '../App.css';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import {Col, Row} from 'react-bootstrap';
import ReactTooltip from "react-tooltip";

function valuetext(value) {
    return `${value}`;
}

const RangeFilter = (props) => {

    const useStyles = makeStyles({
        root: {
          width: 250,
        },
        input: {
          width: 100,
        },
      });
      
    const classes = useStyles();
    const [value, setValue] = React.useState(props.values[props.props.title]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
      let title = props.props.title;
      let answer = {
        [title]: [
          newValue[0],
          newValue[1]
        ]
      }
      props.setAnswer(answer);
    };

    const handleInputChange0 = (event) => {
      let title = props.props.title;
      let answer = {
        [title]: [event.target.value === '' ? '' : Number(event.target.value), value[1]]
      };
      if(Number(event.target.value) < props.props.minValue){
        event.target.value = props.props.minValue
      }
        setValue(answer[title]);
        props.setAnswer(answer)
    };

    const handleInputChange1 = (event) => {
      setValue([event.target.value === '' ? '' : value[0],Number(event.target.value)]);
      let title = props.props.title;
      let answer = {
        [title]: [event.target.value === '' ? '' : value[0],Number(event.target.value)]
      }
      props.setAnswer(answer)
  };

    const handleBlur = () => {
        if (value < props.props.minValue) {
        setValue(props.props.minValue);
        } else if (value > props.props.maxValue) {
        setValue(props.props.maxValue);
        }
    };
    
    return (
      <Col xs={6}>
        <div className="filter mx-auto">
          <p className="filterTitle" data-tip={props.props.tooltip} id="range-slider">{props.props.title}</p>
          <ReactTooltip />
          <div className="bottomMargin">
          {props.isQuilataje ? props.props.imgs.map((img, i) => {
              return(
                <img key={i} src={img.src} alt={img.label} className={img.label === 'GRANDE' ? 'largeIcon' : 'smallIcon'} />
              )
          }) : <> </>}
          </div>
          <Row className="filter mx-auto">
            <Slider
                    value={props.values[props.props.title]}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                    step={props.props.step}
                    min={props.props.minValue}
                    max={props.props.maxValue}
                />
          </Row>
          <Row className="filter mx-auto">
            <Input
                    className={classes.input}
                    value={props.values[props.props.title][0]}
                    margin="dense"
                    onChange={handleInputChange0}
                    onBlur={handleBlur}
                    inputProps={{
                    step: props.props.step,
                    min: props.props.minValue,
                    max: props.props.maxValue,
                    type: 'number',
                    'aria-labelledby': 'range-slider',
                    }}
                />

            <Input
                  className="input"
                  value={props.values[props.props.title][1]}
                  margin="dense"
                  onChange={handleInputChange1}
                  onBlur={handleBlur}
                  inputProps={{
                  step: props.props.step,
                  min: props.props.minValue,
                  max: props.props.maxValue,
                  type: 'number',
                  'aria-labelledby': 'range-slider',
                  }}
              />
          </Row>
        </div>
      </Col>
    );
}

export default RangeFilter;