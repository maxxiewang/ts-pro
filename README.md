# ts-pro

Type Scrpit Pro
在运行 tsc 编译.ts 文件时，“因为在此系统上禁止运行脚本” 怎么解决？
首先按 win 键 + X ，打开 PowerShell（管理员）
在上面输入
set-ExecutionPolicy RemoteSigned
他会出来这么几个选项
这里 写 Y 或者 A 都可以（不区分大小写，大小写都可以）
回车之后没有反应

然后再次出入指令
get-executionpolicy
来查看是否更改成功
如果出现 RemoteSigned 则代表更改成功

dependencies 与 devDependencies，dev 打包时不会打去，有效的降低网站大小，加速打开时间。
