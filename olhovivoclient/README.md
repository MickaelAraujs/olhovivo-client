<p align="center">
    <img src="./src/assets/logo.svg">
</p>

<p align="center">
    <img src="./src/assets/waiting.svg">
</p>

# Olho Vivo - Dashboard

Link para o vídeo no youtube: https://youtu.be/te4Zbel8uCQ

Conteúdos
=================
<!--ts-->
   <p align="center">
        <a href="#sobre">Sobre o projeto</a> •
        <a href="#funcionalidades">Funcionalidades</a> •
        <a href="#tecnologias">Tecnologias</a> •
        <a href="#executar">Como executar</a> •
        <a href="#componentes">Componentes</a> •
        <a href="#autor">Autor</a>
    </p>
<!--te-->

<h1 id="sobre">Sobre o projeto</h1>

 Aplicação dashboard para exibir dados do transporte público de São Paulo, consumindo a <a href="http://www.sptrans.com.br/desenvolvedores/api-do-olho-vivo-guia-de-referencia/documentacao-api/">API olho vivo</a> que provê informações em tempo real do monitoramento da frota de ônibus da cidade de São Paulo.

<h1 id="funcionalidades">Funcionalidades</h1>

1) <strong>Posições dos veículos:</strong> Mostra no mapa onde os veículos estavam na sua última atualização.

2) <strong>Linhas:</strong> Mostra informações sobre as linhas de ônibus.

3) <strong>Paradas:</strong> Mostra os pontos de parada da cidade no mapa.

4) <strong>Corredores:</strong> Mostra os corredores disponíveis e as paradas que estão associadas a ele.

5) <strong>Previsão de chegada:</strong> A partir de uma parada, é possível saber a previsão de chegada dos veículos associados a ela.

6) <strong>Pesquisa e Filtros:</strong> O usuário pode interagir com a interface filtrando esses dados.

7) <strong>Acessibilidade</strong> A partir da posição de um veículo no mapa, é possível saber se ele é acessível a pessoas com deficiência.

8) <strong>Responsividade</strong> A aplicação é adaptável para dispositivos móveis.

<h1 id="tecnologias">Tecnologias e ferramentas</h1>

 * <a href="https://reactjs.org/">ReactJS</a>
 * <a href="https://react-leaflet.js.org/">React-Leaflet</a>
 * <a href="https://www.typescriptlang.org/">Typescript</a>
 * <a href="https://github.com/axios/axios">Axios</a>

<h1 id="executar">Como executar</h1>

 O primeiro passo para executar o projeto na sua máquina é clonar esse repositório:

 `git clone https://github.com/MickaelAraujs/programa-estagio.git`

 entrando no diretório que acabamos de clonar:

 `cd programa-estagio`

 agora vamos mudar para a branch onde o projeto foi construído:

 `git checkout teste/front-end/MickaelAraujo`

 entrando no diretório do projeto:

 `cd olhovivoclient`

 instalando as dependências necessárias:

 `yarn`

 agora só precisamos executar o projeto:

 `yarn start`

 a aplicação funciona em `http://localhost:3000/`.

<h1 id="componentes">Componentes</h1>

 Aqui estão listados alguns dos componentes utilizados no projeto que são importantes para implementação dos requisitos.

## ArrivesInfoCard

Exibe a previsão de chegada de um veículo em formato de card. Além de outras informações relevantes.

### propriedades:

`
routeData: {
        lt0: string,
        lt1: string,
        routeDirection: number,
};
`

* <strong>lt0</strong>: Terminal principal.
* <strong>lt1</strong>: Terminal secundário.
* <strong>routeDirection</strong>: Sentido da linha (1 se for do terminal principal para o terminal secundário e 2 se for do terminal secundário para o terminal principal).

`
vehicleData: {
        letters: string,
        accessible: boolean,
        arrivePreview: string
};
`

* <strong>letters</strong>: Prefixo do veículo.
* <strong>accessible</strong>: Se o veículo é acessível para pessoas com deficiência.
* arrivePreview: Horário de previsão de chegada do veículo.

<hr>

## MapView

Container para o mapa que está sendo utilizado em diferentes páginas da aplicação.

### propriedades:

`
stops: [ {
        ed: string,
        np: string,
        px: number,
        py: number
} ];
`

* <strong>ed</strong>: Endereço do ponto de parada.
* <strong>np</strong>: Nome do ponto de parada.
* <strong>py</strong>: Latitude.
* <strong>px</strong>: Longitude.

`locations: [{ latitude: number, longitude: number, accessible: boolean, lt0: string, lt1: string }];`

* <strong>latitude</strong>: Latitude.
* <strong>longitude</strong>: Longitude.
* <strong>accessible</strong>: Se o veículo é acessível para pessoas com deficiência.
* <strong>lt0</strong>: Terminal principal.
* <strong>lt1</strong>: Terminal secundário.

`zoom: number`

* <strong>zoom</strong>: tamanho do zoom no mapa.

<hr>

## RoutesInfoCard

Exibe informações sobre as linhas de ônibus em formato de card.

### propriedades:

`
cardData: {
        cl: number,
        lc: boolean,
        lt: string,
        sl: number,
        tl: number,
        tp: string,
        ts: string
};
`

* <strong>cl</strong>: Código da linha.
* <strong>lc</strong>: Se a linha opera em modo circular.
* <strong>lt</strong>: Letreiro da linha.
* <strong>sl</strong>: Sentido da linha (1 se for do terminal principal para o terminal secundário e 2 se for do terminal secundário para o terminal principal).
* <strong>tp</strong>: Terminal principal.
* <strong>ts</strong>: Terminal secundário.

<hr>

## SearchInput

Formulário com um input e um botão de submit para realizar buscas, replicado em várias páginas da aplicação.

### propriedades:

`label: string`

* <strong>label</strong>: texto da label do input.

`name: string`

* <strong>name</strong>: Nome do input.

`placeholder: string`

* <strong>placeholder</strong>: texto do placeholder.

`buttonText: string`

* <strong>placeholder</strong>: texto do botão, útil para exibir mensagem de 'carregando ...'.

`searchSubmit: () => void`

* <strong>searchSubmit</strong>: Função para ser executada quando for realizado o submit do formulário.

<strong>Obs** O componente SearchInput herda todas as propriedades de um input comum, então ele também pode receber `value`, `onChange`, etc.
</strong>

<hr>

<h1 id="autor">Autor</h1>

<p align="center">
    <img src="https://avatars0.githubusercontent.com/u/52335741?s=460&u=84d21ad5ad353f2d1abe7f3c06b664098b36d81e&v=4" width="100">
</p>

<h2 align="center">Mickael Araujo</h2>

<p align="center">
    <strong>Github</strong>: <a href="https://github.com/MickaelAraujs">MickaelAraujs</a>
</p>

<p align="center">
    <strong>Linkedin</strong>: <a href="https://www.linkedin.com/in/mickaelaraujs/">mickaelaraujs</a>
</p>


