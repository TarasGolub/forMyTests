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
            throw new Error ('Fridge is off');
        }

        if (food.length + arguments.length >= this._power/100) {
            throw new Error ('Fridge is fool');
        }

        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]);
        }
    };

    this.getFood = function() {
        return food.slice();
    };

    this.filterFood = function(func) {
        return food.filter(func);
    };

    this.removeFood = function(item) {
        var idx = food.indexOf(item);
        if (idx != -1) food.splice(idx,1);
    };

    var currentDisable = this.disable;
    this.disable = function() {
        currentDisable.apply(this, arguments);
        if (food.length) throw new Error("You cant, there is food in");
    };
}

