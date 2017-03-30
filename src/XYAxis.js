import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { axisLeft, axisBottom } from 'd3-axis';
import { select } from 'd3-selection';
import { timeFormat } from 'd3-time-format';

import './XYAxis.css';

class Axis extends Component {

   constructor() {
      super();
      this._renderAxis = this._renderAxis.bind(this);
   }

   componentDidMount() {
      this._renderAxis();
   }

   _renderAxis() {
      const node = ReactDOM.findDOMNode(this.refs.axisContainer);

      let axis;
      if (this.props.orient === 'bottom') {
         axis = axisBottom(this.props.scale)
            .tickFormat(timeFormat('%Y'));
      }

      if (this.props.orient === 'left') {
         axis = axisLeft(this.props.scale);
      }

      select(node).call(axis);
   }

   render() {
      return (
         <g
            className='axis'
            ref='axisContainer'
            transform={this.props.translate}
         />
      );
   }
}

export default class XYAxis extends Component {
   render() {
      return (
         <g className='xy-axis'>
            <Axis
               translate={`translate(0, ${this.props.height - this.props.padding})`}
               scale={this.props.xScale}
               orient='bottom'
            />
            <Axis
               translate={`translate(${this.props.padding}, 0)`}
               scale={this.props.yScale}
               orient='left'
            />
            <text
               transform={'rotate(-90)'}
               y={36}
               dy={'0.75rem'}
               dx={'-6rem'}
            >
               Fertility Rate
            </text>
         </g>
      );
   }
}
