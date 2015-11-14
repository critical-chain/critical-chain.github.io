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
            template: "\n    <section class=\"sample-app-content\">\n      <nav>\n        <a [router-link]=\"['/Home']\">Home</a>\n        <a [router-link]=\"['/About']\">About</a>\n        <a [router-link]=\"['/Estimation']\">Estimation</a>\n      </nav>\n\n      <router-outlet></router-outlet>\n    </section>\n  ",
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwL2FwcC50cyJdLCJuYW1lcyI6WyJBcHBDbXAiLCJBcHBDbXAuY29uc3RydWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseUJBQTJDLG1CQUFtQixDQUFDLENBQUE7QUFDL0QsdUJBR08saUJBQWlCLENBQUMsQ0FBQTtBQUd6QixxQkFBc0IsY0FBYyxDQUFDLENBQUE7QUFDckMsc0JBQXVCLGdCQUFnQixDQUFDLENBQUE7QUFDeEMsMkJBQWtDLDBCQUEwQixDQUFDLENBQUE7QUFFN0QsMEJBQXVCLDBCQUEwQixDQUFDLENBQUE7QUFFbEQ7SUFBQUE7SUF3RHFCQyxDQUFDQTtJQXhEdEJEO1FBQUNBLG9CQUFTQSxDQUFDQTtZQUNUQSxRQUFRQSxFQUFFQSxLQUFLQTtZQUNmQSxZQUFZQSxFQUFFQSxDQUFDQSxvQkFBUUEsQ0FBQ0E7WUFDeEJBLFFBQVFBLEVBQUVBLHVTQVVUQTtZQUNEQSxNQUFNQSxFQUFFQSxDQUFDQSx5c0JBaUNSQSxDQUFDQTtZQUNGQSxhQUFhQSxFQUFFQSw0QkFBaUJBLENBQUNBLElBQUlBO1lBQ3JDQSxVQUFVQSxFQUFFQSxDQUFDQSwwQkFBaUJBLENBQUNBO1NBQ2hDQSxDQUFDQTtRQUNEQSxvQkFBV0EsQ0FBQ0E7WUFDWEEsRUFBRUEsSUFBSUEsRUFBRUEsR0FBR0EsRUFBRUEsU0FBU0EsRUFBRUEsY0FBT0EsRUFBRUEsRUFBRUEsRUFBRUEsTUFBTUEsRUFBRUE7WUFDN0NBLEVBQUVBLElBQUlBLEVBQUVBLFFBQVFBLEVBQUVBLFNBQVNBLEVBQUVBLGdCQUFRQSxFQUFFQSxFQUFFQSxFQUFFQSxPQUFPQSxFQUFFQTtZQUNwREEsRUFBRUEsSUFBSUEsRUFBRUEsYUFBYUEsRUFBRUEsU0FBU0EsRUFBRUEsZ0NBQW1CQSxFQUFFQSxFQUFFQSxFQUFFQSxZQUFZQSxFQUFDQTtTQUN6RUEsQ0FBQ0E7O2VBQ29CQTtJQUFEQSxhQUFDQTtBQUFEQSxDQXhEckIsQUF3RHNCQSxJQUFBO0FBQVQsY0FBTSxTQUFHLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAvYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9hbmd1bGFyMic7XG5pbXBvcnQge1xuICBSb3V0ZUNvbmZpZyxcbiAgUk9VVEVSX0RJUkVDVElWRVNcbn0gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbi8vIGltcG9ydCB7SFRUUF9CSU5ESU5HU30gZnJvbSAnaHR0cC9odHRwJztcblxuaW1wb3J0IHtIb21lQ21wfSBmcm9tICcuLi9ob21lL2hvbWUnO1xuaW1wb3J0IHtBYm91dENtcH0gZnJvbSAnLi4vYWJvdXQvYWJvdXQnO1xuaW1wb3J0IHtFc3RpbWF0aW9uQ29tcG9uZW50fSBmcm9tICcuLi9lc3RpbWF0aW9uL2VzdGltYXRpb24nO1xuXG5pbXBvcnQge05hbWVMaXN0fSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9uYW1lX2xpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAnLFxuICB2aWV3QmluZGluZ3M6IFtOYW1lTGlzdF0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJzYW1wbGUtYXBwLWNvbnRlbnRcIj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxhIFtyb3V0ZXItbGlua109XCJbJy9Ib21lJ11cIj5Ib21lPC9hPlxuICAgICAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvQWJvdXQnXVwiPkFib3V0PC9hPlxuICAgICAgICA8YSBbcm91dGVyLWxpbmtdPVwiWycvRXN0aW1hdGlvbiddXCI+RXN0aW1hdGlvbjwvYT5cbiAgICAgIDwvbmF2PlxuXG4gICAgICA8cm91dGVyLW91dGxldD48L3JvdXRlci1vdXRsZXQ+XG4gICAgPC9zZWN0aW9uPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCB7XG4gICAgICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBoMSB7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGgyIHtcbiAgICAgIGNvbG9yOiAjOTkwMDAwO1xuICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgcCxcbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IG5hdiB7XG4gICAgICBwYWRkaW5nOiAzMHB4O1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGxpLFxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgcCB7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbiAgICAuc2FtcGxlLWFwcC1jb250ZW50IGxpIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBDb25zb2xhcztcbiAgICB9XG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBuYXYgYSB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgfVxuICAgIC5zYW1wbGUtYXBwLWNvbnRlbnQgaW5wdXQsXG4gICAgLnNhbXBsZS1hcHAtY29udGVudCBidXR0b24ge1xuICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbiAgYF0sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGRpcmVjdGl2ZXM6IFtST1VURVJfRElSRUNUSVZFU11cbn0pXG5AUm91dGVDb25maWcoW1xuICB7IHBhdGg6ICcvJywgY29tcG9uZW50OiBIb21lQ21wLCBhczogJ0hvbWUnIH0sXG4gIHsgcGF0aDogJy9hYm91dCcsIGNvbXBvbmVudDogQWJvdXRDbXAsIGFzOiAnQWJvdXQnIH0sXG4gIHsgcGF0aDogJy9lc3RpbWF0aW9uJywgY29tcG9uZW50OiBFc3RpbWF0aW9uQ29tcG9uZW50LCBhczogJ0VzdGltYXRpb24nfVxuXSlcbmV4cG9ydCBjbGFzcyBBcHBDbXAge31cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
