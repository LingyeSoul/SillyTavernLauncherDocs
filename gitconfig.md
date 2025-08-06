# 可能原因
1.0.0版本后基本上是因为镜像网站访问失败，请更换镜像网站。
::: warning 警告
之前的版本请继续看本页内容！！！
:::
::: tip 提示
由于之前的版本一直使用github.moeyy.xyz，而站点的站长说因为受到污染，所以停止了服务
:::

## 问题特征
<div align="center">
  <img src="/git-1.png" alt="特征" width="800"/>
</div>
无法访问github.moeyy.xyz，导致无法拉取酒馆仓库。

## 解决方法
<div align="center">
  <img src="/git-2.png" alt="解决方法" width="800"/>
</div>
进入启动器目录，打开SillyTavern文件夹，打开.git文件夹（这是个隐藏文件夹，如何查看隐藏文件夹请自行搜索），使用文本编辑器（如记事本）打开config文件，将url前面的https://github.moeyy.xyz/删除，然后保存。

::: warning 警告
请务必保检查设置中，Github镜像是否已经重新选择
:::