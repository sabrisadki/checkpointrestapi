const UserShcema = require('../model/user')

const bcrypt = require('bcrypt');
// le package jsonwebtoken est utilisé pour autoriser
//  un utilisateur (d'ailleurs, autoriser signifie vérifier 
//  si un utilisateur a accès à une certaine ressource ou
//   route alors qu'authentifier signifie vérifier qu'un u
//   tilisateur est celui qu'il prétend être,
//  ce qui se produit pendant le processus de connexion)

const jwt = require('jsonwebtoken')

//ici c'est juste pour tester la route 
exports.test=(req,res)=>{
try{
res.send('test controllers ')
}catch(err){
console.log(err)
}
}
//**************************REGISTER  */
exports.register=async(req,res)=>{
try{
const {name,email,password}=req.body
const found = await UserShcema.findOne({email})
if(found){return res.status(404).json({msg:'vous avez deja un compte voir le login',errors})}
// creation d'un compte normal 
const newUser = await new UserShcema(req.body)
 //hasha pswd 
//  Après avoir confirmé qu'un utilisateur n'est pas déjà 
//  dans la base de données, nous utilisons bcrypt pour 
//  hacher le mot de passe. Le deuxième paramètre de la 
//  méthode de hachage de bcrypt décrit le nombre de tours 
//  que l'algorithme de hachage doit effectuer, donc pour 
//  le mien, il irait 2 ^ 10 ou 1024 fois. Plus le nombre 
//  est élevé, plus il est difficile de forcer brutalement
//   le mot de passe, mais plus le temps de traitement est long
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(password, salt);
//end hashage

newUser.password = hash

// creation mt3 el token 

const payload = { id : newUser._id}
var token = jwt.sign(payload,process.env.privateKey )

newUser.save()

res.status(200).send({msg:'welcome to the groupe ', newUser,token})

    }catch(err){
        console.log(err)
        res.send({msg:''})
    }
}

// bcrypt est utilisé pour hacher le mot de passe que 
// nous enregistrons dans la base de données et est utilisé 
// plus tard pour vérifier que nous avons entré le bon 
// jeton à chaque connexion





//***********************LOGIN  */
exports.login=async (req,res)=>{
try{
const {email,password} = req.body 

const found = await UserShcema.findOne({email})
if(!found){return res.status(404).json({msg:'invalid email',errors})}

const match = await bcrypt.compare(password, found.password)
if(!match){return res.status(404).json({msg:'error partie mdp',errors})}
// creation mt3 el token 

const payload = { id : found._id}
var token = jwt.sign(payload,process.env.privateKey )

res.status(200).send({msg:'ur welcome',token , found})


}catch(err){
console.log(err)
}
}

//*************************Explications (un plus) */

//jwt part 
// Eh bien, les jetons Web JSON vous permettent de le faire.
//  Ce sont des hachages chiffrés générés à chaque connexion
//   qui doivent être décodés pour confirmer quel utilisateur
//    tente d'accéder à une ressource. Lorsqu'un utilisateur
//     se connecte, le serveur envoie un jeton qui décrit un 
//     certain utilisateur à l'interface, et ce jeton peut 
//     ensuite être enregistré dans localStorage ou dans des 
// cookies (afin que le jeton ne soit pas perdu lorsque
//      l'utilisateur actualise la page).

//*************exemple simple */
// vous êtes à une foire (le site Web) et pour entrer, 
// vous avez besoin d'un billet (jwt) pour entrer et 
// accéder aux manèges (itinéraires protégés). Chaque
//  fois que vous souhaitez faire un tour, votre billet 
//  (jwt) doit être vérifié. Si vous déchirez votre ticket,
//   il est détruit et vous ne pouvez plus accéder aux 
//   manèges (suppression de votre jeton de localStorage).
//    Cela signifie que vous êtes déconnecté et que vous 
//    devez retourner au guichet pour obtenir un autre 
//    billet (reconnectez-vous). Et si vous revenez le lendemain, 
// votre billet ne sera plus valide (les JWT expirent après un certain temps).