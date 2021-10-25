import { createStore, combineReducers } from 'redux';
import { Instructors } from './instructors';
import { HomeCarousel } from './homeCarousel';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            instructors: Instructors,
            homeCarousel: HomeCarousel
        })
    );
    return store;
};