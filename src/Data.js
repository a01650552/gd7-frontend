const formaPath = '/Cortes/Forma/';
const claridadPath = '/Cortes/Claridad/';
const colorPath = '/Cortes/Color/';
const cortePath = '/Cortes/Corte/';
const quilatajePath = '/Cortes/Quilataje/';

export const precio = {
    title: "PRECIO",
    minValue: 200,
    maxValue: 5000000,
    step: 10,
    tooltip: "Escoge el rango de precio de los diamantes"
}

export const quilataje = {
    title: "QUILATAJE",
    imgs: [{
            src: `${quilatajePath}pequeno.png`,
            label: "PEQUEÑO"
        },
        {
            src: `${quilatajePath}grande.png`,
            label: "GRANDE"
        }],
    minValue: 0,
    maxValue: 30,
    step: 0.1,
    tooltip: "Escoge el rango de quilatajes de los diamantes"
}

export const color = {
    title: "COLOR",
    buttons: [
        {
            src: `${colorPath}incoloro.png`,
            label: 'TRANSPARENTE'
        },
        {
            src: `${colorPath}casi-incoloro.png`,
            label: 'CASI INCOLORO'
        },
        {
            src: `${colorPath}ligeramente-amarillo.png`,
            label: 'LIGERAMENTE AMARILLO'
        },
        {
            src: `${colorPath}amarillo-claro.png`,
            label: 'AMARILLO CLARO'
        }
    ],
    tooltip: 'Elige el color del diamante'
}

export const claridad = {
    title: "CLARIDAD",
    buttons: [
        {
            src: `${claridadPath}perfecta.png`,
            label: 'PERFECTA'
        },
        {
            src: `${claridadPath}imperfecciones-no-visibles.png`,
            label: 'IMPERFECCIONES NO VISIBLES'
        },
        {
            src: `${claridadPath}imperfecciones-10x.png`,
            label: 'IMPERFECCIONES VISIBLES A 10X'
        },
        {
            src: `${claridadPath}imperfecciones-simple-vista.png`,
            label: 'IMPERFECCIONES VISIBLES A SIMPLE VISTA'
        }
    ],
    tooltip: 'Elige la claridad del diamante'
}

export const corte = {
    title: "CORTE",
    buttons: [
        {
            src: `${cortePath}excelente.png`,
            label: 'EXCELENTE\u200c(MÁXIMO BRILLO)'
        },
        {
            src: `${cortePath}muy-bueno.png`,
            label: 'MUY BUENO\u200c(MUY BRILLANTE)'
        },
        {
            src: `${cortePath}bueno.png`,
            label: 'BUENO\u200c(BRILLANTE)'
        },
        {
            src: `${cortePath}regular.png`,
            label: 'REGULAR\u200c(POCO BRILLANTE)'
        }
    ],
    tooltip: 'Elige el corte del diamante'
}

export const forma = {
    title: "FORMA",
    buttons: [
      {src: `${formaPath}redondo.png`,
      label: 'REDONDO'
      },
      {src: `${formaPath}princesa.png`,
      label: 'PRINCESA'
      },
      {src: `${formaPath}esmeralda.png`,
      label: 'ESMERALDA'
      },
      {src: `${formaPath}ovalo.png`,
      label: 'ÓVALO'
      },
      {src: `${formaPath}marquesa.png`,
      label: 'MARQUESA'
      },
      {src: `${formaPath}pera.png`,
      label: 'PERA'
      },
      {src: `${formaPath}asscher.png`,
      label: 'ASSCHER'
      },
      {src: `${formaPath}corazon.png`,
      label: 'CORAZÓN'
      },
      {src: `${formaPath}cojin.png`,
      label: 'COJÍN'
      },
      {src: `${formaPath}baguette.png`,
      label: 'BAGUETTE'
      },
      {src: `${formaPath}trillon.png`,
      label: 'TRILLÓN'
      },
      {src: `${formaPath}radiante.png`,
      label: 'RADIANTE'
      }
    ],
    tooltip: "Elige la forma del diamante"
}
