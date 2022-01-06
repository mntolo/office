document.write('<link rel="stylesheet" href="../../github.githubassets.com/assets/gist-embed-7b333d2d0df1a43497afe26f66cfc8fe.css">')
document.write('<div id=\"gist94426121\" class=\"gist\">\n    <div class=\"gist-file\" translate=\"no\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-wofficemembersmap-js\" class=\"file my-2\">\n    \n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-javascript  \">\n\n      \n<div class=\"js-check-bidi blob-code-content\">\n  <template class=\"js-file-alert-template\">\n  <div data-view-component=\"true\" class=\"flash flash-warn flash-full d-flex flex-items-center\">\n  <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n  \n    <span>\n      This file contains bidirectional Unicode text that may be interpreted or compiled differently than what appears below. To review, open the file in an editor that reveals hidden Unicode characters.\n      <a href=\"https://github.co/hiddenchars\" target=\"_blank\">Learn more about bidirectional Unicode characters<\/a>\n    <\/span>\n\n\n  <div data-view-component=\"true\" class=\"flash-action\">        <a href=\"{{ revealButtonHref }}\" data-view-component=\"true\" class=\"btn-sm btn\">\n  \n  Show hidden characters\n  \n\n<\/a>\n<\/div>\n<\/div><\/template>\n<template class=\"js-line-alert-template\">\n  <span aria-label=\"This line has hidden Unicode characters\" data-view-component=\"true\" class=\"bidi-line-alert tooltipped tooltipped-e\">\n    <svg aria-hidden=\"true\" height=\"16\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" data-view-component=\"true\" class=\"octicon octicon-alert\">\n    <path fill-rule=\"evenodd\" d=\"M8.22 1.754a.25.25 0 00-.44 0L1.698 13.132a.25.25 0 00.22.368h12.164a.25.25 0 00.22-.368L8.22 1.754zm-1.763-.707c.659-1.234 2.427-1.234 3.086 0l6.082 11.378A1.75 1.75 0 0114.082 15H1.918a1.75 1.75 0 01-1.543-2.575L6.457 1.047zM9 11a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z\"><\/path>\n<\/svg>\n<\/span><\/template>\n\n  <table class=\"highlight tab-size js-file-line-container js-code-nav-container js-tagsearch-file\" data-tab-size=\"8\" data-paste-markdown-skip data-tagsearch-lang=\"JavaScript\" data-tagsearch-path=\"wofficeMembersMap.js\">\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L1\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"1\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>(<\/span><span class=pl-k>function<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L2\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"2\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC2\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-v>Vue<\/span><span class=pl-kos>.<\/span><span class=pl-en>component<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;woffice-members-map&#39;<\/span><span class=pl-kos>,<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L3\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"3\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC3\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-c1>template<\/span>: <span class=pl-s>&#39;&lt;div id=&quot;woffice-members-map__content&quot;&gt;&lt;/div&gt;&#39;<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L4\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"4\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC4\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-c1>props<\/span>: <span class=pl-kos>[<\/span><span class=pl-s>&#39;url&#39;<\/span><span class=pl-kos>,<\/span> <span class=pl-s>&#39;height&#39;<\/span><span class=pl-kos>]<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L5\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"5\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC5\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-en>data<\/span>: <span class=pl-k>function<\/span> <span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L6\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"6\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-k>return<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L7\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"7\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC7\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-c1>loaded<\/span>: <span class=pl-c1>false<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L8\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"8\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">                <span class=pl-c1>members<\/span>: <span class=pl-kos>[<\/span><span class=pl-kos>]<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L9\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"9\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC9\" class=\"blob-code blob-code-inner js-file-line\">            <span class=pl-kos>}<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L10\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"10\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-kos>}<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L11\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"11\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC11\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-en>mounted<\/span>: <span class=pl-k>function<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span> <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L12\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"12\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC12\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L13\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"13\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC13\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-kos>}<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L14\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"14\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC14\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-c1>methods<\/span>: <span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L15\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"15\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L16\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"16\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC16\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-kos>}<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L17\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"17\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC17\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-kos>}<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L18\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"18\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC18\" class=\"blob-code blob-code-inner js-file-line\">   <\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L19\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"19\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC19\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-k>new<\/span> <span class=pl-v>Vue<\/span><span class=pl-kos>(<\/span><span class=pl-kos>{<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L20\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"20\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC20\" class=\"blob-code blob-code-inner js-file-line\">        <span class=pl-c1>el<\/span>: <span class=pl-en>\$<\/span><span class=pl-kos>(<\/span><span class=pl-s>&#39;#woffice-members-map__wrapper&#39;<\/span><span class=pl-kos>)<\/span><span class=pl-kos>,<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L21\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"21\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC21\" class=\"blob-code blob-code-inner js-file-line\">    <span class=pl-kos>}<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n        <tr>\n          <td id=\"file-wofficemembersmap-js-L22\" class=\"blob-num js-line-number js-code-nav-line-number\" data-line-number=\"22\"><\/td>\n          <td id=\"file-wofficemembersmap-js-LC22\" class=\"blob-code blob-code-inner js-file-line\"><span class=pl-kos>}<\/span><span class=pl-kos>)<\/span><span class=pl-kos>(<\/span><span class=pl-kos>)<\/span><span class=pl-kos>;<\/span><\/td>\n        <\/tr>\n  <\/table>\n<\/div>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/2Fwebd/f1cc326d34ae1abc97583f6650e42f66/raw/c3db3e5f7271f43633050eecfb99148e09ba3148/wofficeMembersMap.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/2Fwebd/f1cc326d34ae1abc97583f6650e42f66#file-wofficemembersmap-js\">\n          wofficeMembersMap.js\n        <\/a>\n        hosted with &#10084; by <a href=\"https://github.com/\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
;