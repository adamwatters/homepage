---
layout: post
title: Cracking the Balanced Brackets Problem
---

### The Problem: Determine if a string of brackets is 'balanced'

For example, "\{\(\[\]\[\]\)\}" is balanced, "\{\{\}\(\}" is not.

My Solution.

{% highlight js %}

var BRACKET_KEY = {
    "}": "{",
    "]": "[",
    ")": "(" 
}

function test(brackets) {
    var firstClosed = brackets.findIndex(function(e){
        return e === "]" || e === "}" || e === ")"
    });

    var closingBracketPresent = firstClosed !== -1;
    var closingBracketNotFirst = firstClosed !== 0;

    if (closingBracketPresent && closingBracketNotFirst) {
        var firstClosingType = brackets[firstClosed];
        var matchingType = BRACKET_KEY[firstClosingType];
        if (brackets[firstClosed - 1] === matchingType) {
            var left = brackets.slice(0,firstClosed - 1);
            var right = brackets.slice(firstClosed + 1);
            var bracketsMinusMatch = left.concat(right);
            return test(bracketsMinusMatch)
        } else {
            return false
        }
    } else if (brackets.length === 0) {
        return true
    } else {
        return false
    }

}

{% endhighlight %}