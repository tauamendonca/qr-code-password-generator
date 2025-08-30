<!--START_SECTION:header-->
<div align="center">
  <p align="center">
    <img 
      alt="DIO Education" 
      src="https://raw.githubusercontent.com/digitalinnovationone/template-github-trilha/main/.github/assets/logo.webp" 
      width="100px" 
    />
    <h1>DIO NodeJS - Utilidades para E-Commerce</h1>
    <h3>Gerador de QRcode e Passwords, cálculo de taxas e conversor de moedas 
  </p>
</div>
<!--END_SECTION:header-->

<!--  -->
<table align="center">
<thead>
  <tr>
    <td>
        <p align="center"> <h4> Professor: Felipe Silva Aguiar</h4></p>
    </td>
      </tr>
       <tr>
    <td>
Conheça o <a href = "https://github.com/digitalinnovationone/formacao-nodejs/tree/main/projeto-qrcode">projeto original</a>, o código que apresento aqui é uma resposta ao projeto proposto pela DIO no bootcamp MeuTudo Mobile Developer<br>
 </td>
      </tr>
</thead>
</table>
<!--  -->


## 💻 Sobre o Projeto

O objetivo desse projeto é construir um kit de utilidades para um e-commerce, de maneira escalável para ter adição de novas features.
O projeto consiste em um gerador de QR code e um gerador de passwords. 
O gerador de QR code pode gerar 2 tipos de código, um para ser copiado como imagem e um estilo terminal. 
Já o gerador de senhas recebe seus parâmetros para gerar a senha a partir de um arquivo de variáveis ambiente, podendo gerar senhas com diferentes possibilidades.

## 📚 Pré-requisitos de Habilidades e Níveis de Conhecimento

Para compreender esse projeto foram necessárias as seguintes habilidades:

- Lógica de programação
- Javascript | Básico
- NodeJS | Básico
- Node Modules
- NPM, Packages, Dependencies
- Variáveis ambiente (.env)

## 🎯 Objetivos e Resultados Esperados

Após a conclusão do curso/projeto, os estudantes estarão aptos a:

- Como gerar qrcode com NodeJS
- Como lidar com várias dependências de um projeto
- Como pensar em projetos por camadas
- Criar projetos NodeJS que gerem multiplas dependências

<!--START_SECTION:footer-->

## 🏆 Desafios propostos realizados

Foram realizadas a seguinte modificação no código, recomendada pelo professor Felipe da DIO: 
- Adicionar uma calculadora de taxas - onde o usuário irá selecionar um país, inserir o valor de um produto e receber como retorno o valor do produto adicionado das tarifas/taxas correspondentes àquele país.

Além disso, inclui mais três funcionalidades, visto que o foco é e-commerce:
- Conversor de moedas - recebendo valores de uma tabela de valores no arquivo de variáveis ambiente (simulando receber de uma API), e fazendo a conversão a partir da primeira escolha de moeda do usuário e da inserção do valor a ser convertido em comparação com a segunda escolha de moeda. Os valores de conversão foram atualizados pela última vez em 30/08/2025 (são valores reais).

- Calculadora de juros compostos - uma calculadora de juros que recebe um valor inicial (valor do produto ou investimento), uma taxa de juros anual (em percentual), um período de tempo (em anos ou meses) e a frequência de capitalização (anual, semestral, trimestral, mensal ou diária). Essa calculadora serviria tanto para calcular preços de produtos a prazo com juros compostos quanto para empréstimos/financiamentos.

- Calculadora de taxas - simula a taxação por país, através de valores vindos da variável ambiente e recebendo do usuário o valor do produto que ele deseja calcular e o país para onde irá exportar.