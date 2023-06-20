const generatePDF=async (name)=> {
    const {PDFDocument, rgb }=PDFLib;  

   const exBytes=  await fetch("./crt.pdf").then(res=> {
   return resizeTo.arrayBuffer();
 } );

 const exFont= await fetch("./Sanchez-Regular.ttf").then(res=>{
   return res.arrayBuffer()
 });




 const PdfDoc = await PDFDocument.load(exBytes);

 pdfDoc.registerFontkit(fontKit);
 const myFont=await pdfDoc.embedFont(exFont);

const pages=pdfDoc.getPages();
const firstPg = pages[0]

firstPg.drawText( name,{
  x: 300,
  y: 200,

})

 const uri = await pdfDoc.saveAsBase64({dataUri : true})
 document.querySelector("#mypdf").src=uri;
};

generatePDF("Advance Tech")