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

function addElementToBeginningOfArray(array, 'foo') {
  ['foo', ...array]
  return array
}

const array = [1]

function destructivelyAddElementToBeginningOfArray(array, 'foo') {
  array.unshift('foo')
  return array
}
