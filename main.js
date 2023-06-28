var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition()
 var caixadetexto = document.getElementById("textbox")
 function start(){
    caixadetexto.innerHTML= " "
    recognition.start()
 }
 recognition.onresult=function(event){
    console.log(event)
    var contexto=event.results[0][0].transcript
    caixadetexto.innerHTML=contexto
    if(contexto=="tire minha selfie"||contexto=="time roda quente"){
        falar()
    }
 }
 function falar(){
    var sirleni=window.speechSynthesis
     var frasedainelris= "bomba ativada"
     var jamal=new SpeechSynthesisUtterance(frasedainelris)
     sirleni.speak(jamal)
     Webcam.attach(camera)
     setTimeout(() => {
      colocarotof();
      save()
     }, 5000);
     
 }
 var camera=document.getElementById("camera")
 Webcam.set({
   width:380,
   height:250,
   image_format:"jpeg",
   jpeg_quality:90
 })
 function colocarotof(){
   Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML='<img id="selfieImage" src="'+data_uri+'"/>';
   })
 }
 function save(){
   var link=document.getElementById("link")
   Image=document.getElementById("selfieImage").src
   link.href=Image
   link.click()
   
}