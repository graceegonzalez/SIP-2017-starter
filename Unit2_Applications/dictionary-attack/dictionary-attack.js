var wordsList = [];
var letterList = [];

function init() {
  // Loading the words from the dictionary text file to the variable wordsFile

  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";

//.get is accessing the variable wordsFile
//.disabled means is this button disabled
//.split splits the blob of text from the txt file based on each new line (from '\n')

//gets response from the wordsFileURL and passes it to the callback function in the form of the "data"
//parameter. And eventually invokes the callback function.
  $.get(wordsFile, function(data) {

    //Disables the submit button until the long string of words is sperated into individual words (which is then stored in the wordsList array)
    //then it enables the button again.
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');

    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

//if userinput = element in array return: your password is not strong
//if userinput != element in array return: your password is strong enough
//var password = input;
var leet = {
  1:"i",
  2:"z",
  3:"e",
  4:"a",
  5:"s",
  6:"g",
  7:"t",
  8:"b",
  9:"q",
  0:"o",
}

function checkPassword() {
  var new_word="";
  var word = document.getElementById("pw").value
    for (var i=0;i<word.length;i++){
      var letter = word.charAt(i)
      if(leet[letter]) {
        new_word +=leet[letter];
      }else{
        new_word+= letter;
      }
      console.log(new_word);
    checkPasswordHelper(new_word);
  }
}



function checkPasswordHelper(password){
   for (var i = 0; i < wordsList.length; i++) {
     if (password == wordsList[i]) {
        return document.getElementById("results").innerHTML = "Bad Password";}
     }
   for (var i = 0; i < wordsList.length; i++) {
    if (password != wordsList[i]){
       return document.getElementById("results").innerHTML="Good Password";}
   }
}
