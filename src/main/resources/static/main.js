(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addon-list/addon-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addon-list/addon-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZG9uLWxpc3QvYWRkb24tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/addon-list/addon-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/addon-list/addon-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-container\">\n  <app-addon *ngFor=\"let addon of list\" [addon]=\"addon\"></app-addon>\n</div>\n"

/***/ }),

/***/ "./src/app/addon-list/addon-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addon-list/addon-list.component.ts ***!
  \****************************************************/
/*! exports provided: AddonListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonListComponent", function() { return AddonListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddonListComponent = /** @class */ (function () {
    function AddonListComponent() {
    }
    AddonListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddonListComponent.prototype, "list", void 0);
    AddonListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addon-list',
            template: __webpack_require__(/*! ./addon-list.component.html */ "./src/app/addon-list/addon-list.component.html"),
            styles: [__webpack_require__(/*! ./addon-list.component.css */ "./src/app/addon-list/addon-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddonListComponent);
    return AddonListComponent;
}());



/***/ }),

/***/ "./src/app/addon-page/addon-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/addon-page/addon-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addon-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh2 {\n  text-align: center;\n}\n\n.add-hard {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-inputs {\n  font-size: 24px;\n  padding: 10px;\n  margin-bottom: 15px;\n\n  border-radius: 15%;\n}\n\n.add-inputs:hover {\n  background-color: wheat;\n  cursor: pointer;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\nlabel {\n  margin-bottom: 15px;\n  font-size: 24px;\n}\n\n.submit {\n  align-self: center;\n  font-size: 20px;\n}\n\n.invalid {\n  color: red;\n  align-self: center;\n  margin-bottom: 10px;\n}\n\ninput {\n  font-size: 20px;\n  padding: 5px;\n}\n\n.loading {\n  font-size: 24px;\n}\n\n.empty-data {\n  margin: 15px;\n  padding: 10px;\n  font-size: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkb24tcGFnZS9hZGRvbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FkZG9uLXBhZ2UvYWRkb24tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZG9uLWxpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGQtaGFyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLWlucHV0cyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcblxuICBib3JkZXItcmFkaXVzOiAxNSU7XG59XG5cbi5hZGQtaW5wdXRzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnN1Ym1pdCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGNvbG9yOiByZWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmxvYWRpbmcge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbi5lbXB0eS1kYXRhIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/addon-page/addon-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/addon-page/addon-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"addon-list\">\n  <h2>Список устройств: {{getTitle()}}</h2>\n  <div *ngIf=\"!isLoading\">\n    <app-addon-list [list]=\"data\"></app-addon-list>\n    <div class=\"empty-data\" *ngIf=\"data.length === 0\">\n      Данных для отображения нет\n    </div>\n  </div>\n\n<!--  <div class=\"add-hard\" *ngIf=\"!isLoading\">-->\n<!--    <button (click)=\"openForm()\" class=\"add-inputs\">-->\n<!--      {{isAdd ? 'Закрыть форму' : 'Добавить устройство'}}-->\n<!--    </button>-->\n\n<!--    <div *ngIf=\"isAdd\" class=\"form-container\">-->\n<!--      <label>-->\n<!--        Название: <input type=\"text\" [(ngModel)]=\"addAdd.name\">-->\n<!--      </label>-->\n<!--      <label>-->\n<!--        Описание: <input type=\"text\" [(ngModel)]=\"addAdd.description\">-->\n<!--      </label>-->\n\n<!--      <div class=\"invalid\" *ngIf=\"isInvalid\">-->\n<!--        Заполните все поля-->\n<!--      </div>-->\n\n<!--      <button class=\"add-inputs submit\" (click)=\"submit()\">-->\n<!--        Отправить-->\n<!--      </button>-->\n<!--    </div>-->\n<!--  </div>-->\n\n  <div class=\"loading\" *ngIf=\"isLoading\">\n    Подождите, идет загрузка данных :)\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/addon-page/addon-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/addon-page/addon-page.component.ts ***!
  \****************************************************/
/*! exports provided: AddonPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonPageComponent", function() { return AddonPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_title_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/title-pages */ "./src/app/services/title-pages.ts");





var AddonPageComponent = /** @class */ (function () {
    function AddonPageComponent(router, http) {
        this.router = router;
        this.http = http;
        this.prevUrl = '';
        this.data = [];
        this.isLoading = true;
        this.isInvalid = false;
        this.isAdd = false;
        this.addAdd = {
            name: '',
            description: '',
        };
    }
    AddonPageComponent.prototype.ngOnInit = function () {
        setInterval(this.checkUrl.bind(this), 100);
    };
    AddonPageComponent.prototype.checkUrl = function () {
        if (this.prevUrl !== this.router.url) {
            this.prevUrl = this.router.url;
            this.updateForm();
            this.getData();
        }
    };
    AddonPageComponent.prototype.getData = function () {
        var _this = this;
        this.data = [];
        this.isLoading = true;
        this.http.get("/api" + this.router.url).subscribe(function (res) {
            _this.data = res;
            _this.isLoading = false;
        });
    };
    AddonPageComponent.prototype.openForm = function () {
        this.isAdd = !this.isAdd;
    };
    AddonPageComponent.prototype.submit = function () {
        if (!this.addAdd.name || !this.addAdd.description) {
            this.isInvalid = true;
            return;
        }
        this.isInvalid = false;
    };
    AddonPageComponent.prototype.updateForm = function () {
        this.isInvalid = false;
        this.isAdd = false;
        this.addAdd = {
            name: '',
            description: '',
        };
    };
    AddonPageComponent.prototype.getTitle = function () {
        return _services_title_pages__WEBPACK_IMPORTED_MODULE_4__["titles"][this.router.url.split('/').pop()];
    };
    AddonPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addon-page',
            template: __webpack_require__(/*! ./addon-page.component.html */ "./src/app/addon-page/addon-page.component.html"),
            styles: [__webpack_require__(/*! ./addon-page.component.css */ "./src/app/addon-page/addon-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AddonPageComponent);
    return AddonPageComponent;
}());



/***/ }),

/***/ "./src/app/addon/addon.component.css":
/*!*******************************************!*\
  !*** ./src/app/addon/addon.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addon-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  margin-left: 10px;\n  margin-bottom: 15px;\n}\n\n.border {\n  padding: 15px;\n  border-radius: 5%;\n  border: 1px solid black;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-size: 24px;\n  margin-left: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkb24vYWRkb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1Qjs7RUFFdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hZGRvbi9hZGRvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJvcmRlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/addon/addon.component.html":
/*!********************************************!*\
  !*** ./src/app/addon/addon.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"addon-container\" [class.border]=\"isList\">\n  <div>\n    Имя: {{addon.name}}\n  </div>\n\n  <div>\n    Описание: {{addon.description}}\n  </div>\n\n  <div>\n    Категория: {{addon.addonCategory}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/addon/addon.component.ts":
/*!******************************************!*\
  !*** ./src/app/addon/addon.component.ts ***!
  \******************************************/
/*! exports provided: AddonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonComponent", function() { return AddonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AddonComponent = /** @class */ (function () {
    function AddonComponent(router) {
        this.router = router;
        this.isList = false;
    }
    AddonComponent.prototype.ngOnInit = function () {
        this.isList = false;
        if (this.router.url.includes('addon')) {
            this.isList = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddonComponent.prototype, "addon", void 0);
    AddonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addon',
            template: __webpack_require__(/*! ./addon.component.html */ "./src/app/addon/addon.component.html"),
            styles: [__webpack_require__(/*! ./addon.component.css */ "./src/app/addon/addon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddonComponent);
    return AddonComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _app_staff_app_staff_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-staff/app-staff.component */ "./src/app/app-staff/app-staff.component.ts");
/* harmony import */ var _computer_page_computer_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./computer-page/computer-page.component */ "./src/app/computer-page/computer-page.component.ts");
/* harmony import */ var _hardware_page_hardware_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hardware-page/hardware-page.component */ "./src/app/hardware-page/hardware-page.component.ts");
/* harmony import */ var _software_page_software_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./software-page/software-page.component */ "./src/app/software-page/software-page.component.ts");
/* harmony import */ var _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addon-page/addon-page.component */ "./src/app/addon-page/addon-page.component.ts");
/* harmony import */ var _computer_computer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./computer/computer.component */ "./src/app/computer/computer.component.ts");
/* harmony import */ var _update_component_update_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./update-component/update-component.component */ "./src/app/update-component/update-component.component.ts");











var routes = [
    {
        path: '',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
    },
    {
        path: 'department/:id',
        component: _app_staff_app_staff_component__WEBPACK_IMPORTED_MODULE_4__["AppStaffComponent"],
    },
    {
        path: 'computer/category/:cat',
        component: _computer_page_computer_page_component__WEBPACK_IMPORTED_MODULE_5__["ComputerPageComponent"],
    },
    {
        path: 'computer/:id',
        component: _computer_computer_component__WEBPACK_IMPORTED_MODULE_9__["ComputerComponent"],
    },
    {
        path: 'hardware/category/:name',
        component: _hardware_page_hardware_page_component__WEBPACK_IMPORTED_MODULE_6__["HardwarePageComponent"],
    },
    {
        path: 'software/category/:name',
        component: _software_page_software_page_component__WEBPACK_IMPORTED_MODULE_7__["SoftwarePageComponent"],
    },
    {
        path: 'addon/category/:name',
        component: _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_8__["AddonPageComponent"],
    },
    {
        path: 'update/:id',
        component: _update_component_update_component_component__WEBPACK_IMPORTED_MODULE_10__["UpdateComponentComponent"],
    },
    {
        path: 'create',
        component: _update_component_update_component_component__WEBPACK_IMPORTED_MODULE_10__["UpdateComponentComponent"],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app-staff/app-staff.component.css":
/*!***************************************************!*\
  !*** ./src/app/app-staff/app-staff.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".staff-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nli {\n  list-style-type: none;\n  margin-bottom: 20px;\n\n  font-size: 24px;\n}\n\ndiv {\n  font-size: 24px;\n}\n\ninput {\n  font-size: 20px;\n  padding: 5px;\n}\n\n.add-staff {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-inputs {\n  font-size: 24px;\n  padding: 10px;\n  margin-bottom: 15px;\n\n  border-radius: 15%;\n}\n\n.add-inputs:hover {\n  background-color: wheat;\n  cursor: pointer;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\nlabel {\n  margin-bottom: 15px;\n}\n\n.submit {\n  align-self: center;\n  font-size: 20px;\n}\n\n.invalid {\n  color: red;\n  align-self: center;\n  margin-bottom: 10px;\n}\n\n.delete {\n  font-size: 18px;\n  padding: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLXN0YWZmL2FwcC1zdGFmZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjs7RUFFbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7O0VBRW5CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAtc3RhZmYvYXBwLXN0YWZmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhZmYtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuZGl2IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYWRkLXN0YWZmIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtaW5wdXRzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbn1cblxuLmFkZC1pbnB1dHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnN1Ym1pdCB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaW52YWxpZCB7XG4gIGNvbG9yOiByZWQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmRlbGV0ZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZzogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app-staff/app-staff.component.html":
/*!****************************************************!*\
  !*** ./src/app/app-staff/app-staff.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"staff-container\">\n  <h2>{{getNumberStaff()}}</h2>\n  <div *ngIf=\"isLoading\">\n    Подождите, данные грузятся :)\n  </div>\n  <ul *ngIf=\"!isLoading\">\n    <li *ngFor=\"let key of object.keys(data); let i = index\">\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n      {{data[key].lastName}} {{data[key].firstName}} {{data[key].middleName}}\n      <button class=\"submit add-inputs delete\" (click)=\"delete(data[key].id, i)\">Удалить</button>\n    </li>\n  </ul>\n\n  <div class=\"add-staff\" *ngIf=\"!isLoading\">\n    <button (click)=\"openForm()\" class=\"add-inputs\">\n      {{isAdd ? 'Закрыть форму' : 'Добавить сотрудника'}}\n    </button>\n\n    <div *ngIf=\"isAdd\" class=\"form-container\">\n      <label>\n        Фамилия: <input type=\"text\" [(ngModel)]=\"addPerson.lastName\">\n      </label>\n      <label>\n        Имя: <input type=\"text\" [(ngModel)]=\"addPerson.firstName\">\n      </label>\n      <label>\n        Отчество: <input type=\"text\" [(ngModel)]=\"addPerson.middleName\">\n      </label>\n\n      <div class=\"invalid\" *ngIf=\"isInvalid\">\n        Заполните все поля\n      </div>\n\n      <button class=\"add-inputs submit\" (click)=\"submit()\">\n        Отправить\n      </button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app-staff/app-staff.component.ts":
/*!**************************************************!*\
  !*** ./src/app/app-staff/app-staff.component.ts ***!
  \**************************************************/
/*! exports provided: AppStaffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStaffComponent", function() { return AppStaffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AppStaffComponent = /** @class */ (function () {
    function AppStaffComponent(router, http) {
        this.router = router;
        this.http = http;
        this.object = Object;
        this.isLoading = true;
        this.prevUrl = '';
        this.isAdd = false;
        this.addPerson = {
            firstName: '',
            lastName: '',
            middleName: '',
            department: {
                id: this.router.url.split('/').reverse()[0],
            },
        };
        this.isInvalid = false;
    }
    AppStaffComponent.prototype.ngOnInit = function () {
        this.prevUrl = this.router.url;
        this.getData();
        setInterval(this.checkUrl.bind(this), 100);
    };
    AppStaffComponent.prototype.getNumberStaff = function () {
        if (this.router.url === '/employee') {
            return 'Список сотрудников';
        }
        return "\u041E\u0442\u0434\u0435\u043B #" + this.router.url.split('/').pop();
    };
    AppStaffComponent.prototype.getData = function () {
        var _this = this;
        this.data = [];
        this.isLoading = true;
        this.http.get("/api" + this.router.url).subscribe(function (res) {
            _this.isLoading = false;
            _this.data = res;
        });
    };
    AppStaffComponent.prototype.checkUrl = function () {
        if (this.prevUrl !== this.router.url) {
            this.prevUrl = this.router.url;
            this.updateForm();
            this.getData();
        }
    };
    AppStaffComponent.prototype.openForm = function () {
        this.isAdd = !this.isAdd;
    };
    AppStaffComponent.prototype.submit = function () {
        var _this = this;
        if (!this.addPerson.middleName || !this.addPerson.middleName || !this.addPerson.middleName) {
            this.isInvalid = true;
            return;
        }
        this.isInvalid = false;
        this.http.post('api/employee', this.addPerson).subscribe(function (res) {
            _this.data.push(res);
        });
    };
    AppStaffComponent.prototype.updateForm = function () {
        this.isInvalid = false;
        this.isAdd = false;
        this.addPerson = {
            firstName: '',
            lastName: '',
            middleName: '',
            department: { id: this.router.url.split('/').reverse()[0], },
        };
    };
    AppStaffComponent.prototype.delete = function (key, index) {
        var _this = this;
        this.http.delete("api/employee/" + key).subscribe(function (res) {
            _this.data.splice(index, 1);
        });
    };
    AppStaffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-staff',
            template: __webpack_require__(/*! ./app-staff.component.html */ "./src/app/app-staff/app-staff.component.html"),
            styles: [__webpack_require__(/*! ./app-staff.component.css */ "./src/app/app-staff/app-staff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppStaffComponent);
    return AppStaffComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body-container {\n  display: grid;\n  grid-template-columns: 1fr 3fr;\n}\n\n.body-menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  align-self: flex-start;\n}\n\n.body-main-content {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcbn1cblxuLmJvZHktbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4uYm9keS1tYWluLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"body-container\">\n  <div class=\"body-menu\">\n    <app-menu></app-menu>\n  </div>\n  <div class=\"body-main-content\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'itassets-frontend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-link/menu-link.component */ "./src/app/menu-link/menu-link.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_staff_app_staff_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-staff/app-staff.component */ "./src/app/app-staff/app-staff.component.ts");
/* harmony import */ var _computer_page_computer_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./computer-page/computer-page.component */ "./src/app/computer-page/computer-page.component.ts");
/* harmony import */ var _computer_computer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./computer/computer.component */ "./src/app/computer/computer.component.ts");
/* harmony import */ var _hardware_list_hardware_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hardware-list/hardware-list.component */ "./src/app/hardware-list/hardware-list.component.ts");
/* harmony import */ var _hardware_hardware_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hardware/hardware.component */ "./src/app/hardware/hardware.component.ts");
/* harmony import */ var _software_list_software_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./software-list/software-list.component */ "./src/app/software-list/software-list.component.ts");
/* harmony import */ var _software_software_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./software/software.component */ "./src/app/software/software.component.ts");
/* harmony import */ var _addon_list_addon_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./addon-list/addon-list.component */ "./src/app/addon-list/addon-list.component.ts");
/* harmony import */ var _addon_addon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./addon/addon.component */ "./src/app/addon/addon.component.ts");
/* harmony import */ var _hardware_page_hardware_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./hardware-page/hardware-page.component */ "./src/app/hardware-page/hardware-page.component.ts");
/* harmony import */ var _software_page_software_page_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./software-page/software-page.component */ "./src/app/software-page/software-page.component.ts");
/* harmony import */ var _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./addon-page/addon-page.component */ "./src/app/addon-page/addon-page.component.ts");
/* harmony import */ var _update_component_update_component_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./update-component/update-component.component */ "./src/app/update-component/update-component.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                _menu_link_menu_link_component__WEBPACK_IMPORTED_MODULE_7__["MenuLinkComponent"],
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_8__["MainPageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _app_staff_app_staff_component__WEBPACK_IMPORTED_MODULE_11__["AppStaffComponent"],
                _computer_page_computer_page_component__WEBPACK_IMPORTED_MODULE_12__["ComputerPageComponent"],
                _computer_computer_component__WEBPACK_IMPORTED_MODULE_13__["ComputerComponent"],
                _hardware_list_hardware_list_component__WEBPACK_IMPORTED_MODULE_14__["HardwareListComponent"],
                _hardware_hardware_component__WEBPACK_IMPORTED_MODULE_15__["HardwareComponent"],
                _software_list_software_list_component__WEBPACK_IMPORTED_MODULE_16__["SoftwareListComponent"],
                _software_software_component__WEBPACK_IMPORTED_MODULE_17__["SoftwareComponent"],
                _addon_list_addon_list_component__WEBPACK_IMPORTED_MODULE_18__["AddonListComponent"],
                _addon_addon_component__WEBPACK_IMPORTED_MODULE_19__["AddonComponent"],
                _hardware_page_hardware_page_component__WEBPACK_IMPORTED_MODULE_20__["HardwarePageComponent"],
                _software_page_software_page_component__WEBPACK_IMPORTED_MODULE_21__["SoftwarePageComponent"],
                _addon_page_addon_page_component__WEBPACK_IMPORTED_MODULE_22__["AddonPageComponent"],
                _update_component_update_component_component__WEBPACK_IMPORTED_MODULE_23__["UpdateComponentComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/computer-page/computer-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/computer-page/computer-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  font-size: 24px;\n}\n\n.loading {\n  font-size: 24px;\n}\n\n.empty-data {\n  margin: 15px;\n  padding: 10px;\n  font-size: 24px;\n}\n\n.create {\n  padding: 10px;\n  font-size: 16px;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHV0ZXItcGFnZS9jb21wdXRlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wdXRlci1wYWdlL2NvbXB1dGVyLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubG9hZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmVtcHR5LWRhdGEge1xuICBtYXJnaW46IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmNyZWF0ZSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/computer-page/computer-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/computer-page/computer-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\">Список устройств: {{getName()}}</h2>\n<button class=\"create\" routerLink=\"/create\">\n  Добавить компьютер\n</button>\n<div *ngIf=\"!isLoading\">\n  <app-computer *ngFor=\"let comp of data\" [computer]=\"comp\" [routerLink]=\"['/', 'computer', comp.id]\"></app-computer>\n  <div class=\"empty-data\" *ngIf=\"data.length === 0\">\n    Данных для отображения нет\n  </div>\n</div>\n\n<div class=\"loading\" *ngIf=\"isLoading\">\n  Подождите, идет загрузка данных :)\n</div>\n"

/***/ }),

/***/ "./src/app/computer-page/computer-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/computer-page/computer-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ComputerPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputerPageComponent", function() { return ComputerPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_title_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/title-pages */ "./src/app/services/title-pages.ts");





var ComputerPageComponent = /** @class */ (function () {
    function ComputerPageComponent(router, http) {
        this.router = router;
        this.http = http;
        this.data = [];
        this.prevUrl = '';
        this.isLoading = true;
    }
    ComputerPageComponent.prototype.ngOnInit = function () {
        setInterval(this.checkUrl.bind(this), 100);
    };
    ComputerPageComponent.prototype.checkUrl = function () {
        if (this.prevUrl !== this.router.url) {
            this.prevUrl = this.router.url;
            this.getData();
        }
    };
    ComputerPageComponent.prototype.getName = function () {
        return _services_title_pages__WEBPACK_IMPORTED_MODULE_4__["titles"][this.router.url.split('/').pop()];
    };
    ComputerPageComponent.prototype.getData = function () {
        var _this = this;
        this.isLoading = true;
        this.data = [];
        this.http.get("/api" + this.router.url).subscribe(function (res) {
            _this.data = res;
            _this.isLoading = false;
        });
    };
    ComputerPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-computer-page',
            template: __webpack_require__(/*! ./computer-page.component.html */ "./src/app/computer-page/computer-page.component.html"),
            styles: [__webpack_require__(/*! ./computer-page.component.css */ "./src/app/computer-page/computer-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ComputerPageComponent);
    return ComputerPageComponent;
}());



/***/ }),

/***/ "./src/app/computer/computer.component.css":
/*!*************************************************!*\
  !*** ./src/app/computer/computer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".computer-container {\n  font-size: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  min-width: 300px;\n\n  padding: 15px;\n\n  margin-bottom: 30px;\n\n  border: 1px solid black;\n  border-radius: 5%;\n}\n\ndiv {\n  margin-bottom: 15px;\n}\n\n.update {\n  font-size: 20px;\n  padding: 10px;\n  border-radius: 15px;\n}\n\n.update:hover {\n  cursor: pointer;\n  background-color: wheat;\n}\n\n.button-container {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.owner {\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHV0ZXIvY29tcHV0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7O0VBRXZCLGdCQUFnQjs7RUFFaEIsYUFBYTs7RUFFYixtQkFBbUI7O0VBRW5CLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wdXRlci9jb21wdXRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbXB1dGVyLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuXG4gIG1pbi13aWR0aDogMzAwcHg7XG5cbiAgcGFkZGluZzogMTVweDtcblxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLnVwZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLnVwZGF0ZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm93bmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/computer/computer.component.html":
/*!**************************************************!*\
  !*** ./src/app/computer/computer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"computer !== undefined\" class=\"computer-container\">\n  <div>\n    Имя: {{computer.name}}\n  </div>\n\n  <div>\n    Категория: {{computer.computerCategory}}\n  </div>\n\n  <div>\n    Описание: {{computer.description}}\n  </div>\n\n  <div>\n    Владелец: {{haveOwner ? '' : 'Нет владельца'}}\n    <div *ngIf=\"haveOwner\" class=\"owner\">\n      <div>\n        Имя: {{computer.employee.firstName}}\n      </div>\n      <div>\n        Фамилия: {{computer.employee.lastName}}\n      </div>\n      <div>\n        Отчество: {{computer.employee.middleName}}\n      </div>\n      <div>\n        Номер отдела: {{computer.employee.department.id}}\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"computer.hardwareList.length > 0\">\n    Железо:\n    <app-hardware-list [list]=\"computer.hardwareList\"></app-hardware-list>\n  </div>\n\n  <div *ngIf=\"computer.softwareList.length > 0\">\n    Софт:\n    <app-sowtware-list [list]=\"computer.softwareList\"></app-sowtware-list>\n  </div>\n\n  <div *ngIf=\"computer.addonList.length > 0\">\n    Устройства:\n    <app-addon-list [list]=\"computer.addonList\"></app-addon-list>\n  </div>\n\n  <div class=\"button-container\">\n    <button class=\"update\" *ngIf=\"isCanUpdate()\" [routerLink]=\"['/', 'update', id]\">Изменить</button>\n    <button class=\"update\" *ngIf=\"isCanUpdate()\" (click)=\"delete(computer.id)\">Удалить</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/computer/computer.component.ts":
/*!************************************************!*\
  !*** ./src/app/computer/computer.component.ts ***!
  \************************************************/
/*! exports provided: ComputerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComputerComponent", function() { return ComputerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ComputerComponent = /** @class */ (function () {
    function ComputerComponent(router, http) {
        this.router = router;
        this.http = http;
        this.id = '';
        this.haveOwner = false;
    }
    ComputerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = '';
        this.haveOwner = false;
        if (!this.computer) {
            this.http.get("api" + this.router.url).subscribe(function (res) {
                _this.computer = res;
                if (_this.computer.employee !== null) {
                    _this.haveOwner = true;
                }
            });
            this.id = this.router.url.split('/').pop();
        }
        if (this.computer && this.computer.employee !== null) {
            this.haveOwner = true;
        }
    };
    ComputerComponent.prototype.isCanUpdate = function () {
        return !this.router.url.includes('category');
    };
    ComputerComponent.prototype.delete = function (id) {
        var _this = this;
        this.http.delete("api/computer/" + id).subscribe(function (res) {
            _this.router.navigateByUrl("computer/category/" + _this.computer.computerCategory);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ComputerComponent.prototype, "computer", void 0);
    ComputerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-computer',
            template: __webpack_require__(/*! ./computer.component.html */ "./src/app/computer/computer.component.html"),
            styles: [__webpack_require__(/*! ./computer.component.css */ "./src/app/computer/computer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ComputerComponent);
    return ComputerComponent;
}());



/***/ }),

/***/ "./src/app/hardware-list/hardware-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/hardware-list/hardware-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-container {\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFyZHdhcmUtbGlzdC9oYXJkd2FyZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL2hhcmR3YXJlLWxpc3QvaGFyZHdhcmUtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtY29udGFpbmVyIHtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/hardware-list/hardware-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/hardware-list/hardware-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-container\">\n  <app-hardware *ngFor=\"let hard of list\" [hardware]=\"hard\"></app-hardware>\n</div>\n"

/***/ }),

/***/ "./src/app/hardware-list/hardware-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hardware-list/hardware-list.component.ts ***!
  \**********************************************************/
/*! exports provided: HardwareListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardwareListComponent", function() { return HardwareListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HardwareListComponent = /** @class */ (function () {
    function HardwareListComponent() {
    }
    HardwareListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HardwareListComponent.prototype, "list", void 0);
    HardwareListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hardware-list',
            template: __webpack_require__(/*! ./hardware-list.component.html */ "./src/app/hardware-list/hardware-list.component.html"),
            styles: [__webpack_require__(/*! ./hardware-list.component.css */ "./src/app/hardware-list/hardware-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HardwareListComponent);
    return HardwareListComponent;
}());



/***/ }),

/***/ "./src/app/hardware-page/hardware-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/hardware-page/hardware-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hard-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh2 {\n  text-align: center;\n}\n\n.add-hard {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-inputs {\n  font-size: 24px;\n  padding: 10px;\n  margin-bottom: 15px;\n\n  border-radius: 15%;\n}\n\n.add-inputs:hover {\n  background-color: wheat;\n  cursor: pointer;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\nlabel {\n  margin-bottom: 15px;\n  font-size: 24px;\n}\n\n.submit {\n  align-self: center;\n  font-size: 20px;\n}\n\n.invalid {\n  color: red;\n  align-self: center;\n  margin-bottom: 10px;\n}\n\ninput {\n  font-size: 20px;\n  padding: 5px;\n}\n\n.loading {\n  font-size: 24px;\n}\n\n.empty-data {\n  margin: 15px;\n  padding: 10px;\n  font-size: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFyZHdhcmUtcGFnZS9oYXJkd2FyZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hhcmR3YXJlLXBhZ2UvaGFyZHdhcmUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhcmQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZC1oYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtaW5wdXRzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbn1cblxuLmFkZC1pbnB1dHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc3VibWl0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pbnZhbGlkIHtcbiAgY29sb3I6IHJlZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubG9hZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuXG4uZW1wdHktZGF0YSB7XG4gIG1hcmdpbjogMTVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/hardware-page/hardware-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/hardware-page/hardware-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hard-list\">\n  <h2 class=\"title\">Список железа: {{getName()}}</h2>\n  <div *ngIf=\"!isLoading\">\n    <app-hardware-list [list]=\"data\"></app-hardware-list>\n    <div class=\"empty-data\" *ngIf=\"data.length === 0\">\n      Данных для отображения нет\n    </div>\n  </div>\n\n<!--  <div class=\"add-hard\" *ngIf=\"!isLoading\">-->\n<!--    <button (click)=\"openForm()\" class=\"add-inputs\">-->\n<!--      {{isAdd ? 'Закрыть форму' : 'Добавить железо'}}-->\n<!--    </button>-->\n\n<!--    <div *ngIf=\"isAdd\" class=\"form-container\">-->\n<!--      <label>-->\n<!--        Название: <input type=\"text\" [(ngModel)]=\"addHard.name\">-->\n<!--      </label>-->\n<!--      <label>-->\n<!--        Описание: <input type=\"text\" [(ngModel)]=\"addHard.description\">-->\n<!--      </label>-->\n\n<!--      <div class=\"invalid\" *ngIf=\"isInvalid\">-->\n<!--        Заполните все поля-->\n<!--      </div>-->\n\n<!--      <button class=\"add-inputs submit\" (click)=\"submit()\">-->\n<!--        Отправить-->\n<!--      </button>-->\n<!--    </div>-->\n<!--  </div>-->\n\n  <div class=\"loading\" *ngIf=\"isLoading\">\n    Подождите, идет загрузка данных :)\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hardware-page/hardware-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/hardware-page/hardware-page.component.ts ***!
  \**********************************************************/
/*! exports provided: HardwarePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardwarePageComponent", function() { return HardwarePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_title_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/title-pages */ "./src/app/services/title-pages.ts");





var HardwarePageComponent = /** @class */ (function () {
    function HardwarePageComponent(router, http) {
        this.router = router;
        this.http = http;
        this.prevUrl = '';
        this.data = [];
        this.isLoading = true;
        this.isInvalid = false;
        this.isAdd = false;
        this.addHard = {
            name: '',
            description: '',
            hardwareCategory: this.router.url.split('/').reverse()[0],
        };
    }
    HardwarePageComponent.prototype.ngOnInit = function () {
        setInterval(this.checkUrl.bind(this), 100);
    };
    HardwarePageComponent.prototype.checkUrl = function () {
        if (this.prevUrl !== this.router.url) {
            this.prevUrl = this.router.url;
            this.updateForm();
            this.getData();
        }
    };
    HardwarePageComponent.prototype.getData = function () {
        var _this = this;
        this.data = [];
        this.isLoading = true;
        this.http.get("/api" + this.router.url).subscribe(function (res) {
            _this.data = res;
            _this.isLoading = false;
        });
    };
    HardwarePageComponent.prototype.openForm = function () {
        this.isAdd = !this.isAdd;
    };
    HardwarePageComponent.prototype.submit = function () {
        if (!this.addHard.name || !this.addHard.description) {
            this.isInvalid = true;
            return;
        }
        this.isInvalid = false;
    };
    HardwarePageComponent.prototype.updateForm = function () {
        this.isInvalid = false;
        this.isAdd = false;
        this.addHard = {
            name: '',
            description: '',
            hardwareCategory: this.router.url.split('/').reverse()[0],
        };
    };
    HardwarePageComponent.prototype.getName = function () {
        return _services_title_pages__WEBPACK_IMPORTED_MODULE_4__["titles"][this.router.url.split('/').pop()];
    };
    HardwarePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hardware-page',
            template: __webpack_require__(/*! ./hardware-page.component.html */ "./src/app/hardware-page/hardware-page.component.html"),
            styles: [__webpack_require__(/*! ./hardware-page.component.css */ "./src/app/hardware-page/hardware-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], HardwarePageComponent);
    return HardwarePageComponent;
}());



/***/ }),

/***/ "./src/app/hardware/hardware.component.css":
/*!*************************************************!*\
  !*** ./src/app/hardware/hardware.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hardware-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  margin-left: 10px;\n  margin-bottom: 15px;\n}\n\n.border {\n  padding: 15px;\n  border-radius: 5%;\n  border: 1px solid black;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-size: 24px;\n  margin-left: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGFyZHdhcmUvaGFyZHdhcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1Qjs7RUFFdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9oYXJkd2FyZS9oYXJkd2FyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhhcmR3YXJlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJvcmRlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/hardware/hardware.component.html":
/*!**************************************************!*\
  !*** ./src/app/hardware/hardware.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hardware-container\" [class.border]=\"isList\">\n  <div>\n    Имя: {{hardware.name}}\n  </div>\n\n  <div>\n    Категория: {{hardware.hardwareCategory}}\n  </div>\n\n  <div>\n    Описание: {{hardware.description}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/hardware/hardware.component.ts":
/*!************************************************!*\
  !*** ./src/app/hardware/hardware.component.ts ***!
  \************************************************/
/*! exports provided: HardwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HardwareComponent", function() { return HardwareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HardwareComponent = /** @class */ (function () {
    function HardwareComponent(router) {
        this.router = router;
        this.isList = false;
    }
    HardwareComponent.prototype.ngOnInit = function () {
        this.isList = false;
        if (this.router.url.includes('hardware')) {
            this.isList = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HardwareComponent.prototype, "hardware", void 0);
    HardwareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hardware',
            template: __webpack_require__(/*! ./hardware.component.html */ "./src/app/hardware/hardware.component.html"),
            styles: [__webpack_require__(/*! ./hardware.component.css */ "./src/app/hardware/hardware.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HardwareComponent);
    return HardwareComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i {\n  margin-left: 10px;\n}\n\nh2 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-container {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n\n  position: fixed;\n\n  background-color: white;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  padding: 20px;\n\n  border: 1px solid black;\n\n  font-size: 24px;\n}\n\ninput {\n  font-size: 20px;\n  padding: 5px;\n}\n\n.margin {\n  margin-bottom: 25px;\n}\n\nbutton {\n  font-size: 24px;\n  padding: 10px;\n  border-radius: 15%;\n}\n\nbutton:hover {\n  cursor: pointer;\n  background-color: wheat;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUzs7RUFFVCxlQUFlOztFQUVmLHVCQUF1Qjs7RUFFdkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLGFBQWE7O0VBRWIsdUJBQXVCOztFQUV2QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbmgyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1jb250YWluZXIge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG5cbiAgcG9zaXRpb246IGZpeGVkO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubG9naW4tZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIHBhZGRpbmc6IDIwcHg7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuYnV0dG9uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNSU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"login-container\">-->\n\n<!--  <div class=\"login-form\">-->\n<!--    <h2 class=\"margin\">Авторизуйтесь-->\n<!--      <i class=\"fa fa-sign-in\" aria-hidden=\"true\"></i>-->\n<!--    </h2>-->\n\n\n<!--    <label class=\"margin\">-->\n<!--      Логин:-->\n<!--      <input type=\"text\" placeholder=\"Логин\" [(ngModel)]=\"login\">-->\n<!--    </label>-->\n\n<!--    <label class=\"margin\">-->\n<!--      Пароль:-->\n<!--      <input type=\"password\" placeholder=\"Пароль\" [(ngModel)]=\"password\">-->\n<!--    </label>-->\n\n<!--    <button (click)=\"auth()\" class=\"margin\">-->\n<!--      Войти-->\n<!--    </button>-->\n<!--  </div>-->\n\n<!--</div>-->\n\n<!--<form action=\"/login\" method=\"post\">-->\n<!--  <div><label> User Name : <input type=\"text\" name=\"username\"/> </label></div>-->\n<!--  <div><label> Password: <input type=\"password\" name=\"password\"/> </label></div>-->\n<!--  <div><input type=\"submit\" value=\"Sign In\"/></div>-->\n<!--</form>-->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(http) {
        this.http = http;
        this.login = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.auth = function () {
        var bodyJson = JSON.stringify({
            username: this.login,
            password: this.password,
        });
        this.http.post('/login', bodyJson).subscribe(function (res) {
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main-page/main-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-page/main-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-align: center;\n}\n\nli {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 20px;\n  font-size: 20px;\n}\n\nimg {\n  height: 20px;\n  width: auto;\n  margin-right: 10px;\n}\n\napp-form-component {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n\ni {\n  margin-right: 5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1wYWdlL21haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmxpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5hcHAtZm9ybS1jb21wb25lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaSB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/main-page/main-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-page/main-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h1>Учет IT активов организации</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainPageComponent = /** @class */ (function () {
    function MainPageComponent() {
    }
    MainPageComponent.prototype.ngOnInit = function () {
    };
    MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.css */ "./src/app/main-page/main-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/menu-link/menu-link.component.css":
/*!***************************************************!*\
  !*** ./src/app/menu-link/menu-link.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-link-container {\n  display: flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  position: relative;\n  border: 1px solid blue;\n}\n\n.menu-link {\n  border: 1px solid red;\n  display: flex;\n  width: 100%;\n}\n\n.menu-link__link {\n  width: 100%;\n  padding: 20px;\n  text-align: center;\n}\n\n.menu-link__fonts {\n  font-size: 24px;\n  text-decoration: none;\n  color: black;\n}\n\n.menu-link__small-fonts {\n  font-size: 16px;\n}\n\n.menu-link:hover~.menu-sublinks_hidden {\n  display: flex;\n}\n\n.sublinks-conteiner {\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  left: 100%;\n}\n\n.sublinks-conteiner:hover {\n  display: flex;\n  z-index: 999;\n}\n\n.menu-sublinks_hidden {\n  display: none;\n}\n\n.menu-link:hover {\n  background-color: bisque;\n  cursor: pointer;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1saW5rL21lbnUtbGluay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL21lbnUtbGluay9tZW51LWxpbmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWxpbmstY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xufVxuXG4ubWVudS1saW5rIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1lbnUtbGlua19fbGluayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tZW51LWxpbmtfX2ZvbnRzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLm1lbnUtbGlua19fc21hbGwtZm9udHMge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tZW51LWxpbms6aG92ZXJ+Lm1lbnUtc3VibGlua3NfaGlkZGVuIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnN1YmxpbmtzLWNvbnRlaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMDAlO1xufVxuXG4uc3VibGlua3MtY29udGVpbmVyOmhvdmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ubWVudS1zdWJsaW5rc19oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubWVudS1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmlzcXVlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuIl19 */"

/***/ }),

/***/ "./src/app/menu-link/menu-link.component.html":
/*!****************************************************!*\
  !*** ./src/app/menu-link/menu-link.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-link-container\">\n  <div class=\"menu-link\">\n    <a *ngIf=\"menu.title === 'Главная'\" class=\"menu-link__link menu-link__fonts\"\n       routerLink=''>\n      {{menu.title}}\n    </a>\n    <a *ngIf=\"menu.title !== 'Главная'\" class=\"menu-link__link menu-link__fonts\">\n      {{menu.title}}\n    </a>\n  </div>\n\n  <div class=\"sublinks-conteiner menu-sublinks_hidden\">\n    <div class=\"menu-link\" *ngFor=\"let sublink of menu.children\">\n      <a class=\"menu-link__link menu-link__fonts menu-link__small-fonts\" routerLink=\"{{sublink.link}}\">\n        {{sublink.title}}\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/menu-link/menu-link.component.ts":
/*!**************************************************!*\
  !*** ./src/app/menu-link/menu-link.component.ts ***!
  \**************************************************/
/*! exports provided: MenuLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLinkComponent", function() { return MenuLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuLinkComponent = /** @class */ (function () {
    function MenuLinkComponent() {
    }
    MenuLinkComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MenuLinkComponent.prototype, "menu", void 0);
    MenuLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-link',
            template: __webpack_require__(/*! ./menu-link.component.html */ "./src/app/menu-link/menu-link.component.html"),
            styles: [__webpack_require__(/*! ./menu-link.component.css */ "./src/app/menu-link/menu-link.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuLinkComponent);
    return MenuLinkComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container_size-small {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  border: 1px solid green;\n  justify-content: center;\n  /*align-items: center;*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtY29udGFpbmVyX3NpemUtc21hbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMjAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLyphbGlnbi1pdGVtczogY2VudGVyOyovXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"menu-container menu-container_size-small\">\n  <app-menu-link *ngFor=\"let menu of navbarLink\" [menu]=\"menu\"></app-menu-link>\n</div>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_menu_service_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/menu-service-items */ "./src/app/services/menu-service-items.ts");



var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.navbarLink = _services_menu_service_items__WEBPACK_IMPORTED_MODULE_2__["MENU_NAVBAR_LINK"];
    }
    MenuComponent.prototype.ngOnInit = function () { };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/services/menu-service-items.ts":
/*!************************************************!*\
  !*** ./src/app/services/menu-service-items.ts ***!
  \************************************************/
/*! exports provided: MENU_NAVBAR_LINK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_NAVBAR_LINK", function() { return MENU_NAVBAR_LINK; });
var MENU_NAVBAR_LINK = [
    {
        title: 'Главная',
        link: 'main',
        children: [],
    },
    {
        title: 'Сотрудники',
        link: '/employee',
        children: [
            {
                title: 'Отдел #1',
                link: '/department/1',
            },
            {
                title: 'Отдел #2',
                link: '/department/2',
            },
            {
                title: 'Отдел #3',
                link: 'department/3',
            },
            {
                title: 'Отдел #4',
                link: '/department/4',
            },
        ],
    },
    {
        title: 'Компьютеры',
        link: '/computer',
        children: [
            {
                title: 'Настольные ПК',
                link: '/computer/category/PC',
            },
            {
                title: 'Ноутбуки',
                link: '/computer/category/NOTEBOOK',
            },
        ],
    },
    {
        title: 'Железо',
        link: '/hardware',
        children: [
            {
                title: 'Материнская плата',
                link: '/hardware/category/MOTHERBOARD',
            },
            {
                title: 'Оперативная память',
                link: '/hardware/category/RAM',
            },
            {
                title: 'Жесткий диск',
                link: '/hardware/category/ROM',
            },
            {
                title: 'Видеокарта',
                link: '/hardware/category/GPU',
            },
            {
                title: 'Процессор',
                link: '/hardware/category/CPU',
            },
            {
                title: 'Блок питания',
                link: '/hardware/category/PS',
            },
        ]
    },
    {
        title: 'ПО',
        link: '/software',
        children: [
            {
                title: 'ОС',
                link: '/software/category/OS',
            },
            {
                title: 'Программы',
                link: '/software/category/PROGRAM',
            },
        ]
    },
    {
        title: 'Периферические устройства',
        link: '/addon',
        children: [
            {
                title: 'Монитор',
                link: '/addon/category/MONITOR',
            },
            {
                title: 'Клавиатура',
                link: '/addon/category/KEYBOARD',
            },
            {
                title: 'Мышь',
                link: '/addon/category/MOUSE',
            },
            {
                title: 'Принтер',
                link: '/addon/category/PRINTER',
            },
        ]
    }
];


/***/ }),

/***/ "./src/app/services/title-pages.ts":
/*!*****************************************!*\
  !*** ./src/app/services/title-pages.ts ***!
  \*****************************************/
/*! exports provided: titles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titles", function() { return titles; });
var titles = {
    ITIR: 1,
    OVP: 2,
    PATS: 3,
    PEL: 4,
    PC: 'Настольные ПК',
    NOTEBOOK: 'Ноутбуки',
    MOTHERBOARD: 'Материнские платы',
    RAM: 'Оперативная память',
    ROM: 'Жесткие диски',
    GPU: 'Видеокарты',
    CPU: 'Процессоры',
    OC: 'Операционные системы',
    PROGRAM: 'Программы',
    MONITOR: 'Мониторы',
    KEYBOARD: 'Клавиатуры',
    MOUSE: 'Мыши',
};


/***/ }),

/***/ "./src/app/software-list/software-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/software-list/software-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvZnR3YXJlLWxpc3Qvc29mdHdhcmUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/software-list/software-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/software-list/software-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"list-container\">\n  <app-software *ngFor=\"let soft of list\" [soft]=\"soft\"></app-software>\n</div>\n"

/***/ }),

/***/ "./src/app/software-list/software-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/software-list/software-list.component.ts ***!
  \**********************************************************/
/*! exports provided: SoftwareListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareListComponent", function() { return SoftwareListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SoftwareListComponent = /** @class */ (function () {
    function SoftwareListComponent() {
    }
    SoftwareListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SoftwareListComponent.prototype, "list", void 0);
    SoftwareListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sowtware-list',
            template: __webpack_require__(/*! ./software-list.component.html */ "./src/app/software-list/software-list.component.html"),
            styles: [__webpack_require__(/*! ./software-list.component.css */ "./src/app/software-list/software-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SoftwareListComponent);
    return SoftwareListComponent;
}());



/***/ }),

/***/ "./src/app/software-page/software-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/software-page/software-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".soft-list {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nh2 {\n  text-align: center;\n}\n\n.add-soft {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.add-inputs {\n  font-size: 24px;\n  padding: 10px;\n  margin-bottom: 15px;\n\n  border-radius: 15%;\n}\n\n.add-inputs:hover {\n  background-color: wheat;\n  cursor: pointer;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n\nlabel {\n  margin-bottom: 15px;\n  font-size: 24px;\n}\n\n.submit {\n  align-self: center;\n  font-size: 20px;\n}\n\n.invalid {\n  color: red;\n  align-self: center;\n  margin-bottom: 10px;\n}\n\ninput {\n  font-size: 20px;\n  padding: 5px;\n}\n\n.loading {\n  font-size: 24px;\n}\n\n.empty-data {\n  margin: 15px;\n  padding: 10px;\n  font-size: 24px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29mdHdhcmUtcGFnZS9zb2Z0d2FyZS1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjs7RUFFbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3NvZnR3YXJlLXBhZ2Uvc29mdHdhcmUtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvZnQtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZC1zb2Z0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hZGQtaW5wdXRzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gIGJvcmRlci1yYWRpdXM6IDE1JTtcbn1cblxuLmFkZC1pbnB1dHM6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGVhdDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uc3VibWl0IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5pbnZhbGlkIHtcbiAgY29sb3I6IHJlZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubG9hZGluZyB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmVtcHR5LWRhdGEge1xuICBtYXJnaW46IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/software-page/software-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/software-page/software-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"soft-list\">\n  <h2 class=\"title\">Список софта: {{getName()}}</h2>\n  <div *ngIf=\"!isLoading\">\n    <app-sowtware-list [list]=\"data\"></app-sowtware-list>\n    <div class=\"empty-data\" *ngIf=\"data.length === 0\">\n      Данных для отображения нет\n    </div>\n  </div>\n\n<!--  <div class=\"add-soft\" *ngIf=\"!isLoading\">-->\n<!--    <button (click)=\"openForm()\" class=\"add-inputs\">-->\n<!--      {{isAdd ? 'Закрыть форму' : 'Добавить софт'}}-->\n<!--    </button>-->\n\n<!--    <div *ngIf=\"isAdd\" class=\"form-container\">-->\n<!--      <label>-->\n<!--        Название: <input type=\"text\" [(ngModel)]=\"addSoft.name\">-->\n<!--      </label>-->\n<!--      <label>-->\n<!--        Описание: <input type=\"text\" [(ngModel)]=\"addSoft.description\">-->\n<!--      </label>-->\n\n<!--      <div class=\"invalid\" *ngIf=\"isInvalid\">-->\n<!--        Заполните все поля-->\n<!--      </div>-->\n\n<!--      <button class=\"add-inputs submit\" (click)=\"submit()\">-->\n<!--        Отправить-->\n<!--      </button>-->\n<!--    </div>-->\n<!--  </div>-->\n\n  <div class=\"loading\" *ngIf=\"isLoading\">\n    Подождите, идет загрузка данных :)\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/software-page/software-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/software-page/software-page.component.ts ***!
  \**********************************************************/
/*! exports provided: SoftwarePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwarePageComponent", function() { return SoftwarePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_title_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/title-pages */ "./src/app/services/title-pages.ts");





var SoftwarePageComponent = /** @class */ (function () {
    function SoftwarePageComponent(router, http) {
        this.router = router;
        this.http = http;
        this.prevUrl = '';
        this.data = [];
        this.isLoading = true;
        this.isInvalid = false;
        this.isAdd = false;
        this.addSoft = {
            name: '',
            description: '',
            hardwareCategory: this.router.url.split('/').reverse()[0],
        };
    }
    SoftwarePageComponent.prototype.ngOnInit = function () {
        setInterval(this.checkUrl.bind(this), 100);
    };
    SoftwarePageComponent.prototype.checkUrl = function () {
        if (this.prevUrl !== this.router.url) {
            this.prevUrl = this.router.url;
            this.updateForm();
            this.getData();
        }
    };
    SoftwarePageComponent.prototype.getData = function () {
        var _this = this;
        this.data = [];
        this.isLoading = true;
        this.http.get("/api" + this.router.url).subscribe(function (res) {
            _this.data = res;
            _this.isLoading = false;
        });
    };
    SoftwarePageComponent.prototype.openForm = function () {
        this.isAdd = !this.isAdd;
    };
    SoftwarePageComponent.prototype.submit = function () {
        if (!this.addSoft.name || !this.addSoft.description) {
            this.isInvalid = true;
            return;
        }
        this.isInvalid = false;
    };
    SoftwarePageComponent.prototype.updateForm = function () {
        this.isInvalid = false;
        this.isAdd = false;
        this.addSoft = {
            name: '',
            description: '',
            hardwareCategory: this.router.url.split('/').reverse()[0],
        };
    };
    SoftwarePageComponent.prototype.getName = function () {
        return _services_title_pages__WEBPACK_IMPORTED_MODULE_4__["titles"][this.router.url.split('/').pop()];
    };
    SoftwarePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-software-page',
            template: __webpack_require__(/*! ./software-page.component.html */ "./src/app/software-page/software-page.component.html"),
            styles: [__webpack_require__(/*! ./software-page.component.css */ "./src/app/software-page/software-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], SoftwarePageComponent);
    return SoftwarePageComponent;
}());



/***/ }),

/***/ "./src/app/software/software.component.css":
/*!*************************************************!*\
  !*** ./src/app/software/software.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".software-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n\n  margin-left: 10px;\n  margin-bottom: 15px;\n}\n\n.border {\n  padding: 15px;\n  border-radius: 5%;\n  border: 1px solid black;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  font-size: 24px;\n  margin-left: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29mdHdhcmUvc29mdHdhcmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1Qjs7RUFFdkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zb2Z0d2FyZS9zb2Z0d2FyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvZnR3YXJlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmJvcmRlciB7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/software/software.component.html":
/*!**************************************************!*\
  !*** ./src/app/software/software.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"software-container\" [class.border]=\"isList\">\n  <div>\n    Имя: {{soft.name}}\n  </div>\n\n  <div>\n    Категория: {{soft.softwareCategory}}\n  </div>\n\n  <div>\n    Описание: {{soft.description}}\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/software/software.component.ts":
/*!************************************************!*\
  !*** ./src/app/software/software.component.ts ***!
  \************************************************/
/*! exports provided: SoftwareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoftwareComponent", function() { return SoftwareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SoftwareComponent = /** @class */ (function () {
    function SoftwareComponent(router) {
        this.router = router;
        this.isList = false;
    }
    SoftwareComponent.prototype.ngOnInit = function () {
        if (this.router.url.includes('software')) {
            this.isList = true;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SoftwareComponent.prototype, "soft", void 0);
    SoftwareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-software',
            template: __webpack_require__(/*! ./software.component.html */ "./src/app/software/software.component.html"),
            styles: [__webpack_require__(/*! ./software.component.css */ "./src/app/software/software.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SoftwareComponent);
    return SoftwareComponent;
}());



/***/ }),

/***/ "./src/app/update-component/update-component.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/update-component/update-component.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.upd {*/\n/*  border: 1px solid black;*/\n/*  border-radius: 5%;*/\n/*}*/\n.update-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: 25px;\n\n  border: 1px solid black;\n  border-radius: 5%;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n.title {\n  margin-top: 20px;\n  font-size: 24px;\n}\ninput {\n  font-size: 20px;\n  padding: 5px;\n}\nlabel {\n  margin-bottom: 20px;\n  font-size: 20px;\n}\nbutton {\n  margin-top: 15px;\n  margin-bottom: 20px;\n  font-size: 16px;\n  padding: 5px;\n  border-radius: 5%;\n}\nbutton:hover {\n  cursor: pointer;\n  background-color: wheat;\n}\n.save {\n  font-size: 24px;\n  align-self: center;\n}\nselect {\n  font-size: 20px;\n  padding: 5px;\n}\n.add-owner {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n}\n.add-owner label {\n  margin-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLWNvbXBvbmVudC91cGRhdGUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUztBQUNULDZCQUE2QjtBQUM3Qix1QkFBdUI7QUFDdkIsSUFBSTtBQUVKO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLGFBQWE7O0VBRWIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvdXBkYXRlLWNvbXBvbmVudC91cGRhdGUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi51cGQgeyovXG4vKiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7Ki9cbi8qICBib3JkZXItcmFkaXVzOiA1JTsqL1xuLyp9Ki9cblxuLnVwZGF0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHBhZGRpbmc6IDI1cHg7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4udGl0bGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNSU7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XG59XG5cbi5zYXZlIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbnNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYWRkLW93bmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uYWRkLW93bmVyIGxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/update-component/update-component.component.html":
/*!******************************************************************!*\
  !*** ./src/app/update-component/update-component.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"update-container upd\" *ngIf=\"comp !== undefined\">\n  <label>\n    Имя: <input type=\"text\" [(ngModel)]=\"comp.name\">\n  </label>\n  <label>\n    Категория:\n    <select [(ngModel)]=\"comp.computerCategory\">\n      <option *ngFor=\"let item of compList\"\n              [value]=\"item\"\n              [selected]=\"isSelected(item, 0, 'computerCategory')\">{{item}}</option>\n    </select>\n  </label>\n  <label>\n    Описание: <input type=\"text\" [(ngModel)]=\"comp.description\">\n  </label>\n\n  <div class=\"add-owner\">\n    <h4>Владелец:</h4>\n    <label>\n      Фамилия: <input type=\"text\" [(ngModel)]=\"comp.employee.lastName\">\n    </label>\n    <label>\n      Имя: <input type=\"text\" [(ngModel)]=\"comp.employee.firstName\">\n    </label>\n    <label>\n      Отчество: <input type=\"text\" [(ngModel)]=\"comp.employee.middleName\">\n    </label>\n    <label>\n      Номер отдела: <select [(ngModel)]=\"comp.employee.department.id\">\n      <option value=\"1\">1</option>\n      <option value=\"2\">2</option>\n      <option value=\"3\">3</option>\n      <option value=\"4\">4</option>\n    </select>\n    </label>\n  </div>\n\n  <div class=\"title\">\n    Список железа:\n  </div>\n\n  <div class=\"update-container\" *ngFor=\"let obj of fakeListHard; let i = index\">\n    <label>\n      Имя: <input type=\"text\" [(ngModel)]=\"comp.hardwareList[i].name\">\n    </label>\n    <label>\n      Описание: <input type=\"text\" [(ngModel)]=\"comp.hardwareList[i].description\">\n    </label>\n    <label>\n      Категория:\n      <select [(ngModel)]=\"comp.hardwareList[i].hardwareCategory\">\n        <option *ngFor=\"let item of hardList\"\n                [value]=\"item\"\n                [selected]=\"isSelected(item, i, 'hardwareList', 'hardwareCategory')\">{{item}}</option>\n      </select>\n    </label>\n\n    <button (click)=\"delete('hardwareList', i)\">\n      Удалить железку\n    </button>\n  </div>\n\n  <button (click)=\"addNew('hard')\">\n    Добавить железку\n  </button>\n\n\n  <div class=\"title\">\n    Список софта:\n  </div>\n  <div class=\"update-container\" *ngFor=\"let obj of fakeListSoft; let i = index\">\n    <label>\n      Имя: <input type=\"text\" [(ngModel)]=\"comp.softwareList[i].name\">\n    </label>\n    <label>\n      Описание: <input type=\"text\" [(ngModel)]=\"comp.softwareList[i].description\">\n    </label>\n    <label>\n      Категория:\n      <select [(ngModel)]=\"comp.softwareList[i].softwareCategory\">\n        <option *ngFor=\"let item of softList\"\n                [value]=\"item\"\n                [selected]=\"isSelected(item, i, 'softwareList', 'softwareCategory')\">{{item}}</option>\n      </select>\n    </label>\n\n    <button (click)=\"delete('softwareList', i)\">\n      Удалить софт\n    </button>\n  </div>\n\n  <button (click)=\"addNew('soft')\">\n    Добавить программу\n  </button>\n\n  <div class=\"title\">\n    Список устройств:\n  </div>\n  <div class=\"update-container\" *ngFor=\"let obj of fakeListAdd; let i = index\">\n    <label>\n      Имя: <input type=\"text\" [(ngModel)]=\"comp.addonList[i].name\">\n    </label>\n    <label>\n      Описание: <input type=\"text\" [(ngModel)]=\"comp.addonList[i].description\">\n    </label>\n    <label>\n      Категория:\n      <select [(ngModel)]=\"comp.addonList[i].addonCategory\">\n        <option *ngFor=\"let item of addList\"\n                [value]=\"item\"\n                [selected]=\"isSelected(item, i, 'hardwareList', 'hardwareCategory')\">{{item}}</option>\n      </select>\n    </label>\n\n    <button (click)=\"delete('addonList', i)\">\n      Удалить устройство\n    </button>\n  </div>\n\n  <button (click)=\"addNew('add')\">\n    Добавить устройство\n  </button>\n\n  <button class=\"save\" (click)=\"saveData()\">\n    {{isCreate ? 'Добавить' : 'Сохранить'}}\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/update-component/update-component.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/update-component/update-component.component.ts ***!
  \****************************************************************/
/*! exports provided: UpdateComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponentComponent", function() { return UpdateComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var UpdateComponentComponent = /** @class */ (function () {
    function UpdateComponentComponent(router, http) {
        this.router = router;
        this.http = http;
        this.id = this.router.url.split('/').pop();
        this.isCreate = false;
        this.fakeListSoft = [];
        this.fakeListHard = [];
        this.fakeListAdd = [];
        this.softList = ['OS', 'PROGRAM'];
        this.hardList = ['MOTHERBOARD', 'RAM', 'ROM', 'GPU', 'CPU', 'PS'];
        this.addList = ['MONITOR', 'KEYBOARD', 'MOUSE', 'PRINTER'];
        this.compList = ['PC', 'NOTEBOOK'];
    }
    UpdateComponentComponent.prototype.ngOnInit = function () {
        if (this.router.url === '/create') {
            this.isCreate = true;
            this.create();
            return;
        }
        this.isCreate = false;
        this.update();
    };
    UpdateComponentComponent.prototype.update = function () {
        var _this = this;
        this.http.get("api/computer/" + this.router.url.split('/').pop()).subscribe(function (res) {
            _this.comp = res;
            _this.fakeListSoft = res.softwareList;
            _this.fakeListHard = res.hardwareList;
            _this.fakeListAdd = res.addonList;
            if (_this.comp.employee === null) {
                _this.comp.employee = {
                    lastName: '',
                    firstName: '',
                    middleName: '',
                    department: {
                        id: '',
                        name: '',
                    },
                };
            }
        });
    };
    UpdateComponentComponent.prototype.create = function () {
        this.comp = {
            name: '',
            computerCategory: '',
            description: '',
            softwareList: [],
            hardwareList: [],
            addonList: [],
            employee: {
                lastName: '',
                firstName: '',
                middleName: '',
                department: {
                    id: '',
                    name: '',
                },
            },
        };
        this.fakeListSoft = this.comp.softwareList;
        this.fakeListHard = this.comp.hardwareList;
        this.fakeListAdd = this.comp.addonList;
    };
    UpdateComponentComponent.prototype.addNew = function (hard) {
        switch (hard) {
            case 'hard':
                this.comp.hardwareList.push({
                    name: '',
                    hardwareCategory: '',
                    description: '',
                });
                this.fakeListHard = this.comp.hardwareList;
                break;
            case 'soft':
                this.comp.softwareList.push({
                    name: '',
                    softwareCategory: '',
                    description: '',
                });
                this.fakeListSoft = this.comp.softwareList;
                break;
            case 'add':
                this.comp.addonList.push({
                    name: '',
                    description: '',
                });
                this.fakeListAdd = this.comp.addonList;
                break;
        }
    };
    UpdateComponentComponent.prototype.saveData = function () {
        var _this = this;
        if (!this.comp.employee.firstName) {
            this.comp.employee = null;
        }
        else {
            this.comp.employee.department.name = "\u041E\u0442\u0434\u0435\u043B #" + this.comp.employee.department.id;
        }
        if (this.isCreate) {
            this.createData();
            return;
        }
        this.http.put("api/computer/" + this.id, this.comp).subscribe(function (res) {
            _this.router.navigateByUrl("/computer/" + res.id);
        });
    };
    UpdateComponentComponent.prototype.createData = function () {
        var _this = this;
        this.http.post('api/computer', this.comp).subscribe(function (res) {
            _this.router.navigateByUrl("/computer/" + res.id);
        });
    };
    UpdateComponentComponent.prototype.delete = function (list, i) {
        this.comp[list].splice(i, 1);
        this.fakeListSoft = this.comp.softwareList;
        this.fakeListHard = this.comp.hardwareList;
        this.fakeListAdd = this.comp.addonList;
    };
    UpdateComponentComponent.prototype.isSelected = function (item, index, key, value) {
        if (!value) {
            return item === this.comp[key];
        }
        return item === this.comp[key][index][value];
    };
    UpdateComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-component',
            template: __webpack_require__(/*! ./update-component.component.html */ "./src/app/update-component/update-component.component.html"),
            styles: [__webpack_require__(/*! ./update-component.component.css */ "./src/app/update-component/update-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], UpdateComponentComponent);
    return UpdateComponentComponent;
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

module.exports = __webpack_require__(/*! D:\Java\Spring-boot\4\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map