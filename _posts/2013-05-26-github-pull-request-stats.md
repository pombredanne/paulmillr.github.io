---
layout: post
title: 'Your pull request won’t be accepted'
tags: ['programming']
published: false
---

<link rel="stylesheet" type="text/css" href="/media/posts/github-pull-request-stats/graphs.css" />

As a frequent contributor to open-source projects, i’m curious about probability of acceptance of my contribution. Of course, it largerly depends on whether my patch fits project .

Some projects accept much more pull requests (as a percentage of total) than others. Let’s look at a few popular ones:

<div id="tooltip"><strong>Current:</strong> <span>none</span></div>
<div id="pull-req-stats"> </div>
<div id="lang-stats"> </div>
<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"> </script>
<script>var a;</script>
<script src="/media/posts/github-pull-request-stats/graphs.js"> </script>

Lets start with [Jashkenas’](http://ashkenas.com) projects.

### [CoffeeScript](https://github.com/jashkenas/coffee-script)
**215 merged (56.58%) from 380**

My favourite is CoffeeScript. A little language on top of javascript gets every second pull request accepted.

### [Backbone](https://github.com/documentcloud/backbone)
**477 merged (44.25%) from 1078**

The most popular MVC / MVP library for client-side javascript accepts slightly less pull requests. Still almost 1/2.

### [Underscore](https://github.com/documentcloud/underscore)
**178 merged (36.55%) from 487**

Underscore, a little functional programming helper for JS projects, merges 1/3 of all pulls.

### [Lodash](https://github.com/bestiejs/lodash)
**18 merged (37.5%) from 48**

[*John-David Dalton*](https://twitter.com/jdalton) created lodash as he was displeased with underscore. Interestingly, the stats don’t differ much. During my fast look at these pulls, seems that @jdalton was closing many pulls and adding pull changes manually.

### [Grunt](https://github.com/gruntjs/grunt)
**27 merged (12.98%) from 208**

Famous task watcher. Only every 8th pull gets accepted.

### [Brunch](https://github.com/brunch/brunch)
**71 merged (62.83%) from 113**

Another build tool for HTML5 applications. Accepts 6 times more pulls than grunt.

### [Chaplin](https://github.com/chaplinjs/chaplin)
**204 merged (79.69%) from 256.**

MVC / MVP framework on top of Backbone gets 4 of 5 pulls get merged.

### [jQuery](https://github.com/jquery/jquery)
**189 merged (15.12%) from 1250**

### [Scala](https://github.com/scala/scala)
**1808 merged (74.46%) from 2428**

Scala community is quite cohesive and maintainers accept 3 of 4 pulls. Situation with scalatra (sinatra-like scala framework) is very same.

### [Rails](https://github.com/rails/rails)
**4039 merged (64.88%) from 6225**

Rails guys take 13 pulls from every 20.

### [Todomvc](https://github.com/addyosmani/todomvc)
**207 merged (59.48%) from 348**

Todomvc

### [Backbone-fundamentals](https://github.com/addyosmani/backbone-fundamentals)
**239 merged (87.23%) from 274**

[@addyosmani](http://twitter.com/addyosmani)’s new book on Backbone. Pretty nice, by the way.

Book pull requests usually include only really relevant stuff and typo fixes, which means this project has the best pull request merge results overall.

### [Angular.js](https://github.com/angular/angular.js)
**164 merged (15.34%) from 1069**

Google project. Only 15%. I guess, that’s okay for corporate project, though overall it’s pretty low.

### [Node.js](https://github.com/joyent/node)
**112 merged (6.07%) from 1845**

The worst result. Node guys pick many pulls manually and merge them by hand. Somehow related to legal stuff probably. AFAIK they want all contributors to sign CLAs.

CLAs bureucracy always reduced my desire to contribute to an open-source project. I’m glad there are still big projects without CLAs, like Rails.

### Hall of shame


