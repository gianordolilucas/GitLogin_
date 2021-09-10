# Github 

### Descrição

Projeto de desenvolvimento web que utiliza tecnologias:

-React;\n
-Styled;\n
-Components;\n
-Axios;\n
-React-Router-DOM;\n
-React-Icons.\n

O objetivo do projeto é validar o login utilizando a API do Gitub

### Yarn

O programa esta com suas dependencias em um arquivo do yarn. Para instalar a dependência basta esta no diretório do arquivo e usar o comando 'yarn', caso precise de ajuda com instalação [clique aqui](https://classic.yarnpkg.com/en/docs/install#windows-stable)

### Estrutura

O projeto esta orientado a componentes, para cada componente que julguei necessário criei uma nova pasta em 'components' e dentro dela cada componente tem seu:
-> index.jsx (Onde fica a estrutura react que será passada para quem o invocar);
-> styles.js (Onde fica a definição e a estilização em css de cada Tag React);


Consulta:
Foi criado com o Axios uma baseURL, que esta em 'services/client', para não precisarmos digitar em cada requisição o endereço do servidor, informando apenas a rota e seus parâmetros. A consulta é feita em dois momentos:
-> Usuario principal: No header, ao buscar por um usuário;
-> Detalhes de usuário: Ao selecionar um usuário da lista de followers ou following;


Contexto:
O nosso contexto fica na Pasta 'context', e é nele que se guarda todas as informações que a aplicação usa da API do gitOAuth, quando se precisa de qualquer informação que esta salva basta dar um import dentro do componente


Rotas:
-> '/' : Home que irá exibir os detalhes do usuário buscado na Api e o campo para buscar um novo user;\n
-> '/repos' : Lista dos repositórios do usuário;\n
-> '/starred' : Lista dos Favoritos do usuáio;\n
-> '/followers' : Lista de outros usuários que seguem o usuário buscado;\n
-> '/following' : Lista de outros usuários que o o usuário buscado segue;\n
-> '/UserDetails' : Quando selecionar um outro usuário dentro das listas de 'followers' ou 'following'  será exibido informações básicas daquele usuário, caso queira torna-lo o principal da aplicação basta clicar em 'salvar' que esta no lado superior direito


