import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native"
import MealItem from "../components/MealItem";

import { MEALS, CATEGORIES } from "../data/dummy-data"

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


  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    }
    return(
      <MealItem {...mealItemProps}/>
    )
  }

  return (
    <View style={styles.container}>
        <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
    </View>
  )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})