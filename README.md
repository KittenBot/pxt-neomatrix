# Neo Matrix for makecode

An easy way to show anmations or images on neopixel matrix panel.

[Purchase link](https://item.taobao.com/item.htm?id=567667633394&spm=a1z10.3-c-s.w4002-21482550023.44.3c245d5fNK5bkL)

[Tutorial Links](https://www.yuque.com/kittenbot/hardwares/lwdypg)

![](./images/title.png)

## How to use

click the 'NeoMatrix editor" in then extension flyout

It may take some while to load the extension code from github,I confirmed myself it will work with latest beta editor

Load this extension to makecode editor and select **NeoMatrix Editor**, it will navigate to our website paint editor.  

![](./images/editpanel.png)

After finished editing the animation frames, please press **pxt-neomatrix** in the bottom left. You may find a newly added block **show frame** in makecode.
```blocks
input.onButtonPressed(Button.A, function () {
    neomatrix.shiftMatrix(1, 200)
})
neomatrix.setPin(DigitalPin.P1)
```
Check the final effect

![](./images/run.gif)

----------

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

```package
neomatrix=github:Kittenbot/pxt-neomatrix
```
