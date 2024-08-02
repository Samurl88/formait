from flask import Flask
from flask_cors import CORS
from pypdf import PdfReader
from openai import OpenAI
from langchain.document_loaders import PyPDFLoader
from langchain.llms import OpenAI
from langchain.chains.question_answering import load_qa_chain



client = OpenAI()

app = Flask(__name__)
CORS(app)

def sendToLLM2(pdf):
    #Load the PDF
    loader = PyPDFLoader(pdf)
    documents = loader.load()

    api_key = "sk-?????"
    llm = OpenAI(openai_api_key=api_key)
    chain = load_qa_chain(llm,verbose=True)
    question = input("Enter your question here : ")
    response = chain.run(input_documents=documents, question=question)
    print(response) 
    return response
def sendToLLM(data):
    completion = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        # {"role": "system", "content": "You are a poetic assistant, skilled in explaining complex programming concepts with creative flair."},
        {"role": "user", "content": data}
    ]
    )
    return str(completion.choices[0].message.content)


def formatPDF():
    file = "paper.pdf"


@app.route("/", methods=['GET', 'POST'])
def hello_world():
    return sendToLLM2("./thing.pdf")


app.run(debug=True)
