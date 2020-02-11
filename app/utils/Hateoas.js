const host = process.env.HOST || 'http://localhost:3000'

class Hateoas {

    constructor(rota){
        this._rota = rota;
    }

    create(objeto) {

        objeto = JSON.parse(JSON.stringify(objeto));

        objeto.get_url = `${host}/${this._rota}/${objeto._id}`;
        objeto.update_url = `${host}/${this._rota}/${objeto._id}`;
        objeto.delete_url = `${host}/${this._rota}/${objeto._id}`;
        objeto.post_url = `${host}/${this._rota}`;
        objeto.get_all_url = `${host}/${this._rota}`;

        return objeto;
    }

    update(objeto) {

        if(!objeto){
            let newObjeto = {}
            newObjeto.mensagem = 'Nenhum registro alterado ou não encontrado'
            newObjeto.post_url = `${host}/${this._rota}`;
            newObjeto.get_all_url = `${host}/${this._rota}`;

            return newObjeto;
        }
        else{

            objeto = JSON.parse(JSON.stringify(objeto));

            objeto.mensagem = 'Registro alterado com sucesso'
            objeto.get_url = `${host}/${this._rota}/${objeto._id}`;
            objeto.update_url = `${host}/${this._rota}/${objeto._id}`;
            objeto.delete_url = `${host}/${this._rota}/${objeto._id}`;
            objeto.post_url = `${host}/${this._rota}`;
            objeto.get_all_url = `${host}/${this._rota}`;

            return objeto
        }

    }

    delete(objeto) {

        let newObjeto = {};

        if(objeto.nModified === 0){
            newObjeto.mensagem = "Nenhum registro excluido ou não encontrado"
            newObjeto.post_url = `${host}/${this._rota}`;
            newObjeto.get_all_url = `${host}/${this._rota}`;
        }
        else{
            newObjeto.mensagem = "Registro excluido com sucesso"
            newObjeto.post_url = `${host}/${this._rota}`;
            newObjeto.get_all_url = `${host}/${this._rota}`;

        }

        return newObjeto;

    }

    findOne(objeto){

        if(objeto.length === 0){

            let newObjeto = [];

            let obj = {
                mensagem: 'Não há resultados para mostrar',
                post_url:  `${host}/${this._rota}`,
                get_all_url: `${host}/${this._rota}`
            }

            newObjeto.push(obj)

            return newObjeto;

        }
        else {

            let newObjeto = [];


            objeto.forEach(obj => {
            
                obj = JSON.parse(JSON.stringify(obj));
                
                obj.get_url = `${host}/${this._rota}/${obj._id}`;
                obj.update_url = `${host}/${this._rota}/${obj._id}`;
                obj.delete_url = `${host}/${this._rota}/${obj._id}`;
                obj.post_url = `${host}/${this._rota}`;
                obj.get_all_url = `${host}/${this._rota}`;    
    
                newObjeto.push(obj);
    
           })
    
            return newObjeto;
        }

    }

    findAll(objeto){

        if(objeto.length === 0){

            let newObjeto = [];

            let obj = {
                mensagem: 'Não há resultados para mostrar',
                post_url:  `${host}/${this._rota}`
            }

            newObjeto.push(obj)

            return newObjeto;
        }
        else{

            let newObjeto = [];

            objeto.forEach(obj => {
        
                obj = JSON.parse(JSON.stringify(obj));
                
                obj.get_url = `${host}/${this._rota}/${obj._id}`;
                obj.update_url = `${host}/${this._rota}/${obj._id}`;
                obj.delete_url = `${host}/${this._rota}/${obj._id}`;
                obj.post_url = `${host}/${this._rota}`;
                obj.get_all_url = `${host}/${this._rota}`;
    
    
                newObjeto.push(obj);
    
           })
           
            return newObjeto;
        }

    }

    errorDb(objeto){

        let newObjeto = []

        objeto.forEach(obj => {

            obj.mensagem = 'Erro interno no banco de dados'

            newObjeto.push(objeto)
        })        

        return newObjeto;      
        
    }



}

module.exports = () => Hateoas



