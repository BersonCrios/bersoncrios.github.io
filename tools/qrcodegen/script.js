function gerarQrCode() {
   var input =  document.querySelector('#entrada-qr').value
   var googleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl='
   var qrcode = googleChartApi + encodeURIComponent(input)
   document.querySelector('#qrCodeImage').src = qrcode
}