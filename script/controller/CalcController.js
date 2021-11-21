    class CalcController {  

        constructor(){
        
        this._operation = []
        this._locale = ("pt-BR")
        this._displayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");

        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

        
        initialize(){

            this.setDisplayDateTime();

          setInterval(() =>{
            
            this.setDisplayDateTime();

            }, 1000)

        
        }

        clearAll(){

            this._operation = [];

        }

        clearEntry(){

            this._operation.pop();

        }

        getLastOperation(){

            return this._operation[this._operation.length-1]

        }

        setLastOperation(value){

            this._operation[this._operation.length-1] = value;

        }

        isOperator(value){

          return (['+','-',"*","%", "/"].indexOf(value) > -1)

        }

        pushOperation(value){

            this._operation.push(value);

            if(this._operation.length > 3){

                

                this.calc()

                

            }

            

        }

        calc(){

            let last = this._operation.pop()

            let result = eval(this._operation.join(""));

            this._operation = [result, last]



        }

        setLastNumberToDisplay(){

        }

        addOperation(value){

            if(isNaN(this.getLastOperation())){

                if (this.isOperator(value)){

                   this.setLastOperation(value);

                } else if(isNaN(value)) {

                    console.log('Outra coisa', value);

                } else {
                    

                    this.pushOperation(value);
                    
                } 
               } else {

                    if (this.isOperator(value)){

                        this.pushOperation(value);

                    } else {

                        let newValue = this.getLastOperation().toString() + value.toString();
                        this.setLastOperation(parseInt(newValue))

                        this.setLastNumberToDisplay();
                    }
                }
            
            console.log(this._operation)
        }


        setError(){
            this.displayCalc = "Error";
        }

        execBtn(value){

            switch(value) {

                case "ac":
                    this.clearAll();
                    break;
                case "ce":
                    this.clearEntry();
                    break;
                case "soma":
                    this.addOperation("+")
                    break;
                case "subtracao":
                    this.addOperation("-")
                    break;
                case "divisao":
                    this.addOperation("/")
                    break;
                case "multiplicacao":
                    this.addOperation("*")
                    break;
                case "porcento":
                    this.addOperation("%")
                    break;
                case "igual":
                    this.addOperation
                    break;
                case "ponto":
                    this.addOperation(".")
                    break;
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this.addOperation(parseInt(value))
                    break;
                default:
                    this.setError();
                    break;

                

                
            }

        }

        initButtonsEvents(){
            // Adicionando Evento Click
            let buttons = document.querySelectorAll("#buttons > g, #parts > g");

            buttons.forEach(btn=>{

                btn.addEventListener('click', e  =>{


                    let textBtn = btn.className.baseVal.replace("btn-","");
                    console.log(textBtn)

                    this.execBtn(textBtn)
                })
            })
        }

        

        setDisplayDateTime(){

            this.displayDate = this.currentDate.toLocaleDateString(this._locale,{
                day: "2-digit",
                month: "long",
                year: "numeric"
            });
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

        }
         
        get displayTime(){
            return this._timeEl.innerHTML;

        }
        
        set displayTime(value){
            return this._timeEl.innerHTML = value;
        }

        get displayDate(){
            return this._dataEl.innerHTML;

        }

        set displayDate(value){
            return this._dataEl.innerHTML = value;
        }
        
        get displayCalc(){

             return this._displayCalcEl.innerHTML;

    }

         set displayCalc(value){

             this._displayCalcEl.innerHTML = value;

    }

         get currentDate(){

            return new Date();

    }

          set currentDate(value){

            this._currentDate = value;

    }

    }