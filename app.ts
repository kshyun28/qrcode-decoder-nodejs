import Jimp from 'jimp';
import jsQR from 'jsqr';

const decodeQR = async (): Promise<string> => {
    /* 
        If you want to decode a QR from base64, pass QR buffer to Jimp.
        Remove "data:image...", then convert base64 to buffer
    */
    // const base64 = 'data:image/png;base64,iVBORw0KGgo...' // replace with your base64 string
    // const qrBuffer = Buffer.from(base64.replace(/^data:image\/[a-z]+;base64,/, ''), 'base64');
    // await Jimp.read(qrBuffer);

    // Load the image with Jimp
    const image = await Jimp.read('qr.png');

    // Get the image data
    const imageData = {
        data: new Uint8ClampedArray(image.bitmap.data),
        width: image.bitmap.width,
        height: image.bitmap.height,
    };

    // Use jsQR to decode the QR code
    const decodedQR = jsQR(imageData.data, imageData.width, imageData.height);
    
    if (!decodedQR) {
        throw new Error('No QR code detected in the image.');
    }

    return decodedQR.data;
}

const run = async () => {
    console.log(await decodeQR());
}

run();
