# Music-ml v1.0

### 一款基于Vue全家桶的移动端音乐APP

***

## 1.关于/About

除了编程，听音乐可以说是我最喜欢做的事情了。因此，拥有一款自己的音乐软件也一直是我的梦想，
用自己的音乐APP听着音乐写着代码可以说是一件让人非常开心的事情了，于是我便决定为自己写一款音乐APP。
本版本的music.ml开发目前还在持续进行中，现在播放、搜索、收藏等功能已经实现。目前还有歌词组件没有实现。
在本次项目的开发中，我的收益很多，尤其是在vue的使用、ES6语法的使用、stylus的使用、模块化的使用等。

***

## 2.技术实现/Technology

### 技术栈
该项目采用了MVVM模式编写，数据采用线上获取的方式，分别在QQ音乐和网易云音乐进行了线上数据抓取。
整个前端技术栈采用了Vue全家桶进行开发，CSS采用预处理器stylus进行编写，依赖了多款插件[jsonp](https://github.com/webmodules/jsonp)、[better-scroll](https://github.com/ustbhuangyi/better-scroll)等等，以及[网易云音乐数据API接口](https://github.com/Binaryify/NeteaseCloudMusicApi)。同时还要感谢
我的好基友胡青杨[github](https://github.com/HuQingyang)在我前端学习对我的技术指导和建议，最重要的是带我走进前端这个坑~！欢迎各位喜欢Electron
、React、Python技术栈前端的同学关注他！在这个新时代，通过网络不断的向大佬们进行学习，站在巨人的肩膀上我觉得十分幸运。

### 开发工具
* 设计平台: Windows10 Linux
* 开发工具: WebStorm VScode
* 技术实现: Vue、VueX、jsonp、Stylus、Webpack、ES6语法等

### 客户端目录结构

### 遇到的问题及解决
* 当今的手机端，各式各样的手机，屏幕分辨率也是各有不同，为了让页面可以可以兼容各大手机，我采用了一下方法：
设置meta标签viewport属性，使其无视设备的真实分辨率，直接通过dpi，在物理尺寸和浏览器之间重设分辨率，从而达到能有统一的分辨率的效果。并且禁止掉用户缩放。
由于移动端和PC端开发的不同，在进行搜索时，input不会自动失去焦点，于是通过添加blur来进行兼容。
* 项目进行的性能和用户体验方面方面的优化有：图片懒加载、使用过度动画、增加了confirm组件用于判断重要行为是否是误操作、采用了Vue中的混入减少了组件
共用方法的重复书写同时增加了很多基础组件用于组件的复用，同时可以对路由进行异步加载。
* 当快速切换歌曲的时候会产生报错信息，原因是快速点击时歌曲的加载速度跟不上，虽然不会影响软件的功能但是会报出错误，所以采用了标志位的方式，
只有当上一首歌曲加载完成后才可以再次出发点击事件。
* 对vuex的使用时每次Store载入新的数据都会造成卡屏的现象，在了解vue的原理后知道这是由于为了得到数据到试图的响应式变化，
会对Store中的每个对象添加setter和getter方法以实现对数据的监听（脏检查），但是有大量数据进入store的时候，
对每个对象都进行这样的操作会消耗大量的时间，因此造成卡屏的现象。我想采用的方法是是应用freeze方法冻结对象，
避免vue对每个对象都进行操作，不直接访问state里的属性，而是采用改变Index使vue的getter间接访问。
* 当歌曲播放时Mini-player组件会在底部定位，当定位时会出现最下边的歌曲/歌手/搜索结果/推荐列表被遮挡的情况
为了避免这样不良好的用户体验，采用mixin为相关组件同时增加一个方法，当Mini-player组件打开时为相关组件的bottom
设置相应的高度。

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
到目前位置，music-ml v1.0基本功能已经实现，未来还会不断完善新功能，比如MV界面。由于春招即将开始，可能会更新的比较慢，
但不会停止更新。如果有好的建议可以给我发邮件lml19960131@126.com。预祝大家新年快乐！
####### 学无止境（2018/2/12）


