# importanto o sqlite3:
import sqlite3

# Criando/conectando ao banco de dados:
conex = sqlite3.connect("modulo4.db")
cursor = conex.cursor()

# Inserindo os dados na tabela 1:
cursor.execute("INSERT INTO dados_cadastrais VALUES(1, 'maria', 'silva', 0, 11111211313, 'rua 1 - SP')") 
cursor.execute("INSERT INTO dados_cadastrais VALUES(2, 'joao', 'silva', 0, 11111311315, 'rua 2 - SP')") 
cursor.execute("INSERT INTO dados_cadastrais VALUES(1, 'pedro', 'pereira', 0, 11111411316, 'rua 8 - SP')") 
cursor.execute("INSERT INTO dados_cadastrais VALUES(1, 'paulo', 'ribeiro', 0, 11123211301, 'rua 9 - SP')") 
conex.commit()

# Visualizando os dados da tabela 1:
cursor.execute("SELECT * FROM dados_cadastrais")
print(cursor.fetchall())