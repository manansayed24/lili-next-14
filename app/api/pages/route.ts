// import formidable from 'formidable';
// import fs from 'fs';
// import pdfParse from 'pdf-parse';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//     console.log('zxcwewe:---',{req,res})
//   const form = new formidable.IncomingForm();
  
//   form.parse(req, async (err, fields, files) => {
//     if (err) {
//       res.status(500).json({ error: 'Error parsing form' });
//       return;
//     }

//     const resumePath = files.resume.filepath;
//     const resumeData = fs.readFileSync(resumePath);
//     const pdfData = await pdfParse(resumeData);

//     const extractedText = pdfData.text;

//     const additionalInfo = fields.additionalInfo;

//     // Send extracted information to OpenAI API
//     const questions = await getInterviewQuestions(extractedText, additionalInfo);

//     res.status(200).json({ questions });
//   });
// }

// async function getInterviewQuestions(resumeText, additionalInfo) {
//   const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//     },
//     body: JSON.stringify({
//       prompt: `Extracted resume text: ${resumeText}\n\nAdditional information: ${additionalInfo}\n\nGenerate interview questions based on the above information.`,
//       max_tokens: 150,
//     }),
//   });

//   const data = await response.json();
//   return data.choices[0].text.trim();
// }
