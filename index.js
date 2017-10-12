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
  var newKittens = [name, ...kittens]
  return newKittens
}
