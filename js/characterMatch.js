exports.isCharacterMatch = function(string1, string2) {
    let string1Array = string1.toLowerCase().split("")
    let answerArray = []
    for (let letter in string1Array) {
        if (string2.toLowerCase().includes(string1Array[letter])){
            answerArray.push(string1Array[letter])
        }
    }
   
    if (answerArray.length === string1Array.length){
        return true
    }
    else {
        return false
    }

};

exports.anagramsFor = function(word, listOfWords) {
    let outputArray = []
    let anagramChecker = function(string1, string2){
        let string1Array = string1.toLowerCase().split("")
    let answerArray = []
    for (let letter in string1Array) {
        if (string2.toLowerCase().includes(string1Array[letter])){
            answerArray.push(string1Array[letter])
        }
    }
   
    if (answerArray.length === string1Array.length){
        return true
    }
    else {
        return false
    }

    }

    for (let i = 0; i < listOfWords.length; i++){
        if (anagramChecker(word, listOfWords[i])){
            outputArray.push(listOfWords[i])
        }



    }
    return outputArray

};
//console.log(this.isCharacterMatch('charm', 'march'))



