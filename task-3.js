class Storage {
    constructor(items = []){
        this.items = items;
    }
    getItems(){
        return this.items;  
    }

   addItem(item){
    items.push(item);
   }
   removeItem(item){
       
       for (let i = 0; i < items.length; i ++) {
           if(items[i] === item){
              items.splice(i, 1);
           }
       }
               
           
       }
   }



const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
  ]);
  
  const items = storage.getItems();
  console.table(items);

  storage.addItem('Дроид');
  console.table(storage.items); 
  
  storage.removeItem('Пролонгер');
  console.table(storage.items); 