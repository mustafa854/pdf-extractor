# Fullstack developer task:

## Project Requirement:

You are tasked to develop a web application that allows users to upload a PDF file and extract certain pages from the PDF to create a new PDF. The user should be able to select which pages they want to include in the new PDF.


#### [Live Demo](https://pdf-extractor-bice.vercel.app/) | **Frontend:** [Github Repo](https://github.com/mustafa854/pdf-extractor) | **Backend:** [Github Repo](https://github.com/mustafa854/pdfCreator-backend)


# Development Tasks and Status:

## Frontend (Any React framework):

### Technologies Used: 
- Typescript, 
- NextJS, 
- ReactJS,
- react-pdf,
- TailwindCSS,
- ShadCN,
- Axios 

### Task Status:
✔️ Implement a simple form to upload a PDF file. The form should include validation to ensure that only PDF files are uploaded.  
✔️ Once the file is uploaded, display a visual representation of all pages in the PDF.  
✔️ Allow users to select which pages they want to extract from the original PDF. This can be achieved through checkboxes or a similar UI element associated with each page.  
✔️ Include a button or functionality to create the new PDF based on the selected pages. Once completed, offer a download link to the user for the newly created PDF.  
✔️ All pages should be responsive and should work from mobile devices.  

## Backend (Any Node.js framework):

### Technology Used: 
- JS,
- NodeJS,
- ExpressJS,
- Multer,
- Mongoose,
- pdf-lib,
- Cors,
- Dotenv 

### Task Status:
✔️ Create a REST API to handle the upload of the PDF file and store it on the server.  
✔️ Create a REST API to retrieve the stored PDF file for display.  
✔️ Implement a REST API to extract the selected pages from the original PDF and create a new PDF. You can use any PDF library to achieve this in the Node.js framework you use.  
✔️ Ensure all APIs work correctly and handle potential errors.  


## Bonus Tasks:

### Task Status:
❌ Add frontend and backend tests.  
✔️ Add a live hosted version of the app  
🚧 Implement user authentication so that each user can have their own set of PDF files.  
❌ Allow the user to rearrange the order of selected pages in the new PDF.  