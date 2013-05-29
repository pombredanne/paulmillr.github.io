---
layout: post
title: 'Your pull request won’t be accepted'
tags: ['programming']
---

<link rel="stylesheet" type="text/css" href="/media/posts/github-pull-request-stats/graphs.css" />

As a frequent contributor to open-source projects, i’m curious about probability of acceptance of my contribution. Of course, it largerly depends on whether patch fits project or not, but still some projects are less likely to accept your pull. And in some popular projects, there are a lot of low-quality pull request that should not be accepted.

So i’ve made this summary and mined GitHub data for some popular projects.

The data is open-sourced and you may add your project any time
at [github.com/paulmillr/github-pull-req-stats](https://github.com/paulmillr/github-pull-req-stats).

Some projects accept much more pull requests (as a percentage of total) than others. Let’s look at a few popular ones:

<div id="tooltip"><strong>Current:</strong> <span>none</span></div>
<div id="repo-stats"> </div>
<div id="lang-stats"> </div>
<div id="tag-stats"> </div>

([graphs d3.js source code](https://github.com/paulmillr/paulmillr.github.com/blob/master/media/posts/github-pull-request-stats/graphs.js))

<script src="http://d3js.org/d3.v3.min.js" charset="utf-8"> </script>
<script>var a;</script>
<script src="/media/posts/github-pull-request-stats/graphs.js"> </script>

Lets then start with [Jashkenas’](http://ashkenas.com) projects.

### [CoffeeScript](https://github.com/jashkenas/coffee-script)
**215 merged (56.58%) from 380**

My favourite is CoffeeScript. A little language on top of javascript gets every second pull request accepted.

* Coffee’s fork — [LiveScript](https://github.com/gkz/LiveScript) has much less pulls **(40), but bigger chance of merge (32 pulls got merged, that’s 80%)**

### [Backbone](https://github.com/documentcloud/backbone)
**477 merged (44.25%) from 1078**

The most popular MVC / MVP library for client-side javascript accepts slightly less pull requests. Still almost 1/2.

What about Backbone-based frameworks?

* [Chaplin](https://github.com/chaplinjs/chaplin) has **204 merged pulls (79.69%) from 256**
* [Marionette](https://github.com/marionettejs/backbone.marionette) got **151 merged pulls (58.7%) from 257**
* [Aura](https://github.com/aurajs/aura) only has **80 merged pulls (73%) from 109**

As for non-backbone JS frameworks:

* [Angular.js](https://github.com/angular/angular.js) got **164 merged (15.34%) from 1069**. Google project. Only 15%. Many angular PRs are pulled manually.
* [Ember](https://github.com/emberjs/ember.js) has **925 merged pulls (73%) from 1265**

### [Underscore](https://github.com/documentcloud/underscore)
**178 merged (36.55%) from 487**

Underscore, a little functional programming helper for JS projects, merges 1/3 of all pulls.

* [*John-David Dalton*](https://twitter.com/jdalton) created [Lodash](https://github.com/bestiejs/lodash) as he was displeased with underscore. Interestingly, the stats don’t differ much. During my fast look at these pulls, seems that @jdalton was closing many pulls (**18 merged pulls (37.5%) from 48**) and adding pull changes manually.

### [Grunt](https://github.com/gruntjs/grunt)
**27 merged (12.98%) from 208**

Famous task watcher. Only every 8th pull gets accepted.

### [Brunch](https://github.com/brunch/brunch)
**71 merged (62.83%) from 113**

Another build tool for HTML5 applications. Accepts 6 times more pulls than grunt.

### [jQuery](https://github.com/jquery/jquery)
**189 merged (15.12%) from 1250**

The most popular JS lib accepts only few pulls.

### [Scala](https://github.com/scala/scala)
**1808 merged (74.46%) from 2428**

Scala community is very cohesive and maintainers accept 3 of 4 pulls. Situation with scala frameworks akka and scalatra is very same.

### [Rails](https://github.com/rails/rails)
**4039 merged (64.88%) from 6225**

Rails guys take 13 pulls from every 20. Pretty good result as compared to other web frameworks:

* [Django (python)](https://github.com/django/django) merges only **295 pulls from 1014 (29%)**
* [Symfony (php)](https://github.com/symfony/symfony) gets **3211 pulls merged (61%) from 5181**
* [Zend Framework 2](https://github.com/zendframework/zf2) got **1736 merged pulls (48%) from 3651**
* [Yesod (haskell)](https://github.com/yesodweb/yesod) got **138 merged (74%) from 174**

### [Stylus](https://github.com/LearnBoost/stylus)
**125 merged (70%) from 178**

Arguably the best result from stylesheet languages. The result is also similar to other [@tjholowaychuk](http://tj-holowaychuk.com) projects, like mocha, jade or express.

* [Sass](https://github.com/) has **45 merged pulls (38%) from 118**
* [LESS](https://github.com/) got **64 merged pulls (21%) from 295**

### [Backbone-fundamentals](https://github.com/addyosmani/backbone-fundamentals)
**239 merged (87.23%) from 274**

[@addyosmani](http://twitter.com/addyosmani)’s new book on Backbone. Pretty nice, by the way.

Book pull requests usually include only really relevant stuff and typo fixes, which means this project has the best pull request merge results overall.

### Databases

Redis wins in this category without doubt.

* [Elasticsearch](https://github.com/elasticsearch/elasticsearch) has **44 merged pulls (11.1%) from 395**
* [Redis](https://github.com/antirez/redis) has **106 merged pulls (43.8%) from 242**
* [MongoDB](https://github.com/mongodb/mongo) has **93 merged pulls (30%) from 303**

### [Node.js](https://github.com/joyent/node)
**112 merged (6.07%) from 1845**

The worst result. Node suffers from its popularity too. There are many low-quality pulls that don’t get accepted.

Also node guys pick many pulls manually and merge them by hand so that pull request metrics don’t show much. Somehow related to legal stuff probably. AFAIK they want all contributors to sign [Contributor License Agreement](http://en.wikipedia.org/wiki/Contributor_License_Agreement). CLAs bureucracy always reduced my desire to contribute to an open-source project. For some companies it is a legal requirement because of shitty laws, but i’m glad there are still big projects without CLAs, like Rails.

## Winners

Taking into account only projects with 250+ pulls, **Akka** and **backbone-fundamentals** with 87% are winners and receive GitHub top pulls #1 award I drew in MS Paint.

![](/media/posts/github-pull-request-stats/winner.png)
