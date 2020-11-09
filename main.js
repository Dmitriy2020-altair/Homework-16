'use strict';

class Hamburger {
	constructor(...args) {
		this.properties = [...args];
	}

	static SIZE_SMALL = {
		price: 50,
		calories: 20,
	}

	static SIZE_LARGE = {
		price: 100,
		calories: 40,
	}

	static STUFFING_CHEESE = {
		price: 10,
		calories: 20,
	}

	static STUFFING_SALAD = {
		price: 20,
		calories: 5,
	}

	static STUFFING_POTATO = {
		price: 15,
		calories: 10,
	}

	static TOPPING_SAUCE = {
		price: 15,
		calories: 0,
	}

	static TOPPING_MAYO = {
		price: 20,
		calories: 5,
	}

	addTopping(...toppings) {
		this.properties.push(...toppings);
	}

	calculatePrice() {
		let price = 0;
		this.properties.map(property => price += property.price);
		return price;
	}

	calculateCalories() {
		let calories = 0;
		this.properties.map(property => calories += property.calories);
		return calories;
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
