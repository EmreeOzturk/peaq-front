export async function testAction(formData: FormData) {
  const email = formData.get("email");
  console.log(email);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  console.log(data);

  return data;
}
