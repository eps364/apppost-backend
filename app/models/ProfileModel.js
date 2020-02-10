const mongoose = require('mongoose');

module.exports = () => {
  
    const ProfileSchema = new mongoose.Schema({

        nome: {
            type: String,
            required: true
        },

        ativo: {
            type: Boolean,
            required: true,
            default: true
        },

        data_criacao: {
            type: Date,
            required: false,
            dafault: Date.now
        },

        data_modificacao: {
            type: Date,
            required: false
        }
    })

    ProfileSchema.pre('update', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })


    ProfileSchema.pre('updateOne', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })

    ProfileSchema.pre('findOneAndUpdate', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })

    return mongoose.model('Profile', ProfileSchema)

}