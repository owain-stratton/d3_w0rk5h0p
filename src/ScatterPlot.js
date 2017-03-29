import React, { Component } from 'react';

import { scaleLinear, scaleTime } from 'd3-scale';
import { min, max, extent } from 'd3-array';

import DataPoints from './DataPoints';
// import DataLine from './DataLine';
// import XYAxis from './XYAxis';

export default class ScatterPlot extends Component {

   getXScale() {
      const xMax = max(this.props.data, (d) => max(d.values, (v) => v.date));
      const xMin = min(this.props.data, (d) => min(d.values, (v) => v.date));

      return scaleTime()
         .domain([xMin, xMax])
         .range([
            this.props.padding,
            (this.props.width - this.props.padding * 2)
         ]);
   }

   getYScale() {
      const yMax = max(this.props.data, (d) => max(d.values, (v) => v.fertility));
      const yMin = min(this.props.data, (d) => min(d.values, (v) => v.fertility));

      return scaleLinear()
         .domain([yMin, yMax])
         .range([
            this.props.height - this.props.padding,
            this.props.padding
         ]);
   }

   render() {
      const xScale = this.getXScale();
      const yScale = this.getYScale();

      return (
         <svg
            width="100%"
            viewBox={`0 0 ${this.props.width} ${this.props.height}`}
            preserveAspectRatio="xMidYMid meet"
         >
            <DataPoints
               xScale={xScale}
               yScale={yScale}
               data={this.props.data}
            />
            {/* <DataLine
               xScale={xScale}
               yScale={yScale}
               data={this.props.data}
            /> */}
            {/* <XYAxis
               xScale={xScale}
               yScale={yScale}
               data={this.props.data}
            /> */}
         </svg>
      );
   }
}
