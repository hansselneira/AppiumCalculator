const calculatorScreen = require("../screenobjects/calculator.screen");


describe('Verify sum functionality in calculator',()=>{
    it('Click on two number', async ()=>{
        await calculatorScreen.twoBtn.click();
        driver.setImplicitTimeout(2000);
    });

    it('Click on plus key', async ()=>{
        await calculatorScreen.plusBtn.click()
        driver.setImplicitTimeout(2000);
    });

    it('Click on four number', async ()=>{
        await calculatorScreen.fiveBtn.click()
        driver.setImplicitTimeout(2000);
    });

    it('Verify the result is the number 7', async ()=>{
        await expect(calculatorScreen.textResultField).toHaveText('7');
        driver.setImplicitTimeout(2000);
    });
});