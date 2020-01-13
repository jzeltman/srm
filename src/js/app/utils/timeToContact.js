export const today = new Date();
export const yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
export const last_week = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
export const last_month = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
export const last_quarter = new Date(today.getFullYear(), today.getMonth() - 2, today.getDate());
export const last_semi_annual =  new Date(today.getFullYear(), today.getMonth() - 5, today.getDate());
export const last_year =  new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());

const timeToContact = (last,frequency) => {
    let timeframe;
    switch(frequency) {
        case 'daily': {
            timeframe = yesterday;
            break;
        } case 'weekly': {
            timeframe = last_week;
            break;
        } case 'monthly': {
            timeframe = last_month;
            break;
        } case 'quarterly': {
            timeframe = last_quarter;
            break;
        } case 'semi-annually': {
            timeframe = last_semi_annual;
            break;
        } case 'annually': {
            timeframe = last_year;
            break;
        } default: {
            timeframe = yesterday;
            break;
        }
    }
    return new Date(last) < timeframe;
}

export default timeToContact;