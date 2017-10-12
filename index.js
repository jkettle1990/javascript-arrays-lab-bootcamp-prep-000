const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]

var destructivelyAppendKitten = function(name){
  kittens.push(name)
}

var destructivelyPrependKitten = function(name){
  kittens.unshift(name)
}

var destructivelyRemoveLastKitten = function(){
  kittens.pop()
}

var destructivelyRemoveFirstKitten = function(){
  kittens.shift()
}

var appendKitten = function(name){
  var newKittens = [...kittens, name]
  return newKittens
}

var prependKitten = function(name){
  var newKittens = [name, ...kittens]
  return newKittens
}

var removeLastKitten = function(){
  kittens.slice(0, kittens.length -1)
  return kittens
}
