import React, { Component } from 'react';

import { line } from 'd3-shape';

export default class DataLine extends Component {
   render() {

      const drawLine = line()
         .x((d) => this.props.xScale(d.date))
         .y((d) => this.props.yScale(d.fertility));

      return (
         <g>
            {this.props.data.map((val, idx) => (
               <g key={idx}>
                  <path
                     id={val.id}
                     d={drawLine(val.values)}
                     stroke={this.props.colorScale(val.id)}
                     style={{
                        strokeWidth: '2px',
                        fill: 'none',
                        opacity: 1
                     }}
                  />
                  <text
                     transform={`translate(
                        ${this.props.xScale(val.values[val.values.length - 1].date)},
                        ${this.props.yScale(val.values[val.values.length - 1].fertility)}
                     )`}
                     x={8}
                     dy={'0.35rem'}
                  >
                     {val.id.charAt(0).toUpperCase() + val.id.slice(1)}
                  </text>
               </g>
            ))}
         </g>
      );
   }
}
