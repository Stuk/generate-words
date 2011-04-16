var vowels = ['a', 'e', 'i', 'o', 'u'];
var consts =  ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'qu', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'tt', 'ch', 'sh'];

var len = 5;

var word = '';

var is_vowel = false;

var arr;

for (var i = 0; i < len; i++) {

  if (is_vowel) arr = vowels
  else arr = consts
  is_vowel = !is_vowel;

  word += arr[Math.round(Math.random()*arr.length-1)];
}

console.log(word);
