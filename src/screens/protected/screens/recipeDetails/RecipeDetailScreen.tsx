// RecipeDetailScreen.tsx
import React from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    Button,
    SafeAreaView,
    TouchableOpacity,
    Linking,
    ScrollView,
} from 'react-native';
import {styles} from './styles.js';

import Close from '../../../../assets/close.svg';

interface RecipeDetailProps {
    isVisible: boolean;
    onClose: () => void;
    recipe: { label: string; image: string; ingredientLines: string[] } | null;
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
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View>
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
                                <Text style={styles.label}>{recipe.recipe.label}</Text>
                                {recipe.recipe.dietLabels.map((label, index) => (
                                    <Tag key={index} label={label}/>
                                ))}
                                <Tag label={`${recipe.recipe.cuisineType}`}/>
                                <Tag label={`${recipe.recipe.mealType}`}/>
                                <Tag label={`${recipe.recipe.dishType}`}/>
                                <Text style={styles.ingredientsTitle}>Ingredients:</Text>
                                {recipe.recipe.ingredientLines.map((ingredientLine: string, index: number) => (
                                    <Text key={index} style={styles.ingredientLine}>{ingredientLine}</Text>
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
const Tag = ({label}) => {  let labels = [];
    let lab2 = [];

    if (typeof label === 'string') {
        labels = label.split(', '); // Split the label by commas
        lab2.push(...labels); // Push each label into lab2 array

    }else {
        console.error('Invalid label type. Expected string or array.');
    }

    //lab2.push(...labels); // Merge labels into lab2 array

    console.log("lab2:", lab2);
   // console.log("FIrst", firstTwoLabels)
    //console.log("rest", restLabels)
    return (
        <View style={styles.tagContainer}>
            <View style={styles.col}>
                <Text style={styles.tagText}>{label}</Text>
                <View style={styles.triangle}></View>
                <View style={styles.circle}></View>
            </View>
            {/* <View style={styles.col2}>
                <Text style={styles.tagText}>{label}</Text>
                <View style={styles.triangle}></View>
                <View style={styles.circle}></View>
            </View>
*/}

        </View>
    );
}


export default RecipeDetailScreen;