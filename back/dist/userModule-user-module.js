(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userModule-user-module"],{

/***/ "./src/app/module/user.ts":
/*!********************************!*\
  !*** ./src/app/module/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/userModule/user-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/userModule/user-routing.module.ts ***!
  \***************************************************/
/*! exports provided: UserRoutingModule, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userComponent_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userComponent/home/home.component */ "./src/app/userModule/userComponent/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _userComponent_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());

var components = [
    _userComponent_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
];


/***/ }),

/***/ "./src/app/userModule/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/userModule/user.module.ts ***!
  \*******************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/userModule/user-routing.module.ts");
/* harmony import */ var _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sharedModule/shared.module */ "./src/app/sharedModule/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _userComponent_post_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userComponent/post/post.component */ "./src/app/userModule/userComponent/post/post.component.ts");
/* harmony import */ var _userComponent_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userComponent/remove-dialog/remove-dialog.component */ "./src/app/userModule/userComponent/remove-dialog/remove-dialog.component.ts");
/* harmony import */ var _userComponent_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./userComponent/edit-dialog/edit-dialog.component */ "./src/app/userModule/userComponent/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var _userComponent_find_frind_find_frind_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userComponent/find-frind/find-frind.component */ "./src/app/userModule/userComponent/find-frind/find-frind.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _userComponent_post_post_component__WEBPACK_IMPORTED_MODULE_7__["PostComponent"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["components"],
                _userComponent_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_8__["RemoveDialogComponent"],
                _userComponent_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditDialogComponent"],
                _userComponent_find_frind_find_frind_component__WEBPACK_IMPORTED_MODULE_10__["FindFrindComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_2__["UserRoutingModule"],
                _sharedModule_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]
            ],
            entryComponents: [
                _userComponent_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_8__["RemoveDialogComponent"],
                _userComponent_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditDialogComponent"],
            ],
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/userModule/userComponent/edit-dialog/edit-dialog.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/userModule/userComponent/edit-dialog/edit-dialog.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content *ngIf=\"data.type == 'post'\">Edit Post</mat-dialog-content>\n<mat-dialog-content *ngIf=\"data.type == 'comment'\">Edit comment</mat-dialog-content>\n<mat-dialog-content *ngIf=\"data.type == 'replay'\">Edit replay</mat-dialog-content>\n<form class=\"edit-form\" >\n    <mat-form-field>\n        <textarea name='edit' [(ngModel)]=\"data.body\" matInput ></textarea>\n    </mat-form-field>\n    <div class=\"text-right\">\n        <button mat-raised-button color='primary' [mat-dialog-close]=\"data\">edit</button>\n    </div>\n</form>"

/***/ }),

/***/ "./src/app/userModule/userComponent/edit-dialog/edit-dialog.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/userModule/userComponent/edit-dialog/edit-dialog.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNb2R1bGUvdXNlckNvbXBvbmVudC9lZGl0LWRpYWxvZy9lZGl0LWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/userModule/userComponent/edit-dialog/edit-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/userModule/userComponent/edit-dialog/edit-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDialogComponent", function() { return EditDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EditDialogComponent.prototype.ngOnInit = function () {
    };
    EditDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-dialog',
            template: __webpack_require__(/*! ./edit-dialog.component.html */ "./src/app/userModule/userComponent/edit-dialog/edit-dialog.component.html"),
            styles: [__webpack_require__(/*! ./edit-dialog.component.scss */ "./src/app/userModule/userComponent/edit-dialog/edit-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "./src/app/userModule/userComponent/find-frind/find-frind.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/userModule/userComponent/find-frind/find-frind.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  find-frind works!\n</p>\n"

/***/ }),

/***/ "./src/app/userModule/userComponent/find-frind/find-frind.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/userModule/userComponent/find-frind/find-frind.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNb2R1bGUvdXNlckNvbXBvbmVudC9maW5kLWZyaW5kL2ZpbmQtZnJpbmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/userModule/userComponent/find-frind/find-frind.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/userModule/userComponent/find-frind/find-frind.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FindFrindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindFrindComponent", function() { return FindFrindComponent; });
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

var FindFrindComponent = /** @class */ (function () {
    function FindFrindComponent() {
    }
    FindFrindComponent.prototype.ngOnInit = function () {
    };
    FindFrindComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-find-frind',
            template: __webpack_require__(/*! ./find-frind.component.html */ "./src/app/userModule/userComponent/find-frind/find-frind.component.html"),
            styles: [__webpack_require__(/*! ./find-frind.component.scss */ "./src/app/userModule/userComponent/find-frind/find-frind.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FindFrindComponent);
    return FindFrindComponent;
}());



/***/ }),

/***/ "./src/app/userModule/userComponent/home/home.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/userModule/userComponent/home/home.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\">\n    <mat-grid-list cols=\"4\" rowHeight=\"100vh\">\n            <mat-grid-tile [colspan]='colSpan'>\n                <form class=\"post-form\" (submit)='addNewPost(user, newPost)'>\n                    <mat-form-field>\n                        <textarea name='newPost' [(ngModel)]=\"newPost\" matInput placeholder=\"post\"></textarea>\n                    </mat-form-field>\n                    <div class=\"text-right\">\n                        <button mat-raised-button color='primary' >post</button>\n                    </div>\n                </form>\n               <app-post [user]='user'></app-post>\n            </mat-grid-tile>\n            <mat-grid-tile *ngIf=\"bigScreen\" [colspan]='1'>\n                <div class=\"search\">\n                    <mat-form-field>\n                        <input autocomplete=\"off\" (keyup)='findFrind()' [(ngModel)]=\"frindName\" name=\"name\" matInput placeholder=\"find user\">\n                        <mat-icon matSuffix (click)=\"findFrind()\">search</mat-icon>\n                    </mat-form-field>\n                    <div class=\"users\" *ngIf=\"users.length >= 1\">\n                        <div class=\"users\" *ngFor=\"let friend of users\">\n                            <p class=\"post-user\">\n                                <a [routerLink]=\"[ '/user/profile', friend._id ]\">\n                                    <img src=\"{{_services.url}}/{{friend.image}}\" alt=\"{{friend.username}}\"> {{friend.username | titlecase }}\n                                </a>\n                            </p>\n                            <p class=\"text-right\">\n                                <button *ngIf=\"!friend.isFriend && !friend.isFriendRequest && !friend.isHold\" mat-raised-button (click)='addToFrinds(friend)'><mat-icon>group_add</mat-icon></button>\n                                <button *ngIf=\"friend.isFriend\" mat-raised-button color='warn' (click)=\"unfriendUser(friend)\">unfriend<mat-icon>delete</mat-icon></button>\n                                <button *ngIf=\"friend.isFriendRequest\" mat-raised-button (click)=\"acceptFrindRequst(friend)\">Accept</button>\n                                <button *ngIf=\"friend.isHold\" mat-raised-button (click)=\"cansleFriendRequst(friend)\">cansle</button>\n                                <button *ngIf=\"friend.isFriendRequest\" mat-raised-button (click)=\"ignoreFriendRequest(friend)\">ignore</button>\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </mat-grid-tile>\n    </mat-grid-list>\n</div>\n"

/***/ }),

/***/ "./src/app/userModule/userComponent/home/home.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/userModule/userComponent/home/home.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home .search .users .post-user a {\n  color: #fff;\n  font-size: 16px; }\n  .home .search .users .post-user a img {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    box-shadow: 0 0 5px #000; }\n  .home .search .users .post-user {\n  font-weight: bold; }\n  .home .search .users .post-user a {\n    color: #000; }\n  .home .search .users .post-body {\n  padding: 10px 40px; }\n  .home .search .users .see-more {\n  cursor: pointer; }\n  .home .search .users .comment-form {\n  width: 100%; }\n  .home .search .users .comment-form .mat-form-field {\n    width: 100%; }\n  .home .search .users .comment-form .mat-form-field textarea {\n      width: 100%; }\n  .home {\n  padding-top: 30px;\n  margin: auto; }\n  .home /deep/ mat-grid-list {\n    padding: 20px !important; }\n  .home /deep/ mat-grid-list mat-grid-tile {\n      overflow: auto;\n      height: 100vh; }\n  .home /deep/ mat-grid-list mat-grid-tile /deep/ .mat-figure {\n        display: block; }\n  .home .post-form {\n    width: 95%;\n    padding-top: 30px; }\n  .home .post-form mat-form-field {\n      width: 100%; }\n  .home .post-form mat-form-field textarea {\n        width: 100%; }\n  .home .search {\n    width: 100%;\n    padding: 10px; }\n  .home .search .users {\n      max-height: 300px;\n      overflow: auto;\n      padding: 5px 0;\n      border-bottom: 1px solid #000; }\n  .home .search .users button {\n        margin-left: 5px;\n        padding-right: 0px;\n        font-size: 12px; }\n  .home .search mat-form-field {\n      width: 100%; }\n  .home .search mat-form-field input {\n        width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpYm8vRG9jdW1lbnRzL3dvcmsveW9kYS9mcm9udC9zcmMvYXBwL3VzZXJNb2R1bGUvdXNlckNvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9kaWJvL0RvY3VtZW50cy93b3JrL3lvZGEvZnJvbnQvc3JjL2Fzc2V0cy9zY3NzL19zaGVhcmQuc2NzcyIsIi9ob21lL2RpYm8vRG9jdW1lbnRzL3dvcmsveW9kYS9mcm9udC9zcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUNZUSxZQ2RRO0VEZVIsZ0JBQWUsRUFPbEI7RURwQkw7SUNlWSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQix5QkNsQkcsRURtQk47RURuQlQ7RUN5QlEsa0JBQWlCLEVBRXBCO0VEM0JMO0lDMEJVLFlDMUJLLEVEMEJlO0VEMUI5QjtFQzZCUSxtQkFBa0IsRUFDckI7RUQ5Qkw7RUNpQ1EsZ0JBQWUsRUFDbEI7RURsQ0w7RUNvQ1EsWUFBVyxFQU9kO0VEM0NMO0lDc0NZLFlBQVcsRUFJZDtFRDFDVDtNQ3dDZ0IsWUFBVyxFQUNkO0VEekNiO0VBQ0ksa0JBQWlCO0VBQ2pCLGFBQVksRUE4Q2Y7RUFoREQ7SUFJUSx5QkFBd0IsRUFRM0I7RUFaTDtNQU1ZLGVBQWM7TUFDZCxjQUFhLEVBSWhCO0VBWFQ7UUFTZ0IsZUFDSixFQUFDO0VBVmI7SUFjUSxXQUFVO0lBQ1Ysa0JBQWlCLEVBT3BCO0VBdEJMO01BaUJZLFlBQVcsRUFJZDtFQXJCVDtRQW1CZ0IsWUFBVSxFQUNiO0VBcEJiO0lBd0JRLFlBQVU7SUFDVixjQUFhLEVBcUJoQjtFQTlDTDtNQTJCWSxrQkFBaUI7TUFDakIsZUFBYztNQUNkLGVBQWM7TUFDZCw4QkU5QkcsRUZxQ047RUFyQ1Q7UUFpQ2dCLGlCQUFnQjtRQUNoQixtQkFBa0I7UUFDbEIsZ0JBQ0osRUFBQztFQXBDYjtNQXlDWSxZQUFVLEVBSWI7RUE3Q1Q7UUEyQ2dCLFlBQVUsRUFDYiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNb2R1bGUvdXNlckNvbXBvbmVudC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcic7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9zaGVhcmQnO1xuLmhvbWV7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIC9kZWVwLyBtYXQtZ3JpZC1saXN0e1xuICAgICAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hdC1ncmlkLXRpbGV7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgICAgICAvZGVlcC8gLm1hdC1maWd1cmV7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucG9zdC1mb3Jte1xuICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgICAgbWF0LWZvcm0tZmllbGR7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHRhcmVhe1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlYXJjaHtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLnVzZXJze1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRkYXJrQ29sb3I7XG4gICAgICAgICAgICBAZXh0ZW5kICV1c2VyX3Bvc3Q7XG4gICAgICAgICAgICBidXR0b257XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIG1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgICAgIGlucHV0e1xuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbn0iLCJAaW1wb3J0ICcuL2NvbG9yJztcbiVwX25vdGlmaWNhdGlvbntcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgYXtcbiAgICAgICAgY29sb3I6ICRkYXJrQ29sb3I7XG4gICAgfVxuXG59XG4ldXNlcl9jb250YWlucntcbiAgICBhe1xuICAgICAgICBjb2xvcjogJGxpZ2h0Q29sb3I7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICRkYXJrQ29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4ldXNlcl9wb3N0e1xuICAgIC5wb3N0LXVzZXJ7XG4gICAgICAgIEBleHRlbmQgJXVzZXJfY29udGFpbnI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgIGF7IGNvbG9yOiAkZGFya0NvbG9yO31cbiAgICB9XG4gICAgLnBvc3QtYm9keXtcbiAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgIH1cblxuICAgIC5zZWUtbW9yZXtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuY29tbWVudC1mb3Jte1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0YXJlYXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiVmb3Jte1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgLm1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dGFyZWF7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIkbGlnaHRDb2xvcjojZmZmO1xuJG1kQ29sb3I6cmdiKDExNiwgMTA3LCAxMDcpO1xuJGRhcmtDb2xvcjojMDAwOyJdfQ== */"

/***/ }),

/***/ "./src/app/userModule/userComponent/home/home.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/userModule/userComponent/home/home.component.ts ***!
  \*****************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(_services, _socket, _httpService, _snakBar) {
        var _this = this;
        this._services = _services;
        this._socket = _socket;
        this._httpService = _httpService;
        this._snakBar = _snakBar;
        this.frindName = '';
        this.newPost = '';
        this.users = [];
        this.colSpan = 3;
        this.bigScreen = true;
        if (window.innerWidth < 778) {
            this.colSpan = 4;
            this.bigScreen = false;
        }
        else {
            this.colSpan = 3;
            this.bigScreen = true;
        }
        window.addEventListener('resize', function () {
            if (window.innerWidth < 778) {
                _this.colSpan = 4;
                _this.bigScreen = false;
            }
            else {
                _this.colSpan = 3;
                _this.bigScreen = true;
            }
        });
        this.user = JSON.parse(localStorage.getItem('user'));
        this._socket.onJoin(this.user._id);
        this._socket.getNewTextNotifications().subscribe(function (res) {
            _this._snakBar.open(res, 'undo', { duration: 3000 });
        });
        this._socket.getError().subscribe(function (res) {
            _this._snakBar.open(res, 'undo', { duration: 5000 });
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.findFrind = function () {
        var _this = this;
        console.log(this.frindName);
        this._httpService.findUserByUsername(this.frindName || '00', this.user._id).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                var usersArr_1 = res.users;
                _this._httpService.getUserById(_this.user._id).subscribe(function (res2) {
                    if (res2.success) {
                        var data = res2.user;
                        for (var _i = 0, _a = data.friends; _i < _a.length; _i++) {
                            var id = _a[_i];
                            for (var _b = 0, usersArr_2 = usersArr_1; _b < usersArr_2.length; _b++) {
                                var user = usersArr_2[_b];
                                if (id === user._id) {
                                    user.isFriend = true;
                                }
                            }
                        }
                        for (var _c = 0, _d = data.holdAcceptFriendRequest; _c < _d.length; _c++) {
                            var id = _d[_c];
                            for (var _e = 0, usersArr_3 = usersArr_1; _e < usersArr_3.length; _e++) {
                                var user = usersArr_3[_e];
                                if (id === user._id) {
                                    user.isHold = true;
                                }
                            }
                        }
                        for (var _f = 0, _g = data.friendRequest; _f < _g.length; _f++) {
                            var id = _g[_f];
                            for (var _h = 0, usersArr_4 = usersArr_1; _h < usersArr_4.length; _h++) {
                                var user = usersArr_4[_h];
                                if (id === user._id) {
                                    user.isFriendRequest = true;
                                }
                            }
                        }
                        _this.users = usersArr_1;
                    }
                    else {
                        _this._snakBar.open(res2.errMSG, 'undo', { duration: 3000 });
                    }
                }, function (error) {
                    _this._snakBar.open(error.message, 'undo', { duration: 5000 });
                });
                // this.users = res.users;
            }
            else {
                _this._snakBar.open(res.errMSG, 'undo', { duration: 3000 });
            }
        }, function (error) {
            _this._snakBar.open(error.message, 'undo', { duration: 5000 });
        });
    };
    HomeComponent.prototype.addNewPost = function (user, postBody) {
        if (this.newPost === '' || undefined) {
            this._snakBar.open('cant\'t post empty filed', 'undo', { duration: 3000 });
            return false;
        }
        var post = {
            userId: user._id,
            username: user.username,
            userImage: user.image,
            body: postBody,
        };
        this._socket.onPost(post);
        this.newPost = '';
    };
    HomeComponent.prototype.addToFrinds = function (friend) {
        this._socket.onSendFrindRequst({
            userId: this.user._id,
            friendId: friend._id
        });
        friend.isHold = true;
    };
    HomeComponent.prototype.acceptFrindRequst = function (friend) {
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
        friend.isFriendRequest = false;
        friend.isFriend = true;
    };
    HomeComponent.prototype.cansleFriendRequst = function (friend) {
        this._socket.onCanselFriendRequestFromSender({ userId: this.user._id, friendId: friend._id });
        friend.isFriend = false;
        friend.isFriendRequest = false;
        friend.isHold = false;
    };
    HomeComponent.prototype.ignoreFriendRequest = function (friend) {
        this._socket.onIgnoreFriendRequest({
            userId: this.user._id,
            friendId: friend._id
        });
        friend.isFriendRequest = false;
        friend.isFriend = false;
    };
    HomeComponent.prototype.unfriendUser = function (friend) {
        var _this = this;
        this._httpService.unFriendUser(this.user._id, friend._id).subscribe(function (res) {
            if (res.success) {
                _this._snakBar.open(res.MSG, 'undo', { duration: 3000 });
                friend.isFriend = false;
                friend.isFriendRequest = false;
                friend.isHold = false;
            }
            else {
                _this._snakBar.open(res.errMSG, 'undo', { duration: 3000 });
            }
        }, function (error) {
            _this._snakBar.open(error.message, 'undo', { duration: 5000 });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/userModule/userComponent/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/userModule/userComponent/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_services_service__WEBPACK_IMPORTED_MODULE_1__["ServicesService"],
            src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/userModule/userComponent/post/post.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/userModule/userComponent/post/post.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post\" *ngFor=\"let post of posts;let p = index; trackBy:index\" >\n    <p class=\"text-right edit-icon\" >\n        <mat-icon *ngIf=\"user._id === post.userId\" (click)='openEditPostDailog(post, \"post\", \"\", \"\")'>edit</mat-icon>\n        <mat-icon *ngIf=\"user._id === post.userId\" (click)='openRemoveDialog($event, post, \"post\")'>close</mat-icon>\n    </p>\n    <p class=\"post-user\">\n        <a [routerLink]=\"[ '/user/profile', post.userId ]\">\n            <img src=\"{{url}}/{{post.userImage}}\" alt=\"{{post.username}}\"> {{post.username | titlecase }}\n        </a>\n    </p>\n    <p class=\"post-body\">{{post.body}}</p>\n    <p class=\"date text-right\">\n        {{post.createdAt | date:'MMM d, y, h:mm:ss a'}}\n    </p>\n    <div class=\"comment\" *ngFor=\"let comment of post.comment;let c = index; trackBy:index;\">\n        <p class=\"text-right edit-icon\" >\n            <mat-icon *ngIf=\"user._id === comment.userId\" (click)='openEditPostDailog(post, \"comment\", comment, \"\")'>edit</mat-icon>\n            <mat-icon *ngIf=\"user._id === comment.userId || user._id === post.userId\" (click)='openRemoveDialog($event, comment, \"comment\")'>close</mat-icon>\n        </p>\n        <p class=\"post-user\">\n            <a [routerLink]=\"[ '/user/profile', comment.userId ]\">\n                <img src=\"{{url}}/{{comment.userImage}}\" alt=\"{{comment.username}}\"> {{comment.username | titlecase }}\n            </a>\n        </p>\n        <p class=\"post-body\">{{comment.body}}</p>\n        <p class=\"date text-right\">\n            {{comment.createdAt | date:'MMM d, y, h:mm:ss a'}}\n        </p>\n        <div class=\"replay\" *ngFor=\"let replay of comment.replay\">\n            <p class=\"text-right edit-icon\" >\n                        <mat-icon *ngIf=\"user._id === replay.userId\" (click)='openEditPostDailog(post, \"replay\", comment, replay)'>edit</mat-icon>\n                        <mat-icon *ngIf=\"user._id === replay.userId || user._id === post.userId || user._id === comment.userId\"  (click)='openRemoveDialog($event, replay, \"replay\", comment)'>close</mat-icon>\n            </p>\n            <p class=\"post-user\">\n                <a [routerLink]=\"[ '/user/profile', replay.userId ]\">\n                    <img src=\"{{url}}/{{replay.userImage}}\" alt=\"{{replay.username}}\"> {{replay.username | titlecase }}\n                </a>\n            </p>\n            <p class=\"post-body\">{{replay.body }}{{r}}</p>\n            <p class=\"date text-right\">\n                {{replay.createdAt | date:'MMM d, y, h:mm:ss a'}}\n            </p>\n          </div>\n        <p *ngIf=\"comment.replay.length > 2\" class=\"text-right\" >\n                <span (click)='seeMoreReplay(comment.postId, comment._id)' class=\"see-more\">\n                    see replay\n                </span> \n            </p>\n        <form class=\"comment-form\" (submit)='addReplay($event, comment._id, comment.postId, user.username, user._id, user.image)'>\n            <mat-form-field>\n                <textarea name='com{{c}}'#rep{{c}} ngModel matInput placeholder=\"replay\"></textarea>\n            </mat-form-field>\n            <div class=\"text-right\">\n                <button mat-raised-button color='primary' >replay</button>\n            </div>\n        </form>\n    </div>\n\n\n    <form class=\"comment-form\" (submit)='addComment($event, post._id, user.username, user._id, user.image)'>\n            <mat-form-field>\n                <textarea name='comment{{p}}' ngModel matInput placeholder=\"comment\"></textarea>\n            </mat-form-field>\n            <div class=\"text-right\">\n                <button mat-raised-button color='primary' >comment</button>\n            </div>\n    </form>\n    <p *ngIf=\"post.commentsLength > 1\" class=\"text-right\" >\n        <span (click)='seeMoreComment(post._id)' class=\"see-more\">\n            see comments\n        </span> \n    </p>\n</div>\n"

/***/ }),

/***/ "./src/app/userModule/userComponent/post/post.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/userModule/userComponent/post/post.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post .post-user a, .post .comment .replay .post-user a {\n  color: #fff;\n  font-size: 16px; }\n  .post .post-user a img, .post .comment .replay .post-user a img {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    box-shadow: 0 0 5px #000; }\n  .post .post-user, .post .comment .replay .post-user {\n  font-weight: bold; }\n  .post .post-user a, .post .comment .replay .post-user a {\n    color: #000; }\n  .post .post-body, .post .comment .replay .post-body {\n  padding: 10px 40px; }\n  .post .see-more, .post .comment .replay .see-more {\n  cursor: pointer; }\n  .post .comment-form, .post .comment .replay .comment-form {\n  width: 100%; }\n  .post .comment-form .mat-form-field {\n    width: 100%; }\n  .post .comment-form .mat-form-field textarea {\n      width: 100%; }\n  .post .edit-form {\n  width: 90%;\n  margin: 10px auto; }\n  .post .edit-form .mat-form-field {\n    width: 100%; }\n  .post .edit-form .mat-form-field textarea {\n      width: 100%; }\n  .post {\n  margin: 10px;\n  padding: 10px;\n  border-radius: 5px;\n  border: 1px solid #000; }\n  .post .comment {\n    margin-left: 30px; }\n  .post .comment .replay {\n      margin-left: 40px; }\n  .post .edit-icon mat-icon:first-of-type {\n    cursor: pointer;\n    color: #000;\n    font-size: 18px; }\n  .post .edit-icon mat-icon:last-of-type {\n    color: red;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2RpYm8vRG9jdW1lbnRzL3dvcmsveW9kYS9mcm9udC9zcmMvYXBwL3VzZXJNb2R1bGUvdXNlckNvbXBvbmVudC9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9kaWJvL0RvY3VtZW50cy93b3JrL3lvZGEvZnJvbnQvc3JjL2Fzc2V0cy9zY3NzL19zaGVhcmQuc2NzcyIsIi9ob21lL2RpYm8vRG9jdW1lbnRzL3dvcmsveW9kYS9mcm9udC9zcmMvYXNzZXRzL3Njc3MvX2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNXUSxZQ2RRO0VEZVIsZ0JBQWUsRUFPbEI7RURuQkw7SUNjWSxZQUFXO0lBQ1gsYUFBWTtJQUNaLG1CQUFrQjtJQUNsQix5QkNsQkcsRURtQk47RURsQlQ7RUN3QlEsa0JBQWlCLEVBRXBCO0VEMUJMO0lDeUJVLFlDMUJLLEVEMEJlO0VEekI5QjtFQzRCUSxtQkFBa0IsRUFDckI7RUQ3Qkw7RUNnQ1EsZ0JBQWUsRUFDbEI7RURqQ0w7RUNtQ1EsWUFBVyxFQU9kO0VEMUNMO0lDcUNZLFlBQVcsRUFJZDtFRHpDVDtNQ3VDZ0IsWUFBVyxFQUNkO0VEeENiO0VDNkNJLFdBQVU7RUFDVixrQkFBaUIsRUFPcEI7RURyREQ7SUNnRFEsWUFBVyxFQUlkO0VEcERMO01Da0RZLFlBQVcsRUFDZDtFRG5EVDtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLHVCRUxXLEVGOEJkO0VBN0JEO0lBT1Esa0JBQWlCLEVBT3BCO0VBZEw7TUFVWSxrQkFBaUIsRUFFcEI7RUFaVDtJQW9CWSxnQkFBZTtJQUNmLFlFdEJHO0lGdUJILGdCQUFlLEVBQ2xCO0VBdkJUO0lBeUJZLFdBQVU7SUFDVixnQkFBZSxFQUNsQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNb2R1bGUvdXNlckNvbXBvbmVudC9wb3N0L3Bvc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcic7XG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9zaGVhcmQnO1xuXG4ucG9zdHtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGRhcmtDb2xvcjtcbiAgICBAZXh0ZW5kICV1c2VyX3Bvc3Q7XG4gICAgLmNvbW1lbnR7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBAZXh0ZW5kICV1c2VyX3Bvc3Q7XG4gICAgICAgIC5yZXBsYXl7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcbiAgICAgICAgICAgIEBleHRlbmQgJXVzZXJfcG9zdDtcbiAgICAgICAgfVxuICAgIFxuICAgIH1cbiAgICAuZWRpdC1mb3Jte1xuICAgICAgICBAZXh0ZW5kICVmb3JtO1xuICAgIH1cbiAgICAuZWRpdC1pY29ue1xuICAgICAgICBtYXQtaWNvbjpmaXJzdC1vZi10eXBle1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgY29sb3I6ICRkYXJrQ29sb3I7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgbWF0LWljb246bGFzdC1vZi10eXBle1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn0gICAiLCJAaW1wb3J0ICcuL2NvbG9yJztcbiVwX25vdGlmaWNhdGlvbntcbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gICAgYXtcbiAgICAgICAgY29sb3I6ICRkYXJrQ29sb3I7XG4gICAgfVxuXG59XG4ldXNlcl9jb250YWlucntcbiAgICBhe1xuICAgICAgICBjb2xvcjogJGxpZ2h0Q29sb3I7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4ICRkYXJrQ29sb3I7XG4gICAgICAgIH1cbiAgICB9XG59XG4ldXNlcl9wb3N0e1xuICAgIC5wb3N0LXVzZXJ7XG4gICAgICAgIEBleHRlbmQgJXVzZXJfY29udGFpbnI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgIGF7IGNvbG9yOiAkZGFya0NvbG9yO31cbiAgICB9XG4gICAgLnBvc3QtYm9keXtcbiAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgIH1cblxuICAgIC5zZWUtbW9yZXtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuY29tbWVudC1mb3Jte1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxke1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0YXJlYXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiVmb3Jte1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgLm1hdC1mb3JtLWZpZWxke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdGV4dGFyZWF7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCIkbGlnaHRDb2xvcjojZmZmO1xuJG1kQ29sb3I6cmdiKDExNiwgMTA3LCAxMDcpO1xuJGRhcmtDb2xvcjojMDAwOyJdfQ== */"

/***/ }),

/***/ "./src/app/userModule/userComponent/post/post.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/userModule/userComponent/post/post.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_module_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/module/user */ "./src/app/module/user.ts");
/* harmony import */ var src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http.service */ "./src/app/services/http.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/services.service */ "./src/app/services/services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/socket.service */ "./src/app/services/socket.service.ts");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../remove-dialog/remove-dialog.component */ "./src/app/userModule/userComponent/remove-dialog/remove-dialog.component.ts");
/* harmony import */ var _edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../edit-dialog/edit-dialog.component */ "./src/app/userModule/userComponent/edit-dialog/edit-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var PostComponent = /** @class */ (function () {
    function PostComponent(dialog, _httpService, _snakBar, _services, _router, _socket, _auth) {
        var _this = this;
        this.dialog = dialog;
        this._httpService = _httpService;
        this._snakBar = _snakBar;
        this._services = _services;
        this._router = _router;
        this._socket = _socket;
        this._auth = _auth;
        this.posts = [];
        this.url = this._services.url;
        // get new post
        this._socket.getPost().subscribe(function (post) {
            _this.posts.unshift(post);
        }); // get new post
        // get new commment
        this._socket.getComment().subscribe(function (res) {
            for (var _i = 0, _a = _this.posts; _i < _a.length; _i++) {
                var post = _a[_i];
                if (post._id == res.postId) {
                    post.comment.push(res);
                }
            }
        }); // get new commment
        // get new replay
        this._socket.getReplay().subscribe(function (res) {
            for (var _i = 0, _a = _this.posts; _i < _a.length; _i++) {
                var post = _a[_i];
                if (post._id == res.postId) {
                    for (var _b = 0, _c = post.comment; _b < _c.length; _b++) {
                        var comment = _c[_b];
                        if (comment._id == res.commentId) {
                            comment.replay.push(res);
                        }
                    }
                }
            }
        }); // get new replay
    } // constractor
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getUserDashbord(this.user._id).subscribe(function (res) {
            if (res.success) {
                _this.posts = res.posts;
            }
            else {
                _this._snakBar.open(res.errMSG, 'undo', { duration: 4000 });
            }
        }, function (error) {
            _this._snakBar.open(error.message, 'undo', { duration: 3000 });
        });
    }; //on init
    PostComponent.prototype.openRemoveDialog = function (event, obj, type, comment) {
        var _this = this;
        switch (type) {
            case 'post':
                var dialogRef = this.dialog.open(_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_8__["RemoveDialogComponent"], {
                    maxWidth: '250px',
                    maxHeight: '250px',
                    data: { event: event, postId: obj._id, type: type }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                    if (result != undefined && result.type == 'post') {
                        _this._httpService.removePost(obj._id).subscribe(function (res) {
                            if (res.success) {
                                event.target.parentElement.parentElement.classList.add('d-none');
                                _this._snakBar.open(res.MSG, 'undo', { duration: 3000 });
                            }
                            else {
                                _this._snakBar.open(res.errMSG, 'undo', { duration: 3000 });
                            }
                        }, function (error) {
                            _this._snakBar.open(error.message, 'undo', { duration: 3000 });
                        });
                    }
                });
                break;
            case 'comment':
                var commentRef = this.dialog.open(_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_8__["RemoveDialogComponent"], {
                    maxWidth: '250px',
                    maxHeight: '250px',
                    data: { event: event, postId: obj.postId, commentId: obj._id, type: type }
                });
                commentRef.afterClosed().subscribe(function (result) {
                    console.log(result);
                    if (result != undefined && result.type == 'comment') {
                        _this._httpService.removeComment(result.postId, result.commentId).subscribe(function (res) {
                            if (res.success) {
                                event.target.parentElement.parentElement.classList.add('d-none');
                                _this._snakBar.open(res.MSG, 'undo', { duration: 3000 });
                            }
                            else {
                                _this._snakBar.open(res.errMSG, 'undo', { duration: 3000 });
                            }
                        }, function (error) {
                            _this._snakBar.open(error.message, 'undo', { duration: 3000 });
                        });
                    }
                });
                break;
            default:
                var replayRef = this.dialog.open(_remove_dialog_remove_dialog_component__WEBPACK_IMPORTED_MODULE_8__["RemoveDialogComponent"], {
                    maxWidth: '250px',
                    maxHeight: '150px',
                    data: { event: event, postId: comment.postId, commentId: comment._id, replayId: obj._id, type: type }
                });
                replayRef.afterClosed().subscribe(function (result) {
                    if (result != undefined && result.type == 'replay') {
                        _this._httpService.removeReplay(result.postId, result.commentId, result.replayId).subscribe(function (res) {
                            if (res.success) {
                                event.target.parentElement.parentElement.classList.add('d-none');
                                _this._snakBar.open(res.MSG, 'undo', { duration: 3000 });
                            }
                            else {
                                _this._snakBar.open(res.errMSG, 'undo', { duration: 3000 });
                            }
                        }, function (error) {
                            _this._snakBar.open(error.message, 'undo', { duration: 3000 });
                        });
                    }
                });
                break;
        }
    }; // remove 
    PostComponent.prototype.openEditPostDailog = function (post, type, comment, replay) {
        var _this = this;
        switch (type) {
            case 'post':
                var postRef = this.dialog.open(_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditDialogComponent"], {
                    maxWidth: '450px',
                    maxHeight: '350px',
                    data: { body: post.body, postId: post._id, type: type }
                });
                postRef.afterClosed().subscribe(function (result) {
                    if (result != undefined && result.type == 'post') {
                        var o = {
                            body: result.body
                        };
                        _this._httpService.editPost(result.postId, o).subscribe(function (res) {
                            if (res.success) {
                                _this._snakBar.open(res.MSG, 'undo', { duration: 3000 });
                                post.body = result.body;
                            }
                            else {
                                _this._snakBar.open(res.errMSG, 'undo', { duration: 3000 });
                            }
                        }, function (error) {
                            _this._snakBar.open(error.message, 'undo', { duration: 3000 });
                        });
                    }
                });
                break;
            case 'comment':
                var commentRef = this.dialog.open(_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditDialogComponent"], {
                    maxWidth: '450px',
                    maxHeight: '350px',
                    data: { body: comment.body, postId: comment.postId, type: type, commentId: comment._id }
                });
                commentRef.afterClosed().subscribe(function (result) {
                    if (result != undefined && result.type == 'comment') {
                        var o = {
                            body: result.body
                        };
                        _this._httpService.editComment(result.postId, result.commentId, o).subscribe(function (res) {
                            if (res.success) {
                                _this._snakBar.open(res.MSG, 'undo', { duration: 3000 });
                                comment.body = result.body;
                            }
                            else {
                                _this._snakBar.open(res.errMSG, 'undo', { duration: 3000 });
                            }
                        }, function (error) {
                            _this._snakBar.open(error.message, 'undo', { duration: 3000 });
                        });
                    }
                });
                break;
            default:
                var replayRef = this.dialog.open(_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_9__["EditDialogComponent"], {
                    maxWidth: '450px',
                    maxHeight: '350px',
                    data: { body: replay.body, postId: comment.postId, type: type, commentId: comment._id, replayId: replay._id }
                });
                replayRef.afterClosed().subscribe(function (result) {
                    if (result != undefined && result.type == 'replay') {
                        var o = {
                            body: result.body
                        };
                        _this._httpService.editreplay(result.postId, result.commentId, result.replayId, o).subscribe(function (res) {
                            if (res.success) {
                                _this._snakBar.open(res.MSG, 'undo', { duration: 3000 });
                                replay.body = result.body;
                            }
                            else {
                                _this._snakBar.open(res.errMSG, 'undo', { duration: 3000 });
                            }
                        }, function (error) {
                            _this._snakBar.open(error.message, 'undo', { duration: 3000 });
                        });
                    }
                });
                break;
        }
    };
    // add new comment
    PostComponent.prototype.addComment = function (event, postId, username, userId, userImage) {
        var body = event.target.firstElementChild.querySelector('textarea').value;
        var commemt = {
            userId: userId,
            username: username,
            userImage: userImage,
            body: body,
            postId: postId
        };
        this._socket.onComment(commemt);
        event.target.firstElementChild.querySelector('textarea').value = '';
    }; // add new comment
    // add new replay
    PostComponent.prototype.addReplay = function (event, commentId, postId, username, userId, userImage) {
        var body = event.target.firstElementChild.querySelector('textarea').value;
        var replay = {
            postId: postId,
            commentId: commentId,
            body: body,
            username: username,
            userId: userId,
            userImage: userImage
        };
        this._socket.onReplay(replay);
        event.target.firstElementChild.querySelector('textarea').value = '';
    }; // add new replay
    // see more comment
    PostComponent.prototype.seeMoreComment = function (id) {
    }; // see more comment
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_module_user__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], PostComponent.prototype, "user", void 0);
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/userModule/userComponent/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/userModule/userComponent/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            src_app_services_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            src_app_services_services_service__WEBPACK_IMPORTED_MODULE_4__["ServicesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
            src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/userModule/userComponent/remove-dialog/remove-dialog.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/userModule/userComponent/remove-dialog/remove-dialog.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content *ngIf=\"data.type == 'post'\">Are you sure you want delete this post?</mat-dialog-content>\n<mat-dialog-content *ngIf=\"data.type == 'comment'\">Are you sure you want delete this comment?</mat-dialog-content>\n<mat-dialog-content *ngIf=\"data.type == 'replay'\">Are you sure you want delete this replay?</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-raised-button color='primary' mat-dialog-close>No</button>\n  <button mat-raised-button color='warn'[mat-dialog-close]=\"data\">Yes</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/userModule/userComponent/remove-dialog/remove-dialog.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/userModule/userComponent/remove-dialog/remove-dialog.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJNb2R1bGUvdXNlckNvbXBvbmVudC9yZW1vdmUtZGlhbG9nL3JlbW92ZS1kaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/userModule/userComponent/remove-dialog/remove-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/userModule/userComponent/remove-dialog/remove-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RemoveDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveDialogComponent", function() { return RemoveDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RemoveDialogComponent = /** @class */ (function () {
    function RemoveDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    RemoveDialogComponent.prototype.ngOnInit = function () {
    };
    RemoveDialogComponent.prototype.closeDialog = function () {
        console.log('re');
        this.dialogRef.close('Pizza!');
    };
    RemoveDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-remove-dialog',
            template: __webpack_require__(/*! ./remove-dialog.component.html */ "./src/app/userModule/userComponent/remove-dialog/remove-dialog.component.html"),
            styles: [__webpack_require__(/*! ./remove-dialog.component.scss */ "./src/app/userModule/userComponent/remove-dialog/remove-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], RemoveDialogComponent);
    return RemoveDialogComponent;
}());



/***/ })

}]);
//# sourceMappingURL=userModule-user-module.js.map