function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  return str === str.split('').reverse().join('');
}

document.getElementById('check-btn').addEventListener('click', () => {
  const input = document.getElementById('text-input').value.trim();

  if (!input) {
    alert('Please input a value');
    return;
  }

  const result = document.getElementById('result');

  if (isPalindrome(input)) {
    result.textContent = `${input} is a palindrome`;
  } else {
    result.textContent = `${input} is not a palindrome`;
  }
});