import * as d3 from "d3";

export const drawHistogram = (elemId, width, height, data, text) => {
  const status = data.map((d) => d.status);
  const values = data.map((d) => d.value);

  const padding = 60;
  const contentWidth = width - 2 * padding;
  const contentHeight = height - 2 * padding;

  const barWidth = (contentWidth + 1) / status.length;

  const svg = d3
    .select(elemId)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const chart = svg
    .append("g")
    .attr("transform", `translate(${padding}, ${padding})`);

  // scaling & axis
  const xScale = d3.scaleBand().range([0, contentWidth]).domain(status);
  let yScale = d3
    .scaleLinear()
    .range([contentHeight, 0])
    .domain([Math.min(...values), Math.max(...values)]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  yScale = d3
    .scaleLinear()
    .range([0, contentHeight])
    .domain([Math.min(...values), Math.max(...values)]);

  chart
    .append("g")
    .attr("transform", `translate(0, ${contentHeight})`)
    .call(xAxis);

  chart.append("g").call(yAxis);
  // chart
  chart
    .selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr(
      "transform",
      (d) =>
        `translate(${xScale(d.status)}, ${contentHeight - yScale(d.value)})`
    )
    .attr("width", barWidth)
    .attr("height", (d) => yScale(d.value))
    .attr("fill", (d) => {
      switch (d.status.toLowerCase()) {
        case "new cases":
          return "black";
        case "new deaths":
          return "red";
        case "new recovered":
          return "green";
        default:
          return "black";
      }
    });

  // chart
  //   .append("text")
  //   .attr("x", contentWidth / 2)
  //   .attr("y", padding / 2)
  //   .attr("text-anchor", "middle")
  //   .style("font-size", "12px")
  //   .style("font-weight", "bold")
  //   .text(text);
};

export const drawLine = (elemId, width, height, data, color, text) => {
  const parseTime = (date) => {
    const parser = d3.utcParse("%Y-%m-%dT%H:%M:%SZ");

    return parser(date).getDate();
  };

  const dates = data.map((d) => parseTime(d.date));

  const values = data.map((d) => d.value);

  const padding = 60;
  const contentWidth = width - 2 * padding;
  const contentHeight = height - 2 * padding;

  const svg = d3
    .select(elemId)
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const chart = svg
    .append("g")
    .attr("transform", `translate(${padding}, ${padding})`);

  // scaling & axis
  const xScale = d3.scaleBand().range([0, contentWidth]).domain(dates);
  const yScale = d3
    .scaleLinear()
    .range([contentHeight, 0])
    .domain([Math.min(...values), Math.max(...values)]);

  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  chart
    .append("g")
    .attr("transform", `translate(0, ${contentHeight})`)
    .call(xAxis.ticks(d3.timeDay));

  chart.append("g").call(yAxis);

  chart
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", color)
    .attr("stroke-width", 1.5)
    .attr(
      "d",
      d3
        .line()
        .x((d) => xScale(parseTime(d.date)))
        .y((d) => yScale(d.value))
    );

  chart
    .append("text")
    .attr("x", contentWidth / 2)
    .attr("y", padding / 2)
    .attr("text-anchor", "middle")
    .style("font-size", "12px")
    .style("font-weight", "bold")
    .text(text);
};
