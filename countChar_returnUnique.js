function count (string) {  
  // The function code should be here
  var result = {};
  string.split('').forEach(function(s){
  	result[s] ? result[s]++ : result[s] = 1;
  });
  // for (var i=0; i<arr.length; i++) {
  // 	if (!result[arr[i]]) {
  // 		result[arr[i]] = 1;
  // 	} else {
		// (result[arr[i]])++;
  // 	}
  // }
  return result;
}

console.log(count('abaccaaatj'));
