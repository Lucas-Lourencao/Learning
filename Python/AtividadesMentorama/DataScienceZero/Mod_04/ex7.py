# importanto o sqlite3:
import sqlite3

# Criando/conectando ao banco de dados:
conex = sqlite3.connect("modulo4.db")
cursor = conex.cursor()

# 3. Conte a quantidade de funcionarios dessa empresa.
cursor.execute("SELECT COUNT(Id) FROM dados_cadastrais")
print(cursor.fetchall())