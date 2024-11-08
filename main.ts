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
    let matType: number = 0;//TODO: later support for more matrix
    let rgbBright: number = 30;

    const PortDigi = [
        [DigitalPin.P8, DigitalPin.P0],
        [DigitalPin.P12, DigitalPin.P1],
        [DigitalPin.P13, DigitalPin.P2],
        [DigitalPin.P15, DigitalPin.P14],
        [DigitalPin.P6, DigitalPin.P3],
        [DigitalPin.P7, DigitalPin.P4],
        [DigitalPin.P9, DigitalPin.P10]
    ]

    export enum Ports {
        //% block=port1
        PORT1 = 0,
        //% block=port2
        PORT2 = 1,
        //% block=port3
        PORT3 = 2,
        //% block=port4
        PORT4 = 3,
        //% block=port5
        PORT5 = 4,
        //% block=port6
        PORT6 = 5,
        //% block=port7
        PORT7 = 6
    }
    
    // no hex literal support for microbit v1
    export function hexstr2buf(a: string): void {
        for (let i = 0; i < a.length; i += 2) {
            let rgb = (a.charCodeAt(i) % 32 + 9) % 25 * 16 + (a.charCodeAt(i + 1) % 32 + 9) % 25;
            rgbBuf[i / 2] = (rgb * rgbBright) >> 8;
        }
        ws2812b.sendBuffer(rgbBuf, rgbPin);
    }

    // export enum MATRIXType {
    //     //% block=32x8
    //     M32x8 = 0,
    //     //% block=16x16
    //     M16x16 = 1
    // }

    //% blockId=neomatrix_set_pin block="init matrix pin %pin"
    //% weight=99
    export function setPin(pin: DigitalPin): void {
        rgbPin = pin;
        matType = 0;
        clear();
    }

    //% blockId=neomatrix_set_powerbrick_port block="init powerbrick %port"
    //% weight=98
    export function setPowerbrickPort(port: Ports): void {
        rgbPin = PortDigi[port][0];
        matType = 0;
        clear();
    }

    //% blockId=neomatrix_set_bright block="matrix brightness %bright"
    //% weight=97
    export function setBrightness(bright: number): void {
        rgbBright = bright & 0xff;
    }

    //% blockId=neomatrix_shift_mat block="matrix shift %s delay %ms ms"
    //% weight=96
    export function shiftMatrix(s: number, ms: number): void {
        if (matType == 0) {
            s = s % 32;
            rgbBuf.rotate(-s * 8 * 3 * 2);
            ws2812b.sendBuffer(rgbBuf, rgbPin);
        }
        // todo: support 16x16 shift
        basic.pause(ms)
    }

    //% blockId=neomatrix_clear block="clear"
    //% weight=95
    export function clear(): void {
        rgbBuf.fill(0);
        ws2812b.sendBuffer(rgbBuf, rgbPin);
    }
    

}