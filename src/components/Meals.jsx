import {useState,useEffect} from 'react';
import MealItem from './Mealitem';
import useHttp from '../Hooks/useHttp';
import Error from './Error';

const requestConfig={};

export default function Meals(){

    const{
        data:loadedMeals,       
        isLoading,
        error
    }= useHttp('http://localhost:3000/meals',requestConfig,[]);

    if(isLoading){
        return<p className ="center">Fetching  Meals...</p>;
    }
   
    if(error){
        return <Error title ="Failed to fetch Meals"/>
    }
    return (
        <ul id="meals">
        {loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal}/>
        ))}
        </ul>
    );
            
}