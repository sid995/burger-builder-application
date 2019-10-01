import React from 'react'
import Auxx from '../../../hoc/Auxx'
import Button from '../../UI/Button/Button'

const OrderSummary = props => {
	const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
		return (
			<li key={igKey}>
				<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
			</li>
		)
	})

	return (
		<Auxx>
			<h3>Your Order</h3>
			<p>A delicious burger with following ingredients</p>
			<ul>{ingredientSummary}</ul>
			<p>Continue to checkout?</p>
			<Button btnType='Danger' clicked={props.purchaseCancelled}>
				CANCEL
			</Button>
			<Button btnType='Success' clicked={props.purchaseContinued}>
				CONTINUE
			</Button>
		</Auxx>
	)
}

export default OrderSummary
