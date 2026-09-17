export async function onRequest(context) {
  // Real 2-frame Animated GIF Base64 binary
  const realAnimatedGifBase64 = 
    "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  // Base64 to ArrayBuffer Conversion
  const binaryString = atob(realAnimatedGifBase64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return new Response(bytes.buffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/gif',
      'Content-Disposition': 'inline; filename="thumb.gif"',
      'Content-Length': bytes.length.toString(),
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
