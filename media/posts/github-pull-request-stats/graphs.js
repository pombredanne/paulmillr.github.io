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

var draw = function(selector, data, disableInfo) {
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


  x.domain(data.map(function(d) { return d.repo; }));
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
      .attr("x", function(d) { return x(d.repo); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.stats); })
      .attr("height", function(d) { return height - y(d.stats); });
  if (!disableInfo) row.on("mouseover", hover)
};

var getAverage = function(list) {return list.reduce(function(a, b) {return a + b}, 0) / list.length;}

d3.json('/github-pull-req-stats/repos.json', function(error, json) {
  if (error) console.error(error);
  var languages = ["c", "c++", "c#", "coffeescript", "haskell", "java", "javascript", "objective-c", "perl", "php", "python", "ruby", "scala"];

  var data = json.map(function(_) {
    var language = _.tags.filter(function(_) {
      return languages.indexOf(_) !== -1;
    })[0];
    return {
      repo: _.repo.split('/')[1],
      path: _.repo,
      merged: _.merged,
      closed: _.closed,
      stats: (_.merged / (_.merged + _.closed)),
      language: language
    };
  }).filter(function(_) {return _.stats;});

  var langData = data.filter(function(_) {
    return _.language;
  }).reduce(function(obj, _) {
    if (!obj[_.language]) obj[_.language] = [];
    obj[_.language].push(_.stats);
    return obj;
  }, {});

  var languagesData = Object.keys(langData).map(function(_) {
    return {repo: _, stats: getAverage(langData[_])};
  }).sort(function(a, b) {
    if (a.repo > b.repo) return 1;
    if (a.repo < b.repo) return -1;
    return 0;
  });

  draw("#pull-req-stats", data);
  draw("#lang-stats", languagesData, true);
});
