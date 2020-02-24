// http post using GBK 

$http.post({
  url: "https://www.lltxt.com/xunsearch.php?",
  header: {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/16A404 Safari/604.1"
  },
  body: $data({ string: "keyword=%D6%C1%D7%F0&submit=&step=2&sch_time=all" }),
  handler: function(resp) {
    var data = resp.data;
    console.log(data)
  }
});