import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from '../actions/actionTypes';
import placeImage from '../../assests/beautiful-barcelona.jpg'

const initialState = {
    places : [],
    selectedPlace: null
}


const reducer = (state = initialState , action) =>{
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: placeImage
                })
           }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place =>{
                    return place.key !== state.selectedPlace.key; // true cha vanne part of new Array otherwise not part of new array.
                  }),
                  selectedPlace:null
            };   

        case SELECT_PLACE:
            return{
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.payload;
                  })
            };
            
        case DESELECT_PLACE:
            return{
                ...state,
                selectedPlace:null
            }    
        default: 
        return state;

    }
     
}

export default reducer;