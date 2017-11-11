本项目用于存放“视角”杂志内容。“视角”主站通过github API抓取本项目内容进行渲染。

### 文档结构

```shell
.
├── /README.md                # 项目说明文档（本文件）
│
├── /1/                       # 第一期杂志
│   ├── /meta.json            # 本期信息，包括主题、欢迎文字、引语
│   ├── /cover.jpg            # 本期封面图片
│   │
│   ├── /心智/                 # “心智”子栏目
│   │   │
│   │   ├── /1/               # 子栏目第一篇文章
│   │   │   ├── /article.md   # 第一篇文章信息与正文
│   │   │   ├── /1.jpg        # 文章图片
│   │   │   ├── /2.jpg
│   │   │   └── /...
│   │   │  
│   │   ├── /2/               # 子栏目第二篇文章
│   │   │   ├── /article.md
│   │   │   ├── /1.jpg
│   │   │   ├── /2.jpg
│   │   │   └── /...
│   │   │
│   │   └── /...
│   │
│   ├── /此岸/                # “此岸”子栏目
│   │   │
│   │   ├── /1/
│   │   │   ├── /article.md
│   │   │   ├── /1.jpg
│   │   │   ├── /2.jpg
│   │   │   └── /...
│   │   │  
│   │   ├── /2/
│   │   │    ├── /article.md
│   │   │    ├── /1.jpg
│   │   │    ├── /2.jpg
│   │   │    └── /...
│   │   │
│   │   └── /...
│   │
│   └── /梦境/                # “梦境”子栏目
│       │
│       ├── /1/
│       │   ├── /article.md
│       │   ├── /1.jpg
│       │   ├── /2.jpg
│       │   └── /...
│       │  
│       ├── /2/
│       │    ├── /article.md
│       │    ├── /1.jpg
│       │    ├── /2.jpg
│       │    └── /...
│       │
│       └── /...
│    
├── /2/                       # 第二期杂志，结构同上
│   └── /...
│
└── /...
```

### 文章信息与正文
文章信息与正文采用markdown格式进行排版。Markdown文档开头通过YAML格式注明文章元信息(front matter)，包含文章类型、标题、副标题、摘要、作者、作者简介、译者、译者简介和连接。YAML元信息通过`---`与其他markdown内容分开。例如：
```shell
---
type: article
title: 信仰未来的奇点论
subtitle: 为何宗教话语在 AI 和超人类主义者的圈子里如此泛滥？
abstract: 奇点论、超人类主义以及人工智能的道德问题，并且讨论为什么人工智能和技术奇点支持者们的用词与概念和宗教如此类似。
author: Beth Singler
author_info: Beth Singler是剑桥大学科学与宗教中心及未来智能中心研究员，著有书籍The Indigo Children: New Age Experimentation with Self and Science。
translator: 于翮
translator_info: 于翮任职于彩云AI，进行人工智能算法开发。
url: why-is-the-language-of-transhumanists-and-religion-so-similar
---

### 一场奇特的会议

那个年轻人站起来的时候， 我的胃揪了一下。 之前在茶歇的时候， 我远远地观察过他，而且注意到在他那别在翻领的代表证上， 潦草地写着「神学家」这几个字， 那字迹的草率让人觉得他是在最后一刻被临时加进会议的。此时他清了清嗓子，向台上的嘉宾提问， 他想知道当人们在编写 AI 程序的时候，会选择将怎样的道德准则编码到这些智能体中。「例如，自慰违反了我的宗教信条」他说，「所以我不确定， 我们怎么决定哪些道德比较重要？」
```
更多关于YAML格式的使用参见[jekyll使用文档](http://jekyllcn.com/docs/frontmatter/)或者[hexo使用文档](https://hexo.io/zh-cn/docs/front-matter.html).
