import React, {useState, useEffect} from 'react';
import './App.css';
import { Container, Row} from 'react-bootstrap';
import * as data from './Data';
import ButtonFilter from './components/ButtonFilter';
import RangeFilter from './components/RangeFilter';
import ButtonForm from './components/ButtonForm';

function App() {

  const [forma] = useState(data.forma)
  const [corte] = useState(data.corte)
  const [color] = useState(data.color)
  const [claridad] = useState(data.claridad)
  const [quilataje] = useState(data.quilataje)
  const [precio] = useState(data.precio)

  const [formaRes, setFormaRes] = useState({
    FORMA: undefined
  })
  const [corteRes, setCorteRes] = useState({
    CORTE: undefined
  })
  const [colorRes, setColorRes] = useState({
    COLOR: undefined
  })
  const [claridadRes, setClaridadRes] = useState({
    CLARIDAD: undefined
  })
  const [rangoQuilataje, setRangoQuilataje] = useState({
    QUILATAJE: [quilataje.minValue,quilataje.maxValue]
  })
  const [rangoPrecio, setRangoPrecio] = useState({
    PRECIO: [precio.minValue,precio.maxValue]
  })

  const handleChangeForma = (value) => {
    setFormaRes(value)
  }
  const handleChangeCorte = (value) => {
    setCorteRes(value)
  }
  const handleChangeColor = (value) => {
    setColorRes(value)
  }
  const handleChangeClaridad = (value) => {
    setClaridadRes(value)
  }
  const handleChangeQuilataje = (value) => {
    setRangoQuilataje(value);
  };

  const handleChangePrecio = (value) => {
    setRangoPrecio(value);
  };



  const [answers, setAnswers] = useState({
    FORMA: formaRes.FORMA,
    CORTE: corteRes.CORTE,
    COLOR: colorRes.COLOR,
    CLARIDAD: claridadRes.CLARIDAD,
    QUILATAJE: [rangoQuilataje['QUILATAJE'][0],rangoQuilataje['QUILATAJE'][1]],
    PRECIO: [rangoPrecio['PRECIO'][0],rangoPrecio['PRECIO'][1]]
  })

  useEffect(() => {
    console.log(answers)
  }, [answers])

  const handleAnswers = () => {
    setAnswers({
      FORMA: formaRes.FORMA,
      CORTE: corteRes.CORTE,
      COLOR: colorRes.COLOR,
      CLARIDAD: claridadRes.CLARIDAD,
      QUILATAJE: [rangoQuilataje['QUILATAJE'][0],rangoQuilataje['QUILATAJE'][1]],
      PRECIO: [rangoPrecio['PRECIO'][0],rangoPrecio['PRECIO'][1]]
    })
  }

  const resetValue = () => {
    setAnswers({
      FORMA: undefined,
      CORTE: undefined,
      COLOR: undefined,
      CLARIDAD: undefined,
      QUILATAJE: [quilataje.minValue,quilataje.maxValue],
      PRECIO: [precio.minValue,precio.maxValue]
    })
    setRangoQuilataje({
      QUILATAJE: [quilataje.minValue,quilataje.maxValue]
    })
    setRangoPrecio({
      PRECIO: [precio.minValue,precio.maxValue]
    })
  }
  useEffect(()=> {

  }, [rangoQuilataje])

    return (
      <Container fluid>
        <Row className="topRow">
            <ButtonFilter props={forma} isForma={true} setAnswer={handleChangeForma}/>
            <ButtonFilter props={corte} isForma={false} setAnswer={handleChangeCorte}/>
        </Row>
        <Row className="topRow"> 
            <ButtonFilter props={color} isForma={false} setAnswer={handleChangeColor}/>
            <RangeFilter props={quilataje} values={rangoQuilataje} isQuilataje={true} setAnswer={handleChangeQuilataje}/>
        </Row>
        <Row className="topRow">
            <ButtonFilter props={claridad} isForma={false} setAnswer={handleChangeClaridad}/>
            <RangeFilter props={precio} values={rangoPrecio} isQuilataje={false} setAnswer={handleChangePrecio}/>
        </Row>
        <Row>
          <ButtonForm props={{title: "BUSCAR"}} isBuscar={true} action={handleAnswers}/>
          <ButtonForm props={{title: "LIMPIAR FILTRO"}} isBuscar={false} action={resetValue}/>
        </Row>
      </Container>
    );
}

export default App;
