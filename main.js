$app.tips("本示例在console中显示结果，请先进入编辑界面再运行");

$ui.render({
  props: {
    title: "JSBox-GBK"
  },
  views: [
    {
      type: "button",
      props: {
        title: "URLEncodeUsingGBK"
      },
      layout: function(make, view) {
        make.size.equalTo($size(200, 50));
        make.centerX.equalTo(view.super);
        make.centerY.equalTo(view.sender).offset(-90);
      },
      events: {
        tapped: function(sender) {
          const URLEncodeUsingGBK = require("scripts/URLEncodeUsingGBK")
          const raw = "https://www.example.com/aaa中文$#¥@…bbb hh"
          const result = URLEncodeUsingGBK(raw)
          console.info({raw, result})
        }
      }
    },
    {
      type: "button",
      props: {
        title: "decodeDataUsingGBK"
      },
      layout: function(make, view) {
        make.size.equalTo($size(200, 50));
        make.centerX.equalTo(view.super);
        make.centerY.equalTo(view.sender).offset(-30);
      },
      events: {
        tapped: function(sender) {
          const decodeDataUsingGBK = require("scripts/decodeDataUsingGBK")
          const data = $file.read("assets/example-gbk.txt");
          const result = decodeDataUsingGBK(data)
          console.info(result)
        }
      }
    },
    {
      type: "button",
      props: {
        title: "post"
      },
      layout: function(make, view) {
        make.size.equalTo($size(200, 50));
        make.centerX.equalTo(view.super);
        make.centerY.equalTo(view.sender).offset(30);
      },
      events: {
        tapped: function(sender) {
          $include("scripts/post");
        }
      }
    },
    {
      type: "button",
      props: {
        title: "post(legacy)"
      },
      layout: function(make, view) {
        make.size.equalTo($size(200, 50));
        make.centerX.equalTo(view.super);
        make.centerY.equalTo(view.sender).offset(90);
      },
      events: {
        tapped: function(sender) {
          $include("scripts/post(legacy)");
        }
      }
    }
  ]
});
