import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { styles } from "../styles";
interface MealTypeSelectorProps {
    onSelect: (mealType: string) => void;
}

const MealTypeSelector: React.FC<MealTypeSelectorProps> = ({ onSelect }) => {
    const [selectedMealType, setSelectedMealType] = useState<string | null>(null);

    const mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Dessert'];

    const handleMealTypeSelection = (mealType: string) => {
        setSelectedMealType((prevMealType) => (prevMealType === mealType ? null : mealType));
        onSelect(mealType); // Call the callback function with the selected meal type
    };

    const renderMealTypeItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={[styles.selectButton, selectedMealType === item && styles.selectedButton]}
            onPress={() => handleMealTypeSelection(item)}
        >
            <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={mealTypes}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderMealTypeItem}
                keyExtractor={(item) => item}
            />
        </View>
    );
};



export default MealTypeSelector;