
class Utils {
    constructor() {}

    palindrome(word) {
        if (!word) {
            return "introduce a word!";
        }

        let response = true;
        for(let pos = 0; pos < word.length/2; pos ++) {
            if(word[pos] !== word[word.length-pos-1]) {
                response = false;
                break;
            }
        }
        return response;
    }

    fibonacci(number) {
        if (!number) {
            return "introduce a number!";
        }

        var array = [0, 1];
        for (let pos = 0; pos <= number; pos++) {
            if (pos > 1) {
                array.push(array[pos-2]+array[pos-1]);
            }
        }
        return array[number];
    }

    vowels(word) {
        if (!word) {
            return "introduce a word!";
        }

        var vowels = ["a", "e", "i", "o", "u"];
        var splittedWord = word.split("");

        for (let pos = 0; pos < word.length; pos++) {
            var key = vowels.indexOf(splittedWord[pos]); 
            if (key >= 0) {
                vowels.splice(key, 1);
            }
        }

        if (vowels.length === 0) {
            return true;
        }
        return false;
    }

    bubble(array) {
        if (!array) {
            return "introduce an number array!";
        }
        
        for (let cycle = 0; cycle < array.length; cycle++) {
            for (let pos = 0; pos < array.length; pos++) {
                if (array[pos] > array[pos+1]) {
                    var aux = array[pos+1];
                    array[pos+1] = array[pos];
                    array[pos] = aux;
                }
            }
        }
        return array;
    }

    recursiveFactorial(number) {
        if (isNaN(parseInt(number))) {
            return "introduce a number!";
        }

        if (number === 0) {
            return 1;
        }
        return number * this.recursiveFactorial(number - 1);
    }
}

module.exports = Utils;