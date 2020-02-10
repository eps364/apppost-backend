const mongoose = require('mongoose');

module.exports = () => {

    const CourseSchema = new mongoose.Schema({

        nome: {
            type: String,
            required: true
        },

        ativo: {
            type: Boolean,
            default: true
        },

        data_criacao: {
            type: Date,
            default: Date.now
        },
        
        data_modificacao: {
            type: Date,
            required: false
        }

    })

    CourseSchema.pre('update', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })


    CourseSchema.pre('updateOne', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })

    CourseSchema.pre('findOneAndUpdate', async function (next) {

        this.set({ data_modificacao: new Date() });

        next();
        
    })

    return mongoose.model('Course', CourseSchema)

}
