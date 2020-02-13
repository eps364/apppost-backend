![](./files/LogoPostAPP.png)
# PostAppApi-Compasso

## 1. DIRETRIZES DE APLICATIVO
Este é um projeto para a criação de uma aplicação web com o objetivo de criar Postagens para comunicação interna, sendo controlado com restrições de usuário e senha, também visa cadastrar quais tipos (interesse) o usuário tem de receber as postagens.

## 2. O PROPÓSITO DO APLICATIVO
A aplicação vem para suprir a necessidade de intituições de ensino e/ou outras intituições tem de se comunicar por meio de recados, informativos, comunicados etc, geralmente enviados aos email que por diversas vezes não são acessados com frequencia, assim as informações chegam aos usuarios defasagem.

## 3. USUÁRIOS DO APLICATIVO
### 3.1 Os Alunos
Uma dos questionamentos dos alunos, é que a leitura constante de email não é viavel por indisponibilidade técnicas ou mesmo praticidade. Os alunos tambem podem se cadastar para receber informações de outros cursos de seu interesse.
Sendo assim o aplicativo ficará de fácil acesso e fácil uso.

### 3.2 Os Professores
Necessitando de uma maneira prática e eficiente de comunicação com os alunos, o aplicativo irá facilitar a maneira em que os professores intejam com os seus alunos e dos cursos de interesse do aluno. O professor terá facilidade em comunicar-se com seus alunos.

### 3.3 Os Coordenadores
O coordenador poderá monitorar e acompanhar as postagem feitas pelos professores do curso e poderá excluir postagens indesejadas. Os coordenadores também podem fazer postagens nos seus respectivos cursos.

### 3.4 Os Diretores
O diretor poderá monitorar e acompanhar as postagem feitas e poderá excluir postagens indesejadas. Os diretores podem fazer postagens para todos os cursos da instituição.

### 3.5 A Secretaria
A secretaria poderá fazer postagens para todos os cursos da instituição.

### 3.6 Os Administradores do sistema
O Administrador do sistema cadastra usuarios (Alunos, Professores, Coordenadores, Diretores, Secretaria e Administrador).

### 3.7 Demais interessados
No aplicativo os usuario que se cadastram como interesse em um determinado curso passa a receber as postagens referentes a estes cursos.

# 4. RESTRIÇÕES E OBSERVAÇÕES

## 4.1 RESTRIÇÕES DA SOLUÇÃO
Serão apresentadas as restrições identificadas até o presente momento, podendo sofrer alterações a qualquer hora em função do andamento do desenvolvimento do aplicativo.

## 4.2 AMBIENTE DE IMPLANTAÇÃO DO APLICATIVO
* Hospedagem da aplicação no [Heroku](https://www.heroku.com) que é uma plataforma em nuvem que suporta várias linguagens de programação, com limitações em modo free.
* Banco de dados hospedado no [Mongo Atlas](https://www.mongodb.com/cloud/atlas).
* Desenvolvido em [Javascript](https://www.w3schools.com/js/default.asp), [Node](https://nodejs.org/en/) e [React](https://pt-br.reactjs.org/).

Esta aplicação inicialmente hospedada nos serviços gratuitos acima, pode ser hospedade em qualquer servidor que suporte Node e Mongodb.

## 4.3 GERENCIADOR DE BANCO DE DADOS
Utilizando o [MongoDB](https://www.mongodb.com) que é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma, escrito na linguagem C++.

## 4.4 INSTALAÇÃO DA APLICAÇÃO PARA DESENVOLVIMENTO LOCAL

Clonando o respositorio

>`` git clone https://github.com/KleitonBarone/PostApp-Compasso-Backend.git ``

Os comando abaixo devem ser executados dentro da pasta do clone do git.

Instalando as dependências do Aplicativo

>``npm install `` ou ``yarn``

Iniciando a aplicação em modo de desenvolvimento

>``npm run dev `` ou ``yarn dev``

Rodando a aplicação em modo produção

>``npm start `` ou ``yarn start``

# 5. O ESCOPO DO APLICATIVO
## 5.1 A SITUAÇÃO ATUAL

# 6. MODELAGEM DA APLICAÇÃO
## 6.1 DIAGRAMAS DE CASO DE USO
![Caso de Uso - UC001](files/UC001.png) Caso de Uso - UC001
![Caso de Uso - UC002](files/UC002.png) Caso de Uso - UC002
![Caso de Uso - UC003](files/UC003.png) Caso de Uso - UC003

# BACKEND

## ROTAS

### /Authenticate
>##### Method: POST /Autenticate

Rota utilizada para fazer autenticação para as, os dados enviados pelo Body retorna um tokem para ser usado nas funções.

#### Dados enviados no Body:
    {
        "email": "t5@t5.com",
        "senha": "1234567"
    }

#### Dados enviados no Header
    vazio

#### Resposta:
    {
        "auth": true,
        "token": "eyJhbGcisInR5cCI6IkpXVCJ9.eyJpZCI6IZmNhZjk4NjkwMDAxNzllMmRiMSIsImNhcmFjdGVyaXN0aWNhIjoiSW50ZXJlc3NlIn1dLCJkYXRhX2NyajU3LjE1M2FjYW8iOiIyMDIwLTAyLTEyVDIwOjE2OjM4Ljk3NFoifSwiaWF0IjoxNTgxNjE4NzQwLCJleHAiOjE1ODE3MDMzNDB9.K09vwyGvWL5uib6ky_eSvIF6URsr32Lo861D18oItro",
        "id": "5e445cfd06ad0800172d37b3",
        "usuario": {
            "id": "5e445cfd06ad0800172d37b3",
            "usuario": {
            "ativo": true,
            "desligado": false,
            "_id": "5e445cfd06ad0800172d37b3",
            "nome": "teste5",
            "cpf": "12345678909",
            "email": "t5@t5.com",
            "senha": "",
            "perfil": "5e4182b7f9869000179e2da8",
            "curso": [
                {
                    "_id": "5e445cfd06ad0800172d37b5",
                    "curso_id": "5e3d67110e21ec00178faf6f",
                    "caracteristica": "Aluno"
                },
                {
                    "_id": "5e445cfd06ad0800172d37b4",
                    "curso_id": "5e418fcaf9869000179e2db1",
                    "caracteristica": "Interesse"
                }
            ],
            "data_criacao": "2020-02-12T20:15:57.151Z",
            "__v": 0,
            "data_modificacao": "2020-02-12T20:16:38.974Z"
            }
        }
    }

####  Possiveis erros, exemplos abaixo:
    [
        {
            "error": {
                "mensagem": "Usuario não cadastrado",
                "mensagem": "E-mail/Senha Inválidos"
                },
            "texto": "Erro interno no banco de dados",
        }
    ]

####  ou
    {
        "errors": [
            {
                "value": "123",
                "msg": "Senha incompativel, digite outra e maior que 4 digitos",
                "param": "senha",
                "location": "body"
            }
        ]
    }


### /perfil
>##### Method: POST /perfil


#### Dados enviados no Body:
    {
        "nome": "Admin"
    }

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": {
            "ativo": true,
            "_id": "5e45a46c84f6260017d4f98b",
            "nome": "Secretaria",
            "__v": 0,
            "get_url": "https://localhost/perfil/5e45a46c84f6260017d4f98b",
            "update_url": "https://localhost/perfil/5e45a46c84f6260017d4f98b",
            "delete_url": "https://localhost/perfil/5e45a46c84f6260017d4f98b",
            "post_url": "https://localhost/perfil",
            "get_all_url": "https://localhost/perfil"
        }
    }

####  Possiveis erros, exemplos abaixo:
    {
    "errors":
        [
            {
                "value": "A",
                "msg": "O perfil esta invalido, preencha com mais de 3 letras",
                "param": "nome",
                "location": "body"
            }
        ]
    }

### /perfil
>##### Method: GET /perfil/:id


#### Dados enviados no Body:
    vazio

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
    "objeto": [
            {
                "ativo": true,
                "_id": "5e45a46c84f6260017d4f98b",
                "nome": "Secretaria",
                "__v": 0,
                "get_url": "https://localhost/perfil/5e45a46c84f6260017d4f98b",
                "update_url": "https://localhost/perfil/5e45a46c84f6260017d4f98b",
                "delete_url": "https://localhost/perfil/5e45a46c84f6260017d4f98b",
                "post_url": "https://localhost/perfil",
                "get_all_url": "https://localhost/perfil"
            }
        ]
    }

####  Possiveis erros, exemplos abaixo:
    {
    "errors":
        [
            {
                "value": "A",
                "msg": "O perfil esta invalido, preencha com mais de 3 letras",
                "param": "nome",
                "location": "body"
            }
        ]
    }

### /perfil
>##### Method: PUT /perfil/:id

#### Dados enviados no Body:
    {
        "perfil": "{{ perfil  }}",
        "nome": "Novo nome do perfil",
        "ativo": true,
        "desligado":false
    }

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": {
            "ativo": true,
            "_id": "5e45a46c84f6260017d4f98b",
            "nome": "Novo nome do perfil",
            "__v": 0,
            "data_modificacao": "2020-02-13T19:41:38.685Z",
            "mensagem": "Registro alterado com sucesso",
            "get_url": "https://localhost/perfil/5e45a46c84f6260017d4f98b",
            "update_url": "https://localhost/perfil/5e45a46c84f6260017d4f98b",
            "delete_url": "https://localhost/perfil/5e45a46c84f6260017d4f98b",
            "post_url": "https://localhost/perfil",
            "get_all_url": "https://localhost/perfil"
        }
    }


####  Possiveis erros, exemplos abaixo:
    {
        "errors": [
            {
                "msg": "Preencha com mais de 3 letras",
                "param": "nome",
                "location": "body"
            },
            {
                "msg": "Preencha com true ou false",
                "param": "ativo",
                "location": "body"
            }
        ]
    }


### /perfil
>##### Method: DELETE /perfil/:id


#### Dados enviados no Body:
    vazio


#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
  "objeto": {
            "mensagem": "Registro excluido com sucesso",
            "post_url": "https://localhost/perfil",
            "get_all_url": "https://localhost/perfil"
        }
    }

####  Possiveis erros, exemplos abaixo:
    {
    "objeto": [
            {
            "error": "Cast to ObjectId failed for value \"dasdsa\" at path \"_id\" for model \"Profile\"",
            "texto": "Erro interno no banco de dados"
            }
        ]
    }


### /perfil
>##### Method: GET /perfil


#### Dados enviados no Body:
    vazio

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": [
            {
                "ativo": true,
                "_id": "5e3c4ea75ff10d0017c4b284",
                "nome": "Diretor",
                "data_criacao": "2020-01-23T18:49:11.165Z",
                "__v": 0,
                "data_modificacao": "2020-02-10T13:52:33.297Z",
                "get_url": "https://localhost/perfil/5e3c4ea75ff10d0017c4b284",
                "update_url": "https://localhost/perfil/5e3c4ea75ff10d0017c4b284",
                "delete_url": "https://localhost/perfil/5e3c4ea75ff10d0017c4b284",
                "post_url": "https://localhost/perfil",
                "get_all_url": "https://localhost/perfil"
            },
            {
                "ativo": true,
                "_id": "5e3c4eb05ff10d0017c4b285",
                "nome": "Professor",
                "data_criacao": "2020-01-23T18:49:11.165Z",
                "__v": 0,
                "get_url": "https://localhost/perfil/5e3c4eb05ff10d0017c4b285",
                "update_url": "https://localhost/perfil/5e3c4eb05ff10d0017c4b285",
                "delete_url": "https://localhost/perfil/5e3c4eb05ff10d0017c4b285",
                "post_url": "https://localhost/perfil",
                "get_all_url": "https://localhost/perfil"
            }
        ]
    }
