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

const array = [1]

function addElementToBeginningOfArray(array, element) {
  ('foo', ...array)
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo')
  return array
}
