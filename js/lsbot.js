//https://api.telegram.org/bot1909594648:AAGYgvMTINiVMNtRSDE6-bS0oj4sK4sMZ7I/sendMessage?chat_id=-581805921&text=Imbot


// Message template

/*
Hi Latrosoft Team, We have an another client [NAME], who need a project in [PROJECT TYPE]
with budget of [COST].

Project Description:[DISCRIPTION]

Contact: 
Phone:[PHONE]
Email:[EMAIL]
*/



/* Url Encoded



*/


$(document).ready(() => {

    console.log("Working Fine!");
    // sendMessage("Iwinson", "9626666685", "iwinmapula@gmail.com", "dis", "10000", "App developement")
    //sendMessage("Balaji", "9384913517", "latosoft@gmail.com", "Bot Creator", "25000", "App Development")

});

function sendMessage(name, phone, email, dis, cost, type) {


    axios.get(`https://api.telegram.org/bot1909594648:AAGYgvMTINiVMNtRSDE6-bS0oj4sK4sMZ7I/sendMessage?chat_id=-581805921&text=Hello%20Latrosoft%20Team%2C%20we%20have%20received%20a%20new%20Client%20${name}%2C%20who%20requires%20a%20project%20in%20${type}%20with%20forecast%20of%20${cost}.%0A%0AProject%20Description%3A%20${dis}%0A%0AContact%3A%0APhone%3A%20${phone}%0AEmail%3A%20${email}`)
        .then((r => {
            if (r.status == 200) {
                console.log("Successfully Sended");
                console.log(r);
                window.location = "/success.html";
            }

        }))
        .catch((e) => {
            console.log(e);
        })





}

