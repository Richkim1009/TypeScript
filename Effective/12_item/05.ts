asynce function checkedFetch(input: RequestInfo, init?: RequestInit) {
  const response = await fetch(input, init);
  if(!response.ok) {
    throw new Error('Request failed: ' + response.status);
  }
  return response;
}

const checkedFetch2: typeof fetch = async (input, init) => {
  const response = await fetch(input, init);
  if(!(await response).ok) {
    throw new Error('Request failed: ' + response.status);
  }
  return response;
}
