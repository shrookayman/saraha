import nodemailer from "nodemailer"
import { emailTemplate } from "./emailTemplate.js";
import jwt from "jsonwebtoken"

export const sendEmail = async (useremail)=>{
    const transporter = nodemailer.createTransport({
      service : "gmail",
      auth: {
        user: "shrookayman617@gmail.com",
        pass: "ayzohnftzruscpwz",
      },
    });

    let token = jwt.sign({useremail} ,process.env.JWT_KEY)

    const info = await transporter.sendMail({
      from: '"From Sara7a" <shrookayman617@gmail.com>', // sender address
      to: useremail, // list of receivers
      subject: "Hello ✔", // Subject line
      html: emailTemplate(token), // html body
    });




}
