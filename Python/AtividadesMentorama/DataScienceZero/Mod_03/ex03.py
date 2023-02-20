print('''
Exercício 03: Crie uma classe cliente. 
1. Esse cliente deve possuir 2 atributos: nome e saldo e dois métodos: depositar e sacar. 
2. Usando a classe, crie um cliente, utilize os métodos criados para depositar 100 reais na conta do cliente, que deve começar com saldo 0 e depois do depósito apresentar saldo 100. 
3. Na sequência, faça um saque de 20 reais. 
4. Fique atento: o seu código deve impedir que o usuário saque mais do que ele tem em saldo!''')

#Classe, por convenção começa com letra maiúscula:
class Cliente:
    
    # O método __init__ deve aparecer quando a classe for criada, pois é a forma como a classe vai se 
    # apresentar quando ela for instanciada.
    def __init__(self, nome, saldo=0):
        
        # Atributos
        """\n
        Os atributos da classe cliente são nome e saldo.
        """
        self.nome = nome
        self.saldo = saldo
        
    # Métodos:

    # Método Depositar:
    """\n
    O método depositar será utilizado para o reconhecimento da operação de depósito, verificação do valor depositado
    e saldo final após o depósito.
    """
    def depositar(self):
        # Inicializando valor igual a zero para que a operação seja reiniciada enquanto a variavel valor não receber uma nova atribuição 
        valor = 0
        while valor == 0:
            try:
                # informando o valor do depósito:
                valor = float(input('Informe o valor do depóisto: R$ '))

                # Verificando e confirmando a operação:
                confirmacao = 0
                while confirmacao != 1:
                        confirmacao = int(input(f'''
                        Se você quer depositar R${valor} - digite 1 
                        Se você quer alterar o valor - digite 2
                        Se você não quer realizar um depósito - digite 3

                        Operação Selecionada: '''))

                        if confirmacao == 1:
                            # Adicionando o valor informado ao saldo do cliente
                            self.saldo += valor
                            print(f'''
                            
                            Operação realizada com sucesso!
                            
                            Você depositou R${valor} e seu saldo atual é de R$ {self.saldo}.''')
                            break
                        elif confirmacao == 2:
                            # editando o valor do depósito:
                            valor = float(input('Informe o valor do depóisto: R$ '))
                            pass
                        elif confirmacao == 3:
                            print('\nOperação de depósito encerrada pelo Usuário!')
                            break
                        else:
                            print('\nOpção inválida. Tente novamente.')
            except:
                print('Erro de processamento. Informe o valor do depósito novamente!')
            
    # Método Sacar:
        """\n
    O método depositar será utilizado para o reconhecimento da operação de depósito, verificação do valor depositado
    e saldo final após o depósito.
    """
    def sacar(self):
        # Inicializando saque igual a zero para que a operação seja reiniciada enquanto a variável saque não receber um valor 
        saque = 0
        while saque == 0:
            try:
                # informando o valor do depósito:
                saque = float(input('Informe o valor do saque: R$ '))
                # Sacando o valor informado ao saldo do cliente
                self.saldo -= saque
                # Verificando se o cliente tem limite para o saque:
                if self.saldo <= -1000:
                    self.saldo += saque
                    print(f'''
                    Operação não realizada, pois você não tem limite de cheque especial.

                    Seu saldo atual é de R$ {self.saldo}''')

                if self.saldo < 0 and self.saldo > -1000:
                    print('Atenção, você irá utilizar o cheque especial')

                # Verificando e confirmando a operação:
                confirmacao = 0
                while confirmacao != 1:
                    confirmacao = int(input(f'''
                    Se você quer sacar R${saque} - digite 1 
                    Se você quer alterar o valor - digite 2
                    Se você não quer realizar um saque - digite 3

                    Operação Selecionada: '''))

                    if confirmacao == 1:
                        print(f'''

                        Operação realizada com sucesso!

                        Você sacou R${saque} e seu saldo atual é de R$ {self.saldo}.''')
                        break
                    elif confirmacao == 2:
                        self.saldo += saque
                        # editando o valor do depósito:
                        saque = float(input('Informe o valor do saque: R$ '))
                        pass
                    elif confirmacao == 3:
                        self.saldo += saque
                        print('\nOperação de saque encerrada pelo Usuário!')
                        break
                    else:
                        self.saldo += saque
                        print('\nOpção inválida. Tente novamente.')
            except:
                print('Erro de processamento. Informe o valor do depósito novamente!')

# Criando um cliente 
cliente_01 = Cliente('Lucas')

# Testando os valores de atributos carregados inicialmente
print(f'{cliente_01.nome} é cliente do Banco X e apresenta R${cliente_01.saldo} de saldo bancário.')

# Testando o método depositar:
cliente_01.depositar()

# Testando o método sacar:
cliente_01.sacar()