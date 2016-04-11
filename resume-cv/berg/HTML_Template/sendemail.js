/**
 * Created by pankaj on 11/4/16.
 */


var nodemailer = require("nodemailer");
var smtpTransport = require("nodemailer-smtp-transport")

// create reusable transport method (opens pool of SMTP connections)
var sendMail =function(req,res,next){
    console.log("in send mailll",req.data);
    var smtpTransport = nodemailer.createTransport("SMTP",{
        service: "Gmail",
        auth: {
            user: "pmalikbtech@gmail.com",
            pass: "xxxxxxxxxxxx"
        }
    });

// setup e-mail data with unicode symbols
    var mailOptions = {
        from: req.body.email, // sender address
        to: "pankajmalik110@gmail.com",
        subject: req.body.name,
        text: 'you have recived a mail from '+ req.body.email+'.Query :'+req.body.message+''
        // html: "<b>Hello world ✔</b>" // html body
    }

// send mail with defined transport object
    smtpTransport.sendMail(mailOptions, function(error, response){
        console.log("in smtp send mailer")
        if(error){
            console.log('asdasdad',error);
        }else{
            console.log("Message sent: " + response.message);
             res.send(200,'email sent successfully');
            next();

        }

        // if you don't want to use this transport object anymore, uncomment following line
        //smtpTransport.close(); // shut down the connection pool, no more messages
    });
}









module.exports=function(parent){
    parent.post('/post',function(req,res){
        console.log('asdbhajdalod',req.data);
        sendMail(req,res,function(){
            console.log(__dirname);
            //res.redirect("/feedback.html?"+req.body.c_name);
//            res.sendFile(__dirname+'feedback.html',req, function () {
//                console.log("kl kl kl kl kl");
//            });
        });

    })
}
