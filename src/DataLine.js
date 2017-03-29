import React, { Component } from 'react';

import { line, curveBasis } from 'd3-shape';

export default class DataPoints extends Component {
   render() {

      const drawLine = line()
         .curve(curveBasis)
         .x((d) => this.props.xScale(d.x))
         .y((d) => this.props.yScale(d.male));

      return (
         <g>
            <path
               id={this.props.data.male}
               d={drawLine(this.props.data)}
               style={{
                     stroke: '#222',
                     strokeWidth: '2px',
                     fill: 'none',
                     opacity: 0.2
               }}
            />
         </g>
      );
   }
}
