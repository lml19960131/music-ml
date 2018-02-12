# Music-ml

一款基于Vue全家桶的移动端音乐APP

***

## 1.关于/About

除了编程，听音乐可以说是我最喜欢做的事情了。因此，拥有一款自己的音乐软件也一直是我的梦想，用自己的音乐APP听着音乐写着代码可以说是一件让人非常开心的事情了，于是我便决定为自己写一款音乐APP。
本版本的music.ml开发目前还在持续进行中，搜索、歌词、排行等功能还在持续开发中。由于春招的临近，倍感压力，但是我会加快开发速度。

***

## 2.技术实现/Technology

### 技术栈
该项目采用了MVVM模式编写，数据采用线上获取的方式，分别在QQ音乐和网易云音乐进行了线上数据抓取。
整个前端技术栈采用了Vue全家桶进行开发，CSS采用预处理器stylus进行编写，依赖了多款插件[jsonp](https://github.com/webmodules/jsonp)、[better-scroll](https://github.com/ustbhuangyi/better-scroll)等等，以及[网易云音乐数据API接口](https://github.com/Binaryify/NeteaseCloudMusicApi)。同时还要感谢
我的好基友胡青杨[github](https://github.com/HuQingyang)在我前端学习对我的技术指导和建议，最重要的是带我走进前端这个坑~！欢迎各位喜欢Electron
、React、Python技术栈前端的同学关注他！

### 开发工具
* 设计平台: Windows10 Linux
* 开发工具: WebStorm VScode
* 技术实现: Vue、VueX、jsonp、Stylus、Webpack、ES6语法等

### 客户端目录结构

### 遇到的问题
#### 快速切换歌曲产生报错信息
当快速切换歌曲的时候会产生报错信息，原因是快速点击时DOM加载跟不上，虽然不会影响软件的功能但是会报出错误，所以采用了标志位的方式，只有当上一首歌曲加载完成后才可以再次出发点击事件。
#### 数据抓取出现的问题
由于采用的数据是线上抓取而来的数据，所以播放时audio接受的的url经常发生改变，所以每次使用的时候都要重新抓取线上url数据，目前还没有好的解决办法。
#### audio标签所支持的属性
HTML4/5DOM为<audio>和<video>元素提供了方法、属性和事件。如：load()重新加载音频/视频元素；play()开始播放音频/视频；pause()
暂停当前播放的音频/视频；timeupdate当目前的播放位置已更改时触发等。在该项目中都有用到，所以有重新对H5进行了系统性的学习，同时timeupdate获取的是时间戳
要对获取的数据进行处理。
#### vue-router的一些功能
我误以为在根组件中设置router.push('/xxx')，然后再在子组件中设置router.push('/xxx2')后，子组件的设置会冲掉根组件中的重定向设置，结果是不会的。
所以在以后的开发中要注意这些细节问题。
#### PC端开发与移动端使用时的不同1：
由于本项目是针对移动端进行设计的，然而开发环境主要是在Windows和Linux系统下进行的，所以有一些问题没有注意到。比如在进行搜索的时候，用户在对搜索列表
进行查看的时候键盘不会收起来，而PC端是不会出现这种情况的。所以在用户对列表进行滚动的时候，需要给搜索框input添加一个blur事件，让搜索框失去焦点，然后就
可以起到隐藏键盘的功能。
***

## 3.预览/Preview

### 推荐界面
![推荐界面](https://github.com/lml19960131/music-ml/blob/master/src/common/image/recommend.png)

### 歌手界面
![歌手界面](https://github.com/lml19960131/music-ml/blob/master/src/common/image/singer.png)

### 排行界面
![排行界面](https://github.com/lml19960131/music-ml/blob/master/src/common/image/rank.png)

### 搜索界面
![搜索界面](https://github.com/lml19960131/music-ml/blob/master/src/common/image/search.png)

### 播放界面
![播放界面](https://github.com/lml19960131/music-ml/blob/master/src/common/image/player.png)

### 歌手详情界面
![singer-detail](https://github.com/lml19960131/music-ml/blob/master/src/common/image/singer-detail.png)

### 排行详情界面
![top-list](https://github.com/lml19960131/music-ml/blob/master/src/common/image/top-list.png)

### 用户界面
![user-center](https://github.com/lml19960131/music-ml/blob/master/src/common/image/user-center.png)

***

## 4.总结/Summary
目前本项目还在持续编写之中，如果有什么好的建议欢迎大家给我提issue，也可以给我发邮件lml19960131@126.com。


