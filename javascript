<!DOCTYPE html>
<html>

<head>
 <!--
    * Author:         OverAPI
    -->
 <meta charset="utf-8" />
 <title>Javascript Cheat Sheet | OverAPI.com</title>
 <meta name="author" content="OverAPI" />
 <meta name="description" content="OverAPI.com is a site collecting all the cheatsheets,all!" />
 <link rel="stylesheet" href="static/css/default.css" type="text/css" />
 <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
 <script type="text/javascript" src="static/js/jquery.1.7.min.js"></script>
 <script type="text/javascript" src="static/js/jquery.masonry.min.js"></script>
 <script type="text/javascript" src="static/js/jquery.quicksearch.js"></script>
 <script type="text/javascript" src="static/js/main.js"></script>
 <!-- Global site tag (gtag.js) - Google Analytics -->
 <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154846433-1"></script>
 <script>
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', 'UA-154846433-1');
 </script>
 <script data-ad-client="ca-pub-8625616776911349" async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>

<body class="cheat-detail">
 <div id="more-list-container">
  <a href="javascript:void(0)">More &raquo;</a>
  <ul id="nav-more-list">
   <li><a href="git" title="Git Cheat Sheet">Git</a></li>
   <li><a href="svn" title="SVN Cheat Sheet">SVN</a></li>
   <li><a href="mysql" title="MySQL Cheat Sheet">MySQL</a></li>
   <li><a href="regex" title="Regular Expression Cheat Sheet">Regex</a></li>
   <li><a href="linux" title="Linux Command Line Cheat Sheet">Linux</a></li>
   <li><a href="html" title="HTML Cheat Sheet">HTML</a></li>
   <li><a href="html-dom" title="HTML-DOM Cheat Sheet">HTML-DOM</a></li>
   <li><a href="mod_rewrite" title="mod_rewrite Cheat Sheet">mod_rewrite</a></li>
   <li><a href="index.html#more" id="">Even More &raquo;</a></li>
  </ul>
 </div>
 <div id="navbar">
  <a id="logo" href="index.html">OverAPI.com</a>
  <ul id="navlist" class="nav">
   <li><a href="python" title="Python Cheat Sheet">Python</a></li>
   <li><a href="jquery" title="jQuery Cheat Sheet">jQuery</a></li>
   <li><a href="nodejs" title="NodeJS Cheat Sheet">NodeJS</a></li>
   <li><a href="php" title="PHP Cheat Sheet">PHP</a></li>
   <li><a href="java" title="Java Cheat Sheet">Java</a></li>
   <li><a href="ruby" title="Ruby Cheat Sheet">Ruby</a></li>
   <li><a href="javascript" title="Javascript Cheat Sheet">Javascript</a></li>
   <li><a href="actionscript" title="ActionScript Cheat Sheet">ActionScript</a></li>
   <li><a href="css" title="CSS Cheat Sheet">CSS</a></li>
   <li><a href="express" title="Express Cheat Sheet">Express</a></li>
   <li><a href="javascript#more" id="nav-more">More &raquo;</a></li>
  </ul>
 </div>

 <div style="position:fixed;right:105px;top:10px;z-index:200;">
  <input type="" id="searchApi" placeholder="Search" />
 </div>
 <div class="addthis_toolbox addthis_default_style" style="position:fixed;right:5px;top:17px;z-index:200;">
  <a class="addthis_button_facebook"></a>
  <a class="addthis_button_twitter"></a>
  <a class="addthis_button_sinaweibo"></a>
  <a class="addthis_button_compact"></a>
 </div>
 <div class="loading">
  Loading...
 </div>

 <div class="content">
  <div class="board">
   <h2 class="board-title">Resource</h2>
   <div class="board-card">
    <h3 class="board-card-title">Online</h3>
    <ul>
     <li><a href="http://developer.mozilla.org/en/docs/JavaScript">Official Website</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Download</h3>
    <ul>
     <li><a href="static/cs/javascript_cheat_sheet.pdf">JavaScript Cheat Sheet [.pdf]</a></li>
     <li><a href="static/cs/jsquick.pdf">JavaScript Quick Reference Card [.pdf]</a></li>
     <li><a href="static/cs/JSB6RefBooklet.pdf">JavaScript and Browser Objects Quick Reference [.pdf]</a></li>
     <li><a href="http://www.javascript.su/">JavaScript in one page</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Related</h3>
    <ul>
     <li><a href="ajax" title="AJAX Cheat Sheet">AJAX</a></li>
     <li><a href="css" title="CSS Cheat Sheet">CSS</a></li>
     <li><a href="html-dom" title="HTML DOM Cheat Sheet">HTML DOM</a></li>
     <li><a href="gwt" title="GWT Cheat Sheet">GWT</a></li>
     <li><a href="html" title="HTML Cheat Sheet">HTML</a></li>
     <li><a href="jquery" title="jQuery Cheat Sheet">jQuery</a></li>
     <li><a href="mootools" title="MooTools Cheat Sheet">MooTools</a></li>
     <li><a href="nodejs" title="Node.js Cheat Sheet">Node.js</a></li>
     <li><a href="prototype" title="Prototype Cheat Sheet">Prototype</a></li>
     <li><a href="xhtml" title="XHTML Cheat Sheet">XHTML</a></li>
    </ul>
   </div>
  </div>

  <div class="board">
   <h2 class="board-title">Basic Objects</h2>
   <div class="board-card">
    <h3 class="board-card-title">Array Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/Constructor"
       title="Returns the function that created the Array object's prototype">constructor</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/Length"
       title="Sets or returns the number of elements in an array">length</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/prototype"
       title="Allows you to add properties and methods to an Array object">prototype</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Array Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/concat"
       title="Joins two or more arrays, and returns a copy of the joined arrays">concat()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf"
       title="Search the array for an element and returns it's position">indexOf()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/join"
       title="Joins all elements of an array into a string">join()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/lastIndexOf"
       title="Search the array for an element, starting at the end, and returns it's position">lastIndexOf()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/pop"
       title="Removes the last element of an array, and returns that element">pop()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/push"
       title="Adds new elements to the end of an array, and returns the new length">push()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/reverse"
       title="Reverses the order of the elements in an array">reverse()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/shift"
       title="Removes the first element of an array, and returns that element">shift()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/slice"
       title="Selects a part of an array, and returns the new array">slice()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/sort"
       title="Sorts the elements of an array">sort()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/splice"
       title="Adds/Removes elements from an array">splice()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/toString"
       title="Converts an array to a string, and returns the result">toString()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/unshift"
       title="Adds new elements to the beginning of an array, and returns the new length">unshift()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Object/valueOf"
       title="Returns the primitive value of an array">valueOf()</a></li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">Boolean Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean/constructor"
       title="Returns the function that created the Boolean object's prototype">constructor</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Boolean/prototype"
       title="Allows you to add properties and methods to a Boolean object">prototype</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Boolean Methods</h3>
    <ul>
     <li><a href="http://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/ToString"
       title="Converts a Boolean value to a string, and returns the result">toString()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Boolean/valueOf"
       title="Returns the primitive value of a Boolean object">valueOf()</a></li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">Math Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/E"
       title="Returns Euler's number (approx. 2.718)">E</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/LN2"
       title="Returns the natural logarithm of 2 (approx. 0.693)">LN2</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/LN10"
       title="Returns the natural logarithm of 10 (approx. 2.302)">LN10</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/LOG2E"
       title="Returns the base-2 logarithm of E (approx. 1.442)">LOG2E</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/LOG10E"
       title="Returns the base-10 logarithm of E (approx. 0.434)">LOG10E</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/PI"
       title="Returns PI (approx. 3.14)">PI</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/SQRT1_2"
       title="Returns the square root of 1/2 (approx. 0.707)">SQRT1_2</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/SQRT2"
       title="Returns the square root of 2 (approx. 1.414)">SQRT2</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Math Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/abs"
       title="Returns the absolute value of x">abs(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/acos"
       title="Returns the arccosine of x, in radians">acos(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/asin"
       title="Returns the arcsine of x, in radians">asin(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/atan"
       title="Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians">atan(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/atan2"
       title="Returns the arctangent of the quotient of its arguments">atan2(y,x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/ceil"
       title="Returns x, rounded upwards to the nearest integer">ceil(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/cos"
       title="Returns the cosine of x (x is in radians)">cos(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/exp"
       title="Returns the value of Ex">exp(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/floor"
       title="Returns x, rounded downwards to the nearest integer">floor(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/log"
       title="Returns the natural logarithm (base E) of x">log(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/max"
       title="Returns the number with the highest value">max(x,y,z,...,n)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/min"
       title="Returns the number with the lowest value">min(x,y,z,...,n)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/pow"
       title="Returns the value of x to the power of y">pow(x,y)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/random"
       title="Returns a random number between 0 and 1">random()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/round"
       title="Rounds x to the nearest integer">round(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/sin"
       title="Returns the sine of x (x is in radians)">sin(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/sqrt"
       title="Returns the square root of x">sqrt(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Math/tan"
       title="Returns the tangent of an angle">tan(x)</a></li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">Number Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/Constructor"
       title="Returns the function that created the Number object's prototype">constructor</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/MAX_VALUE"
       title="Returns the largest number possible in JavaScript">MAX_VALUE</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/MIN_VALUE"
       title="Returns the smallest number possible in JavaScript">MIN_VALUE</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY"
       title="Represents negative infinity (returned on overflow)">NEGATIVE_INFINITY</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY"
       title="Represents infinity (returned on overflow)">POSITIVE_INFINITY</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/prototype"
       title="Allows you to add properties and methods to an object">prototype</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Number Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toExponential"
       title="Converts a number into an exponential notation">toExponential(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toFixed"
       title="Formats a number with x numbers of digits after the decimal point">toFixed(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toPrecision"
       title="Formats a number to x length">toPrecision(x)</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/toString"
       title="Converts a Number object to a string">toString()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number/valueOf"
       title="Returns the primitive value of a Number object">valueOf()</a></li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">String Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/Constructor"
       title="Returns the function that created the String object's prototype">constructor</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/Length"
       title="Returns the length of a string">length</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Function/Name"
       title="Allows you to add properties and methods to an object">prototype</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">String Methods</h3>
    <ul>
     <li class="visited"><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/charAt"
       title="Returns the character at the specified index \n- [The last char posited at string.length-1]">charAt(index)</a>
     </li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/charCodeAt"
       title="Returns the Unicode of the character at the specified index">charCodeAt()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/concat"
       title="Joins two or more strings, and returns a copy of the joined strings">concat()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/fromCharCode"
       title="Converts Unicode values to characters">fromCharCode()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/indexOf"
       title="Returns the position of the first found occurrence of a specified value in a string">indexOf()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/lastIndexOf"
       title="Returns the position of the last found occurrence of a specified value in a string">lastIndexOf()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/match"
       title="Searches for a match between a regular expression and a string, and returns the matches">match()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/replace"
       title="Searches for a match between a substring (or regular expression) and a string, and replaces the matched substring with a new substring">replace()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/search"
       title="Searches for a match between a regular expression and a string, and returns the position of the match">search()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/slice"
       title="Extracts a part of a string and returns a new string">slice()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/split"
       title="Splits a string into an array of substrings">split()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/substr"
       title="Extracts the characters from a string, beginning at a specified start position, and through the specified number of character">substr()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/substring"
       title="Extracts the characters from a string, between two specified indices">substring()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/toLowerCase"
       title="Converts a string to lowercase letters">toLowerCase()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/toUpperCase"
       title="Converts a string to uppercase letters">toUpperCase()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/valueOf"
       title="Returns the primitive value of a String object">valueOf()</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">String HTML Wrapper Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/anchor"
       title="Creates an anchor">anchor()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/big"
       title="Displays a string using a big font">big()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/blink"
       title="Displays a blinking string">blink()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/bold"
       title="Displays a string in bold">bold()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/fixed"
       title="Displays a string using a fixed-pitch font">fixed()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/fontcolor"
       title="Displays a string using a specified color">fontcolor()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/fontsize"
       title="Displays a string using a specified size">fontsize()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/italics"
       title="Displays a string in italic">italics()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/link"
       title="Displays a string as a hyperlink">link()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/small"
       title="Displays a string using a small font">small()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/strike"
       title="Displays a string with a strikethrough">strike()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/sub"
       title="Displays a string as subscript text">sub()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/String/sup"
       title="Displays a string as superscript text">sup()</a></li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">Global Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Infinity"
       title="A numeric value that represents positive/negative infinity">Infinity</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/NaN" title="
       'Not-a-Number' value">NaN</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/undefined"
       title="Indicates that a variable has not been assigned a value">undefined</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Global Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/decodeURI"
       title="Decodes a URI">decodeURI()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/decodeURIComponent"
       title="Decodes a URI component">decodeURIComponent()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURI"
       title="Encodes a URI">encodeURI()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/encodeURIComponent"
       title="Encodes a URI component">encodeURIComponent()</a></li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions?redirectlocale=en-US&redirectslug=Core_JavaScript_1.5_Guide%2FFunctions#escape_and_unescape_functions"
       title="Encodes a string">escape()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/eval"
       title="Evaluates a string and executes it as if it was script code">eval()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/isFinite"
       title="Determines whether a value is a finite, legal number">isFinite()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/isNaN"
       title="Determines whether a value is an illegal number">isNaN()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Number"
       title="Converts an object's value to a number">Number()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/parseFloat"
       title="Parses a string and returns a floating point number">parseFloat()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/parseInt"
       title="Parses a string and returns an integer">parseInt()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/String"
       title="Converts an object's value to a string">String()</a></li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Guide/Functions?redirectlocale=en-US&redirectslug=Core_JavaScript_1.5_Guide%2FFunctions#escape_and_unescape_functions"
       title="Decodes an encoded string">unescape()</a></li>
    </ul>
   </div>
  </div>

  <div class="board">
   <h2 class="board-title">Date Object</h2>
   <div class="board-card">
    <h3 class="board-card-title">Date Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/constructor"
       title="Returns the function that created the Date object's prototype">constructor</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/prototype"
       title="Allows you to add properties and methods to an object">prototype</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Date Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getDate"
       title="Returns the day of the month (from 1-31)">getDate()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getDay"
       title="Returns the day of the week (from 0-6)">getDay()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getFullYear"
       title="Returns the year (four digits)">getFullYear()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getHours"
       title="Returns the hour (from 0-23)">getHours()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getMilliseconds"
       title="Returns the milliseconds (from 0-999)">getMilliseconds()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getMinutes"
       title="Returns the minutes (from 0-59)">getMinutes()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getMonth"
       title="Returns the month (from 0-11)">getMonth()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getSeconds"
       title="Returns the seconds (from 0-59)">getSeconds()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getTime"
       title="Returns the number of milliseconds since midnight Jan 1, 1970">getTime()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset"
       title="Returns the time difference between GMT and local time, in minutes">getTimezoneOffset()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getUTCDate"
       title="Returns the day of the month, according to universal time (from 1-31)">getUTCDate()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getUTCDay"
       title="Returns the day of the week, according to universal time (from 0-6)">getUTCDay()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getUTCFullYear"
       title="Returns the year, according to universal time (four digits)">getUTCFullYear()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getUTCHours"
       title="Returns the hour, according to universal time (from 0-23)">getUTCHours()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getUTCMilliseconds"
       title="Returns the milliseconds, according to universal time (from 0-999)">getUTCMilliseconds()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getUTCMinutes"
       title="Returns the minutes, according to universal time (from 0-59)">getUTCMinutes()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getUTCMonth"
       title="Returns the month, according to universal time (from 0-11)">getUTCMonth()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/getUTCSeconds"
       title="Returns the seconds, according to universal time (from 0-59)">getUTCSeconds()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/parse"
       title="Parses a date string and returns the number of milliseconds since midnight of January 1, 1970">parse()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setDate"
       title="Sets the day of the month of a date object">setDate()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setFullYear"
       title="Sets the year (four digits) of a date object">setFullYear()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setHours"
       title="Sets the hour of a date object">setHours()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setMilliseconds"
       title="Sets the milliseconds of a date object">setMilliseconds()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setMinutes"
       title="Set the minutes of a date object">setMinutes()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setMonth"
       title="Sets the month of a date object">setMonth()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setSeconds"
       title="Sets the seconds of a date object">setSeconds()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setTime"
       title="Sets a date and time by adding or subtracting a specified number of milliseconds to/from midnight January 1, 1970">setTime()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setUTCDate"
       title="Sets the day of the month of a date object, according to universal time">setUTCDate()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setUTCFullYear"
       title="Sets the year of a date object, according to universal time (four digits)">setUTCFullYear()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setUTCHours"
       title="Sets the hour of a date object, according to universal time">setUTCHours()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setUTCMilliseconds"
       title="Sets the milliseconds of a date object, according to universal time">setUTCMilliseconds()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setUTCMinutes"
       title="Set the minutes of a date object, according to universal time">setUTCMinutes()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setUTCMonth"
       title="Sets the month of a date object, according to universal time">setUTCMonth()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/setUTCSeconds"
       title="Set the seconds of a date object, according to universal time">setUTCSeconds()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toDateString"
       title="Converts the date portion of a Date object into a readable string">toDateString()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toISOString"
       title="Returns the date as a string, using the ISO standard">toISOString()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toJSON"
       title="Returns the date as a string, formated as a JSON date">toJSON()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toLocaleDateString"
       title="Returns the date portion of a Date object as a string, using locale conventions">toLocaleDateString()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString"
       title="Returns the time portion of a Date object as a string, using locale conventions">toLocaleTimeString()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toLocaleString"
       title="Converts a Date object to a string, using locale conventions">toLocaleString()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toString"
       title="Converts a Date object to a string">toString()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toTimeString"
       title="Converts the time portion of a Date object to a string">toTimeString()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/toUTCString"
       title="Converts a Date object to a string, according to universal time">toUTCString()</a></li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/UTC"
       title="Returns the number of milliseconds in a date string since midnight of January 1, 1970, according to universal time">UTC()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Date/valueOf"
       title="Returns the primitive value of a Date object">valueOf()</a></li>
    </ul>
   </div>
  </div>

  <div class="board">
   <h2 class="board-title">Browser</h2>
   <div class="board-card">
    <h3 class="board-card-title">Window Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.closed"
       title="Returns a Boolean value indicating whether a window has been closed or not">closed</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.defaultStatus"
       title="Sets or returns the default text in the statusbar of a window">defaultStatus</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.document"
       title="Returns the Document object for the window">document</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.frames"
       title="Returns an array of all the frames (including iframes) in the current window">frames</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.history"
       title="Returns the History object for the window">history</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.innerHeight"
       title="Sets or returns the inner height of a window's content area">innerHeight</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.innerWidth"
       title="Sets or returns the inner width of a window's content area">innerWidth</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.length"
       title="Returns the number of frames (including iframes) in a window">length</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location"
       title="Returns the Location object for the window">location</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.name"
       title="Sets or returns the name of a window">name</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.navigator"
       title="Returns the Navigator object for the window">navigator</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.opener"
       title="Returns a reference to the window that created the window">opener</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.outerHeight"
       title="Sets or returns the outer height of a window, including toolbars/scrollbars">outerHeight</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.outerWidth"
       title="Sets or returns the outer width of a window, including toolbars/scrollbars">outerWidth</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.scrollX"
       title="Returns the pixels the current document has been scrolled (horizontally) from the upper left corner of the window">pageXOffset</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.scrollY"
       title="Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window">pageYOffset</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.parent"
       title="Returns the parent window of the current window">parent</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.screen"
       title="Returns the Screen object for the window">screen</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.screen.left"
       title="Returns the x coordinate of the window relative to the screen">screenLeft</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.screen.top"
       title="Returns the y coordinate of the window relative to the screen">screenTop</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.screenX"
       title="Returns the x coordinate of the window relative to the screen">screenX</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.screenY"
       title="Returns the y coordinate of the window relative to the screen">screenY</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.self" title="Returns the current window">self</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.status"
       title="Sets the text in the statusbar of a window">status</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.top"
       title="Returns the topmost browser window">top</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Window Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.alert"
       title="Displays an alert box with a message and an OK button">alert()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.blur"
       title="Removes focus from the current window">blur()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.clearInterval"
       title="Clears a timer set with setInterval()">clearInterval()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.clearTimeout"
       title="Clears a timer set with setTimeout()">clearTimeout()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.close"
       title="Closes the current window">close()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.confirm"
       title="Displays a dialog box with a message and an OK and a Cancel button">confirm()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.focus"
       title="Sets focus to the current window">focus()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.moveBy"
       title="Moves a window relative to its current position">moveBy()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.moveTo"
       title="Moves a window to the specified position">moveTo()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.open"
       title="Opens a new browser window">open()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.print"
       title="Prints the content of the current window">print()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.prompt"
       title="Displays a dialog box that prompts the visitor for input">prompt()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.resizeBy"
       title="Resizes the window by the specified pixels">resizeBy()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.resizeTo"
       title="Resizes the window to the specified width and height">resizeTo()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.scrollBy"
       title="Scrolls the content by the specified number of pixels">scrollBy()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.scrollTo"
       title="Scrolls the content to the specified coordinates">scrollTo()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.setInterval"
       title="Calls a function or evaluates an expression at specified intervals (in milliseconds)">setInterval()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.setTimeout"
       title="Calls a function or evaluates an expression after a specified number of milliseconds">setTimeout()</a>
     </li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">Navigator Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.navigator.appCodeName"
       title="Returns the code name of the browser">appCodeName</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.navigator.appName"
       title="Returns the name of the browser">appName</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.navigator.appVersion"
       title="Returns the version information of the browser">appVersion</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.navigator.cookieEnabled"
       title="Determines whether cookies are enabled in the browser">cookieEnabled</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.navigator.platform"
       title="Returns for which platform the browser is compiled">platform</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.navigator.userAgent"
       title="Returns the user-agent header sent by the browser to the server">userAgent</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Navigator Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.navigator.javaEnabled"
       title="Specifies whether or not the browser has Java enabled">javaEnabled()</a></li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/DOM/window.navigator.registerContentHandler">registerContentHandler()</a>
     </li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/DOM/navigator.registerProtocolHandler">registerProtocolHandler()</a>
     </li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">Screen Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en/DOM/window.screen.availHeight"
       title="Returns the height of the screen (excluding the Windows Taskbar)">availHeight</a></li>
     <li><a href="https://developer.mozilla.org/en/DOM/window.screen.availWidth"
       title="Returns the width of the screen (excluding the Windows Taskbar)">availWidth</a></li>
     <li><a href="https://developer.mozilla.org/en/DOM/window.screen.colorDepth"
       title="Returns the bit depth of the color palette for displaying images">colorDepth</a></li>
     <li><a href="https://developer.mozilla.org/en/DOM/window.screen.height"
       title="Returns the total height of the screen">height</a></li>
     <li><a href="https://developer.mozilla.org/en/DOM/window.screen.pixelDepth"
       title="Returns the color resolution (in bits per pixel) of the screen">pixelDepth</a></li>
     <li><a href="https://developer.mozilla.org/en/DOM/window.screen.width"
       title="Returns the total width of the screen">width</a></li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">History Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.history"
       title="Returns the number of URLs in the history list">length</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">History Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.history"
       title="Loads the previous URL in the history list">back()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.history"
       title="Loads the next URL in the history list">forward()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.history"
       title="Loads a specific URL from the history list">go()</a></li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">Location Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Properties"
       title="Returns the anchor portion of a URL">hash</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Properties"
       title="Returns the hostname and port of a URL">host</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Properties"
       title="Returns the hostname of a URL">hostname</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Properties"
       title="Returns the entire URL">href</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Properties"
       title="Returns the path name of a URL">pathname</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Properties"
       title="Returns the port number the server uses for a URL">port</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Properties"
       title="Returns the protocol of a URL">protocol</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Properties"
       title="Returns the query portion of a URL">search</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Location Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Methods"
       title="Loads a new document">assign()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Methods"
       title="Reloads the current document">reload()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/window.location#Methods"
       title="Replaces the current document with a new one">replace()</a></li>
    </ul>
   </div>
  </div>

  <div class="board">
   <h2 class="board-title">DOM Events</h2>
   <div class="board-card">
    <h3 class="board-card-title">Mouse Events</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/click"
       title="The event occurs when the user clicks on an element">click</a></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/dblclick"
       title="The event occurs when the user double-clicks on an element">dblclick</a></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/mousedown"
       title="The event occurs when a user presses a mouse button over an element">mousedown</a></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/mousemove"
       title="The event occurs when a user moves the mouse pointer over an element">mousemove</a></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/mouseover"
       title="The event occurs when a user mouse over an element">mouseover</a></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/mouseout"
       title="The event occurs when a user moves the mouse pointer out of an element">mouseout</a></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/mouseup"
       title="The event occurs when a user releases a mouse button over an element">mouseup</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Keyboard Events</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/keydown"
       title="The event occurs when the user is pressing a key or holding down a key">keydown</a></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/keypress"
       title="The event occurs when the user is pressing a key or holding down a key">keypress</a></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/keyup"
       title="The event occurs when a keyboard key is released">keyup</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Frame Events</h3>
    <ul>
     <li><span
       title="The event occurs when an image is stopped from loading before completely loaded (for &lt;object&gt;)">abort</span>
     </li>
     <li><span title="The event occurs when an image does not load properly">error</span></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/load"
       title="The event occurs when a document, frameset, or &lt;object&gt; has been loaded">load</a></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/resize"
       title="The event occurs when a document view is resized">resize</a></li>
     <li><span title="The event occurs when a document view is scrolled">scroll</span></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/unload"
       title="The event occurs when a document is removed from a window or frame (for &lt;body&gt; and &lt;frameset&gt;)">unload</a>
     </li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Form Events</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/blur_(event)"
       title="The event occurs when a form element loses focus">blur</a></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/change"
       title="The event occurs when the content of a form element, the selection, or the checked state have changed (for &lt;input&gt;, &lt;select&gt;, and &lt;textarea&gt;)">change</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/Mozilla_event_reference/focus_(event)"
       title="The event occurs when an element gets focus (for &lt;label&gt;, &lt;input&gt;, &lt;select&gt;, textarea&gt;, and &lt;button&gt;)">focus</a>
     </li>
     <li><span title="onreset">reset</span></li>
     <li><a href="https://developer.mozilla.org/en-US/Mozilla_event_reference/select"
       title="The event occurs when a user selects some&nbsp; text (for &lt;input&gt; and &lt;textarea&gt;)">select</a>
     </li>
     <li><span title="The event occurs when a form is submitted">onsubmit</span></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Event Object Constant</h3>
    <ul>
     <li><span
       title="The current event is in the target phase, i.e. it is being evaluated at the event target (1)">AT_TARGET</span>
     </li>
     <li><span title="The current event phase is the bubbling phase (2)">BUBBLING_PHASE</span></li>
     <li><span title="The current event phase is the capture phase (3)">CAPTURING_PHASE</span></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Event Object Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.bubbles"
       title="Returns whether or not an event is a bubbling event">bubbles</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.cancelable"
       title="Returns whether or not an event can have its default action prevented">cancelable</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.currentTarget"
       title="Returns the element whose event listeners triggered the event">currentTarget</a></li>
     <li><span title="Returns which phase of the event flow is currently being evaluated">eventPhase</span></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.target"
       title="Returns the element that triggered the event">target</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.timeStamp"
       title="Returns the time (in milliseconds relative to the epoch) at which the event was created">timeStamp</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.type"
       title="Returns the name of the event">type</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Event Object Methods</h3>
    <ul>
     <li><span
       title="Specifies the event type, whether or not the event can bubble, whether or not the event's default action can be prevented">initEvent()</span>
     </li>
     <li><span
       title="To cancel the event if it is cancelable, meaning that any default action normally taken by the implementation as a result of the event will not occur">preventDefault()</span>
     </li>
     <li><span title="To prevent further propagation of an event during event flow">stopPropagation()</span></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">EventTarget Object</h3>
    <ul>
     <li><span
       title="Allows the registration of event listeners on the event target (IE8 = attachEvent())">addEventListener()</span>
     </li>
     <li><span
       title="Allows to send the event to the subscribed event listeners (IE8 = fireEvent())">dispatchEvent()</span>
     </li>
     <li><span
       title="Allows the removal of event listeners on the event target (IE8 = detachEvent())">removeEventListener()</span>
     </li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">EventListener Object</h3>
    <ul>
     <li><span
       title="Called whenever an event occurs of the event type for which the EventListener interface was registered">handleEvent()</span>
     </li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">MouseEvent/KeyboardEvent Object</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.altKey" title="Returns whether or not the ALT
       key was pressed when an event was triggered">altKey</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.button"
       title="Returns which mouse button was clicked when an event was triggered">button</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.clientX"
       title="Returns the horizontal coordinate of the mouse pointer, relative to the current window, when an event was triggered">clientX</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.clientY"
       title="Returns the vertical coordinate of the mouse pointer, relative to the current window, when an event was triggered">clientY</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.ctrlKey" title="Returns whether or not the 'CTRL'
       key was pressed when an event was triggered">ctrlKey</a></li>
     <li><span title="Returns the identifier of a key">keyIdentifier</span></li>
     <li><span title="Returns the location of the key on the advice">keyLocation</span></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.metaKey" title="Returns whether or not the 'meta'
       key was pressed when an event was triggered">metaKey</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.relatedTarget"
       title="Returns the element related to the element that triggered the event">relatedTarget</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.screenX"
       title="Returns the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered">screenX</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.screenY"
       title="Returns the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered">screenY</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/event.shiftKey" title="Returns whether or not the 'SHIFT' key was pressed when an event was triggered">shiftKey</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">MouseEvent/KeyboardEvent Methods</h3>
    <ul>
     <li><span title="Initializes the value of a MouseEvent object">initMouseEvent()</span></li>
     <li><span title="Initializes the value of a KeyboardEvent object">initKeyboardEvent()</span></li>
    </ul>
   </div>
  </div>

  <div class="board">
   <h2 class="board-title">DOM Node</h2>
   <div class="board-card">
    <h3 class="board-card-title">Node Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.attributes"
       title="Returns a collection of a node's attributes">attributes</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.baseURI"
       title="Returns the absolute base URI of a node">baseURI</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.childNodes"
       title="Returns a NodeList of child nodes for a node">childNodes</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.firstChild"
       title="Returns the first child of a node">firstChild</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.lastChild"
       title="Returns the last child of a node">lastChild</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.localName"
       title="Returns the local part of the name of a node">localName</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.namespaceURI"
       title="Returns the namespace URI of a node">namespaceURI</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.nextSibling"
       title="Returns the next node at the same node tree level">nextSibling</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.nodeName"
       title="Returns the name of a node, depending on its type">nodeName</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.nodeType"
       title="Returns the type of a node">nodeType</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.nodeValue"
       title="Sets or returns the value of a node, depending on its type">nodeValue</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.ownerDocument"
       title="Returns the root element (document object) for a node">ownerDocument</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.parentNode"
       title="Returns the parent node of a node">parentNode</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.prefix"
       title="Sets or returns the namespace prefix of a node">prefix</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.previousSibling"
       title="Returns the previous node at the same node tree level">previousSibling</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.textContent"
       title="Sets or returns the textual content of a node and its descendants">textContent</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Node Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.appendChild"
       title="Adds a new child node, to the specified node, as the last child node">appendChild()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.cloneNode" title="Clones a node">cloneNode()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.compareDocumentPosition"
       title="Compares the document position of two nodes">compareDocumentPosition()</a></li>
     <li>getFeature(<span>feature</span>,<span>version</span>)</li>
     <li>getUserData(<span>key</span>)</li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.hasAttributes"
       title="Returns true if a node has any attributes, otherwise it returns false">hasAttributes()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.hasChildNodes"
       title="Returns true if a node has any child nodes, otherwise it returns false">hasChildNodes()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.insertBefore"
       title="Inserts a new child node before a specified, existing, child node">insertBefore()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.isDefaultNamespace"
       title="Returns true if the specified namespaceURI is the default, otherwise false">isDefaultNamespace()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.isEqualNode"
       title="Checks if two nodes are equal">isEqualNode()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.isSameNode"
       title="Checks if two nodes are the same node">isSameNode()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.isSupported"
       title="Returns true if a specified feature is supported on a node, otherwise false">isSupported()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.lookupNamespaceURI"
       title="Returns the namespace URI matching a specified prefix">lookupNamespaceURI()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.lookupPrefix"
       title="Returns the prefix matching a specified namespace URI">lookupPrefix()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.normalize"
       title="Joins adjacent text nodes and removes empty text nodes">normalize()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.removeChild"
       title="Removes a child node">removeChild()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Node.replaceChild"
       title="Replaces a child node">replaceChild()</a></li>
     <li><span titls="Associates an object to a key on a node">setUserData(key,data,handler)</span></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Node Types</h3>
    <ul>
     <li><span class="right" title="Represents an element">Element</span><span>1</span></li>
     <li><span class="right" title="Represents an attribute">Attr</span><span>2</span></li>
     <li><span class="right" title="Represents textual content in an element or attribute">Text</span><span>3</span>
     </li>
     <li><span class="right"
       title="Represents a CDATA section in a document (text that will NOT be parsed by a parser)">CDATASection</span><span>4</span>
     </li>
     <li><span class="right" title="Represents an entity reference">EntityReference</span><span>5</span></li>
     <li><span class="right" title="Represents an entity">Entity</span><span>6</span></li>
     <li><span class="right" title="Represents a processing instruction">ProcessingInstruction</span><span>7</span></li>
     <li><span class="right" title="Represents a comment">Comment</span><span>8</span></li>
     <li><span class="right"
       title="Represents the entire document (the root-node of the DOM tree)">Document</span><span>9</span></li>
     <li><span class="right"
       title="Provides an interface to the entities defined for the document">DocumentType</span><span>10</span></li>
     <li><span class="right"
       title="Represents a 'lightweight' Document object, which can hold a portion of a document">DocumentFragment</span><span>11</span>
     </li>
     <li><span class="right" title="Represents a notation declared in the DTD">Notation</span><span>12</span></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">nodeName Returns</h3>
    <ul>
     <li>Element</li>
     <li class="tip">element name</li>
     <li>Attr</li>
     <li class="tip">attribute name</li>
     <li>Text</li>
     <li class="tip">#text</li>
     <li>CDATASection</li>
     <li class="tip">#cdata-section</li>
     <li>EntityReference</li>
     <li class="tip">entity reference name</li>
     <li>Entity</li>
     <li class="tip">entity name</li>
     <li>ProcessingInstruction</li>
     <li class="tip">target</li>
     <li>Comment</li>
     <li class="tip">#comment</li>
     <li>Document</li>
     <li class="tip">#document</li>
     <li>DocumentType</li>
     <li class="tip">doctype name</li>
     <li>DocumentFragment</li>
     <li class="tip">#document fragment</li>
     <li>Notation</li>
     <li class="tip">notation name</li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">nodeValue Returns</h3>
    <ul>
     <li>Element</li>
     <li class="tip">null</li>
     <li>Attr</li>
     <li class="tip">attribute value</li>
     <li>Text</li>
     <li class="tip">content of node</li>
     <li>CDATASection</li>
     <li class="tip">content of node</li>
     <li>EntityReference</li>
     <li class="tip">null</li>
     <li>Entity</li>
     <li class="tip">null</li>
     <li>ProcessingInstruction</li>
     <li class="tip">content of node</li>
     <li>Comment</li>
     <li class="tip">comment text</li>
     <li>Document</li>
     <li class="tip">null</li>
     <li>DocumentType</li>
     <li class="tip">null</li>
     <li>DocumentFragment</li>
     <li class="tip">null</li>
     <li>Notation</li>
     <li class="tip">null</li>
    </ul>
   </div>
  </div>

  <div class="board">
   <h2 class="board-title">RegExp</h2>
   <div class="board-card">
    <h3 class="board-card-title">Modifiers</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Parameters">i</a>
     </li>
     <li class="tip">Perform case-insensitive matching</li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Parameters">g</a>
     </li>
     <li class="tip">Perform a global match (find all matches rather than stopping after the first match)</li>
     <li>m</li>
     <li class="tip">Perform multiline matching</li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Brackets</h3>
    <ul>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">[abc]</a>
     </li>
     <li class="tip">Find any character between the brackets</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">[^abc]</a>
     </li>
     <li class="tip">Find any character not between the brackets</li>
     <li>[0-9]</li>
     <li class="tip">Find any digit from 0 to 9</li>
     <li>[A-Z]</li>
     <li class="tip">Find any character from uppercase A to uppercase Z</li>
     <li>[a-z]</li>
     <li class="tip">Find any character from lowercase a to lowercase z</li>
     <li>[A-z]</li>
     <li class="tip">Find any character from uppercase A to lowercase z</li>
     <li>[adgk]</li>
     <li class="tip">Find any character in the given set</li>
     <li>[^adgk]</li>
     <li class="tip">Find any character outside the given set</li>
     <li>(red|blue|green)</li>
     <li class="tip">Find any of the alternatives specified</li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Metacharacters</h3>
    <ul>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">.</a>
     </li>
     <li class="tip">Find a single character, except newline or line terminator</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\w</a>
     </li>
     <li class="tip">Find a word character</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\W</a>
     </li>
     <li class="tip">Find a non-word character</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\d</a>
     </li>
     <li class="tip">Find a digit</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\D</a>
     </li>
     <li class="tip">Find a non-digit character</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\s</a>
     </li>
     <li class="tip">Find a whitespace character</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\S</a>
     </li>
     <li class="tip">Find a non-whitespace character</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\b</a>
     </li>
     <li class="tip">Find a match at the beginning/end of a word</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\B</a>
     </li>
     <li class="tip">Find a match not at the beginning/end of a word</li>
     <li>\0</li>
     <li class="tip">Find a NUL character</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\n</a>
     </li>
     <li class="tip">Find a new line character</li>
     <li>\f</li>
     <li class="tip">Find a form feed character</li>
     <li>\r</li>
     <li class="tip">Find a carriage return character</li>
     <li>\t</li>
     <li class="tip">Find a tab character</li>
     <li>\v</li>
     <li class="tip">Find a vertical tab character</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\xxx</a>
     </li>
     <li class="tip">Find the character specified by an octal number xxx</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\xdd</a>
     </li>
     <li class="tip">Find the character specified by a hexadecimal number dd</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">\uxxxx</a>
     </li>
     <li class="tip">Find the Unicode character specified by a hexadecimal number xxxx</li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Quantifiers</h3>
    <ul>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">n+</a>
     </li>
     <li class="tip">Matches any string that contains at least one n</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">n*</a>
     </li>
     <li class="tip">Matches any string that contains zero or more occurrences of n</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">n?</a>
     </li>
     <li class="tip">Matches any string that contains zero or one occurrences of n</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">n{X}</a>
     </li>
     <li class="tip">Matches any string that contains a sequence of <i>X</i> <i>n</i>'s</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">n{X,Y}</a>
     </li>
     <li class="tip">Matches any string that contains a sequence of X to Y <i>n</i>'s</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">n{X,}</a>
     </li>
     <li class="tip">Matches any string that contains a sequence of at least X <i>n</i>'s</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">n$</a>
     </li>
     <li class="tip">Matches any string with n at the end of it</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">^n</a>
     </li>
     <li class="tip">Matches any string with n at the beginning of it</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">?=n</a>
     </li>
     <li class="tip">Matches any string that is followed by a specific string n</li>
     <li><a
       href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp#Special_characters_in_regular_expressions">?!n</a>
     </li>
     <li class="tip">Matches any string that is not followed by a specific string n</li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">RegExp Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/global"
       title="Specifies if the 'g' modifier is set">global</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/ignoreCase"
       title="Specifies if the 'i' modifier is set">ignoreCase</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/lastIndex"
       title="The index at which to start the next match">lastIndex</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/multiline"
       title="Specifies if the 'm' modifier is set">multiline</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/source"
       title="The text of the RegExp pattern">source</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">RegExp Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/exec"
       title="Tests for a match in a string. Returns the first match">exec()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/RegExp/test"
       title="Tests for a match in a string. Returns true or false">test()</a></li>
    </ul>
   </div>
  </div>

  <div class="board">
   <h2 class="board-title">Core DOM</h2>
   <div class="board-card">
    <h3 class="board-card-title">Nodelist Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/NodeList#Properties"
       title="Returns the number of nodes in the collection">length</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Nodelist Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/NodeList.item"
       title="Returns the node at the specified index in a node list">item()</a></li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">NamedNodeMap Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/NamedNodeMap#Properties"
       title="Returns the number of nodes in the collection">length</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">NamedNodeMap Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/NamedNodeMap#Methods"
       title="Returns the specified node (by name)">getNamedItem()</a></li>
     <li><span title="Returns the specified node (by name and namespace)">getNamedItemNS()</span></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/NamedNodeMap#Methods"
       title="Returns the node at the specified index in the namedNodeMap">item()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/NamedNodeMap#Methods"
       title="Removes the specified node (by name)">removeNamedItem()</a></li>
     <li><span title="Removes the specified node (by name and namespace)">removeNamedItemNS()</span></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/NamedNodeMap#Methods"
       title="Sets the specified node (by name)">setNamedItem()</a></li>
     <li><span title="Sets the specified node (by name and namespace)">setNamedItemNS()</span></li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">Document Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.doctype"
       title="Returns the Document Type Declaration associated with the document">doctype</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.documentElement"
       title="Returns the Document Element of the document (the HTML element)">documentElement</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.documentURI"
       title="Sets or returns the location of the document">documentURI</a></li>
     <li><span title="Returns the configuration used when normalizeDocument() is invoked">domConfig</span></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.implementation"
       title="Returns the DOMImplementation object that handles this document">implementation</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.inputEncoding"
       title="Returns the encoding, character set, used for the document">inputEncoding</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.xmlEncoding"
       title="Returns the XML encoding of the XML document">xmlEncoding</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.xmlVersion"
       title="Sets or returns the XML version of the XML document">xmlVersion</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Document Methods</h3>
    <ul>
     <li><span
       title="Adopts a node from another document to this document. Returns the adopted node">adoptNode(node)</span>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.createAttribute"
       title="Creates an attribute node">createAttribute()</a></li>
     <li><span
       title="Creates an attribute with the specified name and namspaceURI">createAttributeNS(<em>URI</em>,<em>name</em>)</span>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.createCDATASection"
       title="Creates a CDATA node with the specified text. For XML DOM only">createCDATASection()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.createComment"
       title="Creates a Comment node with the specified text">createComment()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.createDocumentFragment"
       title="Creates an empty DocumentFragment node">createDocumentFragment()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.createElement"
       title="Creates an Element node">createElement()</a></li>
     <li><span title="Creates an element with the specified namespace">createElementNS()</span></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.createEntityReference"
       title="Creates an EntityReference node. For XML DOM only">createEntityReference()</a></li>
     <li><span title="Creates an EntityReference node. For XML DOM only">createProcessingInstruction()</span></li>
     <li class="tip"></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.createTextNode"
       title="Creates a Text node">createTextNode()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.getElementById"
       title="Returns the element that has the ID attribute with the specified value">getElementById()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.getElementsByTagName"
       title="Returns a NodeList containing all elements with the specified tagname">getElementsByTagName()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/document.getElementsByName"
       title="Returns a list of elements with a given name in the (X)HTML document.">getElementsByName()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Document.querySelectorAll"
       title="Returns a NodeList containing all elements that match the specified CSS selector">querySelectorAll()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Document.querySelector"
       title="Returns the first element matching the specified CSS selector">querySelector()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.getElementsByTagNameNS"
       title="Returns a NodeList containing all elements with the specified namespaceURI and tagname">getElementsByTagNameNS()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/document.importNode"
       title="Imports a node from another document">importNode()</a></li>
     <li><span title="Removes empty Text nodes, and joins adjacent nodes">normalizeDocument()</span></li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">Element Properties</h3>
    <ul>
     <li><span title="Returns the type information of the element.">schemaTypeInfo</span></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.tagName"
       title="Returns the tag name of the element">tagName</a></li>
    </ul>
   </div>
   <div class="board-card">
    <h3 class="board-card-title">Element Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.getAttribute"
       title="Returns the specified attribute value">getAttribute()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.getAttributeNS"
       title="Returns the specified attribute value, with the specified namespace. For XML DOM only">getAttributeNS()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.getAttributeNode"
       title="Returns the specified attribute node">getAttributeNode()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.getAttributeNodeNS"
       title="Returns the specified attribute node, with the specified namespace. For XML DOM only">getAttributeNodeNS()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.getElementsByTagName"
       title="Returns a collection of all child elements with the specified tagname">getElementsByTagName()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.getElementsByTagNameNS"
       title="Returns a collection of all child elements with the specified tagname and namespace. For XML DOM only">getElementsByTagNameNS()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.hasAttribute"
       title="Returns true if the element has the specified attribute, otherwise it returns false">hasAttribute()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.hasAttributeNS"
       title="Returns true if the element has the specified attribute, with the specified namespace, otherwise it returns false. For XML DOM only">hasAttributeNS()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.removeAttribute"
       title="Removes the specified attribute">removeAttribute()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.removeAttributeNS"
       title="Removes the attribute with the specified name and namespace. For XML DOM only">removeAttributeNS()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.removeAttributeNode"
       title="Removes the specified attribute node, and returns the removed node">removeAttributeNode()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.setAttribute"
       title="Sets or changes the specified attribute, to the specified value">setAttribute()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.setAttributeNS"
       title="Sets or changes the specified attribute, with the specified namespace, to the specified value. For XML DOM only">setAttributeNS()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.setAttributeNode"
       title="Sets or changes the specified attribute node">setAttributeNode()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/element.setAttributeNodeNS"
       title="Sets or changes the specified attribute node">setAttributeNodeNS()</a></li>
     <li>setIdAttribute()</li>
     <li>setIdAttributeNS()</li>
     <li>setIdAttributeNode()</li>
    </ul>
   </div>

   <div class="board-card">
    <h3 class="board-card-title">Attr Properties</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Attr#Properties" title="Returns ">isId</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Attr#Properties"
       title="Returns the name of the attribute">name</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Attr#Properties"
       title="Returns the element this attribute belongs to">ownerElement</a></li>
     <li><span title="Returns the type information of the attribute">schemaTypeInfo</span></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Attr#Properties" title="Returns ">specified</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/Attr#Properties"
       title="Sets or returns the value of the attribute">value</a></li>
    </ul>
   </div>
  </div>

  <div class="board">
   <h2 class="board-title">Graphics</h2>
   <div class="board-card">
    <h3 class="board-card-title">CanvasRenderingContext2D Methods</h3>
    <ul>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#arc()"
       title="Adds an arc to the path which it center is at (x, y) position with radius r starting at startAngle and ending at endAngle going in the given direction by anticlockwise (defaulting to clockwise).">arc()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#arcTo()"
       title="Adds an arc with the given control points and radius, connected to the previous point by a straight line.">arcTo()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#beginPath()"
       title="Starts a new path by resetting the list of sub-paths. Call this method when you want to create a new path.">beginPath()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#bezierCurveTo()" title="void bezierCurveTo(
                in float cp1x,
                in float cp1y,
                in float cp2x,
                in float cp2y,
                in float x,
                in float y
            );">bezierCurveTo()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#clearRect()"
       title="Clears the rectangle defined by it starting point at (x, y) and has a w width and a h height.">clearRect()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#clip()"
       title="Creates a clipping path from the current sub-paths. Everything drawn after clip() is called appears inside the clipping path only. For an example, see Clipping paths in the Canvas tutorial.">clip()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#closePath()"
       title="Tries to draw a straight line from the current point to the start. If the shape has already been closed or has only one point, this function does nothing.">closePath()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#createImageData()"
       title="Creates a new, blank ImageData object with the specified dimensions. All of the pixels in the new object are transparent black.">createImageData()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#createLinearGradient()" title="nsIDOMCanvasGradient createLinearGradient(
                in float x0,
                in float y0,
                in float x1,
                in float y1
            );">createLinearGradient()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#createPattern()" title="nsIDOMCanvasPattern createPattern(
                in nsIDOMHTMLElement image,
                in DOMString repetition
            );">createPattern()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#createRadialGradient()" title="nsIDOMCanvasGradient createRadialGradient(
                in float x0,
                in float y0,
                in float r0,
                in float x1,
                in float y1,
                in float r1
            );">createRadialGradient()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#drawCustomFocusRing()"
       title="boolean drawCustomFocusRing(Element element);">drawCustomFocusRing()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#drawImage()"
       title="Draws the specified image. This method is available in multiple formats, providing a great deal of flexibility in its use.">drawImage()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#drawSystemFocusRing()"
       title="void drawSystemFocusRing(Element element);">drawSystemFocusRing()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#fill()"
       title="Fills the subpaths with the current fill style.">fill()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#fillRect()"
       title="Draws a filled rectangle at (x, y) position whose size is determined by width and height.">fillRect()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#fillText()" title="void fillText(
                in DOMString text,
                in float x,
                in float y,
                in float maxWidth [optional]
            );">fillText()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#getImageData()"
       title="Returns an ImageData object representing the underlying pixel data for the area of the canvas denoted by the rectangle which starts at (sx, sy) and has a sw width and sh height.">getImageData()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#getLineDash()"
       title="Returns an dash list array containing an even number of non-negative numbers.">getLineDash()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#isPointInPath()"
       title="Reports whether or not the specified point is contained in the current path.">isPointInPath()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#lineTo()"
       title="Connects the last point in the subpath to the x, y coordinates with a straight line.">lineTo()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#measureText()" title="nsIDOMTextMetrics measureText(
                in DOMString text
            );">measureText()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#moveTo()"
       title="Moves the starting point of a new subpath to the (x, y) coordinates.">moveTo()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#putImageData()" title="void putImageData(
                in long x,
                in long y,
                in unsigned long width,
                in unsigned long height,
                [array, size_is(dataLen)] in octet dataPtr,
                in unsigned long dataLen,
                in boolean hasDirtyRect,
                in long dirtyX, [optional]
                in long dirtyY, [optional]
                in long dirtyWidth, [optional]
                in long dirtyHeight [optional]
            );">putImageData()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#quadraticCurveTo()" title="void quadraticCurveTo(
                in float cpx,
                in float cpy,
                in float x,
                in float y
            );">quadraticCurveTo()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#rect()" title="void rect(
                in float x,
                in float y,
                in float w,
                in float h
            );">rect()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#restore()"
       title="Restores the drawing style state to the last element on the 'state stack' saved by save()">restore()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#rotate()" title="void rotate(
                in float angle
            );">rotate()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#save()"
       title="Saves the current drawing style state using a stack so you can revert any change you make to it using restore().">save()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#scale()" title="void scale(
                in float x,
                in float y
            );">scale()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#scrollPathIntoView()"
       title="void scrollPathIntoView();">scrollPathIntoView()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#setLineDash()" title="void setLineDash(
                sequence segments
            );">setLineDash()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#setTransform()" title="void setTransform(
                in float m11,
                in float m12,
                in float m21,
                in float m22,
                in float dx,
                in float dy
            );">setTransform()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#stroke()"
       title="Strokes the subpaths with the current stroke style.">stroke()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#strokeRect()"
       title="Paints a rectangle which it starting point is at (x, y) and has a w width and a h height onto the canvas, using the current stroke style.">strokeRect()</a>
     </li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#strokeText()" title="void strokeText(
                in DOMString text,
                in float x,
                in float y,
                in float maxWidth [optional]
            );">strokeText()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#transform()" title="void transform(
                in float m11,
                in float m12,
                in float m21,
                in float m22,
                in float dx,
                in float dy
            );">transform()</a></li>
     <li><a href="https://developer.mozilla.org/en-US/docs/DOM/CanvasRenderingContext2D#translate()"
       title="Moves the origin point of the context to (x, y).">translate()</a></li>
    </ul>
   </div>
  </div>
 </div>




 <!--<div class="board board-detail-ad hide">-->
 <div class="board hide" id="detail-ad">

 </div>

 <script type="text/javascript">
  $('.content').append($('#detail-ad'));
  $('#detail-ad').removeClass('hide');
 </script>

 <script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=xa-4fddf49419e0facd"></script>
</body>

</html>