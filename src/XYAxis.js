import React, { Component } from 'react';

export default class XYAxis extends Component {
   render() {
      return (
         <g>
            {this.props.data.map((d, i) => (
               <circle
                  key={`point-${d.year}`}
                  cx={this.props.xScale(d.x)}
                  cy={this.props.yScale(d.y)}
                  id={d.year}
                  r='5'
                  style={{
                     fill: '#222',
                     opacity: 0.2
                  }}
               />
            ))}
         </g>
      );
   }
}
