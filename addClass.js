function removeClass(obj, classRem) {
    if (!obj.className) return;
    var arr = obj.className.split(' ');
    // console.log(arr);
    while (true) {
        if (~arr.indexOf(classRem)) {
            arr.splice(arr.indexOf(classRem), 1);
        } else {
            break;
        }
    }

    return obj.className = arr.join(' ');
}

var obj = {
    className: 'open menu'
};

// console.log(removeClass(obj, 'open')); // obj.className='menu');
console.log(removeClass(obj, 'blabla')); // без изменений (нет такого класса));