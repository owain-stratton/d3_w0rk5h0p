import React, { Component } from 'react';

import {
   scaleLinear,
   scaleTime,
   scaleOrdinal,
   schemeCategory10
} from 'd3-scale';

import { min, max } from 'd3-array';

import DataPoints from './DataPoints';
import DataLine from './DataLine';
import XYAxis from './XYAxis';

export default class PlotSeries extends Component {

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

   getColorScale() {
      return scaleOrdinal(schemeCategory10)
         .domain(this.props.data.map((d) => d.id));
   }

   render() {
      const xScale = this.getXScale();
      const yScale = this.getYScale();
      const colorScale = this.getColorScale();

      return (
         <svg
            width="100%"
            viewBox={`0 0 ${this.props.width} ${this.props.height}`}
            preserveAspectRatio="xMidYMid meet"
         >
            <DataPoints
               xScale={xScale}
               yScale={yScale}
               colorScale={colorScale}
               data={this.props.data}
            />
            <DataLine
               xScale={xScale}
               yScale={yScale}
               colorScale={colorScale}
               data={this.props.data}
            />
            <XYAxis
               xScale={xScale}
               yScale={yScale}
               {...this.props}
            />
         </svg>
      );
   }
}
