function calculateTax(amount){
  return amount * 0.10
}

function convertToUpperCase(text){
  return text.toUpperCase();
}

function findMaximum(num1, num2){
  if(num1 > num2){
    return num1;
  } else{
    return num2;
  }
}

function isPalindrome(word){
  const letters = word.split("");
  const reversedLetters = letters.reverse();
  const reversedWord = reversedLetters.join("");

  if (word === reversedWord){
    return true;
  } else{
    return false;
  }
}

function calculateDiscountedPrice(originalPrice , discountPercentage){
  const discountAmount = (discountPercentage/100) * originalPrice;
  const finalPrice =originalPrice - discountAmount;
  return finalPrice;
}




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };