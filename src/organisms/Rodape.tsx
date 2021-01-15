import { Grid } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography/Typography';
import { createStyles, WithStyles, withStyles } from '@material-ui/styles';
import React, { Component } from 'react'

export interface Props extends WithStyles<typeof styles> {

}

export interface State {

}
const styles = () => createStyles({
    textTypographyStyle: {
        borderTop: '1px solid #dee2e6',
        color: 'rgba(59, 63, 63, 0.781)',
        fontFamily: 'Arial, sans-serif',
        fontSize: '12pt',
        paddingTop: '1rem',
        textAlign: 'center',
        width: '100%'
    },
});
class Rodape extends React.Component<Props, State> {

    render() {
        const { classes } = this.props;
        return (
            <footer className="rodape">
                <Typography className={classes.textTypographyStyle}>Loginha&trade; Todos os direitos reservados &copy; 2020</Typography>
            </footer>
        );
    }
}

export default withStyles(styles)(Rodape);