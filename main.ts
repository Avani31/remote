makerbit.connectIrReceiver(DigitalPin.P16, IrProtocol.Keyestudio)
serial.writeValue("x", 0)
basic.forever(function () {
    serial.writeLine(makerbit.irDatagram())
    basic.pause(100)
})
