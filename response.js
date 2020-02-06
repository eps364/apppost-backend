// Quando retorno uma lista de varios elementos
// Ex, usuarios
// STATUS: 200
{
    objeto: [
        {
            id: 1,
            nome: "usuario 1",
            email: "usuario_1@usuario.com.br",
            cpf: "00000000000",
            get_url: "http://localhost:3000/usuario/1",
            update_url: "http://localhost:3000/usuario/1",
            delete_url: "http://localhost:3000/usuario/1"

        },
        {
            id: 2,
            nome: "usuario 2",
            email: "usuario_2@usuario.com.br",
            cpf: "00000000000",
            get_url: "http://localhost:3000/usuario/1",
            update_url: "http://localhost:3000/usuario/1",
            delete_url: "http://localhost:3000/usuario/1"
        },
        {
            id: 3,
            nome: "usuario 3",
            email: "usuario_3@usuario.com.br",
            cpf: "00000000000",
            get_url: "http://localhost:3000/usuario/1",
            update_url: "http://localhost:3000/usuario/1",
            delete_url: "http://localhost:3000/usuario/1"
        }
    ]
}


// quando retornar um unico elemento 
// EX usuario
// STATUS: 200
{
    objeto: [
        {
            id: 1,
            nome: "usuario 1",
            email: "usuario_1@usuario.com.br",
            cpf: "00000000000",
            get_url: "http://localhost:3000/usuario/1",
            update_url: "http://localhost:3000/usuario/1",
            delete_url: "http://localhost:3000/usuario/1",
            post_url: "http://localhost:3000/usuarios",
            get_all_url: "http://localhost:3000/usuarios",
        }
    ]
}


// quando for criado algo novo
// ex usuario
// STATUS: 201
{
    objeto: [
        {
            mensagem: "Usuario criado com sucesso",
            id: 4,
            nome: "usuario 4",
            email: "usuario_4@usuario.com.br",
            cpf: "00000000000",
            get_url: "http://localhost:3000/usuario/4",
            update_url: "http://localhost:3000/usuario/4",
            delete_url: "http://localhost:3000/usuario/4",
            post_url: "http://localhost:3000/usuarios",
            get_all_url: "http://localhost:3000/usuarios",
        }
    ]
}

// quando a consulta for bem sucedida e não retornar nenhum dado
// ex usuario
// STATUS: 404
{
    objeto: [
        {
            mensagem: "não há resultados para mostrar",
            post_url: "http://localhost:3000/usuarios",
            get_all_url: "http://localhost:3000/usuarios",
        }
    ]
}


// quando a consulta de erro por qualquer motivo
// ex usuario
// STATUS: 500
{
    objeto: [
        {
            mensagem: "Erro ao consultar banco de dados",
            descricao: "descricao do erro devolvido pelo banco/node"
        }
    ]
}


// quando houver no servidor ou erro desconhecido
// STATUS: 500
{
    objeto: [
        {
            mensagem: "Erro ao consultar banco de dados",
            descricao: "descricao do erro se houver"
        }
    ]
}


// quando houver erro ao consultar api de terceiros
// STATUS: 502
{
    objeto: [
        {
            mensagem: "Erro ao consultar serviço {nome do serviço/api}",
            descricao: "descricao do erro se houver"
        }
    ]
}


// quando o usuario for consumir algum serviço e for necessario fazer autenticação
// STATUS: 401
{
    objeto: [
        {
            mensagem: "Usuario não autenticado",
            post_url_auth: "http://localhost:3000/authenticate"
        }
    ]
}


// quando o usuario estiver autenticado mas não tiver permissão para consumir algum servço
// STATUS: 403
{
    objeto: [
        {
            mensagem: "Usuario não autorizado a acessar essa funcionalidade"
        }
    ]
}

// quando o registro for excluido
// STATUS: 403
{
    objeto: [
        {
            mensagem: "registro excluido com sucesso",
            post_url: "http://localhost:3000/usuarios",
            get_all_url: "http://localhost:3000/usuarios",
        }
    ]
}

// quando nenhum registro for deletado
{
    objeto: [
        {
            mensagem: "Nenhum registro foi excluido ou não encontrado",
            post_url: "http://localhost:3000/usuarios",
            get_all_url: "http://localhost:3000/usuarios",
        }
    ]
}

