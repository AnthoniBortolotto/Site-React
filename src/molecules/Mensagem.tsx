import { Card, CardContent, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import TiposMensagem from '../atoms/TiposMensagem';

interface MensagemProps {
  tipoMensagem: TiposMensagem,
  msg: string
}
const useStyles = makeStyles({
  BlocoMensagemErroStyle: {
    position: 'absolute',
    bottom: '5rem',
    right: '1rem',
    backgroundColor: "#b71c1c"
  },
  BlocoMensagemAcertoStyle: {
    position: 'absolute',
    bottom: '5rem',
    right: '1rem',
    backgroundColor: "#2196f3"
  },
  txtMensagemStyle: {
    textAlign: 'left',
    color: '#ffffff'
  }
});

function Mensagem(props: MensagemProps): JSX.Element {
  console.log("TipoMensagem: " + props.tipoMensagem)
  let tipoMensagem = props.tipoMensagem;
  const classes = useStyles();
  // const [progresso, setProgresso] = useState(0);
  // setProgresso(100);
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setProgresso(progresso => progresso - 1);
  //       if (progresso <= 0) {
  //         tipoMensagem = 3;
  //         return;
  //       };
  //     }, 500);
  //     return () => clearInterval(interval);
  //   }, []);
  let cor
  if (tipoMensagem === 0) {
    cor = classes.BlocoMensagemErroStyle;
  }
  else if (tipoMensagem === 1) {
    cor = classes.BlocoMensagemAcertoStyle;
  }
  else {
    return (<></>);
  }
  console.log("cor:" + cor)
  return (<Card className={cor}>
    <CardContent>
      <Typography className={classes.txtMensagemStyle}>{props.msg}</Typography>
    </CardContent>
    {/* <LinearProgress variant="determinate" value={progresso} /> */}
  </Card>);
}

export default Mensagem;