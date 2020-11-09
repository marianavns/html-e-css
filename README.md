# HTML E CSS

## Sumário

- [HTML](#HTML)

  - [O que é HTML](#O-que-é-HTML)
    - [O Elemento](#O-Elemento)
      - [Criando um elemento](#Criando-um-elemento)

  - [Estrutura básica de um documento HTML](#Estrutura-básica-de-um-documento-HTML)
  - [Elementos do HTML](#Elementos-do-HTML)
    - [Elementos Especiais Listas](#Elementos-Especiais-Listas)
  - [Estrutura básica de um documento HTML enriquecida](#Estrutura-básica-de-um-documento-HTML-enriquecida)
  - [Atributos do HTML](#Atributos-do-HTML) 
    - [Atributos importante do HTML](#Atributos-importante-do-HTML)
  - [A Caixa de cada elemento HTML Box Model](#A-Caixa-de-cada-elemento-HTML-Box-Model)







## HTML

### O que é HTML

Um texto, na internet ou fora dela, pode ter títulos, subtítulos, parágrafos, listas, certo?

A linguagem HTML permite que todos estes elementos (e muitos outros) sejam estruturados numa página. Não só os títulos e parágrafos, por exemplo, mas também cabeçalhos, rodapés, imagens, vídeos, tabelas e mais.

#### O Elemento

O **elemento** é a base do HTML. Um parágrafo no texto, uma lista ou um título são exemplos de elementos.

<img src=".\images\1-exemplo-de-pagina.png" alt="Exemplo de elementos" width=800 height=520>



##### Criando um elemento

Para criar um elemento, é necessário escrever a **tag de abertura**, o **conteúdo** e a **tag de fechamento**, como estão nas linhas 1, 2 e 3, respectivamente:

```html
<h1 class= "titulo">
    Megan Thee Stalion
</h1>
```

Este `class="titulo"` é chamado de **atributo**, dentro da tag de abertura. Em breve teremos mais detalhes sobre atributos.

### Estrutura básica de um documento HTML

Organizar todos os elementos que compõem uma página não é uma missão fácil. Pensando nisso, é convenção da linguagem deixar cada coisa em seu lugar.

No ***head*** ficam as coisas que não vemos necessariamente na página, como a palavra que aparece na aba do navegador e as configurações de caracteres (*meta charset='utf-8'* na linha 4 abaixo ajuda nossa página a exibir as palavras certinhas, com todos os acentos e ~). 

No ***body*** teremos aquilo que o usuário vê, como as imagens, textos, tabelas e cores.

```html
<!DOCTYPE html>
<html>
    <head> 
        <meta charset='utf-8'>
        <title>"Aba do meu site"</title>
    </head>
    <body>
    </body>
</html>
```



### Elementos do HTML

Lembra que, para começar um elemento, precisamos da tag de abertura? Então: é a tag de abertura que carrega o que cada elemento faz. Cada vez que você achar algum destes nomes na tag, já vai saber a finalidade dele:

1. `header`: É o cabeçalho uma página ou de parte de uma página;
2. `h1` - `h6`: São os títulos dos textos da página. Só pode haver um `h1`por página;
3. `p`: É o parágrafo, conteúdo do artigo. Suporta imagem, código, vídeo e vários tipos de conteúdo;
4. `article`: É um conteúdo de destaque dentro do texto;
5. `aside`: Conteúdo relacionado ao conteúdo principal;
6. `section`: Seção genérica como uma lista de arquivos;
7. `footer`: Rodapé da página ou de parte da página;
8. `a`: É uma âncora, interligando vários atributos. Geralmente usada para criar um link clicável, unindo um texto a uma página web externa, como aqueles <a href=https://github.com/marianavns>CLIQUE AQUI</a> que vemos em alguns sites;
9. `img`: Permite adicionar a imagem. Importante: Só tem 2 atributos próprios, o src e o alt. Mas...  o que é atributo? Sem tag de fechamento.

10. `ul` (*unordered list*): a ordem dos itens não é importante. Tudo o que você terá é uma lista sem números.

11. `ol` (*ordered list*): a ordem dos itens é importante sim e eles vâo aparecer antes de cada item.

12. `li` (*list icon*) : Feche cada item da sua lista com esta tag.

    


    ✏️ **Exemplo de** ***lista não ordenada*** **e como ela fica**:

    ```html
    <ul>
        <li>Joe Biden</li>
        <li>Barack Obama</li>
        <li>Donald Trump</li>
    </ul>
    ```

    <ul>
        <li>Joe Biden</li>
        <li>Barack Obama</li>
        <li>Donald Trump</li>
    </ul>


    ✏️**Exemplo de** ***lista ordenada*** **e como ela fica**

    ```html
    <ol>
        <li>Joe Biden</li>
        <li>Barack Obama</li>
        <li>Donald Trump</li>
    </ol>
    ```

        <ol>
            <li>Barack Obama</li>
            <li>Donald Trump</li>
            <li>Joe Biden</li>
        </ol>

    

### Estrutura básica de um documento HTML enriquecida

Aqui foram acrescentados no body alguns dos elementos vistos no tópico anterior.

```html
<!DOCTYPE html>
<html>
    <head> 
        <meta charset='utf-8'>
        <title>"Aba do meu site"</title>
    </head>
    <body>
        <header>
        </header>
        <article>
            <p>
            </p>
            <p>
                <img>
                <ol> </ol>
            </p>
        </article>
        <footer></footer>
    </body>
</html>
```



### Atributos do HTML

Atributo é uma característica de um elemento. 

✏️ **Exemplo de atributos em imagem e como ela fica:**

```html
<img src="https://www.feriasbrasil.com.br/fotosfb/294309783-MOB.jpg" alt="Pôr-do-sol no Alto da Sé, Olinda, Brasil">
```

e é este o resultado:

<img src="https://www.feriasbrasil.com.br/fotosfb/294309783-MOB.jpg" alt="Pôr-do-sol entre prédios na cidade do Recife">

Neste caso, o **elemento `img` tem duas características, ou atributos**: 

- `src`, que mostra em que lugar está hospedada a imagem e 

- `alt`, que descreve a cena que está na imagem.

#### Atributos importante do HTML

Alguns atributos são usados com bastante frequência e precisam ser lembrados aqui:

- `target`: Atributo da âncora. Ao criar um link no seu texto com o elemento `a` (âncora), o target vem logo em seguida e aponta se o link será aberto numa nova aba ou na mesma aba, por exemplo.
- `width`: Atributo que especifica a largura da imagem.
- `height`: Atributo que especifica a altura da imagem.

### A Caixa de cada elemento HTML Box Model

Os elementos podem ter várias "bordas" dentro de uma página html. Não são todos bordas, mas vamos imaginar assim por enquanto. 

São *padding*, *border* e *margin*. 

<img src="./images/2-box-model.png" width=500>

### Classes dos Elementos



## CSS

Você cria regras de estilo para grupos. Aqui acima estamos editando pelo ID de tipo HTML, que são âncora, parágrafo e título.

```css
a, p, h1 {
   color: blue
   font-size: 14px
}
```

Mas nem sempre queremos deixar todos os parágrafos da mesma cor, ou âncoras do mesmo tamanho. É necessário fazer uma diferenciação. Aí que entram os ID's de classe. HTML também tem ID de classe, ok?



Em CSS, a gente declara classe com um ponto e id por um hash. Um id só pode ser usado uma vez na página.

### Seletores

#### Colorindo o box model









