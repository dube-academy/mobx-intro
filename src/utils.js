export async function fetchBtcPrice() {
  const req = await fetch('https://api.kraken.com/0/public/Ticker?pair=XBTUSDT')
  const price = (await req.json()).result.XBTUSDT.a[0]
  return parseFloat(price)
}
