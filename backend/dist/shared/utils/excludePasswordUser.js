"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.excludeFromList = excludeFromList;
exports.excludeFromObject = excludeFromObject;
function excludeFromObject(obj, keys) {
  return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));
}

// Exclude keys from objects in a list
function excludeFromList(objects, keysToDelete) {
  return objects.map(obj => excludeFromObject(obj, keysToDelete));
}