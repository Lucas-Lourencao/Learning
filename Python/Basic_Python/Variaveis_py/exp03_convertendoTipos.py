# 3. Atividade com variáveis python: 
# Como alteramos o tipo de dado de uma variável?
# É possível fazer as conversões:
# Int -> Float? E o inverso?
# Float -> Bool? E o inverso?
# String -> Int? E o inverso?
# String -> Float? E o inverso?
# String -> Bool? E o inverso?

# Vejamos:
# Inicializando as variáveis
nome = 'Lucas'
idade = 36
altura = 1.85
gostaDeXadrez = True

# 1. Convertendo um int em float: É possível
type(idade) # class int
idade = float(idade) # conversão
print(idade, type(idade)) # 36.0, class float

# 2. Convertendo um float em int: É possível
type(altura) # class float
altura = int(altura) # conversão
print(altura, type(altura)) # 1, class float - perceba que aqui retornará apenas o valor inteiro.

# 3. Convertendo um bool em int ou float: É possível
type(gostaDeXadrez) # class bool

# 3.1 Convertendo bool para int: É possível
gostaDeXadrez = int(gostaDeXadrez) # conversão
print(gostaDeXadrez, type(gostaDeXadrez)) # 1, class int

# 3.1.1 Convertendo um int para bool: Atenção!
# a. Teste com inteiro positivo:
inteiro_positivo = 10
print(type(inteiro_positivo)) #class int

inteiro_positivo = bool(inteiro_positivo) # conversão
print(inteiro_positivo, type(inteiro_positivo)) # True, class bool

# b. Teste com 0:
numero_zero = 0
print(type(numero_zero)) #class int

numero_zero = bool(numero_zero) # conversão
print(numero_zero, type(numero_zero)) # FALSE, class bool

# c. Teste com valores negativos, int ou float:
inteiro_negativo = -1
flutuante_negativo = -10.5

print(type(inteiro_negativo), type(flutuante_negativo)) #class int, float

inteiro_negativo = bool(inteiro_negativo) # conversão
flutuante_negativo = bool(flutuante_negativo) # conversão
print(inteiro_negativo, flutuante_negativo, type(inteiro_negativo), type(flutuante_negativo)) # TRUE, TRUE, class bool, bool
print('Perceba que todo inteiro ou float, positivo ou negativo é reconhecido como um booleano True. Apenas o 0 é reconhecido como um booleano False.')

# 3.2 Convertendo bool para float
gostaDeXadrez = float(gostaDeXadrez)
print(gostaDeXadrez, type(gostaDeXadrez)) # 1.0, class float 

# 4. Convertendo String para Int, Float ou bool
teste = 'testeConversão'
print(type(teste)) # class str

# 4.1 String -> Int: Não é possível
teste = int(teste) # ValueError: invalid literal for int() with base 10: 'testeConversão'

# 4.2 Int -> String: É possível
novo_teste = 123
novo_teste = str(novo_teste) 
print(novo_teste, type(novo_teste)) # '123', class str

# 4.3 String -> Float:
teste = float(teste) # ValueError: could not convert string to float

# 4.2 Float -> String: É possível
novo_teste = 1.47
novo_teste = str(novo_teste) 
print(novo_teste, type(novo_teste)) # '1.47', class str

# 4.1 String -> Bool: É possível
teste = bool(teste)
print(teste, type(teste)) # True, class bool

# 4.2 Bool -> String: É possível
novo_teste = True
novo_teste = str(novo_teste) 
print(novo_teste, type(novo_teste)) # 'True', class str




