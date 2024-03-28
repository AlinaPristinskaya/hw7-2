function checkPalindrome() {
    // Get the input value
    let word = document.getElementById("wordInput").value.toLowerCase();

    // Remove spaces from the word
    let cleanedWord = word.replace(/\s/g, '');

    // Initialize variables for looping
    let left = 0;
    let right = cleanedWord.length - 1;
    let isPalindrome = true;

    // Check if the word is a palindrome using a while loop
    while (left < right) {
        if (cleanedWord[left] !== cleanedWord[right]) {
            isPalindrome = false;
            break;
        }
        left++;
        right--;
    }

    // Print the result
    if (isPalindrome) {
        console.log(word + " is a palindrome.");
    } else {
        console.log(word + " is not a palindrome.");
    }
}
