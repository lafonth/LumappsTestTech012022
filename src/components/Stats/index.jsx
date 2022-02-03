import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import moment from 'moment';

import PropTypes from 'prop-types';

import './index.scss';


const Stats = ({ statsData, typeStats }) => {
  const [dataSet, setDataSet] = useState(0);

  useEffect(() => {
    const displayYearBarChart = (dates) => {
      const margin = {
        top: 20, right: 20, bottom: 45, left: 60,
      };
      const width = 800 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      if (document.querySelector('#my_dataviz svg')) {
        document.querySelector('#my_dataviz svg').remove();
      }

      const div = d3.select('#my_dataviz').append('div')
        .attr('class', 'tooltip')
        .style('position', 'absolute')
        .style('color', 'midnightblue')
        .style('font-weight', 'bold')
        .style('visibility', 'hidden');

      const svg = d3.select('#my_dataviz')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
      const x = d3.scaleBand()
        .range([0, width])
        .padding(0.5);
        //   .domain([yearRange[0], yearRange[0]]);

      const y = d3.scaleLinear()
        .range([height, 0]);

      if (dataSet.length > 0) {
        const parsedData = [];
        for (const year of dataSet) {
          if (parsedData.filter((elem) => elem.year === year).length > 0) {
            parsedData.find((elem) => elem.year === year).frequency += 1;
          } else {
            parsedData.push({
              year,
              frequency: 1,
            });
          }
        }


        x.domain(parsedData.map((elem) => elem.year));

        y.domain([0, d3.max(parsedData, (elem) => elem.frequency)]);

        svg.append('g')
          .attr('transform', `translate(0, ${height})`)
          .call(d3.axisBottom(x));
        svg.append('g')
          .call(d3.axisLeft(y));

        const barGroups = svg.selectAll('.bar')
          .data(parsedData)
          .enter().append('rect')
          .attr('class', 'bar')
          .attr('x', (d) => x(d.year))
          .attr('width', x.bandwidth())
          .attr('y', (d) => y(d.frequency))
          .attr('height', (d) => height - y(d.frequency))
          .on('mouseover', (event, d) => {
            div.html(`${d.frequency} Comics`)
              .style('visibility', 'visible');
          })
          .on('mousemove', (event, d) => {
            div.style('left', `${event.pageX - 50}px`)
              .style('top', `${event.pageY - 50}px`);
          })
          .on('mouseout', (event, d) => {
            div.style('visibility', 'hidden');
          });

        barGroups
          .append('text')
          .attr('class', 'value')
          .attr('x', (a) => x(a.year) + x.bandwidth() / 2)
          .attr('y', (a) => y(a.frequency) + 30)
          .attr('text-anchor', 'middle')
          .text((a) => `${a.frequency}%`);

        svg.append('path')
          .datum(parsedData)
          .attr('transform', `translate(${x.bandwidth() / 2},0)`)
          .attr('fill', 'none')
          .attr('stroke', 'crimson')
          .attr('stroke-width', 4)
          .attr('stroke-linecap', 'round')
          .attr('d', d3.line()
            .x((d) => x(d.year))
            .y((d) => y(d.frequency)));
      }
    };

    const getListeYear = async (data) => (
      Object.values(data).map((comic) => {
        const tsOnsaleDate = new Date(Date.parse(comic.dates.find((date) => date.type === 'onsaleDate').date));
        const onsaleDate = moment(tsOnsaleDate).format('YYYY');
        return onsaleDate;
      }).reverse()
    );

    switch (typeStats) {
      case 'yearBarChart':
        getListeYear(statsData).then((list) => setDataSet(list));
        displayYearBarChart();
        break;
      default:
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataSet.length]);

  return (
	<div id="my_dataviz" />
  );
};

Stats.propTypes = {
  statsData: PropTypes.arrayOf(PropTypes.shape),
  typeStats: PropTypes.string,
};


Stats.defaultProps = {
  statsData: [{}],
  typeStats: 'none',
};

export default Stats;
