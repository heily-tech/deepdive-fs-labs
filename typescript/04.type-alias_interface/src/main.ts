/* Interface */
interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

const bear1: Animal = {
    name: 'honey bear',
    // honey: true
}
const bear2: Bear = {
    name: 'honey bear',
    honey: true
}


/* Type */
type Animal2 = {
    name: string;
}

type Bear2 = Animal2 & {
    honey: boolean;
}

const bear3: Animal2 = {
    name: 'honey bear',
    // honey: true
}
const bear4: Bear2 = {
    name: 'honey bear',
    honey: true
}
