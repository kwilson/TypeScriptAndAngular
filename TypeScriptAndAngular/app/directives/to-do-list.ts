/// <reference path="../_all.ts" />
module TypeScriptAndAngular.Directives {
    export interface IToDoListScope {
        name: string
    }

    export function toDoList(): ng.IDirective {
         return {
            restrict: "E",
            scope: {
                name: "@"
            },
            controller: Controllers.ToDoListController,
            controllerAs: "vm",
            templateUrl: "./app/views/to-do-list.html",
            replace: true
        }
     }
} 