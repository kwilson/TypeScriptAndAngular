/// <reference path="_all.ts" />
module TypeScriptAndAngular {
    angular.module("tsAngularApp", [])
        .controller(TypeScriptAndAngular.Controllers)
        .directive(TypeScriptAndAngular.Directives);
}