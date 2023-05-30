import fetch from 'isomorphic-fetch';

async function blobSourceGen(url: string) {
  try {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type');
    const blob = new Blob([arrayBuffer], { type: contentType !== null ? contentType : undefined });
    const BLOB_URL = URL.createObjectURL(blob);
    return BLOB_URL;
  } catch (error) {
    throw error;
  }
}

export default blobSourceGen;
