/*
Riven
NeoPixel Matrix Panel with shape 32x8 or 16x16
load dependency
"neomatrix": "file:../pxt-neomatrix"
*/

//% color="#13c2c2" weight=10 icon="\uf17a"
namespace neomatrix {
    const RGB_PIX = 256

    let rgbBuf: Buffer = pins.createBuffer(RGB_PIX * 3);
    let rgbPin: DigitalPin;

    // no hex literal support for microbit v1
    function hexstr2buf(a: string): void {
        for (let i = 0; i < a.length; i += 2) {
            rgbBuf[i / 2] = (a.charCodeAt(i) % 32 + 9) % 25 * 16 + (a.charCodeAt(i + 1) % 32 + 9) % 25;
        }
        ws2812b.sendBuffer(rgbBuf, rgbPin);
    }

    //% blockId=neomat_setpin block="Neo Pin %pin"
    export function SetRGBPin(pin: DigitalPin): void {
        rgbPin = pin;
    }

    //% blockId=neomat_clear block="Clear"
    export function NeoMatClear(): void {
        rgbBuf.fill(0);
        ws2812b.sendBuffer(rgbBuf, rgbPin);
    }


}