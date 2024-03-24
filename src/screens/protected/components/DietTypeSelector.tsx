import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { styles } from "../styles";
interface DietTypeSelectorProps {
    onSelect: (diet: string) => void;
}

const DietTypeSelector: React.FC<DietTypeSelectorProps> = ({ onSelect }) => {
    const [selectedDietType, setSelectedDietType] = useState<string | null>(null);

    const diet = [
        'balanced',
        'high-fiber',
        'high-protein',
        'low-carb',
        'low-fat',
        'low-sodium'
    ];

    const handleDietTypeSelection = (diet: string) => {
        setSelectedDietType((prevDietType) => (prevDietType === diet ? null : diet));
        onSelect(diet); // Call the callback function with the selected meal type
        console.log('12selectedDietType', selectedDietType);
    };

    const renderDietTypeItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={[styles.selectButton, selectedDietType === item && styles.selectedButton]}
            onPress={() => handleDietTypeSelection(item)}
        >

            <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={diet}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderDietTypeItem}
                keyExtractor={(item) => item}
            />
        </View>
    );
};



export default DietTypeSelector;
/*
// dietSelector.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from "../styles";

interface dietSelectorProps {
    onSelect: (dietLabel: string) => void;
}

const dietSelector: React.FC<dietSelectorProps> = ({ onSelect }) => {
    const [selectedDietLabel, setSelectedDietLabel] = useState<string | null>(null);

    const diet = [
        'balanced',
        'high-fiber',
        'high-protein',
        'low-carb',
        'low-fat',
        'low-sodium'
    ];

    const handledietelection = (dietLabel: string) => {
        setSelectedDietLabel(dietLabel);
        onSelect(dietLabel);
    };

    const renderDietLabelItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={[styles.selectButton, selectedDietLabel === item && styles.selectedButton]}
            onPress={() => handledietelection(item)}
        >
            <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={diet}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderDietLabelItem}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

export default dietSelector;
*/