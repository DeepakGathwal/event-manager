const initialState = {
    events: [],
  };
  
  export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_EVENT':
        return {
          ...state,
          events: [...state.events, action.payload],
        };
        case 'DELETE_EVENT':
            return {
                ...state,
                
                events: state.events.filter(event => event.id !== action.payload)
                
            };
        case 'UPDATE_EVENT':
            return {
                ...state,
                events: state.events.map(event =>
                    event.id === action.payload.id ? action.payload : event
                )
            };
            default:
        return state;
    }
  };
  