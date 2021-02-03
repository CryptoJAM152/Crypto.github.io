var firebaseConfig = {
    apiKey: "AIzaSyB_KOowk9Hq9Sq2LDsj80txn3U-3NjPCFA",
    authDomain: "contact-c2a4b.firebaseapp.com",
    databaseURL: "https://contact-c2a4b-default-rtdb.firebaseio.com",
    projectId: "contact-c2a4b",
    storageBucket: "contact-c2a4b.appspot.com",
    messagingSenderId: "1067215573740",
    appId: "1:1067215573740:web:0fe78894d8591693af0bc9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let Info=firebase.database().ref("subscribers");



document.querySelector(".subscribe").addEventListener("submit",submitform);
function submitform(e){
    e.preventDefault();
    console.log("Info saved!");

    let email=document.getElementById("mail").value;
    saveContactInfo(email);
    if( document.querySelector('.subscribe')!=null){
        document.querySelector('.subscribe').reset();
        alert("Thanks for  Subscribing! We'll notify our the latest news and updates");
        


    }


}
function saveContactInfo(email){
    let newContactInfo= Info.push();

    newContactInfo.set({
        
        email:email
        
        
    });

}