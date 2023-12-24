const API_END_POINT = "https://todo-api.roto.codes/mino/1";

export const request = async (url, options) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        "x-username": "mino",
      },
    });
    if (!res.ok) {
      throw new Error("호출 실패");
    }
    return res.json();
  } catch (e) {
    alert(e.message);
  }
};

export async function addNewData(title, content, isCompleted) {
  await request("", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      todos: [{ content: content, isCompleted: isCompleted }],
    }),
  });
}

addNewData("왜", "안돼", true);
