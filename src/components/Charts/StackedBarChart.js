/**
 * Overall Traffic Stats
 * Stacked Bar CHart Component
 */
import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

// chart config
import ChartConfig from 'Constants/chart-config';

export default class BarChart extends Component {
   render() {
      const { labels, datasets } = this.props;
      const data = {
         labels,
         datasets
      }
      const options = {
         plugins: {
            legend: {
               display: false
            }
         },
         layout: {
            padding: {
               left: 20,
               right: 20,
               top: 20,
               bottom: 20
            }
         },
         scales: {
            x: {
               grid: {
                  display: true,
                  color: ChartConfig.chartGridColor
               },
               ticks: {
                  color: ChartConfig.axesColor
               }
            },
            y: {
               grid: {
                  display: true,
                  color: ChartConfig.chartGridColor
               },
               ticks: {
                  color: ChartConfig.axesColor
               }
            }
         }
      };

      return (
         <Bar data={data} options={options} height={150} />
      );
   }
}
