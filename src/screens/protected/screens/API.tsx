import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity, FlatList, Alert} from 'react-native';
import {getRecipes} from '../apiService.ts';
import {styles} from "../styles.js";
import MealTypeSelector from '../components/MealTypeSelector.tsx';
import DishTypeSelector from '../components/DishTypeSelector.tsx';
import RecipeDetailScreen from './recipeDetails/RecipeDetailScreen.tsx';
import DietTypeSelector from '../components/DietTypeSelector.tsx';
import CuisineTypeSelector from '../components/CuisineTypeSelector.tsx';
import Back from "../../../assets/arrow_back.svg";
import {useNavigation} from "@react-navigation/native";


const RecipeComponent: React.FC = () => {
    const [recipes, setRecipes] = useState([]);
    const [selectedMealType, setSelectedMealType] = useState<string | null>(null);
    const [selectedDishType, setSelectedDishType] = useState<string | null>(null);
    const [selectedDietType, setSelectedDietType] = useState<string | null>(null);
    const [selectedCuisineType, setSelectedCuisineType] = useState<string | null>(null);
    const [selectedRecipe, setSelectedRecipe] = useState<any | null>(null);

    const fetchRecipes = async () => {
        try {
            const fetchedRecipes = await getRecipes(selectedMealType, selectedDishType, selectedDietType, selectedCuisineType);

            if (fetchedRecipes && fetchedRecipes.length > 0) {
                setRecipes(fetchedRecipes);
            } else {
                // If no recipes found, display a message
                setRecipes([]);
                Alert.alert('No recipes found.');
            }
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    useEffect(() => {
        // Example: Fetch breakfast recipes with the dishType 'Bread'
        if (selectedMealType && selectedDishType && selectedDietType && selectedCuisineType) {
            console.log("Cuisine: ", selectedCuisineType)
            fetchRecipes(); // Call fetchRecipes directly
        }
    }, [selectedMealType, selectedDishType, selectedDietType, selectedCuisineType]);

    const handleMealTypeSelect = (mealType: string) => {
        setSelectedMealType((prevMealType) => (prevMealType === mealType ? null : mealType));
    };

    const handleDishTypeSelect = (dishType: string) => {
        setSelectedDishType((prevDishType) => (prevDishType === dishType ? null : dishType));
    };

    const handleDietTypeSelect = (diet: string) => {
        setSelectedDietType((prevDietType) => (prevDietType === diet ? null : diet));
    };

    const handleCuisineTypeSelect = (cuisineType: string) => {
        setSelectedCuisineType((prevCuisineType) => (prevCuisineType === cuisineType ? null : cuisineType));
    };

    const navigation = useNavigation();

    const handleBack = () => {
        navigation.navigate('Protected');
    };

    const handleShowResults = () => {
        // Trigger fetching recipes based on selected filters
        fetchRecipes();
    };

    const handleRecipeSelect = (recipe: any) => {
        console.log("select")

        setSelectedRecipe(recipe);
    };

    const handleCloseRecipeDetail = () => {
        console.log("close")
        setSelectedRecipe(null);
    };


    return (
        <SafeAreaView>
            <RecipeDetailScreen
                isVisible={!!selectedRecipe}
                onClose={handleCloseRecipeDetail}
                recipe={selectedRecipe}
            />

            <FlatList
                data={recipes}
                keyExtractor={(item) => item.recipe.uri}
                numColumns={2} // Set number of columns to 2
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.recipeContainer}
                        onPress={() => handleRecipeSelect(item)}
                    >
                        <Image source={{ uri: item.recipe.image }} style={styles.recipeImage} />
                        <Text style={styles.recipeTitle}>{item.recipe.label}</Text>
                    </TouchableOpacity>
                )}

                ListHeaderComponent={
                    <>
                        <TouchableOpacity onPress={() => handleBack()} style={styles.backBtnContainer}>
                            <View style={styles.backBtn}>
                                <Back width={30} height={20}/>
                            </View>
                        </TouchableOpacity>
                        <Text style={[styles.title, styles.filterText]}>Recipe Filter</Text>

                        <MealTypeSelector onSelect={handleMealTypeSelect}/>
                        <DishTypeSelector onSelect={handleDishTypeSelect}/>
                        <DietTypeSelector onSelect={handleDietTypeSelect}/>
                        <CuisineTypeSelector onSelect={handleCuisineTypeSelect}/>


                        <View style={styles.resultContainer}>
                            <TouchableOpacity onPress={handleShowResults}>
                                <Text style={styles.button}>Show Results</Text>
                            </TouchableOpacity>


                            <Text style={styles.title}>Recipes</Text>
                        </View>
                    </>
                }
            />

        </SafeAreaView>
    );
};


export default RecipeComponent;
