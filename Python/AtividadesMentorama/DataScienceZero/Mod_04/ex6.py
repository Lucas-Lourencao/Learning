# importanto o sqlite3:
import sqlite3

# Criando/conectando ao banco de dados:
conex = sqlite3.connect("modulo4.db")
cursor = conex.cursor()

# 2. Usando a tabela dados_profissionais, escreva uma query que retorne todos os campos da tabela ordenando-os pela coluna tempo_casa de maneira decrescente.
cursor.execute("SELECT * FROM dados_profissionais ORDER BY tempo_casa DESC")
print(cursor.fetchall())