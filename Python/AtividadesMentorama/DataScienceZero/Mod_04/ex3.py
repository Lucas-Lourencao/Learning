# importanto o sqlite3:
import sqlite3

# Criando/conectando ao banco de dados:
conex = sqlite3.connect("modulo4.db")
cursor = conex.cursor()

# Verificando a criação das tabelas. 
cursor.execute('SELECT name from sqlite_master where type= "table"')

# O comando fetchall é responsável por apresentar o resultado da query.
print(cursor.fetchall())