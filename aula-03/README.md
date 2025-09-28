# 💬 - Aula 03

## 🎯 - Objetivos

## 🏗️ - Integração HTML e CSS

> Existem três formas de integrar o CSS com HTML, usando CSS externo, CSS interno ou CSS inline.

### 1) CSS Externo

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;É o método mais indicado, pois mantém o código organizado e facilita a reutilização de estilos.
    - Crie um arquivo CSS separado, por exemplo `estilo.css`
    - No arquivo HTML, a tag `<link>` dentro do `<head>` para conectar o CSS externo

#### Exemplo prático

`index.html`

```htmml
<!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemplo de CSS Externo</title>
    <link rel="stylesheet" href="estilos.css">
  </head>
  <body>
    <h1>Olá, Mundo!</h1>
  </body>
</html>
```

`estilo.css`

```css
h1 {
  color: blue;
  font-family: Arial, sans-serif;
}
```

### 2) CSS Interno

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O CSS é escrito diretamente dentro do arquivo HTML, dentro de uma tag `<style>` no `<head>`.

#### Exemplo prático

`index.html`

```htmml
<!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exemplo de CSS Interno</title>
      <style>
        h1 {
          color: green;
          font-family: Verdana, sans-serif;
        }
      </style>
    </head>
    <body>
      <h1>Olá, Mundo!</h1>
    </body>
</html>
```

### 3) CSS Inline

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Os estilos são aplicados diretamente no elemento HTML usando o atributo `style`. Este método é menos recomendado pois dificulta qualquer manutenção no código.

#### Exemplo prático

`index.html`

```htmml
<!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Exemplo de CSS Inline</title>
    </head>
    <body>
      <h1 style="color: red; font-family: 'Courier New', monospace;">Olá, Mundo!</h1>
    </body>
</html>
```

## 🗂️ - Explorando DevTools no desenvolvimento

## 📦 - Implementando reset CSS