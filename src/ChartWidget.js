import React, { Component } from 'react';
import { csv } from 'd3-request';

import './ChartWidget.css';

import dataCSV from '../data/birthdeathrates.csv';

import ScatterPlot from './ScatterPlot';

export default class ChartWidget extends Component {

   constructor() {
      super();
      this.state = {
         loadError: false,
         data: {},
         isLoaded: false
      }
   }

   componentWillMount() {
      this._loadData()
         .then(() => this.setState({ isLoaded: true }))
         .catch(() => this.setState({ loadError: true }));
   }

   _loadData() {
      return new Promise((resolve, reject) => {
         csv(dataCSV, (error, data) => {
            if (error) {
               this.setState({ loadError: true });
            }

            const mappedData = data.map((d, i) => {
               return Object.assign({}, d, { x: +d.birth, y: +d.death });
            });

            resolve(this.setState({ data: mappedData }));
         })
      })
   }

   _renderError() {
      return (
         <div className="d3-app--error-message">
            <h6>The data couldn't be loaded... :(</h6>
         </div>
      );
   }

   render() {

      const plot = !this.state.isLoaded
         ? null
         : <ScatterPlot data={this.state.data} />

      return (
         <div className="chart-widget--container">
            {!this.state.loadError ? plot : this._renderError()}
         </div>
      );
   }
}
