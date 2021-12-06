function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-attendance-module"], {
  /***/
  "./src/app/post-login/attendance/attendance-routing.module.ts":
  /*!********************************************************************!*\
    !*** ./src/app/post-login/attendance/attendance-routing.module.ts ***!
    \********************************************************************/

  /*! exports provided: AttendanceRoutingModule */

  /***/
  function srcAppPostLoginAttendanceAttendanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttendanceRoutingModule", function () {
      return AttendanceRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _student_manual_mark_student_attendance_mark_student_attendance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./student/manual/mark-student-attendance/mark-student-attendance.component */
    "./src/app/post-login/attendance/student/manual/mark-student-attendance/mark-student-attendance.component.ts");
    /* harmony import */


    var _student_reset_student_attendance_reset_student_attendance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./student/reset-student-attendance/reset-student-attendance.component */
    "./src/app/post-login/attendance/student/reset-student-attendance/reset-student-attendance.component.ts");

    var routes = [{
      path: 'markStuAttendance',
      component: _student_manual_mark_student_attendance_mark_student_attendance_component__WEBPACK_IMPORTED_MODULE_2__["MarkStudentAttendanceComponent"],
      outlet: 'postLoginOutlet'
    }, {
      path: 'resetStuAttendance',
      component: _student_reset_student_attendance_reset_student_attendance_component__WEBPACK_IMPORTED_MODULE_3__["ResetStudentAttendanceComponent"],
      outlet: 'postLoginOutlet'
    }];

    var AttendanceRoutingModule = function AttendanceRoutingModule() {
      _classCallCheck(this, AttendanceRoutingModule);
    };

    AttendanceRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AttendanceRoutingModule
    });
    AttendanceRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AttendanceRoutingModule_Factory(t) {
        return new (t || AttendanceRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AttendanceRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttendanceRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/attendance/attendance-search/attendance-search.component.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/post-login/attendance/attendance-search/attendance-search.component.ts ***!
    \****************************************************************************************/

  /*! exports provided: AttendanceSearchComponent */

  /***/
  function srcAppPostLoginAttendanceAttendanceSearchAttendanceSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttendanceSearchComponent", function () {
      return AttendanceSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/shared/component/dynamic-form/field.interface */
    "./src/app/shared/component/dynamic-form/field.interface.ts");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */
    "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");

    var AttendanceSearchComponent =
    /*#__PURE__*/
    function () {
      function AttendanceSearchComponent(sharedService) {
        _classCallCheck(this, AttendanceSearchComponent);

        this.sharedService = sharedService;
        this.initialFormValues = null;
        this.isViewMode = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
      }

      _createClass(AttendanceSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fieldsConfig = [{
            isViewMode: this.isViewMode,
            type: "date",
            label: "Date",
            name: "attendanceDate",
            options: {
              selectToday: true
            },
            validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_1__["validationType"].required()]
          }];
          this.sharedService.setFormInitialValueForChangeMode(this.fieldsConfig, this.initialFormValues);
        }
      }]);

      return AttendanceSearchComponent;
    }();

    AttendanceSearchComponent.ɵfac = function AttendanceSearchComponent_Factory(t) {
      return new (t || AttendanceSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]));
    };

    AttendanceSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AttendanceSearchComponent,
      selectors: [["app-attendance-search"]],
      inputs: {
        form: "form",
        initialFormValues: "initialFormValues",
        fieldsConfig: "fieldsConfig",
        isViewMode: "isViewMode"
      },
      decls: 1,
      vars: 3,
      consts: [[3, "form", "fields", "addEmptyDiv"]],
      template: function AttendanceSearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.form)("fields", ctx.fieldsConfig)("addEmptyDiv", false);
        }
      },
      directives: [_shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vYXR0ZW5kYW5jZS9hdHRlbmRhbmNlLXNlYXJjaC9hdHRlbmRhbmNlLXNlYXJjaC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttendanceSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-attendance-search',
          templateUrl: './attendance-search.component.html',
          styleUrls: ['./attendance-search.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }];
      }, {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        initialFormValues: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fieldsConfig: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isViewMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/attendance/attendance.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/post-login/attendance/attendance.module.ts ***!
    \************************************************************/

  /*! exports provided: AttendanceModule */

  /***/
  function srcAppPostLoginAttendanceAttendanceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttendanceModule", function () {
      return AttendanceModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _attendance_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./attendance-routing.module */
    "./src/app/post-login/attendance/attendance-routing.module.ts");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _student_manual_mark_student_attendance_mark_student_attendance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./student/manual/mark-student-attendance/mark-student-attendance.component */
    "./src/app/post-login/attendance/student/manual/mark-student-attendance/mark-student-attendance.component.ts");
    /* harmony import */


    var _attendance_search_attendance_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./attendance-search/attendance-search.component */
    "./src/app/post-login/attendance/attendance-search/attendance-search.component.ts");
    /* harmony import */


    var _services_employee_attendance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/employee-attendance.service */
    "./src/app/post-login/attendance/services/employee-attendance.service.ts");
    /* harmony import */


    var _services_student_attendance_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./services/student-attendance.service */
    "./src/app/post-login/attendance/services/student-attendance.service.ts");
    /* harmony import */


    var _student_reset_student_attendance_reset_student_attendance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./student/reset-student-attendance/reset-student-attendance.component */
    "./src/app/post-login/attendance/student/reset-student-attendance/reset-student-attendance.component.ts");

    var AttendanceModule = function AttendanceModule() {
      _classCallCheck(this, AttendanceModule);
    };

    AttendanceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AttendanceModule
    });
    AttendanceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AttendanceModule_Factory(t) {
        return new (t || AttendanceModule)();
      },
      providers: [_services_employee_attendance_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeAttendanceService"], _services_student_attendance_service__WEBPACK_IMPORTED_MODULE_7__["StudentAttendanceService"]],
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _attendance_routing_module__WEBPACK_IMPORTED_MODULE_2__["AttendanceRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AttendanceModule, {
        declarations: [_student_manual_mark_student_attendance_mark_student_attendance_component__WEBPACK_IMPORTED_MODULE_4__["MarkStudentAttendanceComponent"], _attendance_search_attendance_search_component__WEBPACK_IMPORTED_MODULE_5__["AttendanceSearchComponent"], _student_reset_student_attendance_reset_student_attendance_component__WEBPACK_IMPORTED_MODULE_8__["ResetStudentAttendanceComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _attendance_routing_module__WEBPACK_IMPORTED_MODULE_2__["AttendanceRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttendanceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_student_manual_mark_student_attendance_mark_student_attendance_component__WEBPACK_IMPORTED_MODULE_4__["MarkStudentAttendanceComponent"], _attendance_search_attendance_search_component__WEBPACK_IMPORTED_MODULE_5__["AttendanceSearchComponent"], _student_reset_student_attendance_reset_student_attendance_component__WEBPACK_IMPORTED_MODULE_8__["ResetStudentAttendanceComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _attendance_routing_module__WEBPACK_IMPORTED_MODULE_2__["AttendanceRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
          providers: [_services_employee_attendance_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeAttendanceService"], _services_student_attendance_service__WEBPACK_IMPORTED_MODULE_7__["StudentAttendanceService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/attendance/services/employee-attendance.service.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/post-login/attendance/services/employee-attendance.service.ts ***!
    \*******************************************************************************/

  /*! exports provided: EmployeeAttendanceService */

  /***/
  function srcAppPostLoginAttendanceServicesEmployeeAttendanceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeAttendanceService", function () {
      return EmployeeAttendanceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var EmployeeAttendanceService = function EmployeeAttendanceService(_http) {
      _classCallCheck(this, EmployeeAttendanceService);

      this._http = _http;
      this.apiPrefix = "api/employeeAttendance/";
    };

    EmployeeAttendanceService.ɵfac = function EmployeeAttendanceService_Factory(t) {
      return new (t || EmployeeAttendanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    EmployeeAttendanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmployeeAttendanceService,
      factory: EmployeeAttendanceService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeAttendanceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/attendance/services/student-attendance.service.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/post-login/attendance/services/student-attendance.service.ts ***!
    \******************************************************************************/

  /*! exports provided: StudentAttendanceService */

  /***/
  function srcAppPostLoginAttendanceServicesStudentAttendanceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentAttendanceService", function () {
      return StudentAttendanceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var StudentAttendanceService =
    /*#__PURE__*/
    function () {
      function StudentAttendanceService(_http) {
        _classCallCheck(this, StudentAttendanceService);

        this._http = _http;
        this.apiPrefix = "api/studentAttendance/";
      }

      _createClass(StudentAttendanceService, [{
        key: "getClassSectionAttendance",
        value: function getClassSectionAttendance(attendanceSearch) {
          return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getClassSectionAttendance", attendanceSearch);
        }
      }, {
        key: "saveAttendance",
        value: function saveAttendance(attendance) {
          return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "saveAttendance", attendance);
        }
      }, {
        key: "resetAttendance",
        value: function resetAttendance() {
          return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "resetAttendance");
        }
      }]);

      return StudentAttendanceService;
    }();

    StudentAttendanceService.ɵfac = function StudentAttendanceService_Factory(t) {
      return new (t || StudentAttendanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    StudentAttendanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StudentAttendanceService,
      factory: StudentAttendanceService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentAttendanceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/attendance/student/manual/mark-student-attendance/mark-student-attendance.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/post-login/attendance/student/manual/mark-student-attendance/mark-student-attendance.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: MarkStudentAttendanceComponent */

  /***/
  function srcAppPostLoginAttendanceStudentManualMarkStudentAttendanceMarkStudentAttendanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkStudentAttendanceComponent", function () {
      return MarkStudentAttendanceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _app_post_login_attendance_services_student_attendance_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/post-login/attendance/services/student-attendance.service */
    "./src/app/post-login/attendance/services/student-attendance.service.ts");
    /* harmony import */


    var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/post-login/post-login.service */
    "./src/app/post-login/post-login.service.ts");
    /* harmony import */


    var _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../../shared/component/boxes/card-bottom/card-bottom.component */
    "./src/app/shared/component/boxes/card-bottom/card-bottom.component.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_boxes_column_column_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../shared/component/boxes/column/column.component */
    "./src/app/shared/component/boxes/column/column.component.ts");
    /* harmony import */


    var _attendance_search_attendance_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../attendance-search/attendance-search.component */
    "./src/app/post-login/attendance/attendance-search/attendance-search.component.ts");
    /* harmony import */


    var _shared_module_school_class_section_ddl_class_section_ddl_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../shared/module/school/class-section-ddl/class-section-ddl.component */
    "./src/app/shared/module/school/class-section-ddl/class-section-ddl.component.ts");
    /* harmony import */


    var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../../shared/component/buttons/form-buttons/form-buttons.component */
    "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/esm2015/extended.js");
    /* harmony import */


    var _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../../../shared/component/user-small-pic/user-small-pic.component */
    "./src/app/shared/component/user-small-pic/user-small-pic.component.ts");
    /* harmony import */


    var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../../../shared/component/boxes/no-record-found/no-record-found.component */
    "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../../../shared/component/loader/loader.component */
    "./src/app/shared/component/loader/loader.component.ts");
    /* harmony import */


    var _shared_module_attendance_overall_attendance_count_chart_overall_attendance_count_chart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../../../../shared/module/attendance/overall-attendance-count-chart/overall-attendance-count-chart.component */
    "./src/app/shared/module/attendance/overall-attendance-count-chart/overall-attendance-count-chart.component.ts");
    /* harmony import */


    var _shared_pipe_number_data_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../../../../shared/pipe/number-data.pipe */
    "./src/app/shared/pipe/number-data.pipe.ts");
    /* harmony import */


    var _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../../../../shared/pipe/master-data.pipe */
    "./src/app/shared/pipe/master-data.pipe.ts");

    var _c0 = ["searchCard"];

    function MarkStudentAttendanceComponent_div_14_table_1_tbody_13_tr_1_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r1173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkStudentAttendanceComponent_div_14_table_1_tbody_13_tr_1_button_9_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1173);

          var ctx_r1172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var idx_r1168 = ctx_r1172.index;
          var stu_r1167 = ctx_r1172.$implicit;

          var ctx_r1171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r1171.changeAttendanceStatus(idx_r1168, stu_r1167.attendanceStatusId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "masterData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stu_r1167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "attendanceButton" + stu_r1167.attendanceStatusId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, stu_r1167.attendanceStatusId, "attendanceStatus"), " ");
      }
    }

    function MarkStudentAttendanceComponent_div_14_table_1_tbody_13_tr_1_span_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "masterData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stu_r1167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "attendanceButton" + stu_r1167.attendanceStatusId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, stu_r1167.attendanceStatusId, "attendanceStatus"), " ");
      }
    }

    function MarkStudentAttendanceComponent_div_14_table_1_tbody_13_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "user-small-pic", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "numberData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MarkStudentAttendanceComponent_div_14_table_1_tbody_13_tr_1_button_9_Template, 3, 5, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MarkStudentAttendanceComponent_div_14_table_1_tbody_13_tr_1_span_10_Template, 3, 5, "span", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var stu_r1167 = ctx.$implicit;

        var ctx_r1166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "attendanceStatus" + stu_r1167.attendanceStatusId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", stu_r1167.studentId);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 7, stu_r1167.academicInfo.rollNo), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", stu_r1167.basicInfo.firstName, " ", stu_r1167.basicInfo.lastName, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1166.editPermissions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1166.editPermissions);
      }
    }

    function MarkStudentAttendanceComponent_div_14_table_1_tbody_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarkStudentAttendanceComponent_div_14_table_1_tbody_13_tr_1_Template, 11, 9, "tr", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1165.attendance);
      }
    }

    function MarkStudentAttendanceComponent_div_14_table_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\xA0");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Roll No ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "child_care");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Status ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MarkStudentAttendanceComponent_div_14_table_1_tbody_13_Template, 2, 1, "tbody", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1161.attendance);
      }
    }

    function MarkStudentAttendanceComponent_div_14_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "no-record-found");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" the students, whoes attendance you want to ", ctx_r1163.editPermissions ? "mark" : "view", ". ");
      }
    }

    function MarkStudentAttendanceComponent_div_14_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r1177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MarkStudentAttendanceComponent_div_14_button_6_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1177);

          var ctx_r1176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r1176.saveAttendance();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Save Attendance ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function MarkStudentAttendanceComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MarkStudentAttendanceComponent_div_14_table_1_Template, 14, 1, "table", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MarkStudentAttendanceComponent_div_14_ng_template_2_Template, 6, 1, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MarkStudentAttendanceComponent_div_14_button_6_Template, 4, 0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r1162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r1158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1158.attendance && ctx_r1158.attendance.length > 0)("ngIfElse", _r1162);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1158.editPermissions && ctx_r1158.attendance && ctx_r1158.attendance.length > 0);
      }
    }

    function MarkStudentAttendanceComponent_app_loader_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
      }
    }

    function MarkStudentAttendanceComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "overall-attendance-count-chart", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", false)("eyeButton", false)("title", "Attendance status")("attendanceStatusCount", ctx_r1160.attendanceStatusCount);
      }
    }

    var MarkStudentAttendanceComponent =
    /*#__PURE__*/
    function () {
      function MarkStudentAttendanceComponent(fb, changeDetector, sharedService, studentAttendanceService, plService) {
        _classCallCheck(this, MarkStudentAttendanceComponent);

        this.fb = fb;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.studentAttendanceService = studentAttendanceService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = false;
        this.open = true;
        this.stayOnPage = true;
        this.mainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.environment = _env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"];
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.isPopulatingFormDb = false;
        this.initialFormValues = null;
        this.attendanceStatusCount = {};
        this.attendance = null;
        this.title = "Add Employee Details.";
        this.subTitle = "Please provide following details of employee.";
        this.editPermissions = this.plService.getPageEntitlements(2, 1) === 2;
        this.initializeAttendanceCounts();
      }

      _createClass(MarkStudentAttendanceComponent, [{
        key: "initializeAttendanceCounts",
        value: function initializeAttendanceCounts() {
          this.attendanceStatusCount["pending"] = 0;
          this.attendanceStatusCount["present"] = 0;
          this.attendanceStatusCount["halfDay"] = 0;
          this.attendanceStatusCount["sick"] = 0;
          this.attendanceStatusCount["leave"] = 0;
          this.attendanceStatusCount["absent"] = 0;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchAttendance",
        value: function searchAttendance() {
          var _this = this;

          this.loading = true;
          var searchParams = this.searchForm.value;
          searchParams["classId"] = this.sharedService.serializeMongoObjectId(searchParams["classId"]);
          this.studentAttendanceService.getClassSectionAttendance(searchParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (result) {
            _this.isPopulatingFormDb = false;
            _this.loading = false;
            _this.attendance = result;

            _this.attendanceCount();
          }, function (error) {
            _this.isPopulatingFormDb = false;
            _this.loading = false;
            console.log(error);
          });
        }
      }, {
        key: "onSearchClick",
        value: function onSearchClick() {
          this.searchForm.markAllAsTouched();

          if (this.searchForm.valid) {
            this.searchCard.hide();
            this.searchAttendance();
          }
        }
      }, {
        key: "changeAttendanceStatus",
        value: function changeAttendanceStatus(idx, attendanceStatusId) {
          switch (attendanceStatusId) {
            case 1:
              {
                attendanceStatusId = 2;
                break;
              }

            case 2:
              {
                attendanceStatusId = 5;
                break;
              }

            case 5:
              {
                attendanceStatusId = 10;
                break;
              }

            case 10:
              {
                attendanceStatusId = 15;
                break;
              }

            case 15:
              {
                attendanceStatusId = 20;
                break;
              }

            case 20:
              {
                attendanceStatusId = 2;
                break;
              }
          }

          this.attendance[idx]["attendanceStatusId"] = attendanceStatusId;
          this.attendanceCount();
        }
      }, {
        key: "attendanceCount",
        value: function attendanceCount() {
          var _this2 = this;

          this.initializeAttendanceCounts();
          this.attendance.forEach(function (stu) {
            switch (stu["attendanceStatusId"]) {
              case 1:
                {
                  _this2.attendanceStatusCount["pending"] = _this2.attendanceStatusCount["pending"] + 1;
                  break;
                }

              case 2:
                {
                  _this2.attendanceStatusCount["present"] = _this2.attendanceStatusCount["present"] + 1;
                  break;
                }

              case 5:
                {
                  _this2.attendanceStatusCount["halfDay"] = _this2.attendanceStatusCount["halfDay"] + 1;
                  break;
                }

              case 10:
                {
                  _this2.attendanceStatusCount["sick"] = _this2.attendanceStatusCount["sick"] + 1;
                  break;
                }

              case 15:
                {
                  _this2.attendanceStatusCount["leave"] = _this2.attendanceStatusCount["leave"] + 1;
                  break;
                }

              case 20:
                {
                  _this2.attendanceStatusCount["absent"] = _this2.attendanceStatusCount["absent"] + 1;
                  break;
                }
            }
          });
        }
      }, {
        key: "saveAttendance",
        value: function saveAttendance() {
          var _this3 = this;

          this.loading = true;
          this.studentAttendanceService.saveAttendance(this.makeAttendance()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (result) {
            _this3.loading = false;

            _this3.sharedService.openSnackBar("Attendance get saved Successfully.", "x", "success");

            _this3.mainForm.reset();
          }, function (error) {
            _this3.loading = false;

            _this3.sharedService.openSnackBar("Attendance not get saved.", "x", "fail");

            console.log(error);
          });
        }
      }, {
        key: "makeAttendance",
        value: function makeAttendance() {
          var manualAttendance = new Map();
          this.attendance.forEach(function (stu) {
            if (!manualAttendance.get(stu["sectionId"])) {
              manualAttendance.set(stu["sectionId"], new Array());
            }

            manualAttendance.get(stu["sectionId"]).push({
              "studentId": stu["studentId"],
              "attendanceStatusId": stu["attendanceStatusId"]
            });
          });
          var AttendanceModel = {
            "_id": this.attendance[0]["_id"],
            "attendanceDate": this.searchForm.get("attendanceDate").value,
            "status": 1,
            "classes": []
          }; //-------- populate section wise attendance

          for (var idx = 0; idx < 10; idx++) {
            if (manualAttendance.get(idx)) {
              AttendanceModel.classes.push({
                "classId": this.searchForm.get("classId").value,
                "sectionId": idx,
                "students": manualAttendance.get(idx)
              });
            }
          }

          return AttendanceModel;
        }
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.changeDetector.detectChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return MarkStudentAttendanceComponent;
    }();

    MarkStudentAttendanceComponent.ɵfac = function MarkStudentAttendanceComponent_Factory(t) {
      return new (t || MarkStudentAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_attendance_services_student_attendance_service__WEBPACK_IMPORTED_MODULE_6__["StudentAttendanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"]));
    };

    MarkStudentAttendanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MarkStudentAttendanceComponent,
      selectors: [["app-mark-student-attendance"]],
      viewQuery: function MarkStudentAttendanceComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchCard = _t.first);
        }
      },
      inputs: {
        loading: "loading",
        open: "open",
        stayOnPage: "stayOnPage"
      },
      decls: 17,
      vars: 14,
      consts: [[3, "form", "title", "open"], ["searchCard", ""], [3, "header"], [3, "formGroup", "ngSubmit"], [3, "gap"], [3, "form"], [3, "saveLabel", "form", "resetButtonNeeded"], ["fxFlex", ""], [4, "ngIf"], ["fxFlex", "", 4, "ngIf"], ["class", "table appear-animate", "cellspacing", "0", 4, "ngIf", "ngIfElse"], ["noRecordFound", ""], ["mat-raised-button", "", "class", "btn-submit padding", "type", "button", 3, "click", 4, "ngIf"], ["cellspacing", "0", 1, "table", "appear-animate"], [1, "thead"], [1, "sr"], [1, "rt", 2, "padding-right", "10px"], ["class", "tr", "style", "border-top: 1px; border-bottom: 1px;", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "tr", 2, "border-top", "1px", "border-bottom", "1px", 3, "ngClass"], [3, "userId"], [2, "font-size", "16px"], [1, "rt"], ["type", "button", "class", "attendanceButton pointer", 3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["type", "button", 1, "attendanceButton", "pointer", 3, "ngClass", "click"], [3, "ngClass"], ["mat-raised-button", "", "type", "button", 1, "btn-submit", "padding", 3, "click"], [3, "open", "eyeButton", "title", "attendanceStatusCount"]],
      template: function MarkStudentAttendanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card-bottom", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "card", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MarkStudentAttendanceComponent_Template_form_ngSubmit_3_listener($event) {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "column", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-attendance-search", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-class-section-ddl", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "form-buttons", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MarkStudentAttendanceComponent_div_14_Template, 11, 3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MarkStudentAttendanceComponent_app_loader_15_Template, 1, 0, "app-loader", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MarkStudentAttendanceComponent_div_16_Template, 2, 4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("title", "Search student for attendance")("open", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gap", "0px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("saveLabel", "Search")("form", ctx.searchForm)("resetButtonNeeded", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attendance && ctx.attendance.length > 0);
        }
      },
      directives: [_shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_8__["CardBottomComponent"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _shared_component_boxes_column_column_component__WEBPACK_IMPORTED_MODULE_10__["ColumnComponent"], _attendance_search_attendance_search_component__WEBPACK_IMPORTED_MODULE_11__["AttendanceSearchComponent"], _shared_module_school_class_section_ddl_class_section_ddl_component__WEBPACK_IMPORTED_MODULE_12__["ClassSectionDdlComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_13__["FormButtonsComponent"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_14__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_15__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"], _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_19__["UserSmallPicComponent"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_20__["NoRecordFoundComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_22__["LoaderComponent"], _shared_module_attendance_overall_attendance_count_chart_overall_attendance_count_chart_component__WEBPACK_IMPORTED_MODULE_23__["OverallAttendanceCountChartComponent"]],
      pipes: [_shared_pipe_number_data_pipe__WEBPACK_IMPORTED_MODULE_24__["NumberDataPipe"], _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_25__["MasterDataPipe"]],
      styles: [".attendanceStatus1[_ngcontent-%COMP%]{\r\n    background-color: orange !important;\r\n    color:white !important;\r\n}\r\n.attendanceStatus2[_ngcontent-%COMP%]{\r\n    background-color: white !important;\r\n    color:black !important;\r\n}\r\n.attendanceStatus5[_ngcontent-%COMP%]{\r\n    background-color: #0000ff4f !important;\r\n}\r\n.attendanceStatus10[_ngcontent-%COMP%]{\r\n    background-color: #80808047 !important;\r\n}\r\n.attendanceStatus15[_ngcontent-%COMP%]{\r\n    background-color: #80000082  !important;\r\n    color:white !important;\r\n}\r\n.attendanceStatus20[_ngcontent-%COMP%]{\r\n    background-color: #ff0000b6  !important;\r\n    color: white;\r\n}\r\n.attendanceButton[_ngcontent-%COMP%]{\r\n    width: 70px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9hdHRlbmRhbmNlL3N0dWRlbnQvbWFudWFsL21hcmstc3R1ZGVudC1hdHRlbmRhbmNlL21hcmstc3R1ZGVudC1hdHRlbmRhbmNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQ0FBbUM7SUFDbkMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxzQ0FBc0M7QUFDMUM7QUFFQTtJQUNJLHNDQUFzQztBQUMxQztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLFlBQVk7QUFDaEI7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vYXR0ZW5kYW5jZS9zdHVkZW50L21hbnVhbC9tYXJrLXN0dWRlbnQtYXR0ZW5kYW5jZS9tYXJrLXN0dWRlbnQtYXR0ZW5kYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0dGVuZGFuY2VTdGF0dXMxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbi5hdHRlbmRhbmNlU3RhdHVzMntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZVN0YXR1czV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMGZmNGYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2VTdGF0dXMxMHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA0NyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZVN0YXR1czE1e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwMDAwMDgyICAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF0dGVuZGFuY2VTdGF0dXMyMHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjAwMDBiNiAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmF0dGVuZGFuY2VCdXR0b257XHJcbiAgICB3aWR0aDogNzBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkStudentAttendanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mark-student-attendance',
          templateUrl: './mark-student-attendance.component.html',
          styleUrls: ['./mark-student-attendance.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _app_post_login_attendance_services_student_attendance_service__WEBPACK_IMPORTED_MODULE_6__["StudentAttendanceService"]
        }, {
          type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"]
        }];
      }, {
        searchCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchCard']
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stayOnPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/attendance/student/reset-student-attendance/reset-student-attendance.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/post-login/attendance/student/reset-student-attendance/reset-student-attendance.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: ResetStudentAttendanceComponent */

  /***/
  function srcAppPostLoginAttendanceStudentResetStudentAttendanceResetStudentAttendanceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResetStudentAttendanceComponent", function () {
      return ResetStudentAttendanceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _services_student_attendance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/student-attendance.service */
    "./src/app/post-login/attendance/services/student-attendance.service.ts");
    /* harmony import */


    var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/post-login/post-login.service */
    "./src/app/post-login/post-login.service.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/component/loader/loader.component */
    "./src/app/shared/component/loader/loader.component.ts");

    function ResetStudentAttendanceComponent_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r1181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResetStudentAttendanceComponent_button_9_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1181);

          var ctx_r1180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1180.buttonClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reset Attendance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ResetStudentAttendanceComponent_app_loader_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loader");
      }
    }

    var ResetStudentAttendanceComponent =
    /*#__PURE__*/
    function () {
      function ResetStudentAttendanceComponent(sharedService, attendanceService, plService) {
        _classCallCheck(this, ResetStudentAttendanceComponent);

        this.sharedService = sharedService;
        this.attendanceService = attendanceService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = false;
        this.resultMessage = "";
        this.editPermissions = this.plService.getPageEntitlements(2, 3) === 2;
      }

      _createClass(ResetStudentAttendanceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buttonClicked",
        value: function buttonClicked() {
          var _this4 = this;

          this.resultMessage = "";
          var resetConfirmationMessage = "You want to delete today's Student Attendance.";
          var dialogRef = this.sharedService.openConfirmDialog(resetConfirmationMessage);
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$)).subscribe(function (confirmed) {
            if (confirmed) {
              _this4.reset();
            }
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          var _this5 = this;

          this.loading = true;
          this.attendanceService.resetAttendance().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$)).subscribe(function (result) {
            _this5.loading = false;
            _this5.resultMessage = "Attendance reset successfully";
          }, function (error) {
            _this5.loading = false;
            console.log(error);
            _this5.resultMessage = "Sorry! Unable to reset the attendance";
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return ResetStudentAttendanceComponent;
    }();

    ResetStudentAttendanceComponent.ɵfac = function ResetStudentAttendanceComponent_Factory(t) {
      return new (t || ResetStudentAttendanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_attendance_service__WEBPACK_IMPORTED_MODULE_4__["StudentAttendanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_5__["PostLoginService"]));
    };

    ResetStudentAttendanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ResetStudentAttendanceComponent,
      selectors: [["app-reset-student-attendance"]],
      decls: 15,
      vars: 5,
      consts: [[3, "childCard", "header"], [1, "warn-message"], [1, "title-message", "jump-animate"], ["class", "btn-submit btn", "mat-raised-button", "", "type", "button", 3, "click", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "type", "button", 1, "btn-submit", "btn", 3, "click"]],
      template: function ResetStudentAttendanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "warning");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Are You Sure ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " You want to reset all the \"Student Attendance\" for Today ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResetStudentAttendanceComponent_button_9_Template, 2, 0, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResetStudentAttendanceComponent_app_loader_10_Template, 1, 0, "app-loader", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childCard", true)("header", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.editPermissions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.resultMessage);
        }
      },
      directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]],
      styles: [".warn-message[_ngcontent-%COMP%]{\r\n    color: red;\r\n    font-weight: bold;\r\n    font-size: 25px;\r\n    margin-bottom: 14px;\r\n}\r\n\r\n.warn-img[_ngcontent-%COMP%]{\r\n    max-width: 99%;\r\n}\r\n\r\n.title-message[_ngcontent-%COMP%]{\r\n    padding: 10px 5px 10px 5px;\r\n    background-color: red;\r\n    color: white;\r\n    font-size: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9hdHRlbmRhbmNlL3N0dWRlbnQvcmVzZXQtc3R1ZGVudC1hdHRlbmRhbmNlL3Jlc2V0LXN0dWRlbnQtYXR0ZW5kYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxvZ2luL2F0dGVuZGFuY2Uvc3R1ZGVudC9yZXNldC1zdHVkZW50LWF0dGVuZGFuY2UvcmVzZXQtc3R1ZGVudC1hdHRlbmRhbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2Fybi1tZXNzYWdle1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG5cclxuLndhcm4taW1ne1xyXG4gICAgbWF4LXdpZHRoOiA5OSU7XHJcbn1cclxuXHJcbi50aXRsZS1tZXNzYWdle1xyXG4gICAgcGFkZGluZzogMTBweCA1cHggMTBweCA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetStudentAttendanceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-reset-student-attendance',
          templateUrl: './reset-student-attendance.component.html',
          styleUrls: ['./reset-student-attendance.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _services_student_attendance_service__WEBPACK_IMPORTED_MODULE_4__["StudentAttendanceService"]
        }, {
          type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_5__["PostLoginService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=attendance-attendance-module-es5.js.map