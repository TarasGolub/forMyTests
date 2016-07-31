function count (string) {  
    // The function code should be here
    var result = {};
    string.split('').forEach(function(s){
    	result[s] ? result[s]++ : result[s] = 1;
    });

    return result;
}

console.log(count('abaccaaatj'));
