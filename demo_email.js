var nodemailer = require('nodemailer');
const { PassThrough } = require('stream');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mamae6881@gmail.com',
    pass: 'loxq zdao nakc mbgq'
  }
});

var mailOptions = {
  from: 'mamae6881@gmail.com',
  to: 'joedio.borges@ifc.edu.br',
  subject: 'Sending Email using Node.js Henrique de Oliveira wagner',
  text: 'loxq zdao nakc mbgq'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 
