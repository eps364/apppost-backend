const mongoose = require('mongoose')

module.exports = () => {

    const PostSchema = new mongoose.Schema({

        titulo: {
            type: String,
            required: true
        },
        
        descricao: {
            type: String,
            required: true
        },

        link: {
            type: String,
            required: false
        },

        usuario: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },

        curso: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course',
            required: true
        }],

        data_evento: {
            type: Date,
            required: true
        },

        ativo: {
            type: Boolean,
            required: true
        },

        data_criacao: {
            type: Date,
            default: Date.now,
            required: true
        },
        
        data_modificacao: {
            type: Date,
            required: false
        }
    })

    PostSchema.pre('update', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })


    PostSchema.pre('updateOne', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })

    PostSchema.pre('findOneAndUpdate', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })

    return mongoose.model('Post', PostSchema);

}