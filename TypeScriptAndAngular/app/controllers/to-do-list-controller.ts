 /// <reference path="../_all.ts" />
module TypeScriptAndAngular.Controllers {

    export class ToDoListController {
        name: string;
        listItems: ListItem[];

        newItemName: string;

        public static $inject = [
            "$scope"
        ];

        constructor(isolateScope: Directives.IToDoListScope) {
            this.name = isolateScope.name;
            this.listItems = [];
        }

        save() {
            if (this.newItemName && this.newItemName.length > 0) {
                var newItem = new ListItem(this.newItemName);
                this.listItems.push(newItem);

                this.newItemName = null;
            }
        }

        toggle(listItem: ListItem): boolean {
            listItem.isComplete = !listItem.isComplete;
            return listItem.isComplete;
        }
    }
}