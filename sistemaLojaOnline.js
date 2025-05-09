/* fábrica abstrata de produtos e fábricas concretas usando factory method 
para gerar diferentes tipos de produtos. */

// abstract factory
class ProdutoFactory{
    criarProdutos(tipos){
        throw new Error(`O metodos criarProdutos deve ser implementado pela subclasse`)
    }
}

// fábricas concretas
class EletronicoFactory extends ProdutoFactory{
    criarProdutos(tipos){
        return new Eletronico(tipos);
    }
}

class RoupaFactory extends ProdutoFactory{
    criarProdutos(tipos){
        return new Roupa(tipos);
    }
}

/* um carrinho de compras onde os produtos adicionados possam ser decorados
com embalagens ou brindes, usando o decorator. */

// componente base
class Carrinho {
    adicionar(produtos) {
      console.log(`Produtos adicionados: ${produtos}`);
    }
  }
  
  // decorador base
  class DecoradorProdutos {
    constructor(pacote) {
      this._pacote = pacote;
    }
  
    adicionar(produtos) {
      this._pacote.adicionar(produtos);
    }
  }
  
  // decorador concreto: embalagem
  class PacoteEmbalagem extends DecoradorProdutos {
    adicionar(produtos) {
      console.log('Decorando com embalagem.');
      super.adicionar(produtos);
    }
  }
  
  // decorador concreto: brindes
  class PacoteBrindes extends DecoradorProdutos {
    adicionar(produtos) {
        console.log('Decorando com brindes.');
        super.adicionar(produtos);
      }
  }

/* um subsistema complexo (pagamento, logística, notificação) 
encapsulado por uma interface simplificada com façade. */

// classes do subsistema
  class Pagamento {
    processarPagamento(valor) {
      console.log(`Processando pagamento de R$${valor}...`);
    }
  }
  
  class Logística {
    verificarDisponibilidade(produto) {
      console.log(`Verificando disponibilidade de ${produto}...`);
    }
  }

  class Notificação {
    enviarNotificação(mensagem) {
      console.log(`${mensagem}...`);
    }
  }
  
  // classe facade
  class PedidoFacade {
    constructor() {
      this.estoque = new Estoque();
      this.pagamento = new Pagamento();
      this.envio = new Envio();
    }
  
    realizarPedido(produto, valor, endereco) {
      this.estoque.verificarDisponibilidade(produto);
      this.pagamento.processarPagamento(valor);
      this.envio.agendarEnvio(endereco);
      console.log('Pedido realizado com sucesso!');
    }
  }