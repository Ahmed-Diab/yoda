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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ErrorComponent } from './sharedComponent/error/error.component';



var routes = [
    { path: 'login', component: _component_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { animation: 'login' } },
    { path: '', redirectTo: 'login', pathMatch: 'full', data: { animation: 'login' } },
    { path: 'register', component: _component_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"], data: { animation: 'register' } },
    { path: 'user', loadChildren: './userModule/user.module#UserModule', data: { animation: 'register' } },
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

module.exports = "<!-- <mat-grid-list cols=\"2\" rowHeight='50px' *ngIf=\"isUser\"> -->\n    <!-- <mat-grid-tile [colspan]='2'> -->\n      <app-navbar > </app-navbar>\n    <!-- </mat-grid-tile> -->\n<!-- </mat-grid-list> -->\n<div class=\"container\" [@routeAnimation]=\"getDepth(myOutlet)\">\n    <router-outlet #myOutlet='outlet'></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-grid-list {\n  background-color: aquamarine; }\n  mat-grid-list mat-grid-tile app-navbar {\n    width: 100%; }\n  mat-grid-list mat-grid-tile .mat-figure {\n    align-items: start;\n    justify-content: start;\n    background-color: aquamarine; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9haG1lZC93b3JrL3lvZGEvZnJvbnQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBNEIsRUFZL0I7RUFiRDtJQUtZLFlBQ0osRUFBQztFQU5UO0lBUVksbUJBQWtCO0lBQ2xCLHVCQUFzQjtJQUN0Qiw2QkFBNEIsRUFDL0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZ3JpZC1saXN0e1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG5cbiAgICBtYXQtZ3JpZC10aWxle1xuICAgICAgICBhcHAtbmF2YmFye1xuICAgICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgfVxuICAgICAgICAubWF0LWZpZ3VyZXtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xuICAgICAgICB9XG4gICAgfSBcbn0iXX0= */"

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
    function AppComponent(_services) {
        this._services = _services;
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
        __metadata("design:paramtypes", [_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]])
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
                ngx_facebook__WEBPACK_IMPORTED_MODULE_11__["FacebookModule"].forRoot()
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"]
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

module.exports = "<div class=\"login\">\n  <mat-grid-list cols=\"{{cols}}\" rowHeight=\"400px\">\n    <mat-grid-tile>\n      <div class=\"example-container\">\n        <mat-form-field>\n          <input [(ngModel)]=\"user\" matInput placeholder=\"Username or Email\">\n        </mat-form-field>\n        <mat-form-field>\n          <input [(ngModel)]=\"password\" matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" >\n          <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </mat-form-field>\n        <div class=\"text-right\">\n          <button mat-raised-button color=\"primary\" (click)=\"onLogin()\">login</button>  \n        </div>\n        <button id=\"googleBtn\" mat-raised-button (click)=\"onLoginByGoogle()\">\n          Login By Google\n        </button> \n        <button mat-raised-button (click)=\"loginWithFB()\">\n          Login By Facebook\n        </button> \n        <p class=\"text-right\">\n            <a  [routerLink]=\"[ '/register']\">Register</a>\n            <a  [routerLink]=\"[ '/user']\">Register</a>\n        </p>\n</div>\n    </mat-grid-tile>\n    <mat-grid-tile *ngIf=\"isSmall\">\n      <img src=\"./../../../assets/images/yoda.png\" alt=\"login image\">\n    </mat-grid-tile>\n  </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/component/login/login.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/login/login.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login /deep/mat-grid-list {\n  padding: 20px; }\n  .login /deep/mat-grid-list mat-grid-tile .example-container {\n    box-shadow: 0 0 10px #000;\n    border-radius: 5px;\n    padding: 30px;\n    width: 90%; }\n  .login /deep/mat-grid-list mat-grid-tile .example-container .mat-form-field {\n      width: 100%; }\n  .login /deep/mat-grid-list mat-grid-tile img {\n    box-shadow: 0 0 10px #000;\n    border-radius: 5px;\n    width: 80%;\n    height: 75%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9haG1lZC93b3JrL3lvZGEvZnJvbnQvc3JjL2FwcC9jb21wb25lbnQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCIvbWVkaWEvYWhtZWQvd29yay95b2RhL2Zyb250L3NyYy9hc3NldHMvc2Nzcy9fY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVRLGNBQWEsRUFvQmhCO0VBdEJMO0lBTWdCLDBCQ1BEO0lEUUMsbUJBQWtCO0lBQ2xCLGNBQWE7SUFDYixXQUFVLEVBSWI7RUFiYjtNQVdvQixZQUNKLEVBQUM7RUFaakI7SUFlZ0IsMEJDaEJEO0lEaUJDLG1CQUFrQjtJQUNsQixXQUFVO0lBQ1YsWUFBVyxFQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3InO1xuQGltcG9ydCAnLi4vLi4vLi4vYXNzZXRzL3Njc3Mvc2hlYXJkJztcblxuLmxvZ2lue1xuICAgIC9kZWVwL21hdC1ncmlkLWxpc3R7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgbWF0LWdyaWQtdGlsZXtcbiAgICAgICAgICAgIC5leGFtcGxlLWNvbnRhaW5lcntcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkZGFya0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkZGFya0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbn0iLCIkbGlnaHRDb2xvcjojY2NjO1xuJG1kQ29sb3I6I2NjYztcbiRkYXJrQ29sb3I6IzAwMDsiXX0= */"

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
    function LoginComponent(_socket, _auth, _services, fb, _httpServices) {
        var _this = this;
        this._socket = _socket;
        this._auth = _auth;
        this._services = _services;
        this.fb = fb;
        this._httpServices = _httpServices;
        this.cols = 2;
        this.isSmall = true;
        fb.init({
            appId: '1755360681259640',
            version: 'v2.9'
        });
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
    LoginComponent.prototype.onLoginByGoogle = function () {
        var _this = this;
        gapi.load('auth2', function () {
            _this.auth2 = gapi.auth2.init({
                client_id: '658174647895-g9df94acacvggufiod0rpoujqe6hvera.apps.googleusercontent.com',
                // cookiepolicy: 'single_host_origin',
                scope: 'profile'
            });
            _this.attachSignin(document.getElementById('googleBtn'));
        });
    };
    LoginComponent.prototype.attachSignin = function (element) {
        this.auth2.attachClickHandler(element, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            //YOUR CODE HERE
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this._services.changePathName('');
    };
    LoginComponent.prototype.onLogin = function () {
        var log = {
            user: this.user,
            password: this.password
        };
    };
    LoginComponent.prototype.loginWithFB = function () {
        this.fb.login()
            .then(function (response) { return console.log(response); })
            .catch(function (error) { return console.error('error      ', error); });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.onLoginByGoogle();
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
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]])
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

module.exports = "<nav>\n  <div class=\"right-side\">\n    <h2>YODA</h2>\n  </div>\n  <ul class=\"d-lg-none\" *ngIf=\"urlPath === 'user'\">\n    <li>\n      <a [routerLink]=\"[ '/user']\">\n        <span class=\"d-lg\">home</span> <mat-icon>home</mat-icon>\n        <div class=\"clear-fix\"></div>\n      </a>\n    </li>\n    <li (click)=\"toggleNotifications()\">\n      <span class=\"d-lg\">notifications</span> <mat-icon>notifications</mat-icon>\n      <div class=\"clear-fix\"></div>\n    </li>\n    <li (click)=\"toggleMessages()\">\n      <span class=\"d-lg\">messages</span> <mat-icon>message</mat-icon>\n      <div class=\"clear-fix\"></div>\n    </li> \n    <li (click)=\"toggleFriendsRequst()\">\n      <span class=\"d-lg\">friends requst</span> <mat-icon>group</mat-icon>\n      <div class=\"clear-fix\"></div>\n    </li>\n    <li (click)='logout()'>\n      <span class=\"d-lg\">logout</span> <mat-icon>logout</mat-icon>\n      <div class=\"clear-fix\"></div>\n    </li> \n  </ul>\n  <ul class=\"d-sm-none\" *ngIf=\"urlPath === 'user'\">\n      <li>\n        <a [routerLink]=\"[ '/home', routeParam ]\">\n          <mat-icon>home</mat-icon>\n        </a>\n      </li>\n      <li>\n        <a [routerLink]=\"[ '/user/Notifications']\">\n          <mat-icon>notifications</mat-icon>\n        </a>\n      </li>\n      <li>\n          <a [routerLink]=\"[ '/user/Notifications']\">\n            <mat-icon>message</mat-icon>\n          </a>\n      </li> \n      <li>\n        <a [routerLink]=\"[ '/user/Notifications']\">\n          <mat-icon>group</mat-icon>\n        </a>\n      </li>\n      <li (click)='logout()'>\n        <mat-icon>logout</mat-icon>\n      </li> \n    </ul>\n    \n  <div class=\"clear-fix\"></div>\n  <div  [@openClose]=\"isNotifications ? 'in' : 'out'\"  class=\"notifications\">\n    <mat-icon (click)=\"close($event)\">close</mat-icon>\n    <div class=\"notification\">\n        <p>\n          <a [routerLink]=\"[ '/path', routeParam ]\">\n            <img src=\"../../../assets/images/yoda.png\" alt=\"\"> Ahmed Diab\n          </a> \n        </p>\n        <p>\n          <a [routerLink]=\"[ '/path', routeParam ]\">\n            Lorem ipsum dolor\n          </a> \n        </p>\n      </div>\n  </div>\n  <div [@openClose]=\"isMessages ? 'in' : 'out'\" class=\"messages\">\n      <mat-icon (click)=\"close($event)\">close</mat-icon>\n      <div class=\"notification\">\n          <p>\n            <a [routerLink]=\"[ '/path', routeParam ]\">\n              <img src=\"../../../assets/images/yoda.png\" alt=\"\"> Ahmed Diab\n            </a> \n          </p>\n          <p>\n            <a [routerLink]=\"[ '/path', routeParam ]\">\n              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, aperiam.\n            </a> \n          </p>\n        </div>\n  </div>\n  <div [@openClose]=\"isFriendsRequst ? 'in' : 'out'\" class=\"friends-requst\">\n      <mat-icon (click)=\"close($event)\">close</mat-icon>\n      <div class=\"notification\">\n        <p>\n          <a [routerLink]=\"[ '/path', routeParam ]\">\n            <img src=\"../../../assets/images/yoda.png\" alt=\"\"> Ahmed Diab\n          </a> \n        </p>\n        <p>\n          <a [routerLink]=\"[ '/path', routeParam ]\">\n            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, aperiam.\n          </a> \n        </p>\n      </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/component/navbar/navbar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/component/navbar/navbar.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav .notifications .notification img, nav .messages .notification img, nav .friends-requst .notification img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%; }\n\nnav .notifications .notification a, nav .messages .notification a, nav .friends-requst .notification a {\n  color: #000; }\n\n.d-sm-none, .d-lg-none {\n  display: none; }\n\nnav {\n  padding: 20px;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: +5000000;\n  background-color: #000;\n  color: #ccc;\n  overflow: hidden !important; }\n\nnav .right-side {\n    width: 20%;\n    float: left;\n    height: 100%; }\n\nnav ul {\n    width: 80%;\n    height: 100%;\n    float: left;\n    list-style: none;\n    text-align: right; }\n\nnav ul li {\n      text-align: left;\n      display: inline-block;\n      padding: 5px;\n      margin-right: 10px;\n      height: 100%;\n      cursor: pointer; }\n\nnav ul li mat-icon {\n        float: left; }\n\nnav ul li .d-lg {\n        float: left;\n        display: none;\n        line-height: 30px;\n        text-transform: capitalize; }\n\n@media (min-width: 992px) {\n        nav ul li .d-lg {\n          display: block; } }\n\nnav .notifications, nav .messages, nav .friends-requst {\n    width: 300px;\n    overflow: auto;\n    background: #ccc;\n    color: #000;\n    position: fixed;\n    z-index: +1000;\n    top: 83px;\n    bottom: 0;\n    right: 0%;\n    padding: 5px 20px; }\n\nnav .notifications mat-icon, nav .messages mat-icon, nav .friends-requst mat-icon {\n      float: right;\n      cursor: pointer; }\n\nnav .notifications .notification, nav .messages .notification, nav .friends-requst .notification {\n      padding: 25px 10px; }\n\n@media (max-width: 992px) {\n    nav .notifications, nav .messages, nav .friends-requst {\n      right: 26px !important; }\n      nav .notifications::before, nav .messages::before, nav .friends-requst::before {\n        display: none; } }\n\n@media (max-width: 778px) {\n    nav .d-sm-none {\n      display: block; }\n    nav .notifications, nav .messages, nav .friends-requst {\n      display: none; } }\n\n@media (min-width: 778px) {\n    nav .d-lg-none {\n      display: block; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9haG1lZC93b3JrL3lvZGEvZnJvbnQvc3JjL2FwcC9jb21wb25lbnQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsIi9tZWRpYS9haG1lZC93b3JrL3lvZGEvZnJvbnQvc3JjL2Fzc2V0cy9zY3NzL19zaGVhcmQuc2NzcyIsIi9tZWRpYS9haG1lZC93b3JrL3lvZGEvZnJvbnQvc3JjL2Fzc2V0cy9zY3NzL19jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VDSlEsWUFBVztFQUNYLGFBQVk7RUFDWixtQkFBa0IsRUFDckI7O0FEQ0w7RUNDUSxZQ0xPLEVETVY7O0FETEw7RUFDSSxjQUFhLEVBQ2hCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLGdCQUFlO0VBQ2YsT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1Isa0JBQWlCO0VBQ2pCLHVCRVhXO0VGWVgsWUVkWTtFRmVaLDRCQUEyQixFQWtGOUI7O0FBM0ZEO0lBV1EsV0FBVTtJQUNWLFlBQVc7SUFDWCxhQUFZLEVBQ2Y7O0FBZEw7SUFnQlEsV0FBVTtJQUNWLGFBQVk7SUFDWixZQUFXO0lBQ1gsaUJBQWdCO0lBQ2hCLGtCQUFpQixFQTBCcEI7O0FBOUNMO01Bc0JZLGlCQUFnQjtNQUNoQixzQkFBcUI7TUFDckIsYUFBWTtNQUNaLG1CQUFrQjtNQUNsQixhQUFZO01BQ1osZ0JBQWUsRUFpQmxCOztBQTVDVDtRQTZCZ0IsWUFBVyxFQUNkOztBQTlCYjtRQWlDZ0IsWUFBVztRQUNYLGNBQWE7UUFDYixrQkFBaUI7UUFDakIsMkJBQTBCLEVBQzdCOztBQUVEO1FBdkNaO1VBeUNvQixlQUNKLEVBQUMsRUFBQTs7QUExQ2pCO0lBZ0RRLGFBQVk7SUFDWixlQUFjO0lBQ2QsaUJFeERRO0lGeURSLFlFdkRPO0lGd0RQLGdCQUFlO0lBQ2YsZUFBYztJQUNkLFVBQVM7SUFDVCxVQUFTO0lBQ1QsVUFBUztJQUNULGtCQUFpQixFQVVwQjs7QUFuRUw7TUEyRFksYUFBWTtNQUNaLGdCQUFlLEVBQ2xCOztBQTdEVDtNQStEWSxtQkFBa0IsRUFHckI7O0FBR0w7SUFyRUo7TUF1RVksdUJBQXNCLEVBSXpCO01BM0VUO1FBeUVnQixjQUFhLEVBQ2hCLEVBQUE7O0FBR1Q7SUE3RUo7TUErRVksZUFBYyxFQUNqQjtJQWhGVDtNQWtGWSxjQUFhLEVBQ2hCLEVBQUE7O0FBRUw7SUFyRko7TUF1RlksZUFBYyxFQUNqQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcic7XG5AaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc2Nzcy9zaGVhcmQnO1xuXG4uZC1zbS1ub25lLCAuZC1sZy1ub25le1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5uYXZ7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogKzUwMDAwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtDb2xvcjtcbiAgICBjb2xvcjogJGxpZ2h0Q29sb3I7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIC5yaWdodC1zaWRle1xuICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICB1bHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGxpe1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIG1hdC1pY29ue1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZC1sZ3tcbiAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEobWluLXdpZHRoOjk5MnB4KXtcbiAgICAgICAgICAgICAgICAuZC1sZ3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbiAgICAubm90aWZpY2F0aW9ucywgLm1lc3NhZ2VzLCAuZnJpZW5kcy1yZXF1c3R7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICRsaWdodENvbG9yO1xuICAgICAgICBjb2xvcjogJGRhcmtDb2xvcjtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB6LWluZGV4OiArMTAwMDtcbiAgICAgICAgdG9wOiA4M3B4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XG4gICAgICAgIG1hdC1pY29ue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5ub3RpZmljYXRpb257XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4IDEwcHg7XG4gICAgICAgICAgICBAZXh0ZW5kICVwX25vdGlmaWNhdGlvbjtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhKG1heC13aWR0aDo5OTJweCl7XG4gICAgICAgIC5ub3RpZmljYXRpb25zLCAubWVzc2FnZXMsIC5mcmllbmRzLXJlcXVzdHtcbiAgICAgICAgICAgIHJpZ2h0OiAyNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAmOjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEobWF4LXdpZHRoOjc3OHB4KXtcbiAgICAgICAgLmQtc20tbm9uZXtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5ub3RpZmljYXRpb25zLCAubWVzc2FnZXMsIC5mcmllbmRzLXJlcXVzdHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhKG1pbi13aWR0aDo3NzhweCl7XG4gICAgICAgIC5kLWxnLW5vbmV7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cblxufVxuIiwiJXBfbm90aWZpY2F0aW9ue1xuICAgIGltZ3tcbiAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICBhe1xuICAgICAgICBjb2xvcjogJGRhcmtDb2xvcjtcbiAgICB9XG5cbn0iLCIkbGlnaHRDb2xvcjojY2NjO1xuJG1kQ29sb3I6I2NjYztcbiRkYXJrQ29sb3I6IzAwMDsiXX0= */"

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
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
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
    function NavbarComponent(_services) {
        var _this = this;
        this._services = _services;
        // @ViewChild('messages')      messages;
        // @ViewChild('notifications') notifications;
        // @ViewChild('friendsRequst') friendsRequst;
        this.isNotifications = false;
        this.isMessages = false;
        this.isFriendsRequst = false;
        this.urlPath = '';
        this._services.crancePathName.subscribe(function (res) { _this.urlPath = res; });
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleNotifications = function () {
        this.isNotifications = !this.isNotifications;
        this.isMessages = false;
        this.isFriendsRequst = false;
    };
    NavbarComponent.prototype.toggleFriendsRequst = function () {
        this.isFriendsRequst = !this.isFriendsRequst;
        this.isNotifications = false;
        this.isMessages = false;
    };
    NavbarComponent.prototype.toggleMessages = function () {
        this.isFriendsRequst = false;
        this.isNotifications = false;
        this.isMessages = !this.isMessages;
    };
    // close
    NavbarComponent.prototype.close = function (event) {
        this.isNotifications = false;
        this.isMessages = false;
        this.isFriendsRequst = false;
    };
    NavbarComponent.prototype.logout = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/component/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/component/navbar/navbar.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('openClose', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(0%)'
                        // transition: 'all ease'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'translateX(100%)'
                        // transition: 'all ease'
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
        __metadata("design:paramtypes", [src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]])
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

module.exports = "<div class=\"register\">\n    <mat-grid-list cols=\"1\" rowHeight=\"450px\">\n        <mat-grid-tile>\n  <form class=\"example-form\">\n            <div class=\"example-container\">\n              <mat-form-field>\n                <input [(ngModel)]=\"username\" name=\"username\" matInput placeholder=\"username\">\n              </mat-form-field>\n              <mat-form-field class=\"example-full-width\">\n                  <input name=\"email\" matInput placeholder=\"Email\" [formControl]=\"emailFormControl\"\n                         [errorStateMatcher]=\"matcher\">\n                  <mat-hint>Errors appear instantly!</mat-hint>\n                  <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                    Please enter a valid email address\n                  </mat-error>\n                  <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                    Email is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n              <mat-form-field>\n                <input [(ngModel)]=\"password\" name=\"password\" matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\">\n              </mat-form-field>\n              <mat-form-field>\n                  <input [(ngModel)]=\"rePassword\" name=\"rePassword\" matInput placeholder=\"Re Password\" [type]=\"hide ? 'password' : 'text'\">\n                  \n                </mat-form-field>\n              <div class=\"text-right\">\n                <button mat-raised-button color=\"primary\" (click)=\"onRegister()\">Register</button>  \n              </div>\n              <button mat-raised-button (click)=\"onRegisterByGoogle()\">\n                Register By Google\n              </button> \n              <p class=\"text-right\">\n                  <a  [routerLink]=\"[ '/login']\">login</a>\n              </p>\n          </div>\n        </form>\n      </mat-grid-tile>\n    </mat-grid-list>\n  </div>\n"

/***/ }),

/***/ "./src/app/component/register/register.component.scss":
/*!************************************************************!*\
  !*** ./src/app/component/register/register.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register mat-grid-list {\n  padding: 0; }\n  .register mat-grid-list mat-grid-tile {\n    padding: 0; }\n  .register mat-grid-list mat-grid-tile .example-form {\n      width: 40%;\n      margin-top: 20px;\n      padding: 20px 30px;\n      box-shadow: 0 0 10px #000;\n      border-radius: 5px; }\n  .register mat-grid-list mat-grid-tile .example-form mat-form-field {\n        padding: 0;\n        width: 100%; }\n  @media (max-width: 778px) {\n      .register mat-grid-list mat-grid-tile .example-form {\n        width: 90%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS9haG1lZC93b3JrL3lvZGEvZnJvbnQvc3JjL2FwcC9jb21wb25lbnQvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCIvbWVkaWEvYWhtZWQvd29yay95b2RhL2Zyb250L3NyYy9hc3NldHMvc2Nzcy9fY29sb3Iuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUVRLFdBQVUsRUFvQmI7RUF0Qkw7SUFJWSxXQUFVLEVBaUJiO0VBckJUO01BTWdCLFdBQVU7TUFDVixpQkFBZ0I7TUFDaEIsbUJBQWtCO01BQ2xCLDBCQ1ZEO01EV0MsbUJBQWtCLEVBS3JCO0VBZmI7UUFZb0IsV0FBVTtRQUNWLFlBQVcsRUFDZDtFQUVMO01BaEJaO1FBa0JvQixXQUFVLEVBQ2IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yJztcbkBpbXBvcnQgJy4uLy4uLy4uL2Fzc2V0cy9zY3NzL3NoZWFyZCc7XG5cbi5yZWdpc3RlcntcbiAgICBtYXQtZ3JpZC1saXN0e1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXQtZ3JpZC10aWxle1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC5leGFtcGxlLWZvcm17XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAkZGFya0NvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBtYXQtZm9ybS1maWVsZHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6Nzc4cHgpIHtcbiAgICAgICAgICAgICAgICAuZXhhbXBsZS1mb3Jte1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSIsIiRsaWdodENvbG9yOiNjY2M7XG4kbWRDb2xvcjojY2NjO1xuJGRhcmtDb2xvcjojMDAwOyJdfQ== */"

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
    function RegisterComponent(_services) {
        this._services = _services;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this._services.changePathName('');
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/component/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/component/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"]])
    ], RegisterComponent);
    return RegisterComponent;
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
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
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





var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
var AuthService = /** @class */ (function () {
    function AuthService(_http, _service) {
        this._http = _http;
        this._service = _service;
        this._url = this._service.url;
        this.tu = false;
        this.isDev = true; // Change to false before deployment
    }
    AuthService.prototype.registerUser = function (user) {
        return this._http.post(this._url + "/users/register", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this._service.handleError));
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
        return helper.isTokenExpired('token');
        // return tokenNotExpired('token');
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
    HttpService.prototype.login = function (data) {
        return this._http.post("" + this._services.url, data);
    };
    HttpService.prototype.loginAuthGoogle = function () {
        return this._http.get(this._services.url + "/auth/google");
    };
    HttpService.prototype.register = function (data) {
        return this._http.post("" + this._services.url, data);
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
    function ServicesService() {
        this.pathName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('hello');
        this.crancePathName = this.pathName.asObservable();
        // public  url:string = 'http://localhost:3000/';
        this.url = '';
    }
    ServicesService.prototype.changePathName = function (path) {
        this.pathName.next(path);
    };
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
    ;
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// const socket = io('http://localhost:3000/');
var SocketService = /** @class */ (function () {
    function SocketService() {
    }
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

module.exports = "\n                                                        "

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

module.exports = __webpack_require__(/*! /media/ahmed/work/yoda/front/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map