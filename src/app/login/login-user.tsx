import React from "react";

export async function loginUser(data: FormData) {
  "use server";

  console.log(data);
  const name = data.get("name")?.valueOf();
  const email = data.get("email")?.valueOf();
}
