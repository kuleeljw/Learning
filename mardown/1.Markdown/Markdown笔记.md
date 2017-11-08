# Markdown笔记

### 为什么需要Markdown？
我决定从现在开始，来尝试对学习过的技能或者新学习的技术进行总结。因此我需要一个的工具来处理这些文字。这个工具应该要足够的简单不需要很大的精力去学习，而且还需要足够的强大。所以我的第一篇就从Markdown开始。

### Markdown是什么？
> Markdown是一种可以使用普通文本编辑器编写的标记语言，通过简单的标记语法，它可以使普通文本内容具有一定的格式。

以上文字引用自百度百科，可以总结出：
* Markdown是纯文本的,任何纯文本编辑器都可以使用。
* Markdown只需要对文本进行标记，就可以让文本具有格式。
* Markdown让作者更关注于内容而非格式。

### Markdown的常用标记
#### 一、标题
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/title001.png)
想让文字变成标题，只需在文字前加上"#"号。

#### 二、粗体、斜体、删除线
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/blod&italic.png)

#### 三、无序列表、有序列表
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/ul001.png)
使用"*"、"-"、"+"都可以生成无序列表并且可以嵌套下级列表
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/ol001.png)
使用 数字. 的形式就能生成有序列表，同样支持缩进嵌套下级列表，再往下看：
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/ol002.png)
发现了什么————定义有序列表的序号和实际生成出来的序号不一致。有序列表不管你如何定义序号它都只按照顺序生成。

#### 四、分割线
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/line001.png)
输入三个以上的"*"或者"-"号就能生成一条分割线

#### 五、表格
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/table001.png)
表格的写法稍微复杂，需要注意的是":"号的作用，冒号在左边表示单元格的内容左对齐，在右边表示右对齐，两边都有":"表示居中对齐。

#### 六、引用
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/ref001.png)
使用">”可以加入一段引用，使用一个以上">"符号可以嵌套引用。

#### 七、脚注
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/footnote001.png)
注意[^b]这个记号，里面的字母"b"可以随意填写，只是个标记，和下方的解释一一对应。

#### 八、代码块
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/code001.png)
单行代码使用"\`"符号包裹，多行代码块使用三个"\`"包裹，这个符号在键盘Esc下方。

#### 九、超链接
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/hyperlink001.png)
超链接有两种方式，一种是内联方式，在一段文字中直接插入超链接
第二种是引用方式，相当于在文章的某个地方先声明一个超链接，然后在文章的任何地方都可以引用这个超链接。注意红框里面的内容，当鼠标悬停在超链接上的时候会出现的提示信息，可以省略。

#### 十、图片
![](http://ouanpg9tc.bkt.clouddn.com/image/learning/markdown01/img001.png)
图片和超链接类似，写法上只是多一个"!"。图片的路径可以是绝对路径（注意windows下的路径写法，用"/"分隔。）、相对路径或者是一个网络地址。

### 结束了
Markdown的常用标记就写完了，已经可以满足大部分工作的使用了。

### 工具
Visual Studio Code + Markdown All in One 插件 +  Markdown Preview Enhanced 插件