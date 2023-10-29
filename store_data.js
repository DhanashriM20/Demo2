function saveData(){
    let username = document.getElementById("uname").value;
    let contact = document.getElementById("ucontact").value;
    let mail = document.getElementById("email").value;

    let user_data = new Array();

    user_data = JSON.parse(localStorage.getItem('User'))?JSON.parse(localStorage.getItem('User')):[];

    if(user_data.some((data_mail) => {
        return data_mail.mail == mail;})){
        alert("Duplicate Data");
    }
    
    else{
        user_data.push({
            "name" : username,
            "contact" : contact,
            "mail" : mail,
        });
    }

    localStorage.setItem("User",JSON.stringify(user_data)); 
}   

for (let i = 0; i < localStorage.length; i++) {
  console.log(localStorage[i]);  
}

function display() {
    for (let i = 0; i < localStorage.length; i++) {
        document.write("<b>Values in key-value pairs :</b><br><br>");
        
            const key = localStorage.key(i);
            const value = localStorage.getItem(key);
            document.write("<b>Key:</b> " + key + " ");
            document.write("<b>Value:</b> " + value + "<br><br>");
        }

}





