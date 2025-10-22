import List from "./models/List";
import ListItem from "./models/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = (): void => {
  console.log('init!');
  const listInstance = List.instance;
  const listTemplateInstance = ListTemplate.instance;
  const itemForm = document.getElementById('form') as HTMLFormElement;

  itemForm.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault();

    // 새 item Text
    const inputEl = document.getElementById('item-input') as HTMLInputElement;
    const newText = inputEl.value.trim();
    if (!newText.length)  
      return;
    inputEl.value = "";

    // 새 item ID
    const itemId = listInstance.list.length
      ? parseInt(listInstance.list[listInstance.list.length - 1].id) + 1
      : 1;

    // 새 item 생성
    const newItem = new ListItem(itemId.toString(), newText);

    // list에 새 item 넣기
    listInstance.addItem(newItem);

    listTemplateInstance.render(listInstance);
  })

  const clearItemsEl = document.getElementById('clear-items-btn') as HTMLButtonElement;
  clearItemsEl.addEventListener('click', () => {
    listInstance.clearList();
    listTemplateInstance.clear();
  })

  // 초기 데이터 load
  listInstance.load();
  
  // 생성된 데이터를 이용해서 화면에 디스플레이
  listTemplateInstance.render(listInstance);
}

initApp();