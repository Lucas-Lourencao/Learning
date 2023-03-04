# importanto o sqlite3:
import sqlite3

# Criando/conectando ao banco de dados:
conex = sqlite3.connect("modulo4.db")
cursor = conex.cursor()

# Se necessário, para reiniciar o exercício, realizar a exclusão das tabelas.
cursor.execute("DROP TABLE dados_cadastrais")
cursor.execute("DROP TABLE dados_profissionais")
print('As tabelas foram excluída com sucesso!')