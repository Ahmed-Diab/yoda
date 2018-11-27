(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./userModule/user.module": [
		"./src/app/userModule/user.module.ts",
		"userModule-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponant", function() { return routingComponant; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/login/login.component */ "./src/app/component/login/login.component.ts");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/component/register/register.component.ts");
/* harmony import */ var _sharedModule_error_error_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sharedModule/error/error.component */ "./src/app/sharedModule/error/error.component.ts");
/* harmony import */ var _guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth-guard.guard */ "./src/app/guards/auth-guard.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { animation: 'login' } },
    { path: '', redirectTo: 'login', pathMatch: 'full', data: { animation: 'login' } },
    { path: 'register', component: _component_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], data: { animation: 'register' } },
    { path: 'user', loadChildren: './userModule/user.module#UserModule', data: { animation: 'register' }, canActivate: [_guards_auth_guard_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: '**', component: _sharedModule_error_error_component__WEBPACK_IMPORTED_MODULE_4__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponant = [
    _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    _component_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar *ngIf=\"_auth.loggedIn()\"> </app-navbar>\n<div class=\"container\" [@routeAnimation]=\"getDepth(myOutlet)\">\n    <router-outlet #myOutlet='outlet'></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-list {\n  background-color: aquamarine; }\n  mat-grid-list mat-grid-tile app-navbar {\n    width: 100%; }\n  mat-grid-list mat-grid-tile .mat-figure {\n    align-items: start;\n    justify-content: start;\n    background-color: aquamarine; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpYm8vRG9jdW1lbnRzL3dvcmsveW9kYS9mcm9udC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUE0QixFQVkvQjtFQWJEO0lBS1ksWUFDSixFQUFDO0VBTlQ7SUFRWSxtQkFBa0I7SUFDbEIsdUJBQXNCO0lBQ3RCLDZCQUE0QixFQUMvQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLWxpc3R7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcblxuICAgIG1hdC1ncmlkLXRpbGV7XG4gICAgICAgIGFwcC1uYXZiYXJ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICB9XG4gICAgICAgIC5tYXQtZmlndXJle1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG4gICAgICAgIH1cbiAgICB9IFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _module_routerAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/routerAnimation */ "./src/app/module/routerAnimation.ts");
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_services, _auth) {
        this._services = _services;
        this._auth = _auth;
        this.urlPath = 'edfgds';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.getDepth = function (outlet) {
        return outlet.activatedRouteData.animation || null;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_module_routerAnimation__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]]
        }),
        __metadata("design:paramtypes", [_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var _services_http_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/navbar/navbar.component */ "./src/app/component/navbar/navbar.component.ts");
/* harmony import */ var _component_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/register/register.component */ "./src/app/component/register/register.component.ts");
/* harmony import */ var _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sharedModule/shared.module */ "./src/app/sharedModule/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["routingComponant"],
                _component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _component_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                ngx_facebook__WEBPACK_IMPORTED_MODULE_11__["FacebookModule"].forRoot(),
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _services_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"], _services_http_service__WEBPACK_IMPORTED_MODULE_8__["HttpService"], ngx_facebook__WEBPACK_IMPORTED_MODULE_11__["FacebookService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/login/login.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n  <mat-grid-list cols=\"{{cols}}\" rowHeight=\"400px\">\n    <mat-grid-tile>\n      <div class=\"example-container\">\n        <mat-form-field>\n          <input [(ngModel)]=\"user\" matInput placeholder=\"Username or Email\">\n        </mat-form-field>\n        <mat-form-field>\n          <input [(ngModel)]=\"password\" matInput placeholder=\"Password\" [type]=\"!hide ? 'password' : text\" >\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </mat-form-field>\n        <div class=\"text-right\">\n          <button mat-raised-button color=\"primary\" (click)=\"onLogin()\">login</button>\n        </div>\n\n        <!-- <button id=\"googleBtn\" mat-raised-button (click)=\"onLoginByGoogle()\">\n          Login By Google\n        </button>\n        <button mat-raised-button (click)=\"loginWithFB()\">\n          Login By Facebook\n        </button> -->\n        <p class=\"text-right\">\n            <a  [routerLink]=\"[ '/register']\">Register</a>\n        </p>\n</div>\n    </mat-grid-tile>\n    <mat-grid-tile *ngIf=\"isSmall\">\n      <img src=\"./../../../assets/images/yoda.png\" alt=\"login image\">\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/component/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login /deep/mat-grid-list {\n  padding: 20px; }\n  .login /deep/mat-grid-list mat-grid-tile .example-container {\n    box-shadow: 0 0 10px #000;\n    border-radius: 5px;\n    padding: 30px;\n    width: 90%; }\n  .login /deep/mat-grid-list mat-grid-tile .example-container .mat-form-field {\n      width: 100%; }\n  .login /deep/mat-grid-list mat-grid-tile img {\n    box-shadow: 0 0 10px #000;\n    border-radius: 5px;\n    width: 80%;\n    height: 75%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpYm8vRG9jdW1lbnRzL3dvcmsveW9kYS9mcm9udC9zcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsIi9ob21lL2RpYm8vRG9jdW1lbnRzL3dvcmsveW9kYS9mcm9udC9zcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxjQUFhLEVBb0JoQjtFQXRCTDtJQU1nQiwwQkNQRDtJRFFDLG1CQUFrQjtJQUNsQixjQUFhO0lBQ2IsV0FBVSxFQUliO0VBYmI7TUFXb0IsWUFDSixFQUFDO0VBWmpCO0lBZWdCLDBCQ2hCRDtJRGlCQyxtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yJztcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3NoZWFyZCc7XG5cbi5sb2dpbntcbiAgICAvZGVlcC9tYXQtZ3JpZC1saXN0e1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIG1hdC1ncmlkLXRpbGV7XG4gICAgICAgICAgICAuZXhhbXBsZS1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGRhcmtDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIC5tYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGRhcmtDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG59IiwiJGxpZ2h0Q29sb3I6I2ZmZjtcbiRtZENvbG9yOnJnYigxMTYsIDEwNywgMTA3KTtcbiRkYXJrQ29sb3I6IzAwMDsiXX0= */"

/***/ }),

/***/ "./src/app/component/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginComponent = /** @class */ (function () {
    // public onLoginByGoogle() {
    //   gapi.load('auth2', () => {
    //     this.auth2 = gapi.auth2.init({
    //       client_id: '658174647895-g9df94acacvggufiod0rpoujqe6hvera.apps.googleusercontent.com',
    //       // cookiepolicy: 'single_host_origin',
    //       scope: 'profile'
    //     });
    //     this.attachSignin(document.getElementById('googleBtn'));
    //   });
    // }
    // public attachSignin(element) {
    //   this.auth2.attachClickHandler(element, {},
    //     (googleUser) => {
    //       let profile = googleUser.getBasicProfile();
    //       console.log('Token || '   + googleUser.getAuthResponse().id_token);
    //       console.log('ID: '        + profile.getId());
    //       console.log('Name: '      + profile.getName());
    //       console.log('Image URL: ' + profile.getImageUrl());
    //       console.log('Email: '     + profile.getEmail());
    //       //YOUR CODE HERE
    //     }, (error) => {
    //       alert(JSON.stringify(error, undefined, 2)); 
    //     });
    // }
    function LoginComponent(_socket, _auth, _services, fb, _httpServices, _router, _snackBar) {
        var _this = this;
        this._socket = _socket;
        this._auth = _auth;
        this._services = _services;
        this.fb = fb;
        this._httpServices = _httpServices;
        this._router = _router;
        this._snackBar = _snackBar;
        this.cols = 2;
        this.isSmall = true;
        // fb.init({
        //   appId: '1755360681259640',
        //   version: 'v2.9'
        // });
        window.addEventListener('resize', function () {
            if (window.innerWidth <= 778) {
                _this.cols = 1;
                _this.isSmall = false;
            }
            else {
                _this.cols = 2;
                _this.isSmall = true;
            }
        });
        if (window.innerWidth <= 778) {
            this.cols = 1;
            this.isSmall = false;
        }
        else {
            this.isSmall = true;
            this.cols = 2;
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        var log = {
            user: this.user,
            password: this.password
        };
        this._auth.loginUser(log).subscribe(function (res) {
            if (res.success) {
                _this._auth.storeUserData(res.token, res.user);
                _this._router.navigate(['/user']);
            }
            else {
                _this._snackBar.open(res.errMSG, 'Undo', { duration: 3333 });
            }
        }, function (error) {
            _this._snackBar.open(error.message, 'Undo', { duration: 3333 });
        });
    };
    // loginWithFB(){
    //   this.fb.login()
    //   .then((response: LoginResponse) => console.log(response))
    //   .catch((error: any) => console.error('error      ',error));
    // }
    LoginComponent.prototype.ngAfterViewInit = function () {
        // this.onLoginByGoogle();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/component/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/component/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"],
            ngx_facebook__WEBPACK_IMPORTED_MODULE_5__["FacebookService"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/component/navbar/navbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"right-side\">\n    <h2 *ngIf=\"user\" >YODA \n      <a [routerLink]=\"[ '/user']\">\n        <img class=\"username\" src=\"{{url}}/{{user.image}}\" alt=\"{{user.username}} image\">\n        <span class=\"username\">{{user.username}}</span> \n      </a>\n    </h2>\n  </div>\n  <div class=\"d-lg-none ul\">\n    <span>\n      <a (click)=\"goToHome()\">\n        <i class=\"d-lg\">home </i>\n        <mat-icon>home</mat-icon> \n      </a>\n    </span>\n    <span (click)=\"toggleNotifications()\">\n        <i class=\"d-lg\">notifications </i> <mat-icon>notifications</mat-icon>\n        <i *ngIf=\"notLength > 0\">{{notLength}}</i>\n    </span>\n    <!-- <span (click)=\"toggleMessages()\">\n        <i class=\"d-lg\">messages</i>  \n        <mat-icon>message</mat-icon> \n    </span>  -->\n    <span (click)=\"toggleFriendsRequst()\">\n        <i class=\"d-lg\">friends requst</i>  \n        <mat-icon>group</mat-icon>\n        <i *ngIf=\"friendsLength > 0\">{{friendsLength}}</i>\n      </span>\n    <span (click)='logout()'>\n      <i class=\"d-lg\">logout </i>  \n      <mat-icon>logout</mat-icon>\n    </span> \n  </div>\n  <!-- <div class=\"clear-fix\"></div> -->\n\n  <div class=\"d-sm-none ul\">\n      <span>\n        <a [routerLink]=\"[ '/user']\">\n          <mat-icon>home</mat-icon>\n        </a>\n      </span>\n      <span>\n        <a [routerLink]=\"[ '/user/notifications']\">\n          <mat-icon>notifications</mat-icon>\n          <i *ngIf=\"notLength > 0\">{{notLength}}</i>\n        </a>\n      </span>\n      <!-- <span>\n          <a [routerLink]=\"[ '/user/messages']\">\n            <mat-icon>message</mat-icon>\n          </a>\n        </span>  -->\n      <span>\n        <a [routerLink]=\"[ '/user/friends-requsts']\">\n          <mat-icon>group</mat-icon>\n          <i *ngIf=\"friendsLength > 0\">{{friendsLength}}</i>\n        </a>\n      </span>\n      <span (click)='logout()'>\n        <mat-icon>logout</mat-icon>\n      </span> \n    </div>\n    <div class=\"clear-fix\"></div>\n  <div  [@openClose]=\"isNotifications ? 'in' : 'out'\"  class=\"notifications\">\n    <mat-icon (click)=\"close($event)\">close</mat-icon>\n    <div class=\"notification\" *ngIf=\"notifictions.length > 0\">\n      <div [ngClass]=\"{'is-read': not.isRead == fales}\" class=\"users\" *ngFor=\"let not of notifictions\">\n          <a [routerLink]=\"[ '/user/post', not._id ]\">\n          <p class=\"post-user\">\n                  <img src=\"{{_services.url}}/{{not.userImage}}\" alt=\"{{not.username}}\"> {{not.username | titlecase }}\n          </p>\n          <p>\n            {{not.body}}\n          </p>\n          <p class=\"date text-right\">{{not.createdAt  | date:'MMM d, y, h:mm:ss a'}}</p>\n        </a>\n      </div>\n  </div>\n  </div>\n  <div [@openClose]=\"isMessages ? 'in' : 'out'\" class=\"messages\">\n      <mat-icon (click)=\"close($event)\">close</mat-icon>\n      <div class=\"notification\">\n          <p>\n            <a [routerLink]=\"[ '/path', routeParam ]\">\n              <img src=\"../../../assets/images/yoda.png\" alt=\"\"> Ahmed Diab\n            </a> \n          </p>\n          <p>\n            <a [routerLink]=\"[ '/path', routeParam ]\">\n              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, aperiam.\n            </a> \n          </p>\n        </div>\n  </div>\n  <div [@openClose]=\"isFriendsRequst ? 'in' : 'out'\" class=\"friends-requst\">\n      <mat-icon (click)=\"close($event)\">close</mat-icon>\n      <div class=\"notification\" *ngIf=\"friendsRequsts.length > 0;else zeroRequst\">\n          <div class=\"users\" *ngFor=\"let friend of friendsRequsts\">\n              <p class=\"post-user\">\n                  <a [routerLink]=\"[ '/user/profile', friend._id ]\">\n                      <img src=\"{{_services.url}}/{{friend.image}}\" alt=\"{{friend.username}}\"> {{friend.username | titlecase }}\n                  </a>\n              </p>\n              <p class=\"text-right\">\n                  <button mat-raised-button (click)=\"acceptFrindRequst(friend)\">Accept</button>\n                  <button mat-raised-button (click)=\"ignoreFriendRequest(friend)\">ignore</button>\n              </p>\n          </div>\n      </div>\n\n      <ng-template #zeroRequst>\n          <h3 class=\"zero-request\">you don't have requst yet</h3>          \n      </ng-template>\n      </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav .notifications .notification img, nav .messages .notification img, nav .friends-requst .notification img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%; }\n\nnav .notifications .notification a, nav .messages .notification a, nav .friends-requst .notification a {\n  color: #000; }\n\nnav .right-side a {\n  color: #fff;\n  font-size: 16px; }\n\nnav .right-side a img {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    box-shadow: 0 0 5px #000; }\n\n.is-read {\n  background-color: #fff; }\n\n.is-read p, .is-read a {\n    color: #000 !important; }\n\n.d-sm-none, .d-lg-none {\n  display: none; }\n\nnav {\n  padding: 20px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: +5000000;\n  background-color: #000;\n  color: #fff;\n  overflow: hidden !important; }\n\nnav .right-side {\n    width: 30%;\n    float: left; }\n\nnav .right-side .username {\n      display: inline-block; }\n\nnav .ul {\n    width: 70%;\n    height: 100%;\n    float: left;\n    list-style: none;\n    text-align: right; }\n\nnav .ul span {\n      display: inline-block;\n      margin: 5px;\n      cursor: pointer;\n      line-height: 40px; }\n\nnav .ul a {\n      color: #fff !important; }\n\nnav .ul .d-lg {\n      float: left;\n      display: none; }\n\n@media (min-width: 992px) {\n      nav .ul .d-lg {\n        display: block; } }\n\nnav .notifications, nav .messages, nav .friends-requst {\n    overflow: auto;\n    background: #fff;\n    color: #000;\n    position: fixed;\n    z-index: +1000;\n    top: 86px;\n    bottom: 0;\n    padding: 5px 20px;\n    background-color: rgba(0, 0, 0, 0.5);\n    right: 0px;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n\nnav .notifications mat-icon, nav .messages mat-icon, nav .friends-requst mat-icon {\n      float: right;\n      cursor: pointer;\n      color: red; }\n\nnav .notifications .notification, nav .messages .notification, nav .friends-requst .notification {\n      padding: 25px 10px; }\n\nnav .notifications .notification p, nav .messages .notification p, nav .friends-requst .notification p {\n        text-align: left;\n        color: #fff;\n        padding: 5px 10px; }\n\nnav .notifications .notification .post-user, nav .messages .notification .post-user, nav .friends-requst .notification .post-user {\n        padding-top: 15px; }\n\nnav .notifications .notification a, nav .messages .notification a, nav .friends-requst .notification a {\n        color: #fff; }\n\nnav .notifications .zero-request, nav .messages .zero-request, nav .friends-requst .zero-request {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translateX(-50%) translateY(-50%);\n      -webkit-transform: translateX(-50%) translateY(-50%);\n      -moz-transform: translateX(-50%) translateY(-50%);\n      -o-transform: translateX(-50%) translateY(-50%);\n      padding: 10px; }\n\n@media (max-width: 992px) {\n  .notifications, .messages, .friends-requst {\n    right: 26px !important; }\n    .notifications::before, .messages::before, .friends-requst::before {\n      display: none; }\n  .right-side {\n    width: 40%; }\n  .ul {\n    width: 60%; } }\n\n@media (max-width: 778px) {\n  nav {\n    padding: 10px; }\n    nav .right-side {\n      width: 30%; }\n      nav .right-side .username {\n        display: none; }\n    nav .ul {\n      width: 70%; }\n      nav .ul mat-icon {\n        font-size: 18px;\n        width: 18px;\n        height: 18px; }\n    nav .d-sm-none {\n      display: block; }\n    nav .notifications, nav .messages, nav .friends-requst {\n      display: none; } }\n\n@media (min-width: 778px) {\n  .d-lg-none {\n    display: block; }\n  .username {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpYm8vRG9jdW1lbnRzL3dvcmsveW9kYS9mcm9udC9zcmMvYXBwL2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvZGliby9Eb2N1bWVudHMvd29yay95b2RhL2Zyb250L3NyYy9hc3NldHMvc2Nzcy9fc2hlYXJkLnNjc3MiLCIvaG9tZS9kaWJvL0RvY3VtZW50cy93b3JrL3lvZGEvZnJvbnQvc3JjL2Fzc2V0cy9zY3NzL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNBO0VDWFEsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FEUUw7RUNOUSxZQ05PLEVET1Y7O0FES0w7RUNBUSxZQ2RRO0VEZVIsZ0JBQWUsRUFPbEI7O0FEUkw7SUNHWSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQix5QkNsQkcsRURtQk47O0FEbEJUO0VBS0ksdUJFUlksRUZTZjs7QUFORDtJQUVRLHVCQUE0QixFQUUvQjs7QUFJTDtFQUNJLGNBQWEsRUFDaEI7O0FBQ0Q7RUFDSSxjQUFhO0VBQ2IsZ0JBQWU7RUFDZixPQUFNO0VBQ04sUUFBTztFQUNQLFNBQVE7RUFDUixrQkFBaUI7RUFDakIsdUJFbkJXO0VGb0JYLFlFdEJZO0VGdUJaLDRCQUEyQixFQW1GOUI7O0FBNUZEO0lBV1EsV0FBVTtJQUNWLFlBQVcsRUFLZDs7QUFqQkw7TUFlWSxzQkFBcUIsRUFDeEI7O0FBaEJUO0lBbUJRLFdBQVU7SUFDVixhQUFZO0lBQ1osWUFBVztJQUNYLGlCQUFnQjtJQUNoQixrQkFBaUIsRUFzQnBCOztBQTdDTDtNQXlCWSxzQkFBcUI7TUFDckIsWUFBVztNQUNYLGdCQUFlO01BQ2Ysa0JBQWlCLEVBRXBCOztBQTlCVDtNQWdDWSx1QkFBNEIsRUFDL0I7O0FBakNUO01BbUNZLFlBQVc7TUFDWCxjQUFhLEVBQ2hCOztBQUVMO01BdkNKO1FBeUNZLGVBQ0osRUFBQyxFQUFBOztBQTFDVDtJQStDUSxlQUFjO0lBQ2QsaUJFOURRO0lGK0RSLFlFN0RPO0lGOERQLGdCQUFlO0lBQ2YsZUFBYztJQUNkLFVBQVM7SUFDVCxVQUFTO0lBQ1Qsa0JBQWlCO0lBQ2pCLHFDRW5FTztJRm9FUCxXQUFVO0lBQ1Ysb0NBQTJCO1lBQTNCLDRCQUEyQixFQWlDOUI7O0FBMUZMO01BNERZLGFBQVk7TUFDWixnQkFBZTtNQUNmLFdBQVUsRUFDYjs7QUEvRFQ7TUFpRVksbUJBQWtCLEVBY3JCOztBQS9FVDtRQW9FZ0IsaUJBQWdCO1FBQ2hCLFlFbkZBO1FGb0ZBLGtCQUFpQixFQUNwQjs7QUF2RWI7UUF5RWdCLGtCQUFpQixFQUNwQjs7QUExRWI7UUE0RWdCLFlFMUZBLEVGNEZIOztBQTlFYjtNQWlGWSxtQkFBa0I7TUFDbEIsU0FBUTtNQUNSLFVBQVM7TUFDVCw2Q0FBNEM7TUFDNUMscURBQW9EO01BQ3BELGtEQUFpRDtNQUNqRCxnREFBK0M7TUFDL0MsY0FBYSxFQUNoQjs7QUFJVDtFQUNJO0lBQ0ksdUJBQXNCLEVBSXpCO0lBTEQ7TUFHUSxjQUFhLEVBQ2hCO0VBRUw7SUFDSSxXQUFVLEVBQ2I7RUFDRDtJQUNJLFdBQVUsRUFDYixFQUFBOztBQUVMO0VBM0dBO0lBNkdRLGNBQWEsRUFxQnBCO0lBbElEO01BK0dRLFdBQVUsRUFJYjtNQW5ITDtRQWlIWSxjQUFhLEVBQ2hCO0lBbEhUO01BcUhRLFdBQVUsRUFNYjtNQWZEO1FBV1EsZ0JBQWU7UUFDZixZQUFXO1FBQ1gsYUFBWSxFQUNmO0lBZEw7TUFpQkksZUFBYyxFQUNqQjtJQTlITDtNQWdJUSxjQUFhLEVBQ2hCLEVBQUE7O0FBSUw7RUFDSTtJQUNJLGVBQWMsRUFDakI7RUFDRDtJQUNJLGNBQWEsRUFDaEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3InO1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3Mvc2hlYXJkJztcblxuLmlzLXJlYWR7XG4gICAgcCwgYXtcbiAgICAgICAgY29sb3I6ICRkYXJrQ29sb3IgIWltcG9ydGFudDtcblxuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRDb2xvcjtcbn1cblxuLmQtc20tbm9uZSwgLmQtbGctbm9uZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxubmF2e1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6ICs1MDAwMDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrQ29sb3I7XG4gICAgY29sb3I6ICRsaWdodENvbG9yO1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAucmlnaHQtc2lkZXtcbiAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIEBleHRlbmQgJXVzZXJfY29udGFpbnI7XG4gICAgICAgIC51c2VybmFtZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgIH1cbiAgICAudWx7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcblxuICAgICAgICB9XG4gICAgICAgIGF7XG4gICAgICAgICAgICBjb2xvcjokbGlnaHRDb2xvciAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5kLWxne1xuICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICBAbWVkaWEobWluLXdpZHRoOjk5MnB4KXtcbiAgICAgICAgLmQtbGd7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9ja1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgfVxuICAgIC5ub3RpZmljYXRpb25zLCAubWVzc2FnZXMsIC5mcmllbmRzLXJlcXVzdHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICRsaWdodENvbG9yO1xuICAgICAgICBjb2xvcjogJGRhcmtDb2xvcjtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiArMTAwMDtcbiAgICAgICAgdG9wOiA4NnB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRkYXJrQ29sb3IsIC41KTtcbiAgICAgICAgcmlnaHQ6IDBweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuXG4gICAgICAgIG1hdC1pY29ue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgfVxuICAgICAgICAubm90aWZpY2F0aW9ue1xuICAgICAgICAgICAgcGFkZGluZzogMjVweCAxMHB4O1xuICAgICAgICAgICAgQGV4dGVuZCAlcF9ub3RpZmljYXRpb247XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRsaWdodENvbG9yO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnBvc3QtdXNlcntcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDsgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRsaWdodENvbG9yO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnplcm8tcmVxdWVzdHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgfVxuICAgIH1cblxufVxuQG1lZGlhKG1heC13aWR0aDo5OTJweCl7XG4gICAgLm5vdGlmaWNhdGlvbnMsIC5tZXNzYWdlcywgLmZyaWVuZHMtcmVxdXN0e1xuICAgICAgICByaWdodDogMjZweCAhaW1wb3J0YW50O1xuICAgICAgICAmOjpiZWZvcmV7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yaWdodC1zaWRle1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgIH1cbiAgICAudWx7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxufVxuQG1lZGlhKG1heC13aWR0aDo3NzhweCl7XG4gICAgbmF2e1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIC5yaWdodC1zaWRle1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAudXNlcm5hbWV7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuICAgIC51bHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgbWF0LWljb257XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZC1zbS1ub25le1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgLm5vdGlmaWNhdGlvbnMsIC5tZXNzYWdlcywgLmZyaWVuZHMtcmVxdXN0e1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDo3NzhweCl7XG4gICAgLmQtbGctbm9uZXtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC51c2VybmFtZXtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59IiwiQGltcG9ydCAnLi9jb2xvcic7XG4lcF9ub3RpZmljYXRpb257XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICAgIGF7XG4gICAgICAgIGNvbG9yOiAkZGFya0NvbG9yO1xuICAgIH1cblxufVxuJXVzZXJfY29udGFpbnJ7XG4gICAgYXtcbiAgICAgICAgY29sb3I6ICRsaWdodENvbG9yO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAkZGFya0NvbG9yO1xuICAgICAgICB9XG4gICAgfVxufVxuJXVzZXJfcG9zdHtcbiAgICAucG9zdC11c2Vye1xuICAgICAgICBAZXh0ZW5kICV1c2VyX2NvbnRhaW5yO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICBheyBjb2xvcjogJGRhcmtDb2xvcjt9XG4gICAgfVxuICAgIC5wb3N0LWJvZHl7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggNDBweDtcbiAgICB9XG5cbiAgICAuc2VlLW1vcmV7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmNvbW1lbnQtZm9ybXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC5tYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgdGV4dGFyZWF7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4lZm9ybXtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xuICAgIC5tYXQtZm9ybS1maWVsZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHRhcmVhe1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiJGxpZ2h0Q29sb3I6I2ZmZjtcbiRtZENvbG9yOnJnYigxMTYsIDEwNywgMTA3KTtcbiRkYXJrQ29sb3I6IzAwMDsiXX0= */"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.ts ***!
  \******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_services, _auth, _router, _socket, _httpService, _snakBar) {
        var _this = this;
        this._services = _services;
        this._auth = _auth;
        this._router = _router;
        this._socket = _socket;
        this._httpService = _httpService;
        this._snakBar = _snakBar;
        this.isNotifications = false;
        this.isMessages = false;
        this.isFriendsRequst = false;
        this.url = this._services.url;
        this.notifictions = [];
        this.friendsRequsts = [];
        this.user = JSON.parse(localStorage.getItem('user'));
        this._socket.getNewNotification().subscribe(function (res) {
            _this.notifictions.unshift(res);
            console.log(res);
        });
        this._socket.getNewFriendRequstTextNotifications().subscribe(function (res) {
            _this.friendsLength += 1;
            _this._snakBar.open(res, 'undo', { duration: 3000 });
        });
        this._socket.getLength().subscribe(function (res) {
            _this.friendsLength = res.friendsLength;
            _this.notLength = res.notLength;
        });
        this._socket.getAllNotification().subscribe(function (res) {
            var t = res;
            _this.notifictions = t.reverse();
        });
        this._socket.getNewFriendsRequset().subscribe(function (res) {
            _this.friendsRequsts = res;
            _this.friendsLength = res.length;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.goToHome = function () {
        this.isNotifications = false;
        this.isMessages = false;
        this.isFriendsRequst = false;
        this._router.navigate(['/user']);
    };
    NavbarComponent.prototype.toggleNotifications = function () {
        var _this = this;
        if (!this.isNotifications) {
            this._socket.onNotifications({ id: this.user._id, isRead: false });
        }
        setTimeout(function () {
            _this.isNotifications = !_this.isNotifications;
            _this.isMessages = false;
            _this.isFriendsRequst = false;
        }, 100);
        this.notLength = 0;
    };
    NavbarComponent.prototype.toggleFriendsRequst = function () {
        var _this = this;
        this._socket.onGetFriendRequst(this.user._id);
        setTimeout(function () {
            _this.isNotifications = false;
            _this.isMessages = false;
            _this.isFriendsRequst = !_this.isFriendsRequst;
        }, 100);
    };
    NavbarComponent.prototype.toggleMessages = function () {
        this.isFriendsRequst = false;
        this.isNotifications = false;
        this.isMessages = !this.isMessages;
    };
    NavbarComponent.prototype.close = function () {
        this.isNotifications = false;
        this.isMessages = false;
        this.isFriendsRequst = false;
    };
    NavbarComponent.prototype.logout = function () {
        this._auth.logout();
        this._router.navigate(['/login']);
    };
    NavbarComponent.prototype.acceptFrindRequst = function (friend) {
        for (var i = 0; i < this.friendsRequsts.length; i++) {
            var req = this.friendsRequsts[i];
            if (req._id === friend._id) {
                this._socket.onAcceptFriendRequest({
                    user: {
                        username: this.user.username,
                        _id: this.user._id,
                        image: this.user.image
                    },
                    friend: {
                        _id: friend._id,
                        username: friend.username,
                        image: friend.image
                    }
                });
                this.friendsRequsts.splice(req, 1);
                this.friendsLength -= 1;
            }
        }
    };
    NavbarComponent.prototype.ignoreFriendRequest = function (friend) {
        for (var i = 0; i < this.friendsRequsts.length; i++) {
            var req = this.friendsRequsts[i];
            if (req._id === friend._id) {
                this._socket.onIgnoreFriendRequest({
                    userId: this.user._id,
                    friendId: friend._id
                });
                this.friendsRequsts.splice(req, 1);
                this.friendsLength -= 1;
            }
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/component/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/component/navbar/navbar.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(0%)',
                        width: '30%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(165%)',
                        width: '0'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('.3s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('0.3s')
                    ]),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [src_app_services_services_service__WEBPACK_IMPORTED_MODULE_3__["ServicesService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_6__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/component/register/register.component.html":
/*!************************************************************!*\
  !*** ./src/app/component/register/register.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register\">\n    <mat-grid-list cols=\"1\" rowHeight=\"670px\">\n        <mat-grid-tile>\n  <form class=\"example-form\" (submit)='onRegisterSubmit()'>\n      <div class=\"container-avatar-image\">\n          <span class=\"avatar-span\">\n              <img  id=\"uplode_image\" [src]=\"imagesURL\" alt=\"imagesURL\">\t\n          </span>\n        </div>\n\n        <div class=\"container-avatar-image\" style=\"height: 50px;\">\n            <span class=\"select-image\" >select image</span>\n            <input id=\"photo\" type=\"file\" accept=\".png, .jpg, .jpeg\" (change)='onChange($event.target.files)' /> \n        </div>\n            <div class=\"example-container\">\n              <mat-form-field>\n                <input name=\"username\" matInput placeholder=\"username\"\n                [formControl]=\"username\"\n                         [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"username.hasError('required')\">\n                  username is <strong>required</strong>\n                  </mat-error>\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                  <input name=\"email\" matInput placeholder=\"Email\" [formControl]=\"email\"\n                         [errorStateMatcher]=\"matcher\">\n                  <mat-hint>Errors appear instantly!</mat-hint>\n                  <mat-error *ngIf=\"email.hasError('email') && !email.hasError('required')\">\n                    Please enter a valid email address\n                  </mat-error>\n                  <mat-error *ngIf=\"email.hasError('required')\">\n                    Email is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n              <mat-form-field>\n                <input name=\"password\" matInput placeholder=\"Password\" [type]=\"'hide' ? 'password' : 'text'\" [formControl]=\"password\"\n                [errorStateMatcher]=\"matcher\">\n                <mat-error *ngIf=\"password.hasError('required')\">\n                    Password is <strong>required</strong>\n                  </mat-error>\n              </mat-form-field>\n              <mat-form-field>\n                  <input name=\"rePassword\" matInput placeholder=\"Re Password\" [type]=\"'hide' ? 'password' : 'text'\" [formControl]=\"rePassword\"\n                  [errorStateMatcher]=\"matcher\">\n                  <mat-error *ngIf=\"rePassword.hasError('required')\">\n                      Re Password is <strong>required</strong>\n                    </mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                  <input name=\"dateOfBirth\" matInput [matDatepicker]=\"picker\" placeholder=\"5/5/2005\" [formControl]=\"dateOfBirth\"\n                  [errorStateMatcher]=\"matcher\">\n                  <mat-error *ngIf=\"dateOfBirth.hasError('required')\">\n                       Date of birth is <strong>required</strong>\n                    </mat-error>\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\">\n                    <mat-icon matDatepickerToggleIcon>keyboard_arrow_down</mat-icon>\n                  </mat-datepicker-toggle>\n                  <mat-datepicker #picker></mat-datepicker>\n                </mat-form-field>\n              <div class=\"text-right\">\n                <button mat-raised-button color=\"primary\" type=\"submit\">Register</button>  \n              </div>\n              <!-- <button mat-raised-button (click)=\"onRegisterByGoogle()\">\n                Register By Google\n              </button>  -->\n              <p class=\"text-right\">\n                  <a  [routerLink]=\"[ '/login']\">login</a>\n              </p>\n          </div>\n        </form>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n"

/***/ }),

/***/ "./src/app/component/register/register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/register/register.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register mat-grid-list {\n  padding: 0; }\n  .register mat-grid-list mat-grid-tile {\n    padding: 0; }\n  .register mat-grid-list mat-grid-tile .example-form {\n      width: 40%;\n      margin-top: 20px;\n      padding: 20px 30px;\n      box-shadow: 0 0 10px #000;\n      border-radius: 5px; }\n  .register mat-grid-list mat-grid-tile .example-form .container-avatar-image {\n        width: 100%;\n        position: relative; }\n  .register mat-grid-list mat-grid-tile .example-form .container-avatar-image .avatar-span, .register mat-grid-list mat-grid-tile .example-form .container-avatar-image input {\n          outline: none;\n          position: absolute;\n          width: 150px;\n          height: 150px;\n          border-radius: 50%;\n          border: 1px solid #000;\n          left: 50%;\n          top: -100px;\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%);\n          overflow: hidden;\n          box-shadow: 0 0 10px #000; }\n  .register mat-grid-list mat-grid-tile .example-form .container-avatar-image .avatar-span img, .register mat-grid-list mat-grid-tile .example-form .container-avatar-image input img {\n            width: 100%;\n            height: 100%;\n            border-radius: 50%; }\n  .register mat-grid-list mat-grid-tile .example-form .container-avatar-image input {\n          opacity: 0; }\n  .register mat-grid-list mat-grid-tile .example-form .container-avatar-image .select-image {\n          position: absolute;\n          left: 50%;\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%); }\n  .register mat-grid-list mat-grid-tile .example-form mat-form-field {\n        padding: 0;\n        width: 100%; }\n  @media (max-width: 778px) {\n      .register mat-grid-list mat-grid-tile .example-form {\n        width: 90%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpYm8vRG9jdW1lbnRzL3dvcmsveW9kYS9mcm9udC9zcmMvYXBwL2NvbXBvbmVudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsIi9ob21lL2RpYm8vRG9jdW1lbnRzL3dvcmsveW9kYS9mcm9udC9zcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFFUSxXQUFVLEVBb0RiO0VBdERMO0lBSVksV0FBVSxFQWlEYjtFQXJEVDtNQXNDZ0IsV0FBVTtNQUNWLGlCQUFnQjtNQUNoQixtQkFBa0I7TUFDbEIsMEJDMUNEO01EMkNDLG1CQUFrQixFQUtyQjtFQS9DYjtRQU9vQixZQUFXO1FBQ1gsbUJBQWtCLEVBNkJyQjtFQXJDakI7VUFVd0IsY0FBYTtVQUNiLG1CQUFrQjtVQUNsQixhQUFZO1VBQ1osY0FBYTtVQUNiLG1CQUFrQjtVQUNsQix1QkFBc0I7VUFDdEIsVUFBUztVQUNULFlBQVc7VUFDWCxvQ0FBMkI7a0JBQTNCLDRCQUEyQjtVQUMzQixpQkFBZ0I7VUFDaEIsMEJDckJULEVENEJNO0VBM0JyQjtZQXNCNEIsWUFBVztZQUNYLGFBQVk7WUFDWixtQkFBa0IsRUFFckI7RUExQnpCO1VBNkJ3QixXQUFVLEVBQ2I7RUE5QnJCO1VBZ0N3QixtQkFBa0I7VUFDbEIsVUFBUztVQUNULG9DQUEyQjtrQkFBM0IsNEJBQTJCLEVBRTlCO0VBcENyQjtRQTRDb0IsV0FBVTtRQUNWLFlBQVcsRUFDZDtFQUVMO01BaERaO1FBa0RvQixXQUFVLEVBQ2IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yJztcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3NoZWFyZCc7XG5cbi5yZWdpc3RlcntcbiAgICBtYXQtZ3JpZC1saXN0e1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXQtZ3JpZC10aWxle1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC5leGFtcGxlLWZvcm17XG4gICAgICAgICAgICAgICAgLmNvbnRhaW5lci1hdmF0YXItaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIC5hdmF0YXItc3BhbiwgaW5wdXR7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IC0xMDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkZGFya0NvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnB1dHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdC1pbWFnZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggJGRhcmtDb2xvcjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjc3OHB4KSB7XG4gICAgICAgICAgICAgICAgLmV4YW1wbGUtZm9ybXtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCIkbGlnaHRDb2xvcjojZmZmO1xuJG1kQ29sb3I6cmdiKDExNiwgMTA3LCAxMDcpO1xuJGRhcmtDb2xvcjojMDAwOyJdfQ== */"

/***/ }),

/***/ "./src/app/component/register/register.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/component/register/register.component.ts ***!
  \**********************************************************/
/*! exports provided: MyErrorStateMatcher, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_services, _snackBar, _element, _auth, _router, _http) {
        this._services = _services;
        this._snackBar = _snackBar;
        this._element = _element;
        this._auth = _auth;
        this._router = _router;
        this._http = _http;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
        ]);
        this.username = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.rePassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.dateOfBirth = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.imagesURL = '../../assets/images/yoda.png';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
    };
    RegisterComponent.prototype.onChange = function (file) {
        var _this = this;
        for (var i = 0; i < file.length; i++) {
            var fi = file[i];
            var imageReader = new FileReader();
            imageReader.onload = function (event) {
                _this.imagesURL = event.target.result;
            };
            imageReader.readAsDataURL(fi);
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        if (this.username.hasError('required')) {
            this._snackBar.open('plz check username filde', 'Undo', {
                duration: 3000
            });
            return false;
        }
        if (this.email.hasError('required')) {
            this._snackBar.open('plz check email filde', 'Undo', {
                duration: 3000
            });
            return false;
        }
        if (this.email.hasError('email')) {
            this._snackBar.open('plz check email filde and enter valid email', 'Undo', {
                duration: 3000
            });
            return false;
        }
        if (this.dateOfBirth.hasError('required')) {
            this._snackBar.open('plz check date of birth filde', 'Undo', {
                duration: 3000
            });
            return false;
        }
        if (this.password.hasError('required')) {
            this._snackBar.open('plz check password filde', 'Undo', {
                duration: 3000
            });
            return false;
        }
        if (this.rePassword.hasError('required')) {
            this._snackBar.open('plz check re password filde', 'Undo', {
                duration: 3000
            });
        }
        if (this.password.value !== this.rePassword.value) {
            this._snackBar.open('plz make shure password filde is equal re password', 'Undo', {
                duration: 3000
            });
            return false;
        }
        var inputEl = this._element.nativeElement.querySelector('#photo');
        var formData = new FormData();
        //  //create a new fromdata instance
        if (inputEl.files.length !== 1) {
            this._snackBar.open('plz select image', 'Undo', {
                duration: 3000
            });
            return false;
        }
        formData.append('username', this.username.value);
        formData.append('dateOfBirth', this.dateOfBirth.value);
        formData.append('password', this.password.value);
        formData.append('email', this.email.value);
        formData.append('photo', inputEl.files.item(0));
        // this._http.post('http://localhost:3000/users/register', formData).subscribe(res=>{console.log(res)})
        this._auth.registerUser(formData).subscribe(function (data) {
            if (data.success) {
                _this._router.navigate(['/login']);
                _this._snackBar.open(data.MSG, 'Undo', {
                    duration: 3000
                });
            }
            else {
                _this._snackBar.open(data.errMSG, 'Undo', {
                    duration: 3000
                });
            }
        }, function (error) {
            _this._snackBar.open(error.message, 'Undo', {
                duration: 3000
            });
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/component/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/component/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth-guard.guard.ts":
/*!********************************************!*\
  !*** ./src/app/guards/auth-guard.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/module/routerAnimation.ts":
/*!*******************************************!*\
  !*** ./src/app/module/routerAnimation.ts ***!
  \*******************************************/
/*! exports provided: query, routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "query", function() { return query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

function query(s, a) {
    return Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(s, a, { optional: true });
}
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('login => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!' }),
        query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: '70px', left: 0, right: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            query(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))]),
            query(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))])
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => login', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!' }),
        query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%' })),
        query(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: '70px', left: 0, right: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            query(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))]),
            query(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))])
        ])
    ])
]);


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services.service */ "./src/app/services/services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(_http, _service) {
        this._http = _http;
        this._service = _service;
        this._url = this._service.url;
        this.tu = false;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (data) {
        return this._http.post(this._url + "/users/register", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._service.handleError));
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loginUser = function (user) {
        {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', this.authToken);
            return this._http.post(this._url + "/users/login", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._service.handleError));
        }
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__["tokenNotExpired"])('token');
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.authToken
            })
        };
        return this._http.get(this._url + "/users/profile", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._service.handleError));
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/http.service.ts ***!
  \******************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpService = /** @class */ (function () {
    function HttpService(_http, _services) {
        this._http = _http;
        this._services = _services;
    }
    // user
    HttpService.prototype.login = function (data) {
        return this._http.post("" + this._services.url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    HttpService.prototype.loginAuthGoogle = function () {
        return this._http.get(this._services.url + "/auth/google")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    HttpService.prototype.register = function (data) {
        return this._http.post("" + this._services.url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    HttpService.prototype.getUserDashbord = function (userId) {
        return this._http.get(this._services.url + "/post/" + userId + "/user")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    HttpService.prototype.findUserByUsername = function (username, userId) {
        return this._http.get(this._services.url + "/users/find/" + username + "/" + userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    HttpService.prototype.getUserById = function (id) {
        return this._http.get(this._services.url + "/users/" + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    HttpService.prototype.unFriendUser = function (userId, friendId) {
        return this._http.get(this._services.url + "/users/" + userId + "/" + friendId + "/unfriend")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    // post 
    HttpService.prototype.editPost = function (postId, body) {
        return this._http.post(this._services.url + "/post/" + postId + "/edit", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    HttpService.prototype.removePost = function (postId) {
        return this._http.get(this._services.url + "/post/" + postId + "/remove").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    // comment
    HttpService.prototype.editComment = function (postId, commentId, body) {
        return this._http.post(this._services.url + "/comment/" + postId + "/" + commentId + "/edit", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    HttpService.prototype.removeComment = function (postId, commentId) {
        return this._http.get(this._services.url + "/comment/" + postId + "/" + commentId + "/remove").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    // replay
    HttpService.prototype.editreplay = function (postId, commentId, replayId, body) {
        return this._http.post(this._services.url + "/replay/" + postId + "/" + commentId + "/" + replayId + "/edit", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    HttpService.prototype.removeReplay = function (postId, commentId, replayId) {
        return this._http.get(this._services.url + "/replay/" + postId + "/" + commentId + "/" + replayId + "/remove").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._services.handleError));
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/services/services.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/services.service.ts ***!
  \**********************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesService = /** @class */ (function () {
    // public  url = '';
    function ServicesService() {
        // private pathName = new BehaviorSubject<string>('hello');
        // crancePathName = this.pathName.asObservable();
        this.url = 'http://192.168.20.102:3000';
    }
    // changePathName(path){
    //   this.pathName.next(path)
    // }
    ServicesService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.' + error.message);
        }
        else {
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
    };
    ServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ServicesService);
    return ServicesService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()('192.168.20.102:3000/');
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
    SocketService.prototype.onJoin = function (data) {
        socket.emit('join', data);
    };
    // on Error
    SocketService.prototype.getError = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            socket.on('Error', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.getNewNotification = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            socket.on('new notification', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.getLength = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            socket.on('get Length', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.getNewTextNotifications = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            socket.on('new text notifications', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.getNewFriendRequstTextNotifications = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            socket.on('new friend requst text notifications', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.onNotifications = function (data) {
        socket.emit('notifications', data);
    };
    SocketService.prototype.getAllNotification = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            socket.on('all notification', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.onSendFrindRequst = function (data) {
        socket.emit('send friend request', data);
    };
    SocketService.prototype.onAcceptFriendRequest = function (data) {
        socket.emit('accept friend request', data);
    };
    SocketService.prototype.onGetFriendRequst = function (data) {
        socket.emit('get friends requset', data);
    };
    SocketService.prototype.getNewFriendsRequset = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            socket.on('new friends requset', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    SocketService.prototype.onCanselFriendRequestFromSender = function (data) {
        socket.emit('cansel friend request from sender', data);
    };
    SocketService.prototype.onIgnoreFriendRequest = function (data) {
        socket.emit('ignore friend request', data);
    };
    // post
    SocketService.prototype.onPost = function (data) {
        socket.emit('post', data);
    };
    SocketService.prototype.getPost = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            socket.on('new post', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    // comment
    SocketService.prototype.onComment = function (data) {
        socket.emit('comment', data);
    };
    SocketService.prototype.getComment = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            socket.on('new comment', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    // replay
    SocketService.prototype.onReplay = function (data) {
        socket.emit('replay', data);
    };
    SocketService.prototype.getReplay = function () {
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            socket.on('new replay', function (data) {
                observer.next(data);
            });
            return function () {
                socket.disconnect();
            };
        });
        return observable;
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/sharedModule/error/error.component.html":
/*!*********************************************************!*\
  !*** ./src/app/sharedModule/error/error.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Error</h2>"

/***/ }),

/***/ "./src/app/sharedModule/error/error.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/sharedModule/error/error.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZE1vZHVsZS9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/sharedModule/error/error.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/sharedModule/error/error.component.ts ***!
  \*******************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/sharedModule/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/sharedModule/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/sharedModule/shared.module.ts":
/*!***********************************************!*\
  !*** ./src/app/sharedModule/shared.module.ts ***!
  \***********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ "./src/app/sharedModule/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var components = [
    _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: components.slice(),
            exports: components.slice()
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dibo/Documents/work/yoda/front/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map