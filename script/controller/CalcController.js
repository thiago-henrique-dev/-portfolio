class CalcController {

    constructor(){

        this._displayCalc = "0"
        this._currentDate;
        this.initialize();
    }


    initialize(){


        //Manipulando o DOM
       let displayCalcEl = document.querySelector("#display");
       let dataEl = document.querySelector("#data");
       let horaEl = document.querySelector("#hora");

       displayCalcEl.innerHTML = "4567";
       dataEl.innerHTML = "01/05/2020";
       horaEl.innerHTML = "00:00";

        }
         get displayCalc(){

        return this._displayCalc;

    }

         set displayCalc(value){

        this._displayCalc = value;

    }

         get currentDate(){

        return new Date();

    }

          set currentDate(value){

        this._currentDate = value;

    }

    }