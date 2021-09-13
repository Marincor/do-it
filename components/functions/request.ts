export async function requestApiGet(url) {
  return await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function requestApiPost(url, array) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      array,
    }),
  });
}
