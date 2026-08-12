# Aula 01 — Visão Geral do MongoDB

## 📚 Conteúdo da Aula

Nesta aula foram apresentados os conceitos fundamentais de bancos de dados **NoSQL**, com foco no **MongoDB** e no seu modelo de armazenamento orientado a documentos.

### 🧠 Principais conceitos

* NoSQL
* MongoDB
* Databases
* Collections
* Documents
* JSON
* BSON
* Fields e Values
* Embedded Documents
* Relacionamentos
* MongoDB Ecosystem
* MongoDB Shell (`mongosh`)

---

## 📄 JSON e BSON

No MongoDB, cada registro armazenado é representado como um **documento**.

Os documentos possuem uma estrutura semelhante ao JSON, porém são armazenados internamente utilizando **BSON (Binary JSON)**.

Exemplo:

```json
{
  "nome": "Lucas",
  "idade": 21,
  "curso": "Sistemas de Informação"
}
```

Nesse documento:

* `nome`, `idade` e `curso` são os **fields**;
* `"Lucas"`, `21` e `"Sistemas de Informação"` são os **values**;
* O conjunto desses elementos forma um documento.

---

## 🗂️ Embedded Documents

O MongoDB permite armazenar informações relacionadas dentro do próprio documento.

Exemplo:

```json
{
  "nome": "Lucas",
  "idade": 21,
  "endereco": {
    "cidade": "Feira de Santana",
    "estado": "Bahia"
  }
}
```

Nesse exemplo, `endereco` é um **Embedded Document**, pois possui informações próprias dentro do documento principal.

Essa estrutura pode reduzir a necessidade de separar informações relacionadas em diferentes collections.

---

## 🔗 Relacionamentos

Diferentemente dos bancos de dados relacionais, o MongoDB procura minimizar a necessidade de relacionamentos entre collections.

Em bancos relacionais, é comum dividir os dados em diferentes tabelas e utilizar `JOIN` para relacioná-las.

No MongoDB, quando apropriado, informações relacionadas podem ser armazenadas juntas:

```json
{
  "nome": "Lucas",
  "endereco": {
    "cidade": "Feira de Santana",
    "estado": "Bahia"
  }
}
```

Essa abordagem permite que informações relacionadas sejam recuperadas em um único documento.

---

## 🌐 Ecossistema MongoDB

O MongoDB possui diversas ferramentas para desenvolvimento e administração dos bancos de dados.

Durante a aula foi apresentado o **MongoDB Shell (`mongosh`)**, utilizado para executar comandos e interagir diretamente com o banco de dados através do terminal.

---

## 💻 Principais comandos

### Ver os bancos de dados

```javascript
show databases
```

ou:

```javascript
show dbs
```

### Selecionar um banco

```javascript
use shop
```

### Visualizar as collections

```javascript
show collections
```

### Criar uma collection

```javascript
db.createCollection("produtos")
```

### Inserir um documento

```javascript
db.produtos.insertOne({
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos"
})
```

### Consultar documentos

```javascript
db.produtos.find()
```

---

## 🧪 Exemplo prático

Exemplo utilizando os principais conceitos apresentados na aula:

```javascript
use shop

db.createCollection("produtos")

db.produtos.insertOne({
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    fabricante: {
        nome: "Dell",
        pais: "Brasil"
    }
})

db.produtos.find()
```

### Estrutura do exemplo

```text
shop
└── produtos
    └── documento
        ├── nome
        ├── preco
        ├── categoria
        └── fabricante
            ├── nome
            └── pais
```

O campo `fabricante` representa um **Embedded Document** dentro do documento `produtos`.

---

## 📝 Resumo

Nesta aula foram estudados os fundamentos do MongoDB e sua estrutura de armazenamento orientada a documentos.

Foi possível compreender a diferença entre o modelo relacional e o modelo NoSQL, além dos conceitos de **databases, collections, documents, JSON, BSON, fields, values e embedded documents**.

Também foram praticados comandos básicos do `mongosh`, como criação de databases e collections, inserção de documentos e consultas.

---

## 🎯 Aprendizados

Ao final da aula, foi possível:

* Compreender o conceito de NoSQL;
* Entender o funcionamento básico do MongoDB;
* Diferenciar databases, collections e documents;
* Compreender JSON e BSON;
* Identificar fields e values;
* Utilizar Embedded Documents;
* Conhecer a abordagem de relacionamentos no MongoDB;
* Utilizar comandos básicos do `mongosh`;
* Criar collections;
* Inserir documentos;
* Realizar consultas.
