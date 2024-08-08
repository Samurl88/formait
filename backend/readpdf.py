import re
import pdfplumber

# Path to the PDF file
pdf_path = 'unfi.pdf'

# Function to extract text from PDF
def extract_text_from_pdf(pdf_path):
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text()
    return text

# Function to extract information using regex
def extract_info(text):
    info = {}
    
    # Extract PO Number
    po_number = re.search(r'P\.O\. #\s*(\d+-\d+)', text)
    if po_number:
        info['PO Number'] = po_number.group(1)
    
    # Extract Vendor Information
    vendor = re.search(r'Vendor:\s*(.+?)\n(.+?)\n(.+?)\n(.+)', text, re.DOTALL)
    print(vendor.group(1))
    quit()
    if vendor:
        info['Vendor Name'] = vendor.group(1)
        info['Vendor Address'] = vendor.group(2)
        info['Vendor Phone'] = vendor.group(3)
        info['Vendor Contact'] = vendor.group(4)
    
    # Extract Buyer Information
    buyer = re.search(r'Buyer\s*\*\s*(.+)', text)
    if buyer:
        info['Buyer'] = buyer.group(1)

    # Extract Ship To Information
    ship_to = re.search(r'Ship\s*To:\s*(.+?)\n(.+)', text, re.DOTALL)
    if ship_to:
        info['Ship To'] = ship_to.group(1)
        info['Ship Address'] = ship_to.group(2)
    
    # Extract FOB Terms
    fob_terms = re.search(r'F\.O\.B\. Terms\s*(.+)', text)
    if fob_terms:
        info['FOB Terms'] = fob_terms.group(1)
    
    return info

# Extract text from PDF
text = extract_text_from_pdf(pdf_path)

# Extract information
extracted_info = extract_info(text)

# Print the extracted information
for key, value in extracted_info.items():
    print(f"{key}: {value}")