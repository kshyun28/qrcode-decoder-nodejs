# qrcode-decoder-nodejs

Sample QR code decoder in Node.js using [jimp](https://www.npmjs.com/package/jimp) and [jsqr](https://www.npmjs.com/package/jsqr).

Example guides I've found still use [qrcode-reader](https://www.npmjs.com/package/qrcode-reader), which is [no longer maintained](https://github.com/edi9999/jsqrcode/issues/32#issuecomment-575042561) and has occasional bugs which makes it unreliable for production workloads. 

This example repository highlights an alternative to `qrcode-reader` which is `jsqr`. 

Sample code is generated using [ChatGPT](https://openai.com/blog/chatgpt) and supports reading QR codes from the following:
- image file (`.png`, etc.)
- base64 image string

## Local setup and testing

1. `npm install`
2. `npm run start:dev` or 
3. `npm run build` && `npm run start`

The sample QR code should output the following data to console.log, `Sample QR code data for testing.`.

## References
- https://blog.logrocket.com/create-read-qr-codes-node-js/
- https://www.geeksforgeeks.org/reading-qr-codes-using-node-js/