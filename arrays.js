var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
];

const array = [1]
const element = 'foo'

function addElementToBeginningOfArray(array, element) {
  array = [element,...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray() {
  var array = [1, 2, 3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  array.pop()
  return array
}
