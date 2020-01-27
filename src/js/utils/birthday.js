export const isContactsBirthday = contact => {
    if (!contact || contact.BDAY === '' || contact.BDAY === undefined) return false;
    else {
        let date = new Date();
        let [year,month,day] = contact.BDAY.split('-');
        year = parseInt(year);
        month = parseInt(month);
        day = parseInt(day);
        let birthdate = new Date(year,month - 1,day);
        return `${date.getMonth()}${date.getDate()}` === `${birthdate.getMonth()}${birthdate.getDate()}`;
    }
}