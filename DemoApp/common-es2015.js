(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/post-login/post-login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/post-login/post-login.service.ts ***!
  \**************************************************/
/*! exports provided: PostLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLoginService", function() { return PostLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");






class PostLoginService {
    constructor(router, http, sharedService) {
        this.router = router;
        this.http = http;
        this.sharedService = sharedService;
        this.environment = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
    }
    hasMultipleRoles() {
        let userRoles = JSON.parse(this.sharedService.loggedInData());
        return userRoles && userRoles.roles && userRoles.roles.length > 1;
    }
    //************* Navigate to my Profile */
    navigateToMyProfile() {
        let isStudent = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"].studentRoleId['$oid'] === this.sharedService.currentUserRoleId()['$oid'];
        let isGuardian = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"].guardianRoleId['$oid'] === this.sharedService.currentUserRoleId()['$oid'];
        if (isStudent || isGuardian) {
            this.router.navigateByUrl("pl/secure/studentguardian/(postLoginOutlet:myProfile)");
            console.log("yes i here isGuardian..........");
        }
        else {
            this.router.navigateByUrl("pl/secure/employee/(postLoginOutlet:myProfile)");
            console.log("yes i here isGuardian else .........");
        }
    }
    getPageEntitlements(pageId, subPageId) {
        let currentUserRoleId = this.sharedService.currentUserRoleId();
        if (currentUserRoleId['$oid'] === _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"].superAdminRoleId['$oid']) {
            return 2;
        }
        else {
            let page = this.currentUserRoleEntitlements.find(x => x.pageId === pageId);
            let subPage = page.subPage.find(x => x.subPageId === subPageId);
            if (page.accessTypeId === 0 || subPage.accessTypeId === 0) {
                //logOut
            }
            else {
                return subPage.accessTypeId;
            }
        }
    }
    /*******************************************************************
     * Save User settings
     *******************************************************************/
    saveUserSettings(data) {
        return this.http.post(this.environment.apiUrl + "api/userSettings/" + "saveUserSettings", data);
    }
    restoreDefaultSettings(id) {
        return this.http.get(this.environment.apiUrl + "api/userSettings/restoreDefaultSettings?id=" + id);
    }
}
PostLoginService.ɵfac = function PostLoginService_Factory(t) { return new (t || PostLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"])); };
PostLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostLoginService, factory: PostLoginService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map