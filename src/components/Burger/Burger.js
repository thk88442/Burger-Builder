import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients.js';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        //['salad', 'bacon', 'cheese', 'meat']
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => { //props.ingredients['cheese']=1
                return <BurgerIngredients key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};

export default burger;