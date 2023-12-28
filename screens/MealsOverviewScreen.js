import { useLayoutEffect } from "react";

import { MEALS, CATEGORIES } from "../data/dummy-data"
import MealsList from "../components/mealslist/MealsList";

function MealsOverviewScreen({ route, navigation }) {

  const catID = route.params.categoryID;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  })


  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catID).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catID, navigation])

  return <MealsList items={displayedMeals}/>

}

export default MealsOverviewScreen

