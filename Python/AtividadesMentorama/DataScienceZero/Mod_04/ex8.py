# importanto o sqlite3:
import sqlite3

# Criando/conectando ao banco de dados:
conex = sqlite3.connect("modulo4.db")
cursor = conex.cursor()


# 4. Usando a tabela dados_cadastrais, escreva uma query que liste apenas os funcionarios que possuem sobrenome "silva" ordenados pelo nome completo, ou seja, nome e sobrenome.

cursor.execute("SELECT * FROM dados_cadastrais WHERE sobrenome=='silva' ORDER BY nome")
print(cursor.fetchall())