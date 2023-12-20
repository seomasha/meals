import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native'

import { useNavigation } from '@react-navigation/native'

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {

    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id
        });
    
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
            style={({pressed}) => (pressed ? styles.buttonPressed : null)}
            android_ripple={{color: "#ccc"}}
            onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailItem}>{duration}m</Text>
                        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
                        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },

    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },

    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowRadius: 16,
        shadowOffset: {width: 0, height: 2}
    },

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

    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },

    buttonPressed: {
        opacity: 0.5,
    },
})