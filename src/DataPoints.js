import React, { Component } from 'react';

export default class DataPoints extends Component {
   render() {
      return (
         <g>
            {this.props.data.map((d, i) => {
               return d.values.map((val, idx) => (
                  <circle
                     key={`point-${idx}`}
                     cx={this.props.xScale(val.date)}
                     cy={this.props.yScale(val.fertility)}
                     id={val.date}
                     r='3'
                     fill={this.props.colorScale(d.id)}
                     style={{ opacity: 0.8 }}
                  />
               ));
            })}
         </g>
      );
   }
}
