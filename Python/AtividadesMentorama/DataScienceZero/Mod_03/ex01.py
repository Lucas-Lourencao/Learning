print('''
Exercício 01: Construa uma função que recebe uma lista de tamanho 5 como parâmetro.
1. Essa função deve percorrer cada elemento dessa lista e verificar se o elemento é par ou não. 
2. Se ele for par, salvar ele em uma nova lista que deve ser retornada com todos os valores pares encontrados.
''')

# Inicializando as listas e variáveis:
lista_recebida = []
sequencia = 0
lista_pares = []

# Função para verificar os elementos pares existentes em uma lista informada
def verificaPar(lista):
    for item in lista:
        if item % 2 == 0:
            lista_pares.append(item)
        else:
            continue
    
    if len(lista_pares) == 0:
        print('A lista informada não apresenta números pares')
    else: 
        print(f'Os números pares informados foram: {lista_pares}.')
        #return lista_pares

# Mensagem instrutiva:
print('Você deverá informar cinco números!\n')


# Solicitação de informação ao usuário do programa enquanto necessário:
while len(lista_recebida) < 5:
    try:
        # contador para tratar/clarear a mensagem do campo input:
        sequencia = sequencia + 1
        # variavel tratada com a função int para recebimento dos números:
        recebe_numero = int(input(f'Informe o {sequencia}º número: '))
        # adicionando elementos na lista_recebida
        lista_recebida.append(recebe_numero)
    except:
        print('Você deve informar um número inteiro. Tente novamente!')
        # contador decresce um valor para manter a lógica da sequência de números informados:
        sequencia -= 1
    
print(f'Os números informados foram: {lista_recebida}.\n')
lista_pares = verificaPar(lista_recebida) 