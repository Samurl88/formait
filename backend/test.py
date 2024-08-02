from langchain.document_loaders import PyPDFLoader
from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain
import xlrd  
import csv 
import pandas as pd 

def convertToTemplate():
    # read an excel file and convert  
    # into a dataframe object 
    df = pd.DataFrame(pd.read_excel("./template.xlsx")) 
    
    # show the dataframe 
    # print(df)
    for row in df:
        print(row)
    # df.to_csv('out.csv', index=False)  
    with open('out.csv', 'w', newline='') as file:
        writer = csv.writer(file)
        field = ["name", "age", "country"]
        
        writer.writerow(field)
        writer.writerow(["Oladele Damilola", "40", "Nigeria"])
        writer.writerow(["Alina Hricko", "23", "Ukraine"])
        writer.writerow(["Isabel Walter", "50", "United Kingdom"])
    return
    #Locate your PDF here.


    pdf="./thing.pdf"
    #Load the PDF
    loader = PyPDFLoader(pdf)
    documents = loader.load()

    # api_key = "sk-?????"
    llm = OpenAI(model_name="gpt-4o")
    chain = load_qa_chain(llm,verbose=True)
    question = "Make a csv file with data from this pdf"
    response = chain.run(input_documents=documents, question=question)

    print(response)

convertToTemplate()