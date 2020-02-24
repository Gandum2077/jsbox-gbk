// legacy version for JSBox<=2.2.0

function download(params) {
  params = params || {};
  params.handlers = params.handlers || {};

  const url = params.url;
  const method = params.method || "GET";
  const timeout = params.timeout || 60;
  const header = params.header || {};
  const body = params.body;
  const callback = params.handler;

  const request = $objc("NSMutableURLRequest").$requestWithURL(
    $objc("NSURL").$URLWithString(url)
  );
  request.$setHTTPMethod(method);
  request.$setTimeoutInterval(timeout);

  for (const [key, value] of Object.entries(header)) {
    request.$addValue_forHTTPHeaderField(value, key);
  }

  if (body) {
    request.$setHTTPBody(body.ocValue());
  }

  const session = $objc("NSURLSession").$sharedSession();
  const completionHandler = $block(
    "void, NSURL *, NSURLResponse *, NSError *",
    (location, response, error) => {
      if (callback) {
        const data = $objc("NSData")
          .$dataWithContentsOfURL(location)
          .$copy();
        $thread.main({
          handler: () => {
            callback({
              data: data.jsValue(),
              response: response.jsValue(),
              error: error.jsValue()
            });
          }
        });
      }
    }
  );

  const task = session.$downloadTaskWithRequest_completionHandler(
    request,
    completionHandler
  );
  task.$resume();
}

exports.download = download;

download({
  url: "https://www.lltxt.com/xunsearch.php?",
  method: "POST", // Optional, default to GET
  timeout: 60, // Optional, default to 60
  header: {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.1 Mobile/16A404 Safari/604.1"
  }, // Optional, default to {}
  body: $data({ string: "keyword=%D6%C1%D7%F0&submit=&step=2&sch_time=all" }), // Optional, default to null
  handler: result => {
    // props: data, response, error
    const data = result.data;
    if (data) {
      var string = $text.decodeData({
        data: data,
        encoding: 2147485234 // CFStringConvertEncodingToNSStringEncoding(kCFStringEncodingGB_18030_2000) = 2147485234;
      });
      console.log(string);
    }
  }
});