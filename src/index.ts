import { UsersService } from "./scripts/UserService";

const usersService = new UsersService();
const cursorDiv = document.querySelector(".forCursor") as HTMLDivElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const input = document.getElementById("userId") as HTMLInputElement;
const loading = document.getElementById("loading") as HTMLDivElement;

btn.addEventListener("click", async () => {
  loading.classList.remove(`hidden`);
  btn.classList.add(`unclickable`);
  cursorDiv.classList.add(`changeForUnclickable`);
  await usersService
    .getUserById(+input.value)
    .then((x) => (x ? console.log(x) : console.log(`Incorect ID`)));
  loading.classList.add(`hidden`);
  cursorDiv.classList.remove(`changeForUnclickable`);
  btn.classList.remove(`unclickable`);
});
