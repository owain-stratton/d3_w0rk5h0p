import React, { Component } from 'react';
import { csv } from 'd3-request';

import './ChartWidget.css';

import dataCSV from '../data/BE0701AA.csv';

import PlotSeries from './PlotSeries';

export default class ChartWidget extends Component {

   constructor() {
      super();
      this.state = {
         loadError: false,
         data: [],
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
            if (error) throw error;

            const mappedData = data.columns.slice(1).map((header) => {
               return Object.assign({}, {
                  id: header,
                  values: data.map((d) => {
                     return {
                        date: +d.year,
                        fertility: +d[header]
                     }
                  }),
               });
            });

            resolve(this.setState({ data: mappedData }));
         });
      });
   }

   _renderError() {
      return (
         <div className="d3-app--error-message">
            <h6>The data couldn't be loaded... :(</h6>
         </div>
      );
   }

   render() {

      const plotseries = !this.state.isLoaded
         ? null
         : <PlotSeries
            data={this.state.data}
            width={900}
            height={500}
            padding={30}
           />

      return (
         <div className="chart-widget--container">
            {!this.state.loadError ? plotseries : this._renderError()}
         </div>
      );
   }
}
