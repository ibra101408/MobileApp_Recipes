import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { styles } from "../styles";
interface CuisineTypeSelectorProps {
    onSelect: (cuisineType: string) => void;
}

const CuisineTypeSelector: React.FC<CuisineTypeSelectorProps> = ({ onSelect }) => {
    const [selectedCuisineType, setSelectedCuisineType] = useState<string | null>(null);

    const cuisineType = [
        'American',
        'Asian',
        'British',
        'Caribbean',
        'Central Europe',
        'Chinese',
        'Eastern Europe',
        'French',
        'Indian',
        'Italian',
        'Japanese',
        'Kosher',
        'Mediterranean',
        'Mexican',
        'Middle Eastern',
        'Nordic',
        'South American',
        'South East Asian'
    ];

    const handleCuisineTypeSelection = (cuisineLabels: string) => {
        setSelectedCuisineType((prevCuisineType) => (prevCuisineType === cuisineLabels ? null : cuisineLabels));
        onSelect(cuisineLabels); // Call the callback function with the selected cuisine type
        console.log('selectedCuisineType', selectedCuisineType);
    };


    const renderCuisineTypeItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={[styles.selectButton, selectedCuisineType === item && styles.selectedButton]}
            onPress={() => handleCuisineTypeSelection(item)}
        >

            <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={cuisineType}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderCuisineTypeItem}
                keyExtractor={(item) => item}
            />
        </View>
    );
};



export default CuisineTypeSelector;