const subjects = [
    "Η μέρα", "Η ζωή", "Ο χρόνος", "Η επιτυχία", "Η αποτυχία", "Το ταξίδι", 
    "Η δημιουργικότητα", "Η προσπάθεια", "Η σκέψη", "Το όνειρο", "Η τύχη", 
    "Η υπομονή", "Η δράση", "Ο κόσμος", "Η γνώση", "Η αλλαγή"
];

const verbs = [
    "είναι", "δημιουργεί", "οδηγεί σε", "προκαλεί", "βρίσκεται σε", "ξεκινάει από", 
    "οφείλεται σε", "εξαρτάται από", "φέρνει", "δίνει", "διδάσκει", "απαιτεί"
];

const objects = [
    "χαρά", "επιτυχία", "σοφία", "νέα ξεκινήματα", "καλές ευκαιρίες", "εμπειρίες", 
    "αλλαγές", "προκλήσεις", "αναμνήσεις", "δύναμη", "κατανόηση", "πίστη", 
    "εξέλιξη", "επιτεύγματα", "ευκαιρίες"
];

const modifiers = [
    "κάθε μέρα.", "όταν το πιστεύεις.", "για όσους τολμούν.", "με συνεχή προσπάθεια.", 
    "σε κάθε βήμα.", "με πάθος.", "με υπομονή.", "όταν το προσπαθείς.", 
    "με την καρδιά σου.", "με αφοσίωση.", "όταν δεν το περιμένεις.", "πάντα στο τέλος."
];

// Συνάρτηση για τη δημιουργία τυχαίων προτάσεων
function generateRandomSentence() {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const verb = verbs[Math.floor(Math.random() * verbs.length)];
    const object = objects[Math.floor(Math.random() * objects.length)];
    const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
    
    return `${subject} ${verb} ${object} ${modifier}`;
}

// Προσθήκη event listener στο κουμπί
document.getElementById('generate-btn').addEventListener('click', () => {
    const sentence = generateRandomSentence();
    document.getElementById('sentence').innerText = sentence;
});
