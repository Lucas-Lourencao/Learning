# Exercício 01:
# A) Criar uma tabela chamada dados_cadastrais onde cada linha representa um funcionário contendo os seguintes atributos: Id, nome, sobrenome, data_nasci, cpf e endereco;

# importanto o sqlite3:
import sqlite3

# Criando/conectando ao banco de dados:
conex = sqlite3.connect("modulo4.db")
cursor = conex.cursor()

# Criando a tabela 1:
cursor.execute(
    "CREATE TABLE dados_cadastrais (Id integer, nome text, sobrenome text, data_nasci integer, cpf inteiro, endereco text)")

# B) criar uma tabela chamada dados_profissionais contendo os seguintes atributos: id, graduacao, cargo, salario e tempo_casa.

# Criando a tabela 2:
cursor.execute(
    "CREATE TABLE dados_profissionais (Id integer, graduacao text, cargo text, salario float, tempo_casa inteiro)")

# Verificando se as tabelas foram criadas
print('Tabelas criadas com sucesso!')


