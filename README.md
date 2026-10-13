# Rotina Acadêmica

Aplicativo de estudo em **React Native, Expo SDK 57, Expo Router e TypeScript**. A disciplina começou em **25 de setembro** e termina no dia **15 de outubro**. Os commits deste repositório devem ser organizados por etapa, sem adicionar coautor.

## Modelo mental

O paradigma principal é **declarativo e baseado em componentes**: cada função de tela ou componente retorna a interface que deve aparecer. As `props` passam dados dos pais para os filhos. Quando houver estado, sua alteração fará o React renderizar novamente a parte afetada. O projeto ainda é uma interface inicial: os números da página principal são fixos, e não há camada de dados, persistência ou API.

React define como compor e atualizar a interface; React Native fornece componentes como `View`, `Text` e `TouchableOpacity` para Android/iOS; Expo organiza as ferramentas, bibliotecas e configuração desse app React Native. O Metro empacota o código para execução, e o Expo Router transforma arquivos de `src/app` em rotas. O SDK 57 deste projeto usa React Native 0.86 e React 19.2.3. As configurações nativas declarativas ficam em `app.json`; se projetos nativos forem necessários, o Expo os gera.

## Fluxo do código

1. `package.json` define `expo-router/entry` como entrada.
2. `src/app/_layout.tsx` carrega as fontes Manrope, mostra `Loading` enquanto elas não estão prontas e define um navegador `Stack` sem cabeçalho.
3. `src/app/index.tsx` redireciona para o grupo `(tabs)`.
4. `src/app/(tabs)/_layout.tsx` define as abas Início, Disciplinas, Atividade e Perfil.
5. `src/app/(tabs)/index.tsx` monta a tela inicial com cartões `SumaryCard`. `discipline.tsx` contém um botão em elaboração; `activity.tsx` e `profile.tsx` ainda são telas vazias. `two-screen.tsx` é uma tela simples de demonstração fora das abas.

`(tabs)` é um **grupo de rotas**: organiza telas e aplica o layout de abas sem acrescentar `(tabs)` ao caminho visível. `index.tsx` é a rota padrão de sua pasta; `_layout.tsx` organiza a navegação das rotas filhas.

## Por que os diretórios estão separados

| Local | Responsabilidade |
| --- | --- |
| `src/app/` | Telas e layouts de navegação, conforme a convenção do Expo Router. |
| `src/components/` | Peças reutilizáveis: `Button`, `Loading` e `SumaryCard`; cada uma mantém seus estilos próximos do componente. |
| `src/screens/` | Estilo da tela inicial (`index-style.ts`); não é uma rota. |
| `src/Styles/` | Valores compartilhados de cor, tipografia e tamanho; `@/` aponta para `src/` no `tsconfig.json`. |
| `assets/images/` | Ícones e imagem da tela de abertura configurados em `app.json`. |

Essa divisão separa navegação, composição visual e valores de aparência. Ainda não há diretórios de serviços ou modelos porque o app não implementa lógica de dados.

## Ambiente

Use Node **24.21.0** (`nvm use`, com `.nvmrc`) e npm, pois o repositório contém `package-lock.json`. Em uma máquina nova:

```bash
nvm use
npm ci
npx expo start
```

Abra o QR code no Expo Go para experimentar no celular. Para checar tipos, rode `npx tsc --noEmit`. Para lint, a configuração ESLint ainda precisa ser instalada; `npx expo lint` detecta essa ausência. Instale novas bibliotecas compatíveis com o SDK usando `npx expo install <pacote>`.

## Estado observado

- A tela inicial usa dados fixos, inclusive os totais `2` nos cartões.
- O botão de Disciplinas ainda tem `onPress={}` incompleto. Isso causa um erro de sintaxe no TypeScript e impede a validação do código até a ação ser implementada ou a propriedade removida.
- O repositório ainda não tem commits. Há alterações locais já preparadas pelo autor; preserve esse trabalho ao organizar os commits.

## Referências

- [Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/)
- [Conceitos do Expo](https://docs.expo.dev/core-concepts/)
- [Introdução ao Expo Router](https://docs.expo.dev/router/introduction/)
- [Convenções de rotas](https://docs.expo.dev/router/basics/notation/)
- [Configuração do ambiente](https://docs.expo.dev/get-started/set-up-your-environment/)
