var txtInput= document.querySelector(#translate-input)
var btnTrans= document.querySelector(#translate-button)
var txtOutput= document.querySelector(#translate-output)

var url = "	https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(input){
    return url + "?" +"text" + input 
}

function clickHandler(){
    var inputTxt= txtInput.value //input 

    fetch (getTranslationUrl(inputTxt))
    .then (response => response.json())
    .then (json => {
        var translatedText= json.contents.translated;
            txtOutput.innerHTML=translatedText;

    })
    .catch (errorHandler)
};

function errorHandler (error(){
    console.log("error occured", error)
    alert("downtime,something wrong with my server, check after some time")
}



