// position above or below axis
var position = function(d) {
  if (d.change > 0) {
    d3.select(this).style('bottom', '100px');
  } else if (d.change < 0) {
    d3.select(this).style('top', '100px');
  }
};

// red/green coloring
var colorize = function(d) {
  if (d.change > 0) {
    return 'green';
  } else if (d.change < 0) {
    return 'red';
  }
};

var hover = function(d, x, y) {
  d3.select("#tooltip > span").html(
    '<a href="https://github.com/' + d.path + '">' + d.repo + '</a>. ' +
    'Merged: ' + d.merged + ' (' + (d.stats * 100).toFixed(2) + '%) from ' + (d.merged + d.closed) + '.'
  );
};

var draw = function(selector, unsortedData, disableInfo) {
  var data = unsortedData.sort(function(a, b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });

  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      width = 860 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

  var formatPercent = d3.format(".0%");

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .tickFormat(formatPercent);

  var svg = d3.select(selector).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom + 200)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


  x.domain(data.map(function(d) { return d.title; }));
  y.domain([0, d3.max(data, function(d) { return d.stats; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(-15," + height * 1.03 + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Acceptance rate");

  var row = svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", function(d) {
        return "bar lang-" + d.language;
      })
      .attr("x", function(d) { return x(d.title); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.stats); })
      .attr("height", function(d) { return height - y(d.stats); });
  if (!disableInfo) row.on("mouseover", hover)
};

var getAverage = function(list) {
  return list.reduce(function(a, b) {return a + b}, 0) / list.length;
};

var groupBy = function(list, field) {
  var groupped = list.filter(function(_) {
    return _[field];
  }).reduce(function(acc, _) {
    var push = function(value) {
      if (!acc[value]) acc[value] = [];
      acc[value].push(_.stats);
    };

    var arrayOrValue = _[field];
    if (Array.isArray(arrayOrValue)) {
      arrayOrValue.forEach(push);
    } else {
      push(arrayOrValue);
    }

    return acc;
  }, {});

  return Object.keys(groupped).map(function(_) {
    return {title: _, stats: getAverage(groupped[_])};
  }).filter(function(_) {
    return groupped[_.title].length > 1;
  });
};

d3.json('/github-pull-req-stats/repos.json', function(error, json) {
  if (error) console.error(error);

  var data = json
    .map(function(_) {
      _.title = _.repo.split('/')[1];
      _.stats = (_.merged / (_.merged + _.closed));
      return _;
    })
    .filter(function(_) {
      return _.stats;
    });

  draw("#repo-stats", data);
  draw("#lang-stats", groupBy(data, 'language'), true);
  draw("#tag-stats", groupBy(data, 'tags'), true);
});
