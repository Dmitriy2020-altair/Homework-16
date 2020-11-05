'use strict';

class Hamburger {
	constructor(...args) {
		this.price = 0;
		this.calories = 0;
		args.forEach(arg => arg.call(this));
	}

	static SIZE_SMALL() {
		this.price += 50;
		this.calories += 20;
	}

	static SIZE_LARGE() {
		this.price += 100;
		this.calories += 40;
	}

	static STUFFING_CHEESE() {
		this.price += 10;
		this.calories += 20;
	}

	static STUFFING_SALAD() {
		this.price += 20;
		this.calories += 5;
	}

	static STUFFING_POTATO() {
		this.price += 15;
		this.calories += 10;
	}

	static TOPPING_SAUCE() {
		this.price += 15;
		this.calories += 0;
	}

	static TOPPING_MAYO() {
		this.price += 20;
		this.calories += 5;
	}

	addTopping(...toppings) {
		toppings.forEach(topping => topping.call(this));
	}

	calculatePrice() {
		return this.price;
	}

	calculateCalories() {
		return this.calories;
	}

};

// маленький гамбургер с начинкой из сыра:
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза:
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий:
console.log(`Calories:` + hamburger.calculateCalories()); // 45 Calories;

// сколько стоит:
console.log(`Price: ${hamburger.calculatePrice()} $`); // 80$;

// я тут передумал и решил добавить еще приправу:
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?:
console.log(`Price with sauce: ${hamburger.calculatePrice()} $`); //95$;

// Проверим на другом бургере:
const hamburgerLarge = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_POTATO);
hamburgerLarge.addTopping(Hamburger.TOPPING_SAUCE);
hamburgerLarge.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Calories:`+ hamburgerLarge.calculateCalories()); // 60 Calories;
console.log(`Price: ${hamburgerLarge.calculatePrice()} $`); // 170$;
