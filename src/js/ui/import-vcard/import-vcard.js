import React from 'react';
import './import-vcard.css';
import vCardParse from './vcard-parse';

const ImportVCard = ({changeContact}) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
        var vcardData = vCardParse(fileReader.result);
        changeContact(vcardData,true);
    };

    const fileHandler = e => fileReader.readAsText(e.target.files[0]);

    return (
        <div id="Import-VCard">
            <label htmlFor="vcard">Import vCard</label>
            <input type="file" accept='.vcf' name="vcard" onChange={fileHandler} />
        </div>
    )
}

export default ImportVCard;