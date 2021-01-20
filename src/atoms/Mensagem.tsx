import { Card, CardContent, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TiposMensagem from './TiposAvisos';

interface MensagemProps {
  tiposMensagem: TiposMensagem,
  msg: string
}
const useStyles = makeStyles({
  BlocoMensagemStyle: {
    position: 'absolute',
    bottom: '10px',
    right: 0,
  },
  txtMensagemStyle: {
    textAlign: 'left',
    color: '#ffffff'
  }
});

function Mensagem(props: MensagemProps): JSX.Element {
  const classes = useStyles();
  const [progresso, setProgresso] = useState(0);
  setProgresso(100);
  const IntervalExample = () => {
    
  
    useEffect(() => {
      const interval = setInterval(() => {
        setProgresso(progresso => progresso - 0.2);
        if(progresso <= 0){
          props.tiposMensagem = 4;
          return;
        };
      }, 100);
    }, []);
  }
  let cor: string
  if (props.tiposMensagem === 0) {
    cor = "#b71c1c";
  }
  else if (props.tiposMensagem === 1) {
    cor = "#2196f3";
  }
  else {
    return (<></>);
  }
  return (<Card color={cor} className={classes.BlocoMensagemStyle}>
    <CardContent>
      <Typography className={classes.txtMensagemStyle}></Typography>
    </CardContent>
    <LinearProgress variant="determinate" value={progresso} />
  </Card>);
}

export default Mensagem;