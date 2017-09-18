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
]

function addElementToEndOfArray(array,element) {
  array = [...array, element]
  return array
}

function addElementToBeginningOfArray(array,element) {
  array = [element, ...array]
  return array
}

function destructivelyAddElementToEndOfArray([1], "foo") {
  array.unshift("foo")
  return array
}

function destructivelyAddElementToBeginningOfArray([1], "foo"]) {
  array.push("foo")
  return array
}
