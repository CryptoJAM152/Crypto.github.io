var firebaseConfig = {
    apiKey: "AIzaSyB_KOowk9Hq9Sq2LDsj80txn3U-3NjPCFA",
    authDomain: "contact-c2a4b.firebaseapp.com",
    projectId: "contact-c2a4b",
    storageBucket: "contact-c2a4b.appspot.com",
    messagingSenderId: "1067215573740",
    appId: "1:1067215573740:web:ddc1bd40c93e79f7af0bc9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //reference contact collection

  let contactInfo=firebase.database().ref("infos");

document.querySelector(".php-email-form").addEventListener("submit",submitform);

function submitform(e){
    e.preventDefault();
    

    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let subject=document.getElementById("subject").value;
    let message=document.getElementById("message").value;
    //console.log(name,email,subject,message);

    saveContactInfo(name,email,subject,message);
    if( document.querySelector('.php-email-form')!=null){
        document.querySelector('.php-email-form').reset();
        alert("ThankYou! for your Response" +" "+ name +" "+"We'll be in touch with you");
        


    }
    
}
//save infos to firebase
function saveContactInfo(name,email,subject,message){
    let newContactInfo= contactInfo.push();

    newContactInfo.set({
        name:name,
        email:email,
        subject:subject,
        message:message
    });
}

