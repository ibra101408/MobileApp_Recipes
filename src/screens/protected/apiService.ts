import axios from 'axios';
import {API_BASE_URL, APP_ID, APP_KEY} from '@env'


export const getRecipes = async (mealType: string | null, dishType: string | null, diet: string | null, cuisineType: string | null) => {
    try {
        console.log('getRecipes called with:', mealType, dishType, diet, cuisineType);

        const response = await axios.get(`${API_BASE_URL}`, {
            params: {
                type: 'public',
                app_id: APP_ID,
                app_key: APP_KEY,
                mealType,
                dishType,
                limit: 30,
               // health: ['alcohol-free', 'alcohol-cocktail'],
                diet,
                cuisineType,
            },
            headers: {
                Accept: 'application/json',
                'Accept-Language': 'en',
            },
        });

      return response.data.hits;
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};