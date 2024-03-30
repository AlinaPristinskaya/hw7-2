function checkPalindrome() {
    
    let word = document.getElementById("wordInput").value.toLowerCase();

   
    let cleanedWord = word.replace(/\s/g, '');

   
    let left = 0;
    let right = cleanedWord.length - 1;
    let isPalindrome = true;

   
    while (left < right) {
        if (cleanedWord[left] !== cleanedWord[right]) {
            isPalindrome = false;
            break;
        }
        left++;
        right--;
    }

    
    if (isPalindrome) {
        console.log(word + " is a palindrome.");
    } else {
        console.log(word + " is not a palindrome.");
    }
}
