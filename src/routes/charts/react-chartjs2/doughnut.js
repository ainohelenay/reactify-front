import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';
import ChartConfig from 'Constants/chart-config';

const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
			ChartConfig.color.primary,
			ChartConfig.color.warning,
			ChartConfig.color.info
		],
		hoverBackgroundColor: [
			ChartConfig.color.primary,
			ChartConfig.color.warning,
			ChartConfig.color.info
		]
	}]
};

const options = {
	legend: {
		labels: {
			fontColor: ChartConfig.legendFontColor
		}
	},
	responsive: true,
   maintainAspectRatio:false
};

export default class DoughnutComponent extends Component {

	render() {
		return (
			<Doughnut data={data} options={options} height={358} width={717}/>
		);
	}
}
