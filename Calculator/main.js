(function(){
    const symbols = [{
        keyCode: 48,
        keyTrigger: '0'
    }, {
        keyCode: 49,
        keyTrigger: '1'
    }, {
        keyCode: 50,
        keyTrigger: '2'
    }, {
        keyCode: 51,
        keyTrigger: '3'
    }, {
        keyCode: 52,
        keyTrigger: '4'
    }, {
        keyCode: 53,
        keyTrigger: '5'
    }, {
        keyCode: 54,
        keyTrigger: '6'
    }, {
        keyCode: 55,
        keyTrigger: '7'
    }, {
        keyCode: 56,
        keyTrigger: '8'
    }, {
        keyCode: 57,
        keyTrigger: '9'
    }, {
        keyCode: 46,
        keyTrigger: '.'
    },
    {
        keyCode: 43,
        keyTrigger: '+'
    }, 
    {
        keyCode: 45,
        keyTrigger: '-'
    },
    {
        keyCode: 42,
        keyTrigger: '*'
    },
    {
        keyCode: 47,
        keyTrigger: '/'
    }
    ];

    function $id(el){
        return document.getElementById(el);
    }
    function $class(el){
        return document.getElementsByClassName(el);
    }

    function calculate(list){
        let result= parseFloat( list[0]);
        for(let i = 1; i<list.length;i++ ){
            if(list[i]==="+"){
                result = result+ parseFloat(list[i+1]);
                i++;
            }
            if(list[i]==="-"){
                result = result-parseFloat(list[i+1]);
                i++;
            }
            if(list[i]==="*"){
                result = result*parseFloat(list[i+1]);
                i++;
            }
            if(list[i]==="/"){
                result = result/parseFloat(list[i+1]);
                i++;
            }
        }
        return result.toFixed(2);
    }
    function insert(){

       $id("result").innerText+=event.target.innerText;
        if(event.target.innerText==="="){
            let expression = $id("result").innerText;
            let split = expression.match(/[^\d()]+|[\d.]+/g);
            $id("result").innerText=calculate(split);
        }
    }
    for(let i =0;i<17;i++){
        $class("button")[i].addEventListener("click", function(event){
            insert();
        })
    }

    $class("del")[0].addEventListener("click", function(){
        $id("result").innerText="";
    })
    document.onkeydown = function(e){
        for(let i =0 ;i<symbols.length;i++){
            if(e.keyCode===symbols[i].keyCode){
                $id("result").innerText+=symbols[i].keyTrigger;
                if(e.keyCode==="61"){
                    let expression = $id("result").innerText;
                    let split = expression.match(/[^\d()]+|[\d.]+/g);
                    $id("result").innerText=calculate(split);
                }
                if(e.key==="Delete")$id("result").innerText="";
            }
        }
    }

})();