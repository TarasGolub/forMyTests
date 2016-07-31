function eratosphen(n) {
    var arr = [];

    for (var i = 2; i <= n ; i++) {
        arr[i] = 1;
    }
    // console.log(arr);

    var p = 2;
    do {
        for (var i = p*2; i <=n; i += p) {
            arr[i] = 0;
        }

        for (var i=p+1; i<=n; i++) {
            if (arr[i] == 1) break;
        }

        p = i;
    } while (p*p < n);

    // console.log(arr);

    var sum = 0;
    for (var i = 0; i <=n ; i++) {
        if (arr[i]) {
            sum += i;
        // console.log(i);
        }
    }

    return sum;
}

console.log(eratosphen(1000));


