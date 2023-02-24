print('''
Exercício 02: Escreva um código que chama o módulo random. 
1. Dentro deste módulo utilize a função que gera números aleatórios inteiros para criar uma função customizada que pede para o usuário digitar quantidade de sorteios que ele quer e roda sorteando essa quantidade de números. 
2. Alguns usuários podem não entender que o input é um número e digitar por exemplo "três", o que geraria um erro no código. 
3. Então escreva essa função de maneira a tratar esse erro, enviando uma mensagem que ajude o usuário a resolver o problema.
''')

# Resolução 02 - Incluindo a não repetição dos números sorteados e utilizando o while ao invés do range

# Importando módulos
from random import randrange

# Inicializando a lista de numeros sorteados
numeros_sorteados = []

# Função sorteio com retorno sem repetição:
def sorteio(n):
    contador = 0
    while contador < n:
        # Contador para contabilizar o número de sorteios desejados
        contador += 1
        # (n + 1) serve para incluir o número de sorteios como  a posibilidade de ser um elemento da lista numeros_sorteados
        sorteio = randrange(n+1)
        # Verificando se o número sorteado já saiu
        for numero in numeros_sorteados:
            if numero == sorteio:
                # Regressão do contador, pois se o número sorteado já saiu, deve haver um novo sorteio
                contador -= 1
                # Se o número sorteado já saiu, ele será descartado
                numeros_sorteados.remove(sorteio)
                
        numeros_sorteados.append(sorteio)
    
    return numeros_sorteados

# Loop para retomar a solicitação da quantidade de sorteios sempre que o usuário informar um valor != número
while numeros_sorteados == []:
    try:
        # Solicitando o número de sorteios ao usuário
        quantSorteios = int(input('Informe quantos sorteios você deseja realizar: '))
        # armazenando o resultado
        resultado = sorteio(quantSorteios)
        # Retornando o resultado
        print(f'Foram realizados {quantSorteios} sorteios e os números sorteados são: {resultado}')
    except:
        print(f'O valor digitado não é um número, você deve informar um número. Tente novamente!')