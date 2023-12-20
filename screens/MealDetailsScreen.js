import { Text } from "react-native"

function MealDetailsScreen({route}) {

    const mealId = route.params.mealId;

    return (

        <Text>Meal details {mealId}</Text>
    )
}

export default MealDetailsScreen