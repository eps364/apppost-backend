// user Model
const mongoose =require('mongoose')
const bcrypt =require('bcrypt')

module.exports = () => {

    const UserSchema = new mongoose.Schema({
        nome: {
            required: true,
            type: String
        },
    
        cpf: {
            required: true,
            type: String
        },
    
        // ra: { 
        //     required: false,
        //     type: String
        // },
    
        email: {
            required: true,
            type: String
        },
    
        senha: {
            required: true,
            type: String,
            select: false
        },
    
        perfil: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Profile'
        },    
        
        curso: [
            {
                curso_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Course'
                },
                
                caracteristica: {
                    type: String,
                    required: false
                }
            }
        ],
    
        ativo: {
            type: Boolean,
            default: false
            
        },
        data_criacao: {
            required: true,
            type: Date,
            default: Date.now
        },
        
        data_modificacao: {
            required: false,
            type: Date
        },
    
        desligado: {
            type: Boolean,
            default: false
        }
    })

    UserSchema.pre('save', async function(next){
        const hash = await bcrypt.hash(this.senha, 10);

        this.senha = hash;

        next();
    })


    UserSchema.pre('update', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })


    UserSchema.pre('updateOne', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })

    UserSchema.pre('findOneAndUpdate', async function (next) {        

        this.set({ data_modificacao: new Date() });
      
        next();
        
    })
    
    return  mongoose.model('User', UserSchema)    
}
