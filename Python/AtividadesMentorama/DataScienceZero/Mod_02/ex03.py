# Exercício 3: 
# Lista_01
listaClientes = ['Tiago', 'Talita', 'Franciely']

# Lista_02
consumo = [['Misto Quente', 'Café Duplo'], ['Pão de queijo', 'Brownie', 'Café com Leite (p)'], 'Café Duplo']

# A funçãa ZIP "retorna uma lista de tuplas (Após a aplicação da função list())" onde onde cada tupla corresponde ao i-ésimo elemento de cada lista
consumoClientes = list(zip(listaClientes, consumo)); 

print(consumoClientes)

# Para converter a lista de tuplas em um dicionário utilizamos a função dict()
dicClienteConsumo = dict(consumoClientes)
print(dicClienteConsumo)