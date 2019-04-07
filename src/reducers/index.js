import { ADD_REMINDER } from '../constant';

const reminder = (action) => {
    return {
        text: action.text,
        id: Math.random()
    }
}

const reminders = (state = [], action) => {
    let reminders = null;
    switch (action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminders in reducers:', reminders);
            return reminders;
    
        default:
            return state;
    }
}

const reminders123 = (state = {name:"123"}, action) => {
    let names = null;
    switch (action.type) {
        case ADD_REMINDER:
            names = {nane: action.text};
            console.log('names in reducers:', names);
            return names;
    
        default:
            return state;
    }
}

export default reminders;
export { reminders123 };