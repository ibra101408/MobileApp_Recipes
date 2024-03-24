import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { styles } from "../styles";
interface DishTypeSelectorProps {
    onSelect: (dishType: string) => void;
}

const DishTypeSelector: React.FC<DishTypeSelectorProps> = ({ onSelect }) => {
    const [selectedDishType, setSelectedDishType] = useState<string | null>(null);

    const dishTypes = [
        'alcohol cocktail',
        'biscuits and cookies',
        'bread',
        'cereals',
        'condiments and sauces',
        'desserts',
        'drinks',
        'egg',
        'ice cream and custard',
        'main course',
        'pancake',
        'pasta',
        'pastry',
        'pies and tarts',
        'pizza',
        'preps',
        'preserve',
        'salad',
        'sandwiches',
        'seafood',
        'side dish',
        'soup',
        'special occasions',
        'starter',
        'sweets'
    ];

// Print dishType names
   /* dishTypes.forEach((dishType, index) => {
        console.log(`${index + 1}. ${dishType}`);
    });*/

    const handleDishTypeSelection = (dishType: string) => {
        setSelectedDishType((prevDishType) => (prevDishType === dishType ? null : dishType));
        onSelect(dishType); // Call the callback function with the selected meal type
    };

    const renderDishTypeItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={[styles.selectButton, selectedDishType === item && styles.selectedButton]}
            onPress={() => handleDishTypeSelection(item)}
        >
            <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={dishTypes}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderDishTypeItem}
                keyExtractor={(item) => item}
            />
        </View>
    );
};



export default DishTypeSelector;