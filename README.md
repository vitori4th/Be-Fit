<h1 align="center">
  <img alt="Be fit." title="Be fit" src="" width="220px" />
</h1>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-requisitos">Requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-equipe">Equipe</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

</p>

## 💻 Projeto

### Demanda e motivação

O site Be fit. representa uma iniciativa voltada para aprimorar a experiência de compra dos clientes da marca. Atualmente, a loja recebe pedidos exclusivamente através do WhatsApp e Instagram, o que demanda uma alternativa mais ampla e acessível. O objetivo principal deste projeto é estender o alcance da marca e proporcionar aos clientes uma maneira mais conveniente de adquirir produtos fitness de alta qualidade. A solução proposta inclui o desenvolvimento de um site intuitivo e responsivo, que permite aos clientes explorar e comprar uma variedade abrangente de roupas e acessórios fitness de forma simples e direta. Com a implementação do Be fit., a loja não só aprimorará a eficiência no processamento de pedidos, mas também fortalecerá sua presença online, impulsionando seu crescimento e competitividade no mercado de moda fitness.

### O problema

A loja online BeFit sofre com dificuldades ao depender apenas do Instagram e WhatsApp. Essas plataformas, apesar de populares, não possuem funcionalidades para gerenciar adequadamente um negócio de e-commerce em expansão. Além disso, a ausência de uma plataforma dedicada cria problemas como gerenciamento de estoque, processamento de pedidos, rastreamento de vendas e implementação de estratégias de marketing mais avançadas e direcionadas.

### A solução

Para atender às demandas da BeFit e enfrentar seus desafios atuais, sugerimos a criação de uma loja virtual exclusiva. Essa solução proporcionará à BeFit uma plataforma personalizada e avançada para gerenciar suas operações de comércio eletrônico de forma eficiente e eficaz. Com a nova plataforma, a BeFit poderá

1. **Gestão de Produtos:**
   - Catalogar e organizar os produtos de maneira eficaz.
   - Atualizar e criar facilmente informações de produtos, incluindo imagens, descrições e preços.
2. **Processamento de Pedidos:**
   - Automatizar o processo de recebimento, processamento e entrega de pedidos.
   - Rastrear o status dos pedidos em tempo real, desde o recebimento até a entrega.
3. **Marketing Aprimorado:**
   - Utilizar uma plataforma, de acordo com a identidade visual da marca, deixando mais atraente e usável para o cliente.
   - Disparo de e-mail quando houver promoções ou queima de estoque.
4. **Experiência de Compra Aprimorada:**
   - Oferecer aos clientes uma experiência de compra online intuitiva.
   - Facilitar o processo de pagamento e oferecer opções de checkout seguro.

## 📌 Requisitos
### Funcionais

1. **Gerenciamento de Pedidos:**
    - Ator: Cliente, Administrador
    - Descrição: Permitir que os clientes visualizem o histórico de pedidos, acompanhem o status dos pedidos em tempo real e permitir que os administradores gerenciem pedidos, atualizem status.
    - Fluxo de Eventos:
    1. O cliente acessa sua conta e visualiza o histórico de pedidos.
    2. O sistema exibe uma lista de pedidos anteriores com detalhes.
    3. O administrador pode gerenciar pedidos e atualizar status.
2. **Gerenciamento de Produtos:**
    - Ator: Administrador
    - Descrição: Manter o controle do estoque disponível e atualizar automaticamente quando as compras são feitas para evitar vendas de produtos fora de estoque.
    - Fluxo de Eventos:
    1. O administrador adiciona as quantidades dos produtos e novos produtos.
    2. Quando uma compra é concluída, o sistema atualiza automaticamente o estoque.
    3. Se um produto estiver fora de estoque, o sistema o marca como indisponível para compra.
3. **Gerenciamento de Usuários:**
    - Ator: Administrador
    - Descrição: Permitir que os administradores gerenciem os usuários do sistema, incluindo criar novas contas, modificar informações de perfil, redefinir senhas e suspender/ativar contas.
    - Fluxo de Eventos:
        1. O administrador acessa o painel de administração do sistema.
        2. O administrador seleciona a opção de gerenciamento de usuários.
        3. O sistema exibe uma lista de usuários cadastrados.
        4. O administrador pode realizar ações como criar, editar, suspender ou ativar contas de usuário.
        5. O sistema notifica o usuário sobre qualquer alteração feita em sua conta, como uma redefinição de senha.
4. **Cadastro de Usuário:**
    - Ator: Cliente
    - Descrição: Permitir que os clientes se cadastrem no site, fornecendo nome, endereço, e-mail, cpf, senha, numero e data de nascimento.
    - Fluxo de Eventos:
    1. O cliente acessa a página de cadastro.
    2. O cliente preenche o formulário de cadastro com suas informações pessoais.
    3. O sistema valida e armazena as informações do cliente no banco de dados.
5. **Inserção de Endereço:**
    - Ator: Cliente
    - Descrição: Permitir que os usuários insiram e atualizem seus endereços de entrega durante o processo de checkout.
    - Fluxo de Eventos:
        1. Durante o processo de checkout, o usuário é solicitado a fornecer um endereço de entrega.
        2. O usuário insere os detalhes do endereço, como rua, número, complemento, cidade, estado e CEP.
        3. O sistema valida o endereço inserido para garantir sua correção e integridade.
        4. O usuário tem a opção de salvar o endereço para uso futuro.
        5. O sistema armazena o endereço fornecido junto com o pedido para fins de entrega.
6. **Login de Usuário:**
    - Ator: Cliente, Administrador
    - Descrição: Permitir que os usuários façam login em suas contas inserindo email e senha para acessar recursos exclusivos e realizar ações personalizadas.
    - Fluxo de Eventos:
        1. O usuário acessa a página de login.
        2. O usuário insere suas credenciais de login (e-mail e senha).
        3. O sistema verifica as credenciais do usuário.
        4. Se as credenciais forem válidas, o sistema redireciona o usuário para sua conta.
        5. Se as credenciais forem inválidas, o sistema exibe uma mensagem de erro e permite que o usuário tente novamente.
7. **Visualização de Informações do Usuário:**
    - Ator: Cliente
    - Descrição: Permitir que os usuários visualizem suas informações de perfil, como nome, endereço, informações de contato, histórico de pedidos, entre outros.
    - Fluxo de Eventos:
        1. O usuário acessa sua conta e navega para a seção de perfil.
        2. O sistema exibe as informações pessoais do usuário.
        3. O usuário pode visualizar e verificar as informações de seu perfil.
8. **Logout de Usuário:**
    - Ator: Cliente
    - Descrição: Fornecer uma opção para os usuários encerrarem suas sessões de forma segura.
    - Fluxo de Eventos:
        1. O usuário acessa sua conta e encontra a opção de logout.
        2. O sistema confirma se o usuário deseja realmente sair da sessão.
        3. Se confirmado, o sistema encerra a sessão do usuário e redireciona para a página inicial ou página de login.
9. **Pesquisa de Produtos:**
    - Ator: Cliente
    - Descrição: Implementar uma função de pesquisa para permitir que os clientes encontrem produtos com base em categoria, cor, tamanho e nome do produto.
    - Fluxo de Eventos:
    1. O cliente insere uma palavra-chave na barra de pesquisa.
    2. O sistema exibe uma lista de produtos correspondentes à palavra-chave.
    3. O cliente pode refinar a pesquisa usando filtros como categoria, preço, etc.
10. **Catálogo de Produtos:**
    - Ator: Cliente
    - Descrição: Exibir uma lista de produtos disponíveis para compra, com detalhes como nome, preço, disponibilidade, imagens.
    - Fluxo de Eventos:
    1. O cliente navega pelo catálogo de produtos.
    2. O sistema exibe uma lista de produtos com detalhes relevantes.
    3. O cliente pode visualizar detalhes adicionais e adicionar produtos ao carrinho.
11. **Visualização de Produto:**
    - Ator: Cliente
    - Descrição: Permitir que os usuários visualizem os detalhes de um produto no catálogo.
    - Fluxo de Eventos:
        1. O usuário navega pelo catálogo de produtos.
        2. O usuário seleciona um produto de interesse para visualização.
        3. O sistema exibe os detalhes do produto, incluindo descrição, preço, imagens e disponibilidade.
12. **Carrinho de Compras:**
    - Ator: Cliente
    - Descrição: Permitir que os clientes adicionem produtos ao carrinho, visualizem o conteúdo do carrinho, atualizem quantidades e removam itens.
    - Fluxo de Eventos:
    1. O cliente seleciona um produto e o adiciona ao carrinho.
    2. O sistema atualiza o carrinho exibindo o produto adicionado.
    3. O cliente pode atualizar as quantidades, remover itens ou continuar comprando.
13. **Realização do Pedido:**
    - Ator: Cliente
    - Descrição: Permitir que os usuários revisem os itens selecionados no carrinho, forneçam informações necessárias para a compra e concluam o pedido.
    - Fluxo de Eventos:
        1. O usuário acessa o carrinho de compras para revisar os itens selecionados.
        2. O usuário avança para o processo de checkout.
        3. O usuário fornece informações de pagamento e envio, se aplicável.
        4. O sistema confirma o pedido e processa o pagamento, se necessário.
        5. Após a conclusão bem-sucedida, o sistema exibe uma confirmação de pedido ao usuário.
14. **Adição do Frete ao Pedido:**
    - Ator: Sistema
    - Descrição: Permitir que o sistema calcule e adicione as taxas de frete ao total do pedido com base no endereço de entrega fornecido pelo usuário durante o checkout.
    - Fluxo de Eventos:
        1. Durante o processo de checkout, após o usuário inserir o endereço de entrega, o sistema determina as opções de entrega disponíveis e seus custos associados.
        2. O sistema calcula automaticamente as taxas de frete com base no método de entrega selecionado e no endereço de entrega fornecido.
        3. As taxas de frete são adicionadas ao total do pedido, exibindo o novo total ao usuário para revisão antes da conclusão da compra.
        4. O usuário pode revisar e confirmar as informações de entrega, incluindo as taxas de frete adicionadas.
15. **Processo de Pagamento:**
    - Ator: Cliente
    - Descrição: Integrar métodos de pagamento seguros para permitir que os clientes concluam as compras, incluindo gateways de pagamento.
    - Fluxo de Eventos:
    1. O cliente visualiza o carrinho e seleciona a opção de checkout.
    2. O sistema solicita informações de pagamento.
    3. O cliente fornece informações de pagamento e confirma a compra.

### Não Funcionais

1. **Desempenho:**
    - Descrição: Garantir que o site seja responsivo e rápido, mesmo durante períodos de tráfego intenso.
2. **Segurança:**
    - Descrição: Implementar medidas de segurança robustas para proteger informações sensíveis dos usuários, como dados de pagamento e informações pessoais.
3. **Escalabilidade:**
    - Descrição: Projetar o sistema de forma que possa lidar com um aumento no número de usuários e transações sem comprometer o desempenho.
4. **Usabilidade:**
    - Descrição: Criar uma interface de usuário intuitiva e fácil de usar, com navegação clara e processos de compra simplificados.
5. **Compatibilidade:**
    - Descrição: Certificar-se de que o site seja compatível com uma variedade de dispositivos e navegadores para garantir uma experiência consistente para todos os usuários.
6. **Confiabilidade:**
    - Descrição: Garantir que o sistema seja altamente disponível e confiável, minimizando o tempo de inatividade e as interrupções no serviço.
7. **Manutenibilidade:**
    - Descrição: Projetar o sistema de forma modular e bem documentada para facilitar futuras atualizações e manutenção.
8. **Legalidade e Conformidade:**
    - Descrição: Cumprir todas as regulamentações legais e de conformidade, como leis de proteção de dados e regulamentos de comércio eletrônico.

## 🚀 Tecnologias
Esse projeto será desenvolvido utilizando as seguintes tecnologias/frameworks/ferramentas:
### Desenvolvimento
- Linguagem de programação: Typescript
- Banco de dados: PostgresSQL
- Frontend: React
- BackEnd: Node
- Ferramenta de controle de versão: Git
- Hospedagem: Vercel
- Segurança:
### Testes
- Teste de interface gráfica:
- Teste de rotas/endpoint:
- Teste de unidade no código servidor:
### Integração Contínua
- Servidor: Github Actions
### Gerenciamento
- Gerência do projeto: [GitHub Project](https://github.com/users/vitori4th/projects/2)

## 👩‍💻 Equipe

- Vitória Thais da Silva: 
- André:
- Igor:
  
## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/5bJxWlv1oYM5UpZ1eQlN0G/befit?type=design&node-id=0%3A1&mode=design&t=mbUVHuutgNif81VS-1). É necessário ter conta no [Figma](https://www.figma.com/file/5bJxWlv1oYM5UpZ1eQlN0G/befit?type=design&node-id=0%3A1&mode=design&t=mbUVHuutgNif81VS-1) para acessá-lo.

---

Feito com ♥ :wave:
