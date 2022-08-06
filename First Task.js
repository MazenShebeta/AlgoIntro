    var word_counter = 1;
    var vowel_counter = 0;
    var str = "Hello World.";
    var arr_vowels =   ["a", "e", "i", "o", "u"];

    for(let letters of str.toLowerCase()){
        if(arr_vowels.includes(letters))
            vowel_counter++;
    }

    console.log("Number of vowels: " + vowel_counter);
    // str.toLowerCase;
    // for (var i = 0; i < str.length-1; i++) {
    //     if (str[i] == " ") {
    //         word_counter++;
    //     }
    //     else if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "y") {
    //         vowel_counter++;
    //     }
    //     else if (str[i] == ".") {
    //         break;
    //     }
    // }
    // console.log("Number of words: " + word_counter);
    // console.log("Number of vowels: " + vowel_counter);