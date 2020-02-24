# JSBox GBK

此项目为了解决 JSBox 可能遇到的 GBK 中文编码问题

在`main.js`有示例，运行即可看到效果

包括两个部分:

- URLEncodeUsingGBK: 使用 Objc 方法实现 GBK 版本的 URLEncode，短小精悍，不再需要导入庞大的 GBK 转换列表。
- decodeDataUsingGBK: 如何将 GBK 编码的\$data 数据转换为 string

以及两个示例：

- post: 在 JSBox>=2.3.0 中，如何实现需要 GBK 编码的情况下进行 HTTP POST 并获取结果的示例
- post(legacy): 在 JSBox<=2.2.0 中，如何实现需要 GBK 编码的情况下 HTTP POST 并获取结果的示例

如何在你的作品中使用:  
将`URLEncodeUsingGBK.js`放在应用目录，使用如下语句调用:

```js
const URLEncodeUsingGBK = require("path/to/URLEncodeUsingGBK");
```
