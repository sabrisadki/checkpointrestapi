const mongoose = require ('mongoose')
// La prochaine étape consiste à créer un modèle 
// qui décrit comment chaque utilisateur sera 
// structuré dans notre base de données.
//  En règle générale, les utilisateurs 
// sont modélisés comme un objet avec ces cinq propriétés :
const UserShcema = new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    userNAme:{
        type:String
    },
    role:{
        type:String,
        default:'user'
    }
})

module.exports = mongoose.model('utilisateursf1',UserShcema);

// Dans l'extrait ci-dessus, vous pouvez voir que nous 
// devons spécifier le type de données de chaque élément
//  et s'il doit être requis par
//  l'utilisateur ou non. Dans ce cas, chaque champ est 
//  obligatoire