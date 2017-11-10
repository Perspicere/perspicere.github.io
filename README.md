本项目用于存放“视角”杂志内容。“视角”主站通过github API抓取本项目内容进行渲染。

### 文档结构

```shell
.
├── /1/                         # Shared or generic UI components
│   ├── /meta.json                # Button component
│   ├── /cover.jpg 
│   | 
│   ├── /心智/                # Website layout component
|   |   ├── /1/
|   |   |   ├── /article.md
|   |   |   ├── /1.jpg
|   |   |   ├── /2.jpg
|   |   |   └── /... 
|   |   |  
|   |   ├── /2/
|   |   |    ├── /article.md
|   |   |    ├── /1.jpg
|   |   |    ├── /2.jpg
|   |   |    └── /... 
|   |   |
|   |   └── /...
|   |
│   ├── /此岸/                # Website layout component
|   |   ├── /1/
|   |   |   ├── /article.md
|   |   |   ├── /1.jpg
|   |   |   ├── /2.jpg
|   |   |   └── /... 
|   |   |  
|   |   ├── /2/
|   |   |    ├── /article.md
|   |   |    ├── /1.jpg
|   |   |    ├── /2.jpg
|   |   |    └── /... 
|   |   |
|   |   └── /...
|   |
│   └── /梦境/                # Website layout component
|       ├── /1/
|       |   ├── /article.md
|       |   ├── /1.jpg
|       |   ├── /2.jpg
|       |   └── /... 
|       |  
|       ├── /2/
|       |    ├── /article.md
|       |    ├── /1.jpg
|       |    ├── /2.jpg
|       |    └── /... 
|       |
|       └── /...
|    
├── /2/ 
|   └── /...
|
└── /...
```
