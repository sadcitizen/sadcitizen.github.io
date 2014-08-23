---
layout: post
title: Примеры кода на SCSS и LESS
description: Простые пример кода на SCSS и LESS, предназначенные для тестирования подсветки синтаксиса для листингов
keyword: ''
---

### SCSS

{% highlight scss %}

.b-posts-i {
    display: block;
    padding-bottom: 2rem;
    border-bottom: 1px solid $color-footer;
    margin-top: 2rem;
    margin-bottom: 2rem;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
}

@mixin cancel() {
    padding: 0;
    margin: 0;
}

@mixin clearfix() {
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }
}

$font-family-sans-serif: Arial, Tahoma, sans-serif;
$font-family-serif: Georgia, "Times New Roman", Times, serif;
$font-family-mono: Consolas, "Courier New", monospace;

@mixin is-indented($indent: -9999px) {
    @if $indent == inherit or (type-of($indent) == number and not unitless($indent)) {
        text-indent: $indent;
    }
}

@mixin font($type, $font, $size: 14px, $line: 21px, $weight: normal) {
    @if unitless($line) {
        $line: $size * $line;
    }

    @if $type == sans {
        font: #{$weight} #{$size}/#{$line} #{$font}, #{$font-family-sans-serif};
    }

    @if $type == serif {
        font: #{$weight} #{$size}/#{$line} #{$font}, #{$font-family-serif};
    }

    @if $type == mono {
        font: #{$weight} #{$size}/#{$line} #{$font}, #{$font-family-mono};
    }
}

@mixin font-family($type, $font) {
    @if $type == sans {
        font-family: #{$font}, #{$font-family-sans-serif};
    }

    @if $type == serif {
        font-family: #{$font}, #{$font-family-serif};
    }

    @if $type == mono {
        font-family: #{$font}, #{$font-family-mono};
    }
}

@mixin font-size($size, $line) {
    font-size: $size;

    @if unitless($line) {
        line-height: $size * $line;
    }

    @if type-of($line) == number and not unitless($line) {
        line-height: $line;
    }
}

@mixin font-truncate() {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

@mixin font-face($name, $path, $weight: normal, $style: normal) {
    @font-face {
        font-family: $name;
        src: url('#{$path}.eot');
        src: url('#{$path}.eot?#iefix') format('embedded-opentype'), url('#{$path}.woff') format('woff'), url('#{$path}.ttf') format('truetype');
        font-weight: $weight;
        font-style: $style;
    }
}

{% endhighlight %}

### LESS

{% highlight scss %}

.box-sizing (@sizing: border-box) {
    -moz-box-sizing: @sizing;
    -webkit-box-sizing: @sizing;
    box-sizing: @sizing;
}

.center (@width, @height) {
    top: 50%;
    left: 50%;
    margin: round(@height * -0.5) 0 0 round(@width * -0.5);
}

.center (ver, @height) {
    top: 50%;
    margin: round(@height * -0.5) 0 0 0;
}

.center (hor, @width) {
    left: 50%;
    margin: 0 0 0 round(@width * -0.5);
}

.center-block(@margin: 0px) {
    .block;
    margin: @margin auto;
}

.gradient (hor, @start, @end) {
    background: @start;
    background: -moz-linear-gradient(left, @start 0%, @end 100%);
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, @start), color-stop(100%, @end));
    background: -webkit-linear-gradient(left, @start 0%, @end 100%);
    background: -o-linear-gradient(left, @start 0%, @end 100%);
    background: -ms-linear-gradient(left, @start 0%, @end 100%);
    background: linear-gradient(to right, @start 0%, @end 100%);
    filter: e(%("progid:DXImageTransform.Microsoft.gradient( startColorstr='%d', endColorstr='%d',GradientType=1)", @start, @end));
}

.filter (@filter: grayscale(100%)) {
    -webkit-filter: @filter;
    -moz-filter: @filter;
    -ms-filter: @filter;
    -o-filter: @filter;
    filter: @filter;
}

.hide {
    display: none;
}

.invisible {
    visibility: hidden;
}

.link-to-block {
    .block;
    text-decoration: none;
    .reset-block;
}

.opacity (@opacity: 0.5) {
    zoom: 1;
    -moz-opacity: @opacity;
    -webkit-opacity: @opacity;
    opacity: @opacity;
    @op: @opacity * 100;
    -ms-filter: ~"progid:DXImageTransform.Microsoft.Alpha(opacity=@{op})";
    filter: ~"alpha(opacity=@{op})";
}

.pos (abs, @left: 0, @top: 0) {
    position: absolute;
    top: @top;
    left: @left;
}
{% endhighlight %}