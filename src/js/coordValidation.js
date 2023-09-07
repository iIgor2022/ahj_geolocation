export default function coordValidation(input) {
  let data = input;
  const regularForCoords =
    /^[-—–−-]?[0-9]{1,2}\.[0-9]+, [-—–−-]?[0-9]{1,2}\.[0-9]+/;
  if (data.includes("[") && data.includes("]")) {
    data = data.slice(data.indexOf("[") + 1, data.indexOf("]"));
  }

  if (data.includes(" ")) {
    if (regularForCoords.test(data)) return;
    return false;
  }

  const latitude = data.slice(0, data.indexOf(","));
  const longitude = data.slice(data.indexOf(",") + 1);
  data = `${latitude}, ${longitude}`;

  if (regularForCoords.test(data)) return data;
  return false;
}
