function Machine(power) {
    this._power = power;
    this._enabled = false;
    
    var self = this;
    
    this.enable = function() {
        self._enabled = true;
    };
    
    this.disable = function() {
        self._enabled = false;
    };
}

function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];

    this.addFood = function() {
        if (!this._enabled) {
            throw new Error ('ошибка, холодильник выключен');
        }

        var args = [].slice.call(arguments);


        if ( food.length + args.length >  this._power / 100) {
            throw new Error ('ошибка, слишком много еды');
        }

        for (var i = 0; i < args.length; i++) {
            food.push(args[i]);
        }
    };

    this.getFood = function() {
        return food.slice();
    };    

    this.filterFood = function(fn) {
        return food.filter (fn);
    };

    this.removeFood = function(item) {
        if (food.indexOf(item) != -1) food.splice(food.indexOf(item),1);
        return food;
    };

    parentDisable = this.disable;
    this.disable = function() {
        if (food.length) throw new Error(' ошибка, в холодильнике есть еда');
        parentDisable();
    };

}


/***Код для проверки:

var fridge = new Fridge(200);
fridge.addFood("котлета"); // ошибка, холодильник выключен*/


/***Ещё код для проверки:
**создать холодильник мощностью 500 (не более 5 еды)

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт"); // ошибка, слишком много еды*/

/***Код использования холодильника без ошибок:

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка","dfdf");

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье
*/
/*** КОД ПРОВЕРКИ ФИЛЬТРОВ

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.addFood ('Собака');

fridge.removeFood("Собака"); // без эффекта
console.log( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  console.log( item.title ); // сок, зелень
  fridge.removeFood(item);
});

console.log( fridge.getFood().length ); // 2*/

// ** Код проверки disable

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда