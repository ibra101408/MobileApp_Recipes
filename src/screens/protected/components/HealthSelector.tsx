

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from "../styles";

interface HealthSelectorProps {
    onSelect: (healths: string[]) => void;
}

const HealthSelector: React.FC<HealthSelectorProps> = ({ onSelect }) => {
    const [selectedHealths, setSelectedHealths] = useState<string[]>([]);

    const health = [
        'alcohol-cocktail',
        'alcohol-free',
        'celery-free',
        'crustacean-free',
        'dairy-free',
        'DASH',
        'egg-free',
        'fish-free',
        'fodmap-free',
        'gluten-free',
        'immuno-supportive',
        'keto-friendly',
        'kidney-friendly',
        'kosher',
        'low-potassium',
        'low-sugar',
        'lupine-free',
        'Mediterranean',
        'mollusk-free',
        'mustard-free',
        'no-oil-added',
        'paleo',
        'peanut-free',
        'pescatarian',
        'pork-free',
        'red-meat-free',
        'sesame-free',
        'shellfish-free',
        'soy-free',
        'sugar-conscious',
        'sulfite-free',
        'tree-nut-free',
        'vegan',
        'vegetarian',
        'wheat-free'
    ];

    const handleHealthSelector = (health: string) => {
        // Toggle selection of health label
        const isSelected = selectedHealths.includes(health);
        const updatedHealths = isSelected
            ? selectedHealths.filter(item => item !== health)
            : [...selectedHealths, health];
        setSelectedHealths(updatedHealths);
        onSelect(updatedHealths);
    };

    const renderHealthItem = ({ item }: { item: string }) => (
        <TouchableOpacity
            style={[styles.selectButton, selectedHealths.includes(item) && styles.selectedButton]}
            onPress={() => handleHealthSelector(item)}
        >
            <Text style={styles.buttonText}>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={health}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={renderHealthItem}
                keyExtractor={(item) => item}
            />
        </View>
    );
};

export default HealthSelector;
