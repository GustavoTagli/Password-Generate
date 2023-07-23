# Gerador de Senhas

Este é um aplicativo web simples que gera senhas aleatórias com base nas opções selecionadas pelo usuário. O aplicativo foi construído utilizando **JavaScript**, **HTML** e **Sass**. Ele permite ao usuário personalizar o tamanho da senha e escolher quais tipos de caracteres serão incluídos.

## Como Usar

1. Abra a página da web "Gerador de Senhas" em seu navegador.

2. O tamanho padrão da senha é definido como 15 caracteres. Você pode ajustar o tamanho utilizando o controle deslizante ao lado de **Length**. Mova o controle deslizante para definir o tamanho desejado da senha.

3. Selecione os tipos de caracteres que deseja incluir na senha gerada:

   - **Maiúsculas**: Incluir letras maiúsculas (A-Z).
   - **Minúsculas**: Incluir letras minúsculas (a-z).
   - **Números**: Incluir números (0-9).
   - **Símbolos**: Incluir símbolos como !, @, #, $, %, etc.

4. À medida que você seleciona ou desmarca os tipos de caracteres ou altera o tamanho, a senha será atualizada automaticamente para corresponder às opções selecionadas.

5. Uma vez que esteja satisfeito com a senha gerada, clique no ícone de área de transferência ao lado do campo de entrada da senha. Isso copiará a senha gerada para a área de transferência do seu computador.

**Observação:** Se nenhum tipo de caractere for selecionado, o campo de senha exibirá "_--Selecione pelo menos uma opção--_" para indicar que pelo menos uma opção deve ser escolhida para a geração da senha.

## Tecnologias Utilizadas

- **JavaScript** (JS): Responsável pela geração da senha e interações do usuário.
- **HTML**: Fornece a estrutura da página da web e a interface do usuário.
- **Sass** (SCSS): Utilizado para estilizar a página da web com variáveis para as cores primária e secundária.

## Como Funciona

A geração da senha é baseada nos tipos de caracteres selecionados pelo usuário. Os tipos de caracteres disponíveis são:

- **Letras maiúsculas** (A-Z)
- **Letras minúsculas** (a-z)
- **Números** (0-9)
- **Símbolos** (por exemplo, !, @, #, $, %, etc.)

Quando o usuário seleciona um ou mais tipos de caracteres e ajusta o tamanho da senha, o código **JavaScript** gera uma senha aleatória usando os tipos de caracteres selecionados.

## Contribuindo

Se você encontrar algum problema ou tiver ideias para melhorar este gerador de senhas, sinta-se à vontade para contribuir! Você pode relatar problemas, sugerir melhorias ou enviar solicitações de pull para o repositório no GitHub.
