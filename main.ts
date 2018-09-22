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
    let matType: MatType;
    let rgbBright: number = 30;

    // no hex literal support for microbit v1
    export function hexstr2buf(a: string): void {
        for (let i = 0; i < a.length; i += 2) {
            let rgb = (a.charCodeAt(i) % 32 + 9) % 25 * 16 + (a.charCodeAt(i + 1) % 32 + 9) % 25;
            rgbBuf[i / 2] = (rgb * rgbBright) >> 8;
        }
        ws2812b.sendBuffer(rgbBuf, rgbPin);
    }

    export enum MatType {
        //% block=32x8
        m32x8 = 0,
        //% block=16x16
        m16x16 = 1
    }

    //% blockId=neomat_setpin block="Matrix Pin %pin %mat"
    export function SetRGBPin(pin: DigitalPin, mat: MatType): void {
        rgbPin = pin;
        matType = mat;
        NeoMatClear();
    }

    //% blockId=neomat_setbright block="Matrix Brightness %bright"
    export function SetBright(bright: number): void {
        rgbBright = bright & 0xff;
    }

    //% blockId=neomat_clear block="Clear"
    //% blockGap=70
    export function NeoMatClear(): void {
        rgbBuf.fill(0);
        ws2812b.sendBuffer(rgbBuf, rgbPin);
    }


}