document.getElementById("checkBtn").addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value;
    var cleanedText = inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var reversedText = cleanedText.split('').reverse().join('');
    
    if (cleanedText === reversedText) {
        document.getElementById("result").textContent = '"' + inputText + '" is a palindrome!';
    } else {
        document.getElementById("result").textContent = '"' + inputText + '" is not a palindrome.';
    }
});
