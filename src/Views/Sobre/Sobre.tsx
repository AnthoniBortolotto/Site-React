import { Typography } from '@material-ui/core';
import React, { Component } from 'react'
import "../../utils/css/Sobre/sobre.css"
export interface SobreProps {
    
}
 
export interface SobreState {
    
}
 
class Sobre extends React.Component<SobreProps, SobreState> {
    render() { 
        return (  
            <section className="sobre">
                <Typography variant="h3" className="sobre__titulo">Nossa história</Typography>
                    <p className="sobre__texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat accumsan nibh, sed vestibulum est dapibus vitae. Aliquam enim tortor, condimentum in feugiat blandit, varius ac elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc euismod luctus nibh. Suspendisse condimentum velit vitae eros dictum, at varius velit ullamcorper. Vestibulum nec tincidunt dui. In condimentum varius lectus, vitae ullamcorper ligula tincidunt sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse aliquam dui eu porta luctus. Proin id lectus non ante fringilla pharetra a placerat dui. Ut pellentesque tortor non tortor finibus, sit amet maximus velit tempor. Duis euismod odio ligula, ut sagittis quam hendrerit a. Nulla sollicitudin metus quis leo mollis, et cursus odio sodales. Donec ac porttitor lacus. Morbi dignissim risus non erat congue, eu porttitor sapien euismod.</p>               
            </section>
        );
    }
}
 
export default Sobre;