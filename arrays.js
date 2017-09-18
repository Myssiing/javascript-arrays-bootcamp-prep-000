var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

array chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToEndOfArray([1], "foo") {
  array = [...array, element]
  return array
}

function addElementToBeginningOfArray([1], "foo") {
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
