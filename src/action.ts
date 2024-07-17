"use server";
export async function testAction(prevState: any, formData: FormData) {
  const email = formData.get("email");
  console.log(email);
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();
  // console.log(data);

  return data;
}
