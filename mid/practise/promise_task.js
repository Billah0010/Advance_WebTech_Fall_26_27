function getStudentResult(){
    return new Promise((resolve,reject)=> {
        console.log("Fetching student result...");
        setTimeout(()=>{
            const success = true;
            if(success){

                resolve(
                    {
                    id:"23-53176-3",
                    name:"Tamanna Billah",
                    department:"CSE",
                    cgpa:3.59
                    }
                );
            }
            else{
                reject("Failed to fetch student result");

            }
        },3000);
    });
}
async function displayResult(){
    console.log("Fetching student result...");
    try{
        const student = await getStudentResult();
        console.log("Student result received:", student);
    }
    catch(error){
        console.error("Error fetching student result:", error);
    }
}
displayResult();


