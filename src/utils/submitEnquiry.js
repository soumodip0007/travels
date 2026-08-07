const URL =
  "https://script.google.com/macros/s/AKfycbwSW1J3ttQ4hMVLQDtWBbVtKp8WxR-CVVVp7GrvX48zChLWfqgGr3pjdTJ8xzTLL2FM/exec";

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