function gerarQrCode() {
   var input =  document.querySelector('textarea').value
   var googleChartApi = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl='
   var qrcode = googleChartApi + encodeURIComponent(input)
   document.querySelector('#qrCodeImage').src = qrcode
}