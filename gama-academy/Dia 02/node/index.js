// console.log(process.env.NODE_ENV === "development" ? "Estou em desenvolvimento" : "Cuidado! estou em produção");

if(process.env.NODE_ENV !== "development"){
    throw new Error("CUIDADO! ESTOU EM PRODUÇÃO");
}