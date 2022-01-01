### Front-end Technologies

- HTML
- CSS
- JavaScript
- Bootstrap framework
- Angular Framework
- ReactJS

### Backend Technologies

- Node.js
    - express.js
    - nodemoon
    - cors
    - dotenv
- PHP
- C#
- Java
- Python

### Databases

- MongoDB
- Mysql
- SQLite
- Firebase
- Postgressql
- Oracle

+ VCS or (Source Code Management)
    - Distributed VCS
        - Git,Mercurial
    - Remote(central) VCS
        - Github,Bitbucket
###  Git
- git init
- git add filename
- git add filename1 filename5 filename100
- git add . or git add --all
- git status
- Do git configurations(set user.name and user.email)
- commit data with commit message
- Push the code into Github

### HTML5
- Hyper Text Markup Language
- Semantic elements
    - header
    - section
    - article
    - aside
    - footer
    - table

- Block level elements
    - h1 to h6
    - p
    - div
    - allsemantic elements
    - text with start from newline

- Inline elements
    - span
    - img
    - a
    - nav
    - form
    - input
    - textarea
    - legend
    - sup
    - sub
    - ul
    - ol

### Task:
==========
- Audio
- video
- canvas
- progress
- datalist
- meter
- select

### CSS
+ Cascading Style Sheets
+ Types of CSS
    - Inline CSS
    - Internal CSS
    - External CSS
+ Syntax of CSS
```
selector {
      css properties
}

```

#### Selectors
+ Simple Selectors
  - Universal selector(*)
  - By Element Name
  - Grouping selector(,)
  - Class selector
  - Id selector

+ Combinators
  + Descendant selectors ( )
  + Child selector (>)
  + Adjacent sibling selector (+)
  + General sibling selector (~)
+ Pseudo class selector
+ Pseudo element selector
+ Attribute selector

### Box Modal

+ Margin
+ Border
+ Padding
  - padding:10px( for all adjacent sides)
  - padding:10px 30px(top and bottom,left and right)
  - padding:10px 300px 50px(top,left and right,bottom)
  - padding:10px 20px 30px 40px(top,right,bottom,left)
+ Width
- 1rem:16px

#### Flex-Box
+ display
   - none
   - inline
   - block
   - inline-block
+ position
    - static
    - relative
    - absolute
    - fixed
    - sticky
+ align-content
+ align-items
+ align-self

### ANIMATIONS
### Responsive Web Design
#### Flex-Box
- display
  - flex
    - flex-wrap
    - justify-content
    - flex-direction
    - flex-flow
+ Task 2:
  - Index page
  - registration page
  - Login page

### Media Queries

- Extra small devices(Mobiles)
    - max-width:600px
- Small devices(Large phones/small tablets)
    - min-width:600px
    - max-width:768px
- Medium Devices(small laptops)
    - min-width:768px
- Large devices(Large laptops or desktops)
    - min-width:992px
- Extra Large devices()
    - min-width:1200px


```
@media only screen(min-width:320px) and (max-width:500px){
  css code
}
```
### Bootstrap4.6

- It is a CSS framework.

Task3:
=============
   - Navbar with Responsive

- Module(Collection of functions and classes or any code)
- Package (Collection of modules)
- Library(Collection of Packages)
- Framework(Collection of libraries)

+ Module --> Package -->Library --> Framework

+ Types of Modes
  - offline
  - online
     - CDN links

+ background-color - bg
+ text-white
+ Margin in Bootstrap(m-*(0-5))
    - 0 --> 0rem
    - 1 --> 0.25rem(4px)
    - 2 --> 0.5rem(8px)
    - 3 --> 1rem(16px)
    - 4 --> 1.5rem(24px)
    - 5 --> 3 rem(48px)
    - ml-5(margin-left)
    - m(margin in all directions)
    - mt(margin-top)
    - mb(margin-bottom)
    - mr(margin-right)

+ Padding(padding-left --> pl-5)

+ Colors
  - primary
  - secondary
  - info
  - success
  - warning
  - danger
  - light
  - dark
  - white

+ We can use color classes for
  - Buttons(btn btn-primary)
  - text(text-white)
  - background(background-secondary)
  - alerts(alert alert-primary)

+ Grid system
   - col-sm-12
   - sm(small devices)
   - md(medium devices)
   - lg(large devices)
   - xl(extra large devices)
  
+ Modal
+ Table

#### JavaScript
+ In 1995 `Brenden Eich` introduced Javascript(ES-262)
+ It is loosely-touple and dynamic language
+ It is text based programming language and we can run in client-side 
  and server-side for dynamic web applications
- ECMA-Script(european computer manufacture association)(ES-6)
   - let & const
   - map()
   - arrow function
   - classes
   - spread operator
   - rest parameter
+ Datatypes
   - Number
   - BigInt(2^53-1)
   - String
   - boolean
   - undefine
   - Null
   - Object
   - Array
+ Variables
  - var,let & const
  - Scope
     - function level-->var
     - block level-->let & const
  - Redeclare-->var
  - Redefine-->var,let

+ `typeof()`
+ Object
        ```
        {
            name:"hasitha"
        }
        ```
#### Alerts
+ To generate notifications
   - alert
   - prompt(to take input from the user)
   - confirm    

+ console statements
  - `console.log()`
  - `console.info()`
  - `console.warn()`
  - `console.error()`    

+ Spread operator
  - to change array elements from one array to another(swamp)
 ```
  ...variableName
```
+ Rest parameter
  + to handle function parameters
```
 ...parameter
```

+ Destructuring of Array and Objects
+ Functions
 - function with function name
 ```
 function demo(){
   return x+y
 } 
 demo()
 ```
 - Anonymous function
 ```
 let demo=function(x,y)
 {
   return x+y
 }
 ```
 - Arrow function
 ``` 
 let demo=(x,y)=>{
   return x*y
 }
 ```

 + for in
  - to get index-values of an array
+ for-of
  - to get elements in an arry
+ forEach() --> (ES-5)
+ map()-->(ES-6)

### DOM
  - Document Object Model
  - Document
  - History
  - window
  - Navigator(PWA-progressive web application)

+ DOM methods
 - `getElementById()`
 - `getElementsByClassNme()`
 - `querySelector()`
 - `innerText`
 - `textContent`
 - `append`
 - `appendChild`
 - `innerHTML`
 - `setAttribute()`
 - `classList`
 - `style`
 - `src`

#### JSON
+ Java Script Object Notation
   - To exchange info between application and server
```
{
  "name":"NERELLA CHANDRA HASITHA",
  "age":18,
  "designation":"MERN Developer",
  "mobile":937720286
}
```

+ Ajax call or Promises(fetch API) or axios

#### ReactJS Features
 + It is a library,
 + It follows componeny based architecture
    - Function component
    - Class component
    - Pure component
    - Higher Order Component
 + It provides Virtual DOM
 + It provides JSX(Javascript and XML)
 + Unidirectional data flow
 + Single page applications

 + Props
   - To pass data from one component to another component we will use props
   - Props are immutable
 + UnionBank(functional)
  - Andhrabank(functional)
  - Corporationbank(class)


 + States
  
    - In react to maintain information we will use states
    - We can maintain states in class component only (before react16.8 version)
    - To take state in react,try to create constructor above render method and 
    inside of class Component
    - use `rconst` snippet
    ```
    constructor(){
      super();
      this.state={

      }
    }
    ```
    - To update the state information in class component use
    `setState()` method
  + To update the information inclass class component we have to follow 
  component life cycle methods
    - `componentWillReceiveProps()`
    - `componentWillMount()`
    - `componentDidMount()`
    - `shouldComponentUpdate()`
    - `componentWillUpdate()`
    - `componentWillUnmount()`
    - `componentDidUpdate()`
  ##### Hooks

  + from react 16.8 version Hooks are introduced
  - Parent - Child1 --> child2 --> child3
  - `useState()`
  - `useEffect()`
  - `useMemo()`
  - `useRef()`
  - `useContext()`

  #### List Rendering

  ### Event Handling & Form Handling
  
  - `onChange`
  - `onSubmit`
  - `preventDefault()`

  #### Routing in React
  + To navigate (*route) from one component to another
     - install react-router-dom package by using `npm install react-router-dom`
     - `BrowserRoyter`
     - `Routes`
     - `Route`
     - `element`
     - `path`

 + Project Environmental setup
    - [Downloadvisualstudiocode](https://code.visualstudio.com/docs/?dv=win64user)
    - [Download Nodejs](https://nodejs.org/en/download/)
    - install nodejs and check versions of `node` and `npm`
      - `node-v`
      - `npm-v`
      - `webpack` and `babel`
      - `create-react-app`
        - `npm install create-react-app`
          - `create-react-app projectname`
      - `npx(node package runner) create-react-app appname`
+ Index.html
+ index.js
+ App.js
  + Index page
     - nav.js
     - body.js
     - footer.js
  + Home.js
     - nav
     - body
     - footer
  + Login.js
  + Register
  + About
  + Contact   
### Reference links
- [GITHUBLOGIN](https://github.com/Hasitha17-git/SVEC)
- [flaticon](https://www.flaticon.com/)
- [SVG](https://freesvg.org/)
- [HTMLcolorcodes](https://htmlcolorcodes.com/)
- [WebAIM Contrast checker](https://webaim.org/resources/contrastchecker/)
- [Bootstrapv4.6](https://getbootstrap.com/docs/4.6/getting-started/introduction/?)
- [JSON Vlidator](https://jsonlint.com/)