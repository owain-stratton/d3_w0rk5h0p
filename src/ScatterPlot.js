import React, { Component } from 'react';

export default class ScatterPlot extends Component {
   render() {
      const aspectRatio = '16:9';
      return (
         <svg
            width="100%"
            viewBox={`0 0 ${aspectRatio.split(':').join(' ')}`}
            preserveAspectRatio="xMinYMin meet"
         >
            {this.props.data.map((d, i) => (
               <circle
                  key={`point-${d.country}`}
                  cx={d.birth / 5}
                  cy={d.death / 5}
                  id={d.country}
                  r='0.1'
                  style={{
                     fill: '#222',
                     opacity: 0.2
                  }}
               />
            ))}
         </svg>
      );
   }
}
