

const gender_data =
    [
        {
            id: '1',
            name: 'Male'
        },
        {
            id: '2',
            name: 'Female'
        },
    ];

const age_data = Array.from({ length: 99 }, (_, i) => ({
    id: (i + 1).toString(),
    name: (i + 1).toString()
}));


const fq_consume =
    [
        {
            id: '1',
            name: 'Ciprofloxacin'
        },
        {
            id: '2',
            name: 'Levofloxacin'
        },
        {
            id: '3',
            name: 'Moxifloxacin'
        },
        {
            id: '4',
            name: 'Ofloxacin'
        },
        {
            id: '5',
            name: 'Norfloxacin'
        },
        {
            id: '6',
            name: 'Delafloxacin'
        },
        {
            id: '7',
            name: 'Gemifloxacin'
        },
        {
            id: '8',
            name: 'Lomefloxacin'
        },
        {
            id: '9',
            name: 'Gatifloxacin'
        },
    ];

const fq_combine =
    [
        {
            id: '1',
            name: 'NSAIDs'
        },
        {
            id: '2',
            name: 'Corticosteroids'
        },
        {
            id: '3',
            name: 'Benzodiazepines'
        },
        {
            id: '4',
            name: 'SSRIs'
        },
        {
            id: '5',
            name: 'Alcohol'
        },
        {
            id: '6',
            name: 'Omeprazole'
        },
    ];

const severity_data =
    [
        {
            id: '1',
            name: 'Mild'
        },
        {
            id: '2',
            name: 'Moderate'
        },
        {
            id: '3',
            name: 'Severe'
        },
        {
            id: '4',
            name: 'Severe +'
        },
    ];

const pil_consume = Array.from({ length: 99 }, (_, i) => ({
    id: (i + 1).toString(),
    name: (i + 1).toString()
}));


const tendon_data =
    [
        {
            id: '1',
            name: 'Tendonitis',
            value: false,

        },
        {
            id: '2',
            name: 'Tendon rupture',
            value: false,

        },
        {
            id: '3',
            name: 'Muscle pain ',
            value: false,

        },
        {
            id: '4',
            name: 'Muscle weakness',
            value: false,

        },
        {
            id: '5',
            name: 'Joint pain',
            value: false,

        },
        {
            id: '6',
            name: 'Ligament and cartilage damage',
            value: false,

        },
    ];

const neuropathy_data =
    [
        {
            id: '1',
            name: 'Peripheral neuropathy',
            value: false,

        },
        {
            id: '2',
            name: 'Shooting nerve pain',
            value: false,

        },
        {
            id: '3',
            name: 'Muscle twitching',
            value: false,

        },
        {
            id: '4',
            name: 'Electric shock sensations',
            value: false,

        },
    ];

const central_nerve_data =
    [
        {
            id: '1',
            name: 'Brain fog',
            value: false,

        },
        {
            id: '2',
            name: 'Insomnia',
            value: false,

        },
        {
            id: '3',
            name: 'Anxiety or panic attacks',
            value: false,

        },
        {
            id: '4',
            name: 'Depression',
            value: false,

        },
        {
            id: '5',
            name: 'Dizziness',
            value: false,

        },
        {
            id: '6',
            name: 'Vertigo',
            value: false,

        },
        {
            id: '7',
            name: 'Sensory hypersensitivity',
            value: false,

        },
        {
            id: '8',
            name: 'Depersonalization or derealization',
            value: false,

        },
        {
            id: '9',
            name: 'Suicidal thoughts',
            value: false,

        },
    ];

const autonomic_nerve =
    [
        {
            id: '1',
            name: 'Heart palpitations',
            value: false,

        },
        {
            id: '2',
            name: 'Tachycardia',
            value: false,

        },
        {
            id: '3',
            name: 'Blood pressure fluctuations',
            value: false,

        },
        {
            id: '4',
            name: 'Dizziness upon standing',
            value: false,

        },
        {
            id: '5',
            name: 'Digestive issues',
            value: false,

        },
        {
            id: '6',
            name: 'Heat or cold intolerance',
            value: false,

        },
    ];
const gastrointestinal_data =
    [
        {
            id: '1',
            name: 'Nausea',
            value: false,

        },
        {
            id: '2',
            name: 'IBS',
            value: false,

        },
        {
            id: '3',
            name: 'Abdominal pain',
            value: false,

        },
        {
            id: '4',
            name: 'Histamine issues',
            value: false,

        },
    ];

const mitochondrial_data =
    [
        {
            id: '1',
            name: 'Chronic fatigue',
            value: false,

        },
        {
            id: '2',
            name: 'Exercise intolerance',
            value: false,

        },
        {
            id: '3',
            name: 'Muscle wasting',
            value: false,

        },
    ];

const vision_data =
    [
        {
            id: '1',
            name: 'Floaters',
            value: false,

        },
        {
            id: '2',
            name: 'Blurred vision',
            value: false,

        },
        {
            id: '3',
            name: 'Dry eyes',
            value: false,

        },
        {
            id: '4',
            name: 'Light sensitivity',
            value: false,

        },
    ];

const skin_data =
    [
        {
            id: '1',
            name: 'Skin rashes',
            value: false,

        },
        {
            id: '2',
            name: 'Hair thinning or loss',
            value: false,

        },
        {
            id: '3',
            name: 'Easy bruising',
            value: false,

        },
    ];
const cardiovascular_data =
    [
        {
            id: '1',
            name: 'Chest pain',
            value: false,

        },
        {
            id: '2',
            name: 'QT prolongation',
            value: false,

        },
    ];

const hearing_data =
    [
        {
            id: '1',
            name: 'Tinnitus',
            value: false,

        },
        {
            id: '2',
            name: 'Hearing loss',
            value: false,

        },
        {
            id: '3',
            name: 'Sensitivity to sound',
            value: false,

        },
    ];

const hormonal_data =
    [
        {
            id: '1',
            name: 'Low testosterone',
            value: false,
        },
        {
            id: '2',
            name: 'Hormonal imbalances',
            value: false,

        },
        {
            id: '3',
            name: 'Blood sugar fluctuations',
            value: false,

        },
    ];

const yes_no =
    [
        {
            id: '1',
            name: 'Yes',
            value: false,
        },
        {
            id: '2',
            name: 'No',
            value: false,

        },
    ];

const percent_increase = Array.from({ length: 20 }, (_, i) => {
    const value = (i + 1) * 5;
    return {
        id: value.toString(),
        name: value.toString()
    };
});


const drugList =
    [
        {
            id: '1',
            name: 'NSAIDs'
        },
        {
            id: '2',
            name: 'Corticosteroids'
        },
        {
            id: '3',
            name: 'Benzodiazepines'
        },
        {
            id: '4',
            name: 'SSRIs/SNRIs'
        },
        {
            id: '5',
            name: 'Antipsychotics'
        },
        {
            id: '6',
            name: 'Gabapentin'
        },
        {
            id: '7',
            name: 'Doxycycline'
        },
        {
            id: '8',
            name: 'Tetracyclines'
        },
        {
            id: '9',
            name: 'Amoxicillin'
        },
        {
            id: '10',
            name: 'Augmentin'
        },
        {
            id: '11',
            name: 'Fluconazole'
        },
        {
            id: '12',
            name: 'Beta blockers'
        },
        {
            id: '13',
            name: 'PPIs'
        },
        {
            id: '14',
            name: 'Antihistamines'
        },
    ];

    const step_increment = Array.from({ length: 50 }, (_, i) => {
        const value = (i + 1) * 250;
        return {
            id: value.toString(),
            name: value.toString()
        };
    });



    const categoriesList =
    [
        {
            id: '1',
            name: 'General'
        },
        {
            id: '2',
            name: 'Newcomer'
        },
        {
            id: '3',
            name: 'Diagnosis'
        },
        {
            id: '4',
            name: 'Symptoms'
        },
        {
            id: '5',
            name: 'Flare'
        },
        {
            id: '6',
            name: 'Medication'
        },
        {
            id: '7',
            name: 'Treatments'
        },
        {
            id: '8',
            name: 'Science'
        },
        {
            id: '9',
            name: 'Supplements'
        },
        {
            id: '10',
            name: 'Chat'
        },
        {
            id: '11',
            name: 'Relapse'
        },
        {
            id: '12',
            name: 'Recovery'
        },
        {
            id: '13',
            name: 'Long Term'
        },
        {
            id: '14',
            name: 'Outreach'
        },
        {
            id: '15',
            name: 'Update'
        },
    ];


    const sortList =
    [
        {
            id: '1',
            name: 'Most recent (default)'
        },
        {
            id: '2',
            name: 'Most popular'
        },
        {
            id: '3',
            name: 'This Week'
        },
        {
            id: '4',
            name: 'This Month'
        },
        {
            id: '5',
            name: 'This Year'
        },
        {
            id: '6',
            name: 'All Time'
        },
    ];


export default {
    hormonal_data, yes_no, percent_increase,drugList,step_increment,categoriesList,sortList,
    mitochondrial_data, vision_data, skin_data, cardiovascular_data, hearing_data,
    neuropathy_data, central_nerve_data, autonomic_nerve, gastrointestinal_data,
    tendon_data,
    gender_data,
    age_data,
    fq_consume,
    fq_combine,
    severity_data,
    pil_consume
}