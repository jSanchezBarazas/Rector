$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });


  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

(function (global) {

var dc = {};

var homeHtml = "snippets/home.html";
var eventsHtml = "snippets/events.html";
var aboutHtml = "snippets/about.html";
var socialHtml = "snippets/social.html";
var contactHtml = "snippets/contact.html";
var donateHtml = "snippets/donate.html";
var voteHtml = "snippets/vote.html";


// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='images/ajax-loader.gif'></div>";
  insertHtml(selector, html);
};

// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});

dc.loadabout = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    aboutHtml,
      function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadevents = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    eventsHtml,
      function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};
dc.loadsocial = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    socialHtml,
      function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadcontact = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    contactHtml,
      function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loaddonate = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    donateHtml,
      function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

dc.loadvote = function () {
  showLoading("#main-content");
  $ajaxUtils.sendGetRequest(
    voteHtml,
      function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
};

global.$dc = dc;

})(window);
