function convertToWord() {
    var form = document.getElementById('uploadForm');
    var fileInput = document.getElementById('pdfFile');
    var resultDiv = document.getElementById('result');
    
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
  
    xhr.open('POST', 'pdf_to_word_converter.php', true);
    xhr.onload = function() {
      if (xhr.status === 200) {
        resultDiv.innerHTML = '<a href="' + xhr.responseText + '" download>Download Word file</a>';
      } else {
        resultDiv.innerHTML = 'Error occurred while converting PDF to Word.';
      }
    };
  
    xhr.send(formData);
  }
  