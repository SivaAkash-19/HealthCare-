const illnesses = {
    'fever, cough, shortness of breath': {
        illness: 'COVID-19',
        info: 'COVID-19 is a respiratory illness caused by the coronavirus. Symptoms include fever, cough, and shortness of breath.'
    },
    'fever, headache, muscle pain': {
        illness: 'Influenza',
        info: 'Influenza is a viral infection that attacks your respiratory system. Symptoms include fever, headache, and muscle pain.'
    },
    'abdominal pain, diarrhea, nausea': {
        illness: 'Gastroenteritis',
        info: 'Gastroenteritis is an intestinal infection marked by diarrhea, cramps, nausea, and vomiting.'
    },
    'chest pain, shortness of breath, sweating': {
        illness: 'Heart Attack',
        info: 'A heart attack occurs when the flow of blood to the heart is blocked. Symptoms include chest pain, shortness of breath, and sweating.'
    },
    'headache, nausea, sensitivity to light': {
        illness: 'Migraine',
        info: 'A migraine is a type of headache characterized by severe pain, nausea, and sensitivity to light and sound.'
    }
};

const symptomNames = [
    'Fever', 'Cough', 'Shortness of breath', 'Headache', 'Muscle pain', 'Abdominal pain', 'Diarrhea', 'Nausea', 'Chest pain', 'Sweating', 'Sensitivity to light'
];

function checkSymptoms() {
    const symptomsInput = document.getElementById('symptoms').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    let potentialIllness = 'Unknown Illness';

    for (const [symptomString, illnessData] of Object.entries(illnesses)) {
        const symptomArray = symptomString.split(', ');
        const symptomsMatch = symptomArray.every(symptom => symptomsInput.includes(symptom.toLowerCase()));
        if (symptomsMatch) {
            potentialIllness = illnessData.illness;
            break;
        }
    }

    resultDiv.innerHTML = `<p><strong>Potential Illness:</strong> ${potentialIllness}</p>`;
}

function showSymptomInfo() {
    const symptomsInput = document.getElementById('symptoms').value.toLowerCase();
    const symptomInfoDiv = document.getElementById('symptomInfo');
    let info = 'No detailed information available for the entered symptoms.';

    for (const [symptomString, illnessData] of Object.entries(illnesses)) {
        const symptomArray = symptomString.split(', ');
        const symptomsMatch = symptomArray.every(symptom => symptomsInput.includes(symptom.toLowerCase()));
        if (symptomsMatch) {
            info = illnessData.info;
            break;
        }
    }

    symptomInfoDiv.innerHTML = `<p>${info}</p>`;
}

function showSymptomNames() {
    const symptomNamesDiv = document.getElementById('symptomNames');
    symptomNamesDiv.innerHTML = `<p><strong>Common Symptoms:</strong> ${symptomNames.join(', ')}</p>`;
}
