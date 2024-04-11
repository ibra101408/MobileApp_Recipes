// RecipeDetailScreen.tsx
import React from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    TouchableOpacity,
    Linking,
    ScrollView,
} from 'react-native';
import {styles} from './styles.js';

import Close from '../../../../assets/close.svg';

interface RecipeDetailProps {
    isVisible: boolean;
    onClose: () => void;
    label: string;
    recipe: {
        label: string;
        image: string;
        ingredientLines: string[]
    } | null;
}

const RecipeDetailScreen: React.FC<RecipeDetailProps> = ({isVisible, onClose, recipe}) => {
    const handleLinkPress = () => {
        Linking.openURL(recipe.recipe.url);
    };

    return (
        <Modal
            visible={isVisible}
            onRequestClose={onClose}
            animationType="slide"
            statusBarTranslucent={true}

        >
            <ScrollView style={{flex: 1}}>
                <View style={styles.container}>
                    {recipe && (
                        <>

                            <View style={{height: 330}}>
                                <Image source={{uri: recipe.recipe.image}}
                                       style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}/>
                                <TouchableOpacity onPress={onClose} style={styles.closeBtnContainer}>
                                    <View style={styles.closeBtn}>
                                        <Close width={50} height={30}/>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.detailTextContainer}>
                                <View style={styles.tagsContainer}>
                                    <Text style={styles.label}>{recipe.recipe.label}</Text>
                                    {recipe.recipe.dietLabels.map((label, index) => (
                                        <Tag key={index} label={label}/>
                                    ))}
                                    <Tag label={`${recipe.recipe.cuisineType}`}/>
                                    <Tag label={`${recipe.recipe.mealType}`}/>
                                    <Tag label={`${recipe.recipe.dishType}`}/>

                                </View>
                                <Text style={styles.label}>Ingredients</Text>
                                {recipe.recipe.ingredientLines.map((ingredientLine: string, index: number) => (
                                    <View key={index} style={styles.ingredientContainer}>
                                        <Text style={styles.ingredientLine}>{ingredientLine}</Text>
                                    </View>
                                ))}
                                <TouchableOpacity onPress={handleLinkPress} style={styles.button}>
                                    <Text style={styles.buttonSource}>Recipe</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )}

                </View>
            </ScrollView>
        </Modal>

    );
};



const Tag = React.memo(({label}: RecipeDetailProps) => {
    return (
        <View style={styles.tagContainer}>
            <Text style={styles.tagText}>{label}</Text>
            <View style={styles.triangle}></View>
            <View style={styles.circle}></View>
        </View>
    );
});

export default RecipeDetailScreen;