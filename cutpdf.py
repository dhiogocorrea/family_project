import PyPDF2

# Open the PDF file in read-binary mode
with open('input.pdf', 'rb') as file:
    # Create a PDF reader object
    reader = PyPDF2.PdfReader(file)

    # Get the total number of pages in the PDF file
    num_pages = len(reader.pages)

    # Specify the starting page to extract
    start_page = 1322

    # Create a PDF writer object
    writer = PyPDF2.PdfWriter()

    # Loop through the pages and add them to the writer object
    for page_num in range(start_page - 1, num_pages):
        writer.add_page(reader.pages[page_num])

    # Open the output file in write-binary mode
    with open('output.pdf', 'wb') as output_file:
        # Write the extracted pages to the output file
        writer.write(output_file)
