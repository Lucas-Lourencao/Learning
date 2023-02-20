# 4. Atividade com variáveis python: 

# Escopo Global: é declarada (criada) fora das funções e pode ser acessada por todas as funções presentes no módulo onde é definida.
variavel_01 = 'teste'
variavel_02 = 'reteste'

# Escopo Local: Uma variável local (criada dentro de uma função) existe apenas dentro da função onde foi declarada.
def testeVariavel():
    variavel_01 = 'variavel_local_alterada'

    return variavel_01, variavel_02

# Perceba que a saída abaixo remete a variavel_01 global, ou seja, fora da função
print(variavel_01)

# Perceba que o retorno da variavel_01 remete a variavel local da função, já o retorno da variável_02 remete a variável global declarada fora da função.
retornoFuncao = testeVariavel()
print(retornoFuncao)

# Para provar que o retorno da variavel_01 remete a variavel local, vamos alterar a variavel_01 global, veja:
variavel_01 = 'teste_variavelGlobal'
print(variavel_01)

# Agora vamos chamar a função e o retorno não será alterado, veja:
print(retornoFuncao) # 'novo_teste', 'reteste'

# Agora alteramos o valor da variavel_01 local, perceba que o retorno da função também será alterado.
print(retornoFuncao)

