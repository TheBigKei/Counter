const counter = Createcounter();

function Createcounter(){
    let i = 0;
    function counter (btnInput){
        switch(btnInput){
            case true:
                return i++;
            case false:
                return i--;
        }
        return 'Error';  
    }
    return counter;
}

let result;

result = counter(btnInput);
document.getElementsByClassName("counterOutput").innerText = result;
