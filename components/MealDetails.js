import { View, Text, StyleSheet } from 'react-native'

function MealDetails({duration, complexity, affordability, style, text}) {
  return (
    <View style={[styles.details, style]}>
        <Text style={[styles.detailItem, text]}>{duration}m</Text>
        <Text style={[styles.detailItem, text]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailItem, text]}>{affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12
    },
})