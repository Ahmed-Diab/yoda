(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user/user.module": [
		"./src/app/user/user.module.ts",
		"user-user-module"
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
/*! exports provided: AppRoutingModule, routecomponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routecomponents", function() { return routecomponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _shared_sharedComponents_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/sharedComponents/error/error.component */ "./src/app/shared/sharedComponents/error/error.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/login-guard.guard */ "./src/app/guards/login-guard.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], data: { depth: 'login' } },
    { path: '', redirectTo: 'login', pathMatch: 'full', data: { depth: 'login' } },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], data: { depth: 'register' } },
    { path: 'user', loadChildren: './user/user.module#UserModule', data: { depth: 'home' },
        canActivate: [_guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_5__["LoginGuardGuard"]]
    },
    { path: '**', component: _shared_sharedComponents_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] }
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

var routecomponents = [
    _components_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"],
    _components_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"],
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-navbar class=\"navbar\"></app-navbar> -->\n<div >\n    <div class=\"container\" [@routeAnimation]=\"getDepth(myOutlet)\">\n        <router-outlet #myOutlet='outlet'></router-outlet>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding-top: 100px; }\n"

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
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animation */ "./src/app/modules/animation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'YODA';
    }
    AppComponent.prototype.getDepth = function (outlet) {
        return outlet.activatedRouteData.depth || null;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_modules_animation__WEBPACK_IMPORTED_MODULE_1__["routerTransition"]]
        })
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/login-guard.guard */ "./src/app/guards/login-guard.guard.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["routecomponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"].withConfig({ warnOnNgModelWithFormControl: 'never' }),
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_services_service__WEBPACK_IMPORTED_MODULE_13__["ServicesService"],
                _guards_login_guard_guard__WEBPACK_IMPORTED_MODULE_15__["LoginGuardGuard"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"login\">\n    <mat-grid-list cols=\"{{col}}\" rowHeight=\"300px\">\n        <mat-grid-tile> \n            <form class=\"example-form\" (submit)=\"login()\">\n                <mat-form-field class=\"example-full-width\">\n                  <input required matInput placeholder=\"Email or Username\" [(ngModel)]=\"user\" [formControl]=\"userFormControl\" [errorStateMatcher]=\"matcher\" name=\"user\">\n                  <mat-error *ngIf=\"userFormControl.hasError('required')\">\n                    Email is <strong>required</strong>\n                  </mat-error>\n                </mat-form-field>\n      \n                <mat-form-field class=\"example-full-width\">\n                    <input required type=\"password\" matInput placeholder=\"password\" [(ngModel)]=\"password\" [formControl]=\"passwordFormControl\" [errorStateMatcher]=\"matcher\" name=\"password\">\n                    <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n                      Password is <strong>required</strong>\n                    </mat-error>\n                  </mat-form-field>\n                  <div class=\"btn-contaniar\">\n                      <button mat-raised-button color=\"primary\" type=\"submit\">login</button>\n                      <p>\n                          <a [routerLink]=\"[ '/register']\">register</a>\n                      </p>\n                  </div>\n      \n              </form>  \n          </mat-grid-tile>\n        <mat-grid-tile *ngIf=\"col == 2\"> \n            <img src=\"../../../assets/images/login.jpg\" alt=\"login\">\n          </mat-grid-tile>\n      </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login {\n  margin: auto;\n  width: 90%; }\n  .login /deep/ mat-grid-list mat-grid-tile img {\n    width: 100%; }\n  .login /deep/ mat-grid-list mat-grid-tile .example-form {\n    width: 90%; }\n  .login /deep/ mat-grid-list mat-grid-tile .example-form .example-full-width {\n      width: 100%; }\n  .login /deep/ mat-grid-list mat-grid-tile .example-form .example-full-width input::-webkit-input-placeholder {\n        color: red !important; }\n  .login /deep/ mat-grid-list mat-grid-tile .example-form .example-full-width input::-ms-input-placeholder {\n        color: red !important; }\n  .login /deep/ mat-grid-list mat-grid-tile .example-form .example-full-width input::placeholder {\n        color: red !important; }\n  .login /deep/ mat-grid-list mat-grid-tile .example-form .btn-contaniar {\n      direction: rtl; }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: MyErrorStateMatcher, LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent(_title, _snackBar, _auth, _router) {
        var _this = this;
        this._title = _title;
        this._snackBar = _snackBar;
        this._auth = _auth;
        this._router = _router;
        this.col = 2;
        this.userFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.matcher = new MyErrorStateMatcher();
        window.addEventListener('resize', function () {
            if (window.innerWidth < 779) {
                _this.col = 1;
            }
            else {
                _this.col = 2;
            }
        });
        if (window.innerWidth < 778) {
            this.col = 1;
        }
        else {
            this.col = 2;
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this._title.setTitle('YODA | Login');
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.userFormControl.hasError('required') || this.passwordFormControl.hasError('required')) {
            this._snackBar.open('plz check username and password', 'Undo', { duration: 3000 });
            return false;
        }
        var user = {
            user: this.user,
            password: this.password
        };
        this._auth.loginUser(user).subscribe(function (res) {
            if (res.success) {
                _this._auth.storeUserData(res.token, res.user);
                _this._router.navigate(['/user']);
                _this._snackBar.open('welcome', 'Undo', { duration: 3000 });
            }
            else {
                _this._snackBar.open(res.errMSG, 'Undo', { duration: 10000 });
            }
        }, function (error) {
            _this._snackBar.open(error.message, 'Undo', { duration: 10000 });
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register\">\n    <mat-grid-list cols=\"{{col}}\" rowHeight=\"500px\">\n        <mat-grid-tile> \n            <form class=\"example-form\" (submit)=\"register()\">\n                    <div class=\"example-full-width-width\" style=\"height: 150px;\">\n                        <!-- <span class=\"image_span image_span\" >select image</span> -->\n                        <img  id=\"uplode_image\" class=\"user_image user-selected-image\" [src]=\"imagesURL\"  alt=\"imagesURL\">\t\n                        <input required id=\"userImage\" class=\"user_image\" name=\"userImage\" type=\"file\" (change)='onChange($event.target.files)' /> \n                    </div>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput \n                        required\n                        placeholder=\"Username\" \n                        [(ngModel)]=\"username\" \n                        [formControl]=\"usernameFormControl\" \n                        [errorStateMatcher]=\"matcher\" \n                        name=\"username\">\n                        <mat-error *ngIf=\"usernameFormControl.hasError('required')\">\n                            username is <strong>required</strong>\n                        </mat-error>\n                    </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                  <input matInput \n                  required\n                  placeholder=\"Email\" \n                  [(ngModel)]=\"email\"\n                  type=\"email\"\n                  [formControl]=\"emailFormControl\" \n                  [errorStateMatcher]=\"matcher\" \n                  name=\"email\">\n                  <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                    Email is <strong>required</strong>\n                  </mat-error>\n                  <mat-error *ngIf=\"emailFormControl.hasError('email')\">\n                        must be an  <strong>email</strong>\n                      </mat-error>\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                        <input matInput \n                        required\n                        [matDatepicker]=\"picker\" \n                        [formControl]=\"dateOfBirthFormControl\" \n                        [errorStateMatcher]=\"matcher\" \n                        placeholder=\"Date Of Birth\" \n                        [(ngModel)]=\"dateOfBirth\" \n                        name=\"dataOfBirth\">\n                        <mat-error *ngIf=\"dateOfBirthFormControl.hasError('required')\">\n                                Data Of Birth is <strong>required</strong>\n                              </mat-error>\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker touchUi #picker></mat-datepicker>\n                        \n                      </mat-form-field>\n\n                  <mat-form-field class=\"example-full-width\">\n                      <input matInput \n                      required\n                      placeholder=\"Enter your password\" \n                      [(ngModel)]=\"password\" \n                      [formControl]=\"passwordFormControl\" \n                      [errorStateMatcher]=\"matcher\" \n                      name=\"password\" \n                      type=\"password\"\n                      maxlength=\"31\"\n                      minlength=\"8\"\n                      [type]=\"hide ? 'password' : 'text'\">\n\n                      <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\n                      <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\n                          Password is <strong>required</strong>\n                        </mat-error>\n                        <mat-error *ngIf=\"!passwordFormControl.hasError('required')\">\n                            Make shure Minimum <strong>8</strong> characters, at least <strong>1</strong> uppercase letter, <strong>1</strong> lowercase letter and <strong>1</strong> number\n                        </mat-error>\n                    </mat-form-field>\n\n                  <div class=\"btn-contaniar\">\n                      <button mat-raised-button color=\"primary\" type=\"submit\">register</button>\n                  </div>\n              </form>  \n          </mat-grid-tile>\n        <mat-grid-tile *ngIf=\"col == 2\"> \n            <img src=\"../../../assets/images/login.jpg\" alt=\"login\">\n          </mat-grid-tile>\n      </mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register {\n  margin: auto;\n  width: 90%; }\n  .register .imagestyle {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    top: 75px; }\n  .register .imagestyle img {\n      width: 150px;\n      height: 150px;\n      border-radius: 50%;\n      box-shadow: 0px 0px 10px #ccc; }\n  .register /deep/ mat-grid-list mat-grid-tile img {\n    width: 100%; }\n  .register /deep/ mat-grid-list mat-grid-tile .user_image {\n    opacity: 0;\n    position: absolute;\n    width: 150px;\n    left: 50%;\n    height: 150px;\n    border-radius: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    box-shadow: 0 0 5px;\n    border-radius: 5x; }\n  .register /deep/ mat-grid-list mat-grid-tile .user-selected-image {\n    z-index: -2;\n    opacity: 1;\n    border-radius: 0%;\n    border-radius: 5px; }\n  .register /deep/ mat-grid-list mat-grid-tile form {\n    width: 90%;\n    margin: auto;\n    position: relative; }\n  .register /deep/ mat-grid-list mat-grid-tile form .example-half-width {\n      width: 40%;\n      padding-right: 5%; }\n  .register /deep/ mat-grid-list mat-grid-tile form .example-full-width {\n      width: 100%;\n      position: relative; }\n  .register /deep/ mat-grid-list mat-grid-tile form .example-full-width input::-webkit-input-placeholder {\n        color: red !important; }\n  .register /deep/ mat-grid-list mat-grid-tile form .example-full-width input::-ms-input-placeholder {\n        color: red !important; }\n  .register /deep/ mat-grid-list mat-grid-tile form .example-full-width input::placeholder {\n        color: red !important; }\n  .register /deep/ mat-grid-list mat-grid-tile form .example-full-width mat-icon {\n        cursor: pointer; }\n  .register /deep/ mat-grid-list mat-grid-tile form .btn-contaniar {\n      direction: rtl;\n      margin-top: 15px; }\n  .register /deep/ mat-grid-list mat-grid-tile form p {\n      font-size: 12px;\n      color: red;\n      margin: 0; }\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: MyErrorStateMatcher, RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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

// tslint:disable-next-line:no-duplicate-imports
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(_element, _auth, _router, _snackBar, _services, _title) {
        var _this = this;
        this._element = _element;
        this._auth = _auth;
        this._router = _router;
        this._snackBar = _snackBar;
        this._services = _services;
        this._title = _title;
        this.hide = true;
        this.col = 2;
        // row:number = 2;
        this.imagesURL = '../../../assets/images/login.jpg';
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
        ]);
        this.dateOfBirthFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.passwordFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
        ]);
        this.matcher = new MyErrorStateMatcher();
        window.addEventListener('resize', function () {
            if (window.innerWidth < 779) {
                _this.col = 1;
            }
            else {
                _this.col = 2;
            }
        });
        if (window.innerWidth < 778) {
            this.col = 1;
        }
        else {
            this.col = 2;
        }
    }
    RegisterComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this._title.setTitle('YODA | Register');
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
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log(this.dateOfBirth);
        // locate the file element meant for the file upload.
        var inputEl = this._element.nativeElement.querySelector('#userImage');
        //create a new fromdata instance
        var formData = new FormData();
        if (inputEl.files.length !== 1) {
            window.scrollTo(0, 0);
            this._snackBar.open('plz select Image', 'Undo', {
                duration: 3000
            });
            return false;
        }
        // check all fildes required 
        if (this.usernameFormControl.hasError('required')
            || this.emailFormControl.hasError('required')
            || this.dateOfBirthFormControl.hasError('required')
            || this.passwordFormControl.hasError('required')) {
            this._snackBar.open('plz check your form agian', 'Undo', {
                duration: 5000
            });
            return false;
        } // check all fildes required 
        // use valed email services
        if (!this._services.passwordValdation(this.password)) {
            this._snackBar.open('Make shure Minimum 8 characters, at least one uppercase letter, one lowercase letter and one numberr', 'Undo', {
                duration: 5000
            });
            return false;
        } // use valed email services
        formData.append('username', this.username);
        formData.append('email', this.email);
        formData.append("userImage", inputEl.files[0]);
        formData.append('password', this.password);
        var date = this.dateOfBirth.toString();
        formData.append('dateOfBirth', date);
        this._auth.registerUser(formData).subscribe(function (data) {
            if (data.success) {
                console.log(data);
                _this._router.navigate(['/']);
                _this._snackBar.open('welcome', 'Undo', {
                    duration: 5000
                });
            }
            else {
                console.log(data);
                _this._router.navigate(['/register']);
                _this._snackBar.open(data.errMSG, 'Undo', {
                    duration: 3000
                });
            }
        }, function (error) {
            window.scrollTo(0, 0);
            _this._snackBar.open(error.message, 'Undo', {
                duration: 5000
            });
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/components/register/register.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _services_services_service__WEBPACK_IMPORTED_MODULE_5__["ServicesService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["Title"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/guards/login-guard.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/guards/login-guard.guard.ts ***!
  \*********************************************/
/*! exports provided: LoginGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardGuard", function() { return LoginGuardGuard; });
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



var LoginGuardGuard = /** @class */ (function () {
    function LoginGuardGuard(_router, _authService) {
        this._router = _router;
        this._authService = _authService;
    }
    LoginGuardGuard.prototype.canActivate = function () {
        if (this._authService.loggedIn()) {
            return true;
        }
        else {
            this._router.navigate(['/']);
            return false;
        }
    };
    LoginGuardGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], LoginGuardGuard);
    return LoginGuardGuard;
}());



/***/ }),

/***/ "./src/app/modules/animation.ts":
/*!**************************************!*\
  !*** ./src/app/modules/animation.ts ***!
  \**************************************/
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
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('home => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!' }),
        query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: '100px', left: 0, right: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            query(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))]),
            query(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))])
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => home', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!' }),
        query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%' })),
        query(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: '100px', left: 0, right: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            query(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))]),
            query(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))])
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('login => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!' }),
        query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%' })),
        query(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: '100px', left: 0, right: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            query(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))]),
            query(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))])
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => login', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!' }),
        query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%' })),
        query(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: '100px', left: 0, right: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            query(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))]),
            query(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))])
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('login => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!' }),
        query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%' })),
        query(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: '100px', left: 0, right: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            query(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }))]),
            query(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0)' }))])
        ])
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('profile => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: '!' }),
        query(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%' })),
        query(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'absolute', top: '100px', left: 0, right: 0 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            query(':leave', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s cubic-bezier(.35, .0, .25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }))]),
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function ServicesService(_http, _router) {
        this._http = _http;
        this._router = _router;
        // url='';
        this.url = 'http://localhost:3000';
        this.friendsReq = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.friendsReqLength = this.friendsReq.asObservable();
    }
    ServicesService.prototype.changefriendsReq = function (num) {
        this.friendsReq.next(num);
    };
    ServicesService.prototype.getPosts = function (userId) {
        return this._http.get(this.url + "/post/" + userId + "/user").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.editPost = function (id, body) {
        return this._http.post(this.url + "/post/addText/" + id + "/edit", body).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.removePost = function (id) {
        return this._http.get(this.url + "/post/addText/" + id + "/remove").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.addPost = function (po) {
        return this._http.post(this.url + "/post/addText", po).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.postComment = function (comment, id) {
        return this._http.post(this.url + "/post/" + id + "/comment", comment).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.editComment = function (postId, commentId, data) {
        return this._http.post(this.url + "/post/" + postId + "/" + commentId + "/comment/edit", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.removeComment = function (postId, commentId) {
        return this._http.get(this.url + "/post/" + postId + "/" + commentId + "/comment/remove").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.postReplay = function (id, commentId, replay) {
        return this._http.post(this.url + "/post/" + id + "/" + commentId + "/replay", replay).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.editReplay = function (postId, commentId, replayId, data) {
        return this._http.post(this.url + "/post/" + postId + "/" + commentId + "/" + replayId + "/replay/edit", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.removeReplay = function (postId, commentId, replayId) {
        return this._http.get(this.url + "/post/" + postId + "/" + commentId + "/" + replayId + "/replay/remove").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.getUserFriends = function (id) {
        return this._http.get(this.url + "/users/" + id + "/user/friends").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.findFriend = function (username, id) {
        return this._http.get(this.url + "/users/find/" + username + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.findAllFriend = function (username, id) {
        return this._http.get(this.url + "/users/find/all/" + username + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.getUserById = function (id) {
        return this._http.get(this.url + "/users/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.find = function () {
        return this._http.get(this.url + "/users/find").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.sendfriendRequest = function (id, friendId) {
        return this._http.post(this.url + "/users/" + id + "/addToFriends", friendId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.getfriendRequest = function (id) {
        return this._http.get(this.url + "/users/" + id + "/friendsRequst").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.ignnorFriendReq = function (id, reqId) {
        return this._http.get(this.url + "/users/" + id + "/" + reqId + "/ignnorFriendRequst").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.acceptFriendReq = function (id, reqId) {
        return this._http.get(this.url + "/users/" + id + "/" + reqId + "/acceptFriendRequst").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.getUserPosts = function (id) {
        return this._http.get(this.url + "/post/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.getPostComment = function (id) {
        return this._http.get(this.url + "/post/" + id + "/all/comment").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.unfriend = function (userId, friendId) {
        return this._http.get(this.url + "/users/find/" + userId + "/" + friendId + "/unfriend").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ServicesService.prototype.cancelFriendReqFromSender = function (userId, friendId) {
        return this._http.get(this.url + "/users/" + userId + "/" + friendId + "/canselRequstFromSender").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // getMessages(){
    //   return this._http.get(`${this.url}/message`).pipe( catchError(this.handleError))
    // }
    ServicesService.prototype.sendMessage = function (id, message) {
        return this._http.post(this.url + "/message/" + id, message).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // removeMessages(id){
    //   return this._http.get(`${this.url}/message/${id}/remove`).pipe( catchError(this.handleError))
    // }
    ServicesService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something bad happened; please try again later.' + error.message);
        }
        else {
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    };
    ;
    ServicesService.prototype.getProfile = function (id) {
        localStorage.setItem('profileId', id);
        this._router.navigate(['/profile']);
        // this.changeProfileId(id)
    };
    // password valdation
    ServicesService.prototype.passwordValdation = function (password) {
        var t = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{8,}/;
        if (!t.test(password)) {
            return false;
        }
        else {
            return true;
        }
    }; // password valdation
    ServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServicesService);
    return ServicesService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _sharedComponents_error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sharedComponents/error/error.component */ "./src/app/shared/sharedComponents/error/error.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var components = [
    _sharedComponents_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"]
];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
            ],
            providers: [],
            declarations: components.slice(),
            exports: components.slice()
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/sharedComponents/error/error.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/sharedComponents/error/error.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error works!\n</p>\n"

/***/ }),

/***/ "./src/app/shared/sharedComponents/error/error.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/sharedComponents/error/error.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/sharedComponents/error/error.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/sharedComponents/error/error.component.ts ***!
  \******************************************************************/
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
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/shared/sharedComponents/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.scss */ "./src/app/shared/sharedComponents/error/error.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
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

module.exports = __webpack_require__(/*! e:\apps\New MEAN stake\YODA\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map