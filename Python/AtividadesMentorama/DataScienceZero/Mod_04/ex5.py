# importanto o sqlite3:
import sqlite3

# Criando/conectando ao banco de dados:
conex = sqlite3.connect("modulo4.db")
cursor = conex.cursor()

# Inserindo os dados na tabela 2:
cursor.execute("INSERT INTO dados_profissionais VALUES(1, 'matematica', 'professor', 3500.89, 3)") 
cursor.execute("INSERT INTO dados_profissionais VALUES(2, 'geografia', 'orientador', 2850.8, 1)")
cursor.execute("INSERT INTO dados_profissionais VALUES(3, 'historia', 'orientador', 3200.45, 1)")
cursor.execute("INSERT INTO dados_profissionais VALUES(4, 'fisica', 'professor', 1890.33, 2)")
conex.commit()

# Visualizando os dados da tabela 2:
cursor.execute("SELECT * FROM dados_profissionais")
print(cursor.fetchall())