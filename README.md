![](./files/LogoPostAPP.png)
# PostAppApi-Compasso

Indice
+ 1.0 [DIRETRIZES DE APLICATIVO](#10-diretrizes-de-aplicativo)
+ 2.0 [O PROPÓSITO DO APLICATIVO](#20-o-prop%c3%93sito-do-aplicativo)
+ 3.0 [USUÁRIOS DO APLICATIVO](#30-usu%c3%81rios-do-aplicativo)
+ 4.1 [RESTRIÇÕES DA SOLUÇÃO](#41-restri%c3%87%c3%95es-da-solu%c3%87%c3%83o)
+ 4.2 [AMBIENTE DE IMPLANTAÇÃO DO APLICATIVO](#42-ambiente-de-implanta%c3%87%c3%83o-do-aplicativo)
+ 4.3 [GERENCIADOR DE BANCO DE DADOS](#43-gerenciador-de-banco-de-dados)
+ 4.4 [INSTALAÇÃO DA APLICAÇÃO PARA DESENVOLVIMENTO LOCAL](#44-instala%c3%87%c3%83o-da-aplica%c3%87%c3%83o-para-desenvolvimento-local)
+ 5.1 [DIAGRAMAS DE CASO DE USO](#51-diagramas-de-caso-de-uso)
+ 6.1 [ROTAS](#61-rotas)
+ 6.1.1 [Rota /Authenticate](#611-rota-authenticate)
+ 6.1.2 [Rota /aluno POST](#612-rota-aluno)
+ 6.1.3 [Rota /cursos POST](#613-rota-cursos)
+ 6.1.4 [Rota /cursos/:id GET](#614-rota-cursos)
+ 6.1.5 [Rota /cursos/:id PUT](#615-rota-cursos)
+ 6.1.6 [Rota /cursos/:id DELETE](#616-rota-cursos)
+ 6.1.7 [Rota /cursos GET](#617-rota-cursos)
+ 6.1.8 [Rota /perfil POST](#618-rota-perfil)
+ 6.1.9 [Rota /perfil/:id GET](#619-rota-perfil)
+ 6.1.10 [Rota /perfil/:id PUT](#6110-rota-perfil)
+ 6.1.11 [Rota /perfil//:id DELETE](#6111-rota-perfil)
+ 6.1.12 [Rota /perfil GET](#6112-rota-perfil)
+ 6.1.13 [Rota /user POST](#613-rota-user)
+ 6.1.14 [Rota /user/:id GET](#6114-rota-user)
+ 6.1.15 [Rota /user/:id PUT](#6115-rota-user)
+ 6.1.16 [Rota /user/:id DELETE](#6116-rota-user)
+ 6.1.17 [Rota /user GET](#6117-rota-user)
+ 6.1.18 [Rota /posts POST](#6118-rota-posts)
+ 6.1.19 [Rota /posts/:id GET](#6119-rota-posts)
+ 6.1.20 [Rota /posts/:id PUT](#6120-rota-posts)
+ 6.1.21 [Rota /posts/:id DELETE](#6121-rota-posts)
+ 6.1.22 [Rota /posts GET](#6122-rota-posts)

## 1.0 DIRETRIZES DE APLICATIVO
Este é um projeto para a criação de uma aplicação web com o objetivo de criar Postagens para comunicação interna, sendo controlado com restrições de usuário e senha, também visa cadastrar quais tipos (interesse) o usuário tem de receber as postagens.


## 2.0 O PROPÓSITO DO APLICATIVO
A aplicação vem para suprir a necessidade de intituições de ensino e/ou outras intituições tem de se comunicar por meio de recados, informativos, comunicados etc, geralmente enviados aos email que por diversas vezes não são acessados com frequencia, assim as informações chegam aos usuarios defasagem.

## 3.0 USUÁRIOS DO APLICATIVO
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

# 4.0 RESTRIÇÕES

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

# 5.0 MODELAGEM DA APLICAÇÃO

## 5.1 DIAGRAMAS DE CASO DE USO
![Caso de Uso - UC001](files/UC001.png) Caso de Uso - UC001
![Caso de Uso - UC002](files/UC002.png) Caso de Uso - UC002
![Caso de Uso - UC003](files/UC003.png) Caso de Uso - UC003

# 6.0 BACKEND

## 6.1 ROTAS

### 6.1.1 **Rota:** /Authenticate
>##### Method: POST /Autenticate

Rota utilizada para fazer autenticação para as, os dados enviados pelo Body retorna um token para ser usado nas funções.

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


### 6.1.2 **Rota:** /aluno
>##### Method: POST user

#### Dados enviados no Body:
    {
        "nome": "José da Silva",
        "cpf": "12345678909",
        "email": "jose@aluno.com",
        "senha": "1234567",
        "perfil": "5e45545625f3850c3838c5c9"
  }

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": {
            "ativo": true,
            "desligado": false,
            "_id": "5e45b2fe84f6260017d4f98d",
            "nome": "José da Silva",
            "cpf": "12345678909",
            "email": "jose@aluno.com",
            "senha": "$2b$10$yBjc65X97LhF8LiXBjkyteV9o2yrpsuDLihacgxvSTawcX31fEbI6",
            "perfil": "5e45545625f3850c3838c5c9",
            "curso": [],
            "data_criacao": "2020-02-13T20:35:10.157Z",
            "__v": 0,
            "get_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
            "update_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
            "delete_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
            "post_url": "https://localhost/user",
            "get_all_url": "https://localhost/user"
        }
    }

####  Possiveis erros, exemplos abaixo:
    {
        "objeto": [
            {
            "error": "O usuario jose@post.com já esta cadastrado",
            "texto": "Erro interno no banco de dados"
            }
        ]
    },
    {
        "errors": [
            {
            "value": "Jo",
            "msg": "Preencha com mais de 3 letras",
            "param": "nome",
            "location": "body"
            },
            {
            "value": "1",
            "msg": "Digite um cpf valido, apenas numeros, sem ponto e sem hifem.",
            "param": "cpf",
            "location": "body"
            },
            {
            "value": "123",
            "msg": "Senha incompativel, digite outra e maior que 4 digitos",
            "param": "senha",
            "location": "body"
            }
        ]
    }


### 6.1.3 **Rota:** /user
>##### Method: POST /user


#### Dados enviados no Body:
    {
        "nome": "João de Souza",
        "cpf": "01234567890",
        "email": "joao@joao.com",
        "senha": "senha123",
            "perfil": "5e45545625f3850c3838c5c9"
    }

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": {
            "ativo": true,
            "desligado": false,
            "_id": "5e46b35c17adc1001760c6c5",
            "nome": "João de Souza",
            "cpf": "01234567890",
            "email": "joao@joao.com",
            "senha": "$2b$10$0I8C.WNbaNHY5Zs0bIHvV.DMN46QTIjfIB7i70V8sLXXDqmD4Kf7e",
            "perfil": "5e45545625f3850c3838c5c9",
            "curso": [],
            "data_criacao": "2020-02-14T14:49:00.854Z",
            "__v": 0,
            "get_url": "https://postapp-compasso-api-dev.herokuapp.com/user/5e46b35c17adc1001760c6c5",
            "update_url": "https://postapp-compasso-api-dev.herokuapp.com/user/5e46b35c17adc1001760c6c5",
            "delete_url": "https://postapp-compasso-api-dev.herokuapp.com/user/5e46b35c17adc1001760c6c5",
            "post_url": "https://postapp-compasso-api-dev.herokuapp.com/user",
            "get_all_url": "https://postapp-compasso-api-dev.herokuapp.com/user"
        }
    }


####  Possiveis erros, exemplos abaixo:
    {
        "auth": false,
        "message": "No token provided."
    },
    {
    "errors": [
            {
            "value": "Jo",
            "msg": "Preencha com mais de 3 letras",
            "param": "nome",
            "location": "body"
            },
            {
            "value": "1",
            "msg": "Digite um cpf valido, apenas numeros, sem ponto e sem hifem.",
            "param": "cpf",
            "location": "body"
            },
            {
            "value": "123",
            "msg": "Senha incompativel, digite outra e maior que 4 digitos",
            "param": "senha",
            "location": "body"
            }
        ]
    }



### 6.1.4 **Rota:** /cursos
>##### Method: GET /cursos/:id


#### Dados enviados no Body:
    vazio

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": [
            {
                "ativo": true,
                "_id": "5e45921b5414140017349cfa",
                "nome": "Mecanica",
                "data_criacao": "2020-02-13T18:14:51.849Z",
                "__v": 0,
                "data_modificacao": "2020-02-13T18:32:06.882Z",
                "get_url": "https://localhost/cursos/5e45921b5414140017349cfa",
                "update_url": "https://localhost/cursos/5e45921b5414140017349cfa",
                "delete_url": "https://localhost/cursos/5e45921b5414140017349cfa",
                "post_url": "https://localhost/cursos",
                "get_all_url": "https://localhost/cursos"
            }
        ]
    }

####  Possiveis erros, exemplos abaixo:
    {
    "objeto": [
        {
        "error": "Cast to ObjectId failed for value \"5e45921b5414140017349cf\" at path \"_id\" for model \"Course\"",
        "texto": "Erro interno no banco de dados"
        }
    ]
    }


### 6.1.5 **Rota:** /cursos
>##### Method: PUT /cursos/:id

#### Dados enviados no Body:
    {
        "nome": "Novo nome do curso",
        "ativo": true,
        "desligado":false
    }

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": {
            "ativo": true,
            "_id": "5e45921b5414140017349cfa",
            "nome": "Novo nome do curso",
            "data_criacao": "2020-02-13T18:14:51.849Z",
            "__v": 0,
            "data_modificacao": "2020-02-13T20:22:17.249Z",
            "mensagem": "Registro alterado com sucesso",
            "get_url": "https://localhost/cursos/5e45921b5414140017349cfa",
            "update_url": "https://localhost/cursos/5e45921b5414140017349cfa",
            "delete_url": "https://localhost/cursos/5e45921b5414140017349cfa",
            "post_url": "https://localhost/cursos",
            "get_all_url": "https://localhost/cursos"
        }
    }


####  Possiveis erros, exemplos abaixo:
    {
    "objeto": [
            {
            "error": "Cast to ObjectId failed for value \"{ _id: '5e45921b5414140017349cfaa' }\" at path \"_id\" for model \"Course\"",
            "texto": "Erro interno no banco de dados"
            }
        ]
    }


### 6.1.6 **Rota:** /cursos
>##### Method: DELETE /cursos/:id


#### Dados enviados no Body:
    vazio


#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
    "mensagem": "Registro excluido com sucesso",
    "post_url": "https://localhost/cursos",
    "get_all_url": "https://localhost/cursos"
    }

####  Possiveis erros, exemplos abaixo:
    {
    "objeto": [
        {
        "error": "Cast to ObjectId failed for value \"5e45921b5414140017349cfaa\" at path \"_id\" for model \"Course\"",
        "texto": "Erro interno no banco de dados"
        }
    ]
    }



### 6.1.7 **Rota:** /cursos
>##### Method: GET /cursos


#### Dados enviados no Body:
    vazio

#### Dados enviados no Header
    vazio

#### Resposta:
    {
    "objeto": [
        {
        "ativo": true,
        "_id": "5e45944ec9ba750017182dd2",
        "nome": "Ciencia da Computacao",
        "data_criacao": "2020-02-13T18:24:14.968Z",
        "__v": 0,
        "data_modificacao": "2020-02-13T18:48:19.827Z",
        "get_url": "https://localhost/cursos/5e45944ec9ba750017182dd2",
        "update_url": "https://localhost/cursos/5e45944ec9ba750017182dd2",
        "delete_url": "https://localhost/cursos/5e45944ec9ba750017182dd2",
        "post_url": "https://localhost/cursos",
        "get_all_url": "https://localhost/cursos"
        },
        {
        "ativo": true,
        "_id": "5e459651c9ba750017182dd8",
        "nome": "ADS",
        "data_criacao": "2020-02-13T18:32:49.669Z",
        "__v": 0,
        "get_url": "https://localhost/cursos/5e459651c9ba750017182dd8",
        "update_url": "https://localhost/cursos/5e459651c9ba750017182dd8",
        "delete_url": "https://localhost/cursos/5e459651c9ba750017182dd8",
        "post_url": "https://localhost/cursos",
        "get_all_url": "https://localhost/cursos"
        }
    ]
    }



### 6.1.8 **Rota:** /perfil
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


### 6.1.9 **Rota:** /perfil
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


### 6.1.10 **Rota:** /perfil
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



### 6.1.11 **Rota:** /perfil
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



### 6.1.12 **Rota:** /perfil
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


### 6.1.13 **Rota:** /user
>##### Method: POST user


#### Dados enviados no Body:
    {
        "nome": "José da Silva",
        "cpf": "12345678909",
        "email": "jose@post.com",
        "senha": "1234567",
        "perfil": "5e45545625f3850c3838c5c9"
  }


#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": {
            "ativo": true,
            "desligado": false,
            "_id": "5e45b2fe84f6260017d4f98d",
            "nome": "José da Silva",
            "cpf": "12345678909",
            "email": "jose@post.com",
            "senha": "$2b$10$yBjc65X97LhF8LiXBjkyteV9o2yrpsuDLihacgxvSTawcX31fEbI6",
            "perfil": "5e45545625f3850c3838c5c9",
            "curso": [],
            "data_criacao": "2020-02-13T20:35:10.157Z",
            "__v": 0,
            "get_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
            "update_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
            "delete_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
            "post_url": "https://localhost/user",
            "get_all_url": "https://localhost/user"
        }
    }

####  Possiveis erros, exemplos abaixo:
    {
        "objeto": [
            {
            "error": "O usuario jose@post.com já esta cadastrado",
            "texto": "Erro interno no banco de dados"
            }
        ]
    },
    {
        "errors": [
            {
            "value": "Jo",
            "msg": "Preencha com mais de 3 letras",
            "param": "nome",
            "location": "body"
            },
            {
            "value": "1",
            "msg": "Digite um cpf valido, apenas numeros, sem ponto e sem hifem.",
            "param": "cpf",
            "location": "body"
            },
            {
            "value": "123",
            "msg": "Senha incompativel, digite outra e maior que 4 digitos",
            "param": "senha",
            "location": "body"
            }
        ]
    }


### 6.1.14 **Rota:** /user
>##### Method: GET user/:id


#### Dados enviados no Body:
    vazio

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": [
            {
                "ativo": true,
                "desligado": false,
                "_id": "5e45b2fe84f6260017d4f98d",
                "nome": "José da Silva",
                "cpf": "12345678909",
                "email": "jose@post.com",
                "perfil": null,
                "curso": [],
                "data_criacao": "2020-02-13T20:35:10.157Z",
                "__v": 0,
                "get_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
                "update_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
                "delete_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
                "post_url": "https://localhost/user",
                "get_all_url": "https://localhost/user"
            }
        ]
    }

####  Possiveis erros, exemplos abaixo:
    {
        "objeto": [
            {
            "error": "Cast to ObjectId failed for value \"5e45b2fe84f6260017d4f98dq\" at path \"_id\" for model \"User\"",
            "texto": "Erro interno no banco de dados"
            }
        ]
    }


### 6.1.15 **Rota:** /user
>##### Method: PUT user/:id

#### Dados enviados no Body:
    {
        "ativo": true,
        "desligado": false,
        "nome": "José da Silva",
        "cpf": "12345678909",
        "email": "jose@post.com",
        "perfil": "{{ perfil  }}",
        "curso": [{
            "curso_id": {
                "_id": "5e459668c9ba750017182dd9"
            },
            "caracteristica": "Professor"
        }]
    }

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": {
            "ativo": true,
            "desligado": false,
            "_id": "5e45b2fe84f6260017d4f98d",
            "nome": "José da Silva",
            "cpf": "12345678909",
            "email": "jose@post.com",
            "perfil": "5e45b63d84f6260017d4f99a",
            "curso": [
            {
                "_id": "5e45b65984f6260017d4f99b",
                "curso_id": "5e459668c9ba750017182dd9",
                "caracteristica": "Professor"
            }
            ],
            "data_criacao": "2020-02-13T20:35:10.157Z",
            "__v": 0,
            "data_modificacao": "2020-02-13T20:49:29.179Z",
            "mensagem": "Registro alterado com sucesso",
            "get_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
            "update_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
            "delete_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
            "post_url": "https://localhost/user",
            "get_all_url": "https://localhost/user"
        }
    }


####  Possiveis erros, exemplos abaixo:
    {
        "objeto": [
            {
            "error": "Cast to ObjectId failed for value \"{ _id: '5e45b2fe84f6260017d4f98dq' }\" at path \"_id\" for model \"User\"",
            "texto": "Erro interno no banco de dados"
            }
        ]
    }


### 6.1.16 **Rota:** /user
>##### Method: DELETE user/:id


#### Dados enviados no Body:
    vazio


#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
    "objeto": {
        "mensagem": "Registro excluido com sucesso",
        "post_url": "https://localhost/user",
        "get_all_url": "https://localhost/user"
    }
    }


####  Possiveis erros, exemplos abaixo:
    {
        "objeto": {
            "mensagem": "Nenhum registro excluido ou não encontrado",
            "post_url": "https://localhost/user",
            "get_all_url": "https://localhost/user"
        }
    }



### 6.1.17 **Rota:** /user
>##### Method: GET user


#### Dados enviados no Body:
    vazio

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
    "objeto": [
        {
        "ativo": true,
        "desligado": false,
        "_id": "5e459d5dc9ba750017182dde",
        "nome": "fudeu",
        "cpf": "12345678909",
        "email": "s@s.com",
        "perfil": null,
        "curso": [
            {
            "_id": "5e45b5ef84f6260017d4f997",
            "curso_id": {
                "_id": "5e45964ec9ba750017182dd7",
                "nome": "Quimica"
            },
            "caracteristica": "Professor"
            }
        ],
        "data_criacao": "2020-02-13T19:02:53.362Z",
        "__v": 0,
        "data_modificacao": "2020-02-13T20:47:43.575Z",
        "get_url": "https://localhost/user/5e459d5dc9ba750017182dde",
        "update_url": "https://localhost/user/5e459d5dc9ba750017182dde",
        "delete_url": "https://localhost/user/5e459d5dc9ba750017182dde",
        "post_url": "https://localhost/user",
        "get_all_url": "https://localhost/user"
        },
        {
        "ativo": false,
        "desligado": false,
        "_id": "5e45a00184f6260017d4f987",
        "nome": "O Chicote vai estralar",
        "cpf": "12345678909",
        "email": "chicote@vaiestralar.com.br",
        "perfil": null,
        "curso": [
            {
            "_id": "5e45a00184f6260017d4f989",
            "curso_id": {
                "_id": "5e3d67110e21ec00178faf6f",
                "nome": "Ciencias da Computacao Novo"
            },
            "caracteristica": "Aluno"
            },
            {
            "_id": "5e45a00184f6260017d4f988",
            "curso_id": {
                "_id": "5e418fcaf9869000179e2db1",
                "nome": "Gestão de Projetos do Luiz Felipe"
            },
            "caracteristica": "Interesse"
            }
        ],
        "data_criacao": "2020-02-13T19:14:09.530Z",
        "__v": 0,
        "get_url": "https://localhost/user/5e45a00184f6260017d4f987",
        "update_url": "https://localhost/user/5e45a00184f6260017d4f987",
        "delete_url": "https://localhost/user/5e45a00184f6260017d4f987",
        "post_url": "https://localhost/user",
        "get_all_url": "https://localhost/user"
        },
        {
        "ativo": false,
        "desligado": false,
        "_id": "5e45b2fe84f6260017d4f98d",
        "nome": "José da Silva",
        "cpf": "12345678909",
        "email": "jose@post.com",
        "perfil": null,
        "curso": [
            {
            "_id": "5e45b65984f6260017d4f99b",
            "curso_id": {
                "_id": "5e459668c9ba750017182dd9",
                "nome": "ED Fisica"
            },
            "caracteristica": "Professor"
            }
        ],
        "data_criacao": "2020-02-13T20:35:10.157Z",
        "__v": 0,
        "data_modificacao": "2020-02-13T20:55:34.211Z",
        "get_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
        "update_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
        "delete_url": "https://localhost/user/5e45b2fe84f6260017d4f98d",
        "post_url": "https://localhost/user",
        "get_all_url": "https://localhost/user"
        }
        ]
    }


### 6.1.18 **Rota:** /posts
>##### Method: POST /posts


#### Dados enviados no Body:


#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:



####  Possiveis erros, exemplos abaixo:



### 6.1.19 **Rota:** /posts
>##### Method: GET /posts/:id


#### Dados enviados no Body:
    vazio

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:

####  Possiveis erros, exemplos abaixo:



### 6.1.20 **Rota:** /posts
>##### Method: PUT /posts/:id

#### Dados enviados no Body:
    {
        "titulo": "Evendo X",
        "descricao": "bla bla bla bla bla bla bla bla bla bla",
        "data_evento": "2020-03-01",
        "link": "http://www.blabla.com.br/poo",
        "curso": ["5e3d7f9fe29cb64718b8bd25"]
    }

#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
    "objeto": {
            "curso": [
            "5e3d7f9fe29cb64718b8bd25"
            ],
            "_id": "5e46c58454092b0017f4dd0e",
            "titulo": "Evendo X",
            "descricao": "bla bla bla bla bla bla bla bla bla bla",
            "data_evento": "2020-03-01T00:00:00.000Z",
            "link": "http://www.blabla.com.br/poo",
            "usuario": "5e46a4372c569d13e01c65af",
            "ativo": true,
            "data_criacao": "2020-02-14T16:06:28.252Z",
            "__v": 0,
            "get_url": "https://postapp-compasso-api-dev.herokuapp.com/posts/5e46c58454092b0017f4dd0e",
            "update_url": "https://postapp-compasso-api-dev.herokuapp.com/posts/5e46c58454092b0017f4dd0e",
            "delete_url": "https://postapp-compasso-api-dev.herokuapp.com/posts/5e46c58454092b0017f4dd0e",
            "post_url": "https://postapp-compasso-api-dev.herokuapp.com/posts",
            "get_all_url": "https://postapp-compasso-api-dev.herokuapp.com/posts"
        }
    }



####  Possiveis erros, exemplos abaixo:


### 6.1.21 **Rota:** /posts
>##### Method: DELETE /posts/:id


#### Dados enviados no Body:
    vazio


#### Dados enviados no Header
    x-access-token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlNDQ1Y2ZkMDZhZDA4bWUiOiYiOiIxWlsIjoidDVAdDUuY29tIiwic2VuaGEiOiIiLCJwZX"

#### Resposta:
    {
        "objeto": {
            "curso": [
            "5e3d7f9fe29cb64718b8bd25"
            ],
            "_id": "5e46c58454092b0017f4dd0e",
            "titulo": "Evendo X",
            "descricao": "bla bla bla bla bla bla bla bla bla bla",
            "data_evento": "2020-03-01T00:00:00.000Z",
            "link": "http://www.blabla.com.br/poo",
            "usuario": "5e46a4372c569d13e01c65af",
            "ativo": true,
            "data_criacao": "2020-02-14T16:06:28.252Z",
            "__v": 0,
            "get_url": "https://postapp-compasso-api-dev.herokuapp.com/posts/5e46c58454092b0017f4dd0e",
            "update_url": "https://postapp-compasso-api-dev.herokuapp.com/posts/5e46c58454092b0017f4dd0e",
            "delete_url": "https://postapp-compasso-api-dev.herokuapp.com/posts/5e46c58454092b0017f4dd0e",
            "post_url": "https://postapp-compasso-api-dev.herokuapp.com/posts",
            "get_all_url": "https://postapp-compasso-api-dev.herokuapp.com/posts"
        }
    }


### 6.1.22 **Rota:** /posts
>##### Method: GET /posts


#### Dados enviados no Body:
    vazio

#### Dados enviados no Header
    vazio

#### Resposta:
    {
  "objeto": [
    {
        "curso": [],
        "_id": "5e46c58454092b0017f4dd0e",
        "titulo": "Evendo X",
        "descricao": "bla bla bla bla bla bla bla bla bla bla",
        "data_evento": "2020-03-01T00:00:00.000Z",
        "link": "http://www.blabla.com.br/poo",
        "usuario": {
            "ativo": true,
            "_id": "5e46a4372c569d13e01c65af",
            "nome": "Ricardo Mateus Fernandes",
            "email": "ricardomateusfernandes@yahoo.de"
        },
        "ativo": true,
        "data_criacao": "2020-02-14T16:06:28.252Z",
        "__v": 0,
        "get_url": "https://postapp-compasso-api-dev.herokuapp.com/posts/5e46c58454092b0017f4dd0e",
        "update_url": "https://postapp-compasso-api-dev.herokuapp.com/posts/5e46c58454092b0017f4dd0e",
        "delete_url": "https://postapp-compasso-api-dev.herokuapp.com/posts/5e46c58454092b0017f4dd0e",
        "post_url": "https://postapp-compasso-api-dev.herokuapp.com/posts",
        "get_all_url": "https://postapp-compasso-api-dev.herokuapp.com/posts"
        }
    }

.
