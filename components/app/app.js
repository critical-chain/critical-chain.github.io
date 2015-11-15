var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var home_1 = require('../home/home');
var about_1 = require('../about/about');
var estimation_1 = require('../estimation/estimation');
var name_list_1 = require('../../services/name_list');
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        angular2_1.Component({
            selector: 'app',
            viewBindings: [name_list_1.NameList],
            template: "\n    <section class=\"sample-app-content\">\n      <nav>\n        <a [router-link]=\"['/Home']\">Home</a>\n        <a [router-link]=\"['/About']\">About</a>\n        <a [router-link]=\"['/Estimation']\">Estimations</a>\n      </nav>\n\n      <router-outlet></router-outlet>\n    </section>\n  ",
            styles: ["\n    .sample-app-content {\n      font-family: Verdana;\n    }\n    .sample-app-content h1 {\n      color: #999;\n      font-size: 3em;\n    }\n    .sample-app-content h2 {\n      color: #990000;\n      font-size: 2em;\n    }\n    .sample-app-content p,\n    .sample-app-content nav {\n      padding: 30px;\n    }\n    .sample-app-content li,\n    .sample-app-content p {\n      font-size: 1.2em;\n    }\n    .sample-app-content li {\n      font-family: Consolas;\n    }\n    .sample-app-content nav a {\n      display: inline-block;\n      margin-right: 15px;\n    }\n    .sample-app-content input,\n    .sample-app-content button {\n      padding: 5px;\n      font-size: 1em;\n      outline: none;\n    }\n  "],
            encapsulation: angular2_1.ViewEncapsulation.None,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.HomeCmp, as: 'Home' },
            { path: '/about', component: about_1.AboutCmp, as: 'About' },
            { path: '/estimation', component: estimation_1.EstimationComponent, as: 'Estimation' }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQTJDLG1CQUFtQixDQUFDLENBQUE7QUFDL0QsdUJBR08saUJBQWlCLENBQUMsQ0FBQTtBQUd6QixxQkFBc0IsY0FBYyxDQUFDLENBQUE7QUFDckMsc0JBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFDeEMsMkJBQWtDLDBCQUEwQixDQUFDLENBQUE7QUFFN0QsMEJBQXVCLDBCQUEwQixDQUFDLENBQUE7QUFFbEQ7SUFBQUE7SUF3RHFCQyxDQUFDQTtJQXhEdEJEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxZQUFZQSxFQUFFQSxDQUFDQSxvQkFBUUEsQ0FBQ0E7WUFDeEJBLFFBQVFBLEVBQUVBLHdTQVVUQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSx5c0JBaUNSQSxDQUFDQTtZQUNGQSxhQUFhQSxFQUFFQSw0QkFBaUJBLENBQUNBLElBQUlBO1lBQ3JDQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO1NBQ2hDQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEsY0FBT0EsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7WUFDN0NBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGdCQUFRQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNwREEsRUFBRUEsSUFBSUEsRUFBRUEsYUFBYUEsRUFBRUEsU0FBU0EsRUFBRUEsZ0NBQW1CQSxFQUFFQSxFQUFFQSxFQUFFQSxZQUFZQSxFQUFDQTtTQUN6RUEsQ0FBQ0E7O2VBQ29CQTtJQUFEQSxhQUFDQTtBQUFEQSxDQXhEckIsQUF3RHNCQSxJQUFBO0FBQVQsY0FBTSxTQUFHLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1xuICBSb3V0ZUNvbmZpZyxcbiAgUk9VVEVSX0RJUkVDVElWRVNcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbi8vIGltcG9ydCB7SFRUUF9CSU5ESU5HU30gZnJvbSAnaHR0cC9odHRwJztcblxuaW1wb3J0IHtIb21lQ21wfSBmcm9tICcuLi9ob21lL2hvbWUnO1xuaW1wb3J0IHtBYm91dENtcH0gZnJvbSAnLi4vYWJvdXQvYWJvdXQnO1xuaW1wb3J0IHtFc3RpbWF0aW9uQ29tcG9uZW50fSBmcm9tICcuLi9lc3RpbWF0aW9uL2VzdGltYXRpb24nO1xuXG5pbXBvcnQge05hbWVMaXN0fSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYW1lX2xpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICB2aWV3QmluZGluZ3M6IFtOYW1lTGlzdF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzYW1wbGUtYXBwLWNvbnRlbnRcIj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy9Ib21lJ11cIj5Ib21lPC9hPlxuICAgICAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvQWJvdXQnXVwiPkFib3V0PC9hPlxuICAgICAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvRXN0aW1hdGlvbiddXCI+RXN0aW1hdGlvbnM8L2E+XG4gICAgICA8L25hdj5cblxuICAgICAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQge1xuICAgICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgaDEge1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBoMiB7XG4gICAgICBjb2xvcjogIzk5MDAwMDtcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IHAsXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBuYXYge1xuICAgICAgcGFkZGluZzogMzBweDtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBsaSxcbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IHAge1xuICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBsaSB7XG4gICAgICBmb250LWZhbWlseTogQ29uc29sYXM7XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgbmF2IGEge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGlucHV0LFxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgYnV0dG9uIHtcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG4gIGBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAgeyBwYXRoOiAnLycsIGNvbXBvbmVudDogSG9tZUNtcCwgYXM6ICdIb21lJyB9LFxuICB7IHBhdGg6ICcvYWJvdXQnLCBjb21wb25lbnQ6IEFib3V0Q21wLCBhczogJ0Fib3V0JyB9LFxuICB7IHBhdGg6ICcvZXN0aW1hdGlvbicsIGNvbXBvbmVudDogRXN0aW1hdGlvbkNvbXBvbmVudCwgYXM6ICdFc3RpbWF0aW9uJ31cbl0pXG5leHBvcnQgY2xhc3MgQXBwQ21wIHt9XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
