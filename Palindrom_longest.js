longestPalindrome=function(s){
if (!s) return 0;
var longest = 1;

for (var i = 0; i < s.length; i++) {
	for (var j = i; j <= s.length; j++) {
		var check = s.substring(i,j);
		if (isPalindrom(check) && (longest < check.length) ) {
			longest = check.length;
		}
	}
}
return longest;

function isPalindrom(str) {
	return str == str.split('').reverse().join('');
}

}

var palindrome = 'shsdfhhgdhgdhhk;hsfhd2345432hdjgjkfjhdgjyjddghkffgsthfgjrnndfhdsshdhgffuykdtjdrydtndytnydydndgfmffkuyfmsyjy';
console.log(longestPalindrome(palindrome));

var palindrome = 'baablkj12345432133d';
console.log(longestPalindrome(palindrome));

var palindrome = '';
console.log(longestPalindrome(palindrome));

var palindrome = 'baablkj12';
console.log(longestPalindrome(palindrome));

var palindrome = 'aa';
console.log(longestPalindrome(palindrome));

var palindrome = 'asdgjk23';
console.log(longestPalindrome(palindrome));

var palindrome = 'a';
console.log(longestPalindrome(palindrome));