/// <reference path="../_all.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jasmine/jasmine.d.ts" />
module TypeScriptAndAngular.Controllers.Tests {
    describe("ToDoListController Tests", () => {
        var listScopeMock: Directives.IToDoListScope;

        describe("Constructor Tests", () => {

            it("Constructor sets defaults as expected", () => {
                // Arrange
                var name = "A List Name";
                listScopeMock = {
                    name: name
                }

                // Act
                var ctrl = new Controllers.ToDoListController(listScopeMock);

                // Assert
                expect(ctrl.name).toEqual(name);
                expect(ctrl.listItems).toBeDefined();
                expect(ctrl.newItemName).toBeUndefined();
                expect(ctrl.listItems.length).toBe(0);
            });
        });

        describe("Save Tests", () => {
            it("Save does nothing if no task name has been entered", () => {
                // Arrange
                var ctrl = new Controllers.ToDoListController(listScopeMock);

                // Act
                ctrl.save();

                // Assert
                expect(ctrl.listItems.length).toBe(0);
            });

            it("Save does nothing if task name is empty string", () => {
                // Arrange
                var ctrl = new Controllers.ToDoListController(listScopeMock);
                ctrl.newItemName = "";

                // Act
                ctrl.save();

                // Assert
                expect(ctrl.listItems.length).toBe(0);
            });

            it("Save adds a new item with the specified name", () => {
                // Arrange
                var taskName = "A new task";
                var ctrl = new Controllers.ToDoListController(listScopeMock);
                ctrl.newItemName = taskName;

                // Act
                ctrl.save();

                // Assert
                expect(ctrl.listItems.length).toBe(1);
                expect(ctrl.listItems[0].name).toBe(taskName);
            });
        });

        describe("Toggle Tests", () => {
            it("Toggle sets complete to FALSE if it was originally TRUE", () => {
                // Arrange
                var item = new ListItem("A new item", true);
                var ctrl = new Controllers.ToDoListController(listScopeMock);

                // Act
                ctrl.toggle(item);

                // Assert
                expect(item.isComplete).toBe(false);
            });

            it("Toggle sets complete to TRUE if it was originally FALSE", () => {
                // Arrange
                var item = new ListItem("A new item", false);
                var ctrl = new Controllers.ToDoListController(listScopeMock);

                // Act
                ctrl.toggle(item);

                // Assert
                expect(item.isComplete).toBe(true);
            });
        });
    });
}