export async function requestApiGet(url) {
  const res = await fetch(url);
  const toDos = await res.json();

  return toDos;
}

export async function requestApiPost(url, array) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      array,
    }),
  });
}

export async function deleteOnClick(e) {
  const url = "/api/tasklist";
  const currentId = JSON.parse(e.target.parentElement.parentElement.id);
  const currentTr = e.target.parentElement.previousSibling;
  const currentButtons = e.target.parentElement;

  const res = await fetch(url);

  const currentArr = await res.json();

  const filterArr = currentArr.find((item) => item.id === currentId);

  const index = currentArr.indexOf(filterArr);
  if (index > -1) {
    currentArr.splice(index, 1);
  }

  await fetch(url, {
    method: "DELETE",

    body: JSON.stringify(currentArr),
  });

  currentTr.remove();
  currentButtons.remove();
}
