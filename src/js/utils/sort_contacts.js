const sortContacts = (contacts,sort) => {
    switch(sort) {
        case 'alpha': {
            return [
                ...contacts.sort((a,b) => {
                    if (a.FN.toLowerCase() < b.FN.toLowerCase()) return -1;
                    if (a.FN.toLowerCase() > b.FN.toLowerCase()) return 1;
                    else return 0;
                })
            ];
            break;
        } case 'group': {
            return [
                ...contacts.sort((a,b) => {
                    if (a.group < b.group) return -1;
                    if (a.group > b.group) return 1;
                    else return 0;
                })
            ];;
            break;
        } case 'date': {
            return [
                ...contacts.sort((a,b) => {
                    if (a.last_update < b.last_update) return -1;
                    if (a.last_update > b.last_update) return 1;
                    else return 0;
                })
            ]
        }
    }
}

export default sortContacts;
