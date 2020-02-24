function decodeDataUsingGBK(data) {
  var string = $text.decodeData({
    data: data,
    encoding: 2147485234 // CFStringConvertEncodingToNSStringEncoding(kCFStringEncodingGB_18030_2000) = 2147485234;
  });
  return string;
}

module.exports = decodeDataUsingGBK;
