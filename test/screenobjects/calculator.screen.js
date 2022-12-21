class CalculatorScreen {
    get twoBtn() {
        return $('~2');
    }

    get fiveBtn(){
        return $('~5');
    }

    get plusBtn(){
        return $('~plus');
    }

    get textResultField(){
        return $('//android.widget.TextView');
    }
}

module.exports = new CalculatorScreen();