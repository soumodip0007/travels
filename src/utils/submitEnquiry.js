const URL =
  "https://script.google.com/macros/s/AKfycbxqRfmsicNREd0tFOzNXsRUbZb60aCLYzOQT9EYFhMe3D7VED3op_VDKgoyAXiGXbzF/exec";

export async function submitEnquiry(data) {
  await fetch(URL, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return true;
}