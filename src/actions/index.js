import { ADD_REMINDER } from '../constant';

export const addReminder = (text) => {
    const action = {
        type: ADD_REMINDER,
        text
    }

    console.log('Action in action:', action);
    return action;
}