import vCard from './vcardKeys';
const vCardKeys = Object.keys(vCard);

const vCardParse = vcardData => {
    const vCardJSON = {};
    vcardData.split(/\r\n|\r|\n/).forEach(field => {
        if (field.indexOf(':') !== -1) {
            let key = field.split(':')[0];
            let value = field.split(':')[1];

            if (key.includes(';')) {
                key = key.split(';').filter( splitKey => vCardKeys.indexOf(splitKey) !== -1)[0];
            }

            if (vCardKeys.indexOf(key) !== -1 &&
                key !== 'BEGIN' &&
                key !== 'END' && 
                !vCardJSON.hasOwnProperty(key)
            ) {
                if (key.includes(';')) console.log('key split',key.split(';'));
                vCardJSON[key] = value.replace(/\;/g,' ').trim();
            }
        }
    });
    return vCardJSON;
};

export default vCardParse;