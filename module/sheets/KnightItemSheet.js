export default class KnightItemSheet extends ItemSheet {
   
    get template (){
        return `systems/Knight/templates/sheets/${this.item.data.type}-sheet.html`;    
    }
    getData(){
        const data = super.getData();

        data.config= CONFIG.KnightItemSheet

        return data;

    }
}

