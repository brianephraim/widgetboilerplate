---
layout: post
title: "Widgetboilerplate"
description: ""
category: 
tags: [dev]
git_widget_repo_name: "widgetboilerplate"
---

{% include JB/setup %}

description

{% include BE/github_widget %}

<link rel="stylesheet" href="{{ site.JB.WIDGET_PATH }}/widgetboilerplate/css/widgetboilerplate.css" media="screen" type="text/css" />
<link rel="stylesheet" href="{{ site.JB.WIDGET_PATH }}/widgetboilerplate/css/app.css" media="screen" type="text/css" />
<div class="widgetboilerplateBlogWidgetWrap widgetWrap">
	<div class="widgetboilerplateWidgetFrame"> </div>
</div>
<script> 
	inlineScript.widgetboilerplate = require.config({
		paths: {
	 		'jQuery': '{{ site.JB.WIDGET_PATH }}/widgetboilerplate/jquery.min'
	 	},
	 	shim: {
	        'jQuery': {
	            exports: '$'
	        }
	    },
     	 context: "widgetboilerplate",
         baseUrl: "{{ site.JB.WIDGET_PATH }}/widgetboilerplate/"
    });
	inlineScript.widgetboilerplate(['js/app']);
</script>