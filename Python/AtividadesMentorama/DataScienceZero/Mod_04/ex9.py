# importanto o sqlite3:
import sqlite3

# Criando/conectando ao banco de dados:
conex = sqlite3.connect("modulo4.db")
cursor = conex.cursor()

# 5. Escreva uma query que liste o valor da folha de pagamento dessa empresa por cargo usando a tabela dados_profissionais, ou seja, somar os salarios em cada cargo.
cursor.execute("SELECT SUM(salario), cargo FROM dados_profissionais GROUP BY cargo ")
print(cursor.fetchall())