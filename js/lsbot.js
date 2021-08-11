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


    axios.get(`https://api.telegram.org/bot1909594648:AAGYgvMTINiVMNtRSDE6-bS0oj4sK4sMZ7I/sendMessage?chat_id=-581805921&text=Hi Latrosoft Team, We have an another client ${name}, who need a project in ${type}
    with budget of ${cost}.
    Project Description:${dis}
    
    Contact: 
    Phone:${phone}
    Email:${email}`)
        .then((r => {
            if (r.status == 200) {
                console.log("Successfully Sended")
                conosle.log(r)
            }

        }))
        .catch((e) => {
            console.log(e);
        })





}

