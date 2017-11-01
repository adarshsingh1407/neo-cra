"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var baseTitle = "NEO-CRA";

var processMeta = function processMeta(props) {
  var meta = {};
  if (props && props.title) {
    meta.title = baseTitle + " | " + props.title;
  } else {
    meta.title = baseTitle;
  }
  return meta;
};

exports.baseTitle = baseTitle;
exports.processMeta = processMeta;