import React, { Component } from 'react'
import Auxx from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
	salad: 0.5,
	cheese: 0.4,
	meat: 1.3,
	bacon: 0.7
}
class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0
		},
		totalPrice: 4
	}

	addIngredientHandler = type => {
		const { ingredients, totalPrice: oldPrice } = this.state
		const oldCount = ingredients[type]
		const updatedCount = oldCount + 1
		const updatedIngredients = {
			...ingredients
		}
		updatedIngredients[type] = updatedCount
		const priceAddition = INGREDIENT_PRICES[type]
		const newPrice = oldPrice + priceAddition
		this.setState({
			totalPrice: newPrice,
			ingredients: updatedIngredients
		})
	}

	removeIngredientHandler = () => {}

	render() {
		return (
			<Auxx>
				<Burger ingredients={this.state.ingredients} />
				<BuildControls ingredientAdded={this.addIngredientHandler} />
			</Auxx>
		)
	}
}

export default BurgerBuilder
