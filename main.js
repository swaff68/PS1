$(document).on('ready', function() {
 

var testString = "here is our sentence."; 

var letterCapitalize = function(sentence){
	// split inout string into an array of words
	var str = sentence.split(' ');
	// loop through each word in the array
	for (var i=0; i<str.length; i++){
		// set first letter of each word to capital
		var firstLetter = str[i][0];
		//takes cap ltr adds it to rest of the word minus the first ltr
		var newWord = firstLetter.toUpperCase() + str[i].substring(1, str[i].length)

		console.log(newWord);
	} // end of for loop

	//puts the split words back into a sentence
	return str.join(' ');
}// end of letterCapitalize function



letterCapitalize(testString);



var testString2 = "never eat shredded wheat";

var wordCount = function (words){
var sentence = words.split(' ')
var number = sentence.length;

console.log("this string has " + number + ' words');


}

wordCount(testString2);




});

