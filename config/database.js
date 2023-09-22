const mongoose = require('mongoose');
require('dotenv').config();

// confuguration de la connexion a la base de donnée en utilisant les variables d'environnement
// const MONGODB_URI = process.env.MONGODB_URI;

// connexion a la base de données

const connectBD = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSEWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority&appName=AtlasApp`, {
            useNewUrlParser: true, //pour utiliser le nouveau parser de l'url

            useUnifiedTopology: true, //pour utilisere le moteur de surveillance du serveur et éviter les avertisemnets de dépréciation
        });
        console.log('la connexion à la base de données est établie avec succes');
    } catch (err) {
        console.error('impossible de se connecter à la base de données', err);
    }
}

const disconnectDB = async () => {
    try{
        await mongoose.disconnect();
        console.log('la connexion à la base de données est fermer avec succès');
    } catch (err) {
        console.error('impossible de fermer la connexion à ma base de données', err);
    }
}

// initialisation de la base de données
const initDB = async () => {
    await connectBD();
};

module.exports = { initDB, connectBD, disconnectDB };