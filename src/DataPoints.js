import React, { Component } from 'react';

export default class DataPoints extends Component {
   render() {
      return (
         <g>
            {
               this.props.data.map((d, i) => {
                  return d.values.map((val, idx) => (
                     <circle
                        key={`point-${idx}`}
                        cx={this.props.xScale(val.date)}
                        cy={this.props.yScale(val.fertility)}
                        id={val.date}
                        r='5'
                        style={{
                           fill: '#222',
                           opacity: 0.2
                        }}
                     />
                  ));
               })
            }
         </g>
      );
   }
}
