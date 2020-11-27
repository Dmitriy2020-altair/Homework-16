'use strict';

class Hamburger {
	constructor(...props) {
		this.props = [];

		props.forEach(prop => {
			(prop.type === 'size' && this.props.push(prop));
		})

		this.stuffings = [];
		this.toppings = [];
	}

	static SIZE_SMALL = {
		type: 'size',
		price: 50,
		calories: 20,
	}

	static SIZE_LARGE = {
		type: 'size',
		price: 100,
		calories: 40,
	}

	static STUFFING_CHEESE = {
		type: 'stuffing',
		price: 10,
		calories: 20,
	}

	static STUFFING_SALAD = {
		type: 'stuffing',
		price: 20,
		calories: 5,
	}

	static STUFFING_POTATO = {
		type: 'stuffing',
		price: 15,
		calories: 10,
	}

	static TOPPING_SAUCE = {
		type: 'topping',
		price: 15,
		calories: 0,
	}

	static TOPPING_MAYO = {
		type: 'topping',
		price: 20,
		calories: 5,
	}

	addTopping(...toppings) {
		toppings.forEach(topping => {
			(topping.type === 'topping' && this.toppings.push(topping));
		});
	}

	addStuffing(...stuffings) {
		stuffings.forEach(stuffing => {
			(stuffing.type === 'stuffing' && this.stuffings.push(stuffing));
		});
	}

	calculatePrice() {
		const choosenAdds = this.props.concat(this.stuffings, this.toppings);
		
		return choosenAdds.reduce((accum, current) => accum + current.price, 0);
	}

	calculateCalories() {
		const choosenAdds = this.props.concat(this.stuffings, this.toppings);
		
		return choosenAdds.reduce((accum, current) => accum + current.calories, 0);
	}

};

// маленький гамбургер с начинкой из сыра:
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза:
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий:
console.log(`Calories:` + hamburger.calculateCalories()); // 25

// сколько стоит:
console.log(`Price: ${hamburger.calculatePrice()} $`); // 70$

// я тут передумал и решил добавить еще приправу:
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?:
console.log(`Price with sauce: ${hamburger.calculatePrice()} $`); //85$;

// Проверим на другом бургере:
const hamburgerLarge = new Hamburger(Hamburger.SIZE_LARGE, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_POTATO);
hamburgerLarge.addTopping(Hamburger.TOPPING_SAUCE);
hamburgerLarge.addTopping(Hamburger.TOPPING_MAYO);
console.log(`Calories:`+ hamburgerLarge.calculateCalories()); // 45 Calories;
console.log(`Price: ${hamburgerLarge.calculatePrice()} $`); // 135$;
