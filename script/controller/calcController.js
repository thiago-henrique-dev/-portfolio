class CalcController {
    constructor( ){
         this._displayCalc = "0";
         this._currentDate;
         this.inniitialize();

    }

    inniitialize(){

    }

    get displayCalc(){
        return this._displayCalc;
    }
    
    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get currentDate(){
        return this._dataAtual
    }

    set currentData(valor){
        this.currentDate = valor;
    }
}