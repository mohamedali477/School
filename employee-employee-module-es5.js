function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-employee-module"], {
  /***/
  "./src/app/post-login/employee/employee-list/employee-list.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/post-login/employee/employee-list/employee-list.component.ts ***!
    \******************************************************************************/

  /*! exports provided: EmployeeListComponent */

  /***/
  function srcAppPostLoginEmployeeEmployeeListEmployeeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
      return EmployeeListComponent;
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


    var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/employee.service */
    "./src/app/post-login/employee/services/employee.service.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/post-login/post-login.service */
    "./src/app/post-login/post-login.service.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/component/boxes/large-screen/large-screen.component */
    "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../shared/component/boxes/small-screen/small-screen.component */
    "./src/app/shared/component/boxes/small-screen/small-screen.component.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/fesm2015/paginator.js");
    /* harmony import */


    var _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/component/user-small-pic/user-small-pic.component */
    "./src/app/shared/component/user-small-pic/user-small-pic.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/directives/tool-tip.directive */
    "./src/app/shared/directives/tool-tip.directive.ts");
    /* harmony import */


    var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/component/boxes/row/row.component */
    "./src/app/shared/component/boxes/row/row.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _shared_component_form_templates_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/user-card/user-card.component */
    "./src/app/shared/component/form-templates/user-card/user-card.component.ts");
    /* harmony import */


    var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../shared/component/boxes/no-record-found/no-record-found.component */
    "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");
    /* harmony import */


    var _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../shared/pipe/master-data.pipe */
    "./src/app/shared/pipe/master-data.pipe.ts");

    function EmployeeListComponent_tr_31_button_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r1122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tr_31_button_23_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1122);

          var employee_r1116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r1120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1120.editClicked(employee_r1116._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeListComponent_tr_31_button_24_Template(rf, ctx) {
      if (rf & 1) {
        var _r1125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tr_31_button_24_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1125);

          var employee_r1116 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r1123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1123.deleteClicked(employee_r1116._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeListComponent_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r1127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "user-small-pic", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "masterData");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tr_31_Template_button_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1127);

          var employee_r1116 = ctx.$implicit;

          var ctx_r1126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1126.viewClicked(employee_r1116._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "visibility");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EmployeeListComponent_tr_31_button_23_Template, 3, 0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EmployeeListComponent_tr_31_button_24_Template, 3, 0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var employee_r1116 = ctx.$implicit;
        var idx_r1117 = ctx.index;

        var ctx_r1113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1113.paging.pageIndex * ctx_r1113.paging.pageSize + idx_r1117 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", employee_r1116._id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r1116.basicInfo.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r1116.basicInfo.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r1116.contactInfo.contactNo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](employee_r1116.contactInfo.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 10, employee_r1116.basicInfo.dob));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](18, 12, employee_r1116.basicInfo.genderId, "gender"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1113.editPermissions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1113.editPermissions && employee_r1116._id != ctx_r1113.masterData.superAdminEmployeeId.$oid);
      }
    }

    function EmployeeListComponent_ng_container_33_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r1135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_ng_container_33_button_10_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1135);

          var employee_r1128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r1133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1133.editClicked(employee_r1128._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeListComponent_ng_container_33_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r1138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_ng_container_33_button_11_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1138);

          var employee_r1128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r1136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1136.deleteClicked(employee_r1128._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeListComponent_ng_container_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r1140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "card", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "row", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_ng_container_33_Template_button_click_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1140);

          var employee_r1128 = ctx.$implicit;

          var ctx_r1139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1139.viewClicked(employee_r1128._id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "visibility");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmployeeListComponent_ng_container_33_button_10_Template, 3, 0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EmployeeListComponent_ng_container_33_button_11_Template, 3, 0, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "user-card", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var employee_r1128 = ctx.$implicit;
        var idx_r1129 = ctx.index;

        var ctx_r1114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childCard", true)("header", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("# ", ctx_r1114.paging.pageIndex * ctx_r1114.paging.pageSize + idx_r1129 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1114.editPermissions);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1114.editPermissions && employee_r1128._id != ctx_r1114.masterData.superAdminEmployeeId.$oid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", employee_r1128._id)("firstName", employee_r1128.basicInfo.firstName)("lastName", employee_r1128.basicInfo.lastName)("contactNo", employee_r1128.contactInfo.contactNo)("email", employee_r1128.contactInfo.email)("dob", employee_r1128.basicInfo.dob)("genderId", employee_r1128.basicInfo.genderId);
      }
    }

    function EmployeeListComponent_no_record_found_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
      }
    }

    var EmployeeListComponent =
    /*#__PURE__*/
    function () {
      function EmployeeListComponent(employeeService, changeDetector, sharedService, plService) {
        _classCallCheck(this, EmployeeListComponent);

        this.employeeService = employeeService;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.viewButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteButtonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageTitle = "";
        this.isLoading = false;
        this.environment = _env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"];
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.employees = [];
        this.viewUser = false;
        this.editPermissions = false;
        this.searchParams = null;
        this.paging = {
          pageIndex: this.masterData.paging.pageIndex,
          pageSize: this.masterData.paging.pageSize,
          length: 1
        };
        this.sortParams = {
          fieldName: "basicInfo.firstName",
          isAsc: true
        };
        this.editPermissions = this.plService.getPageEntitlements(5, 1) === 2;
      }

      _createClass(EmployeeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getList();
        }
      }, {
        key: "getList",
        value: function getList() {
          var _this = this;

          this.isLoading = true;
          var SearchObject = {
            SearchParameters: this.searchParams,
            paging: {
              "pageIndex": this.paging.pageIndex,
              "pageSize": this.paging.pageSize
            },
            sorting: {
              "fieldName": this.sortParams.fieldName,
              "isAsc": this.sortParams.isAsc
            }
          };
          this.employeeService.getEmployeeList(SearchObject).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$)).subscribe(function (result) {
            _this.isLoading = false;
            _this.employees = result.data;
            _this.paging.length = result.count;
          }, function (error) {
            _this.isLoading = false;
            console.log(error);
          });
        }
      }, {
        key: "viewClicked",
        value: function viewClicked(id) {
          this.viewButtonEvent.emit(id);
        }
      }, {
        key: "editClicked",
        value: function editClicked(id) {
          this.editButtonEvent.emit(id);
        }
      }, {
        key: "deleteClicked",
        value: function deleteClicked(id) {
          this.deleteButtonEvent.emit(id);
        }
      }, {
        key: "CardCrossEvent_ViewUser",
        value: function CardCrossEvent_ViewUser() {
          this.viewUser = false;
        }
      }, {
        key: "sortClicked",
        value: function sortClicked(sort) {
          this.paging.pageIndex = 0;
          this.sortParams.fieldName = sort.active;
          this.sortParams.isAsc = sort.direction === 'asc';
          this.getList();
          this.changeDetector.detectChanges();
        }
      }, {
        key: "pagingClicked",
        value: function pagingClicked(paginator) {
          this.paging.pageIndex = paginator.pageIndex;
          this.paging.pageSize = paginator.pageSize;
          this.getList();
          this.changeDetector.detectChanges();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return EmployeeListComponent;
    }();

    EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) {
      return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"]));
    };

    EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeListComponent,
      selectors: [["app-employee-list"]],
      inputs: {
        pageTitle: "pageTitle",
        roleId: "roleId"
      },
      outputs: {
        viewButtonEvent: "viewButtonEvent",
        editButtonEvent: "editButtonEvent",
        deleteButtonEvent: "deleteButtonEvent"
      },
      decls: 36,
      vars: 10,
      consts: [[3, "loading", "title", "subTitle", "refresh"], ["matSort", "", 1, "table", 3, "matSortChange"], [1, "thead"], ["colspan", "2", 1, "sr"], ["matRipple", "", "mat-sort-header", "basicInfo.firstName"], ["matRipple", "", "mat-sort-header", "basicInfo.lastName"], ["matRipple", "", "mat-sort-header", "contactInfo.contactNo"], ["matRipple", "", "mat-sort-header", "contactInfo.email"], ["matRipple", "", "mat-sort-header", "basicInfo.dob"], ["matRipple", "", "mat-sort-header", "basicInfo.genderId"], [1, "action"], ["class", "tr", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "length", "showFirstLastButtons", "pageSize", "pageSizeOptions", "page"], [1, "tr"], [1, "sr-col"], [3, "userId"], [1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Employee'", 1, "icon-view", 3, "click"], ["mat-icon-button", ""], ["mat-icon-button", "", "appToolTip", "'Edit Employee'", "class", "icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Delete Employee'", "class", "icon-delete", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Edit Employee'", 1, "icon-edit", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Delete Employee'", 1, "icon-delete", 3, "click"], [3, "childCard", "header"], ["gap", "2px"], ["fxFlex", "30%"], ["fxFlex", "", 1, "rt"], ["mat-icon-button", "", "appToolTip", "'View Employee'", 1, "big-icon-view", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Edit Employee'", "class", "big-icon-edit", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "appToolTip", "'Delete Employee'", "class", "big-icon-delete", 3, "click", 4, "ngIf"], [3, "userId", "firstName", "lastName", "contactNo", "email", "dob", "genderId"], ["mat-icon-button", "", "appToolTip", "'Edit Employee'", 1, "big-icon-edit", 3, "click"], ["mat-icon-button", "", "appToolTip", "'Delete Employee'", 1, "big-icon-delete", 3, "click"]],
      template: function EmployeeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("refresh", function EmployeeListComponent_Template_card_refresh_0_listener($event) {
            return ctx.getList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "large-screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("matSortChange", function EmployeeListComponent_Template_table_matSortChange_2_listener($event) {
            return ctx.sortClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "#");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " First Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "face");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Mob No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "phone_iphone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " DOB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "today");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Gender");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "th", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, EmployeeListComponent_tr_31_Template, 25, 15, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "small-screen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EmployeeListComponent_ng_container_33_Template, 14, 12, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, EmployeeListComponent_no_record_found_34_Template, 1, 0, "no-record-found", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-paginator", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function EmployeeListComponent_Template_mat_paginator_page_35_listener($event) {
            return ctx.pagingClicked($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", "Employee List")("subTitle", "Manage your employee for employees");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.employees.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("length", ctx.paging.length)("showFirstLastButtons", ctx.masterData.paging.showFirstLastButtons)("pageSize", ctx.paging.pageSize)("pageSizeOptions", ctx.masterData.paging.pageSizeOptions);
        }
      },
      directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_7__["CardComponent"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_8__["LargeScreenComponent"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSort"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRipple"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__["MatSortHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _shared_component_boxes_small_screen_small_screen_component__WEBPACK_IMPORTED_MODULE_13__["SmallScreenComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__["MatPaginator"], _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_15__["UserSmallPicComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_17__["ToolTipDirective"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_18__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_19__["DefaultFlexDirective"], _shared_component_form_templates_user_card_user_card_component__WEBPACK_IMPORTED_MODULE_20__["UserCardComponent"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_21__["NoRecordFoundComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_22__["MasterDataPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZW1wbG95ZWUvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employee-list',
          templateUrl: './employee-list.component.html',
          styleUrls: ['./employee-list.component.css']
        }]
      }], function () {
        return [{
          type: _services_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"]
        }];
      }, {
        viewButtonEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        editButtonEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        deleteButtonEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        pageTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roleId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/employee/employee-management/employee-management.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/post-login/employee/employee-management/employee-management.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: EmployeeManagementComponent */

  /***/
  function srcAppPostLoginEmployeeEmployeeManagementEmployeeManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeManagementComponent", function () {
      return EmployeeManagementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../employee-list/employee-list.component */
    "./src/app/post-login/employee/employee-list/employee-list.component.ts");
    /* harmony import */


    var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @env/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/employee.service */
    "./src/app/post-login/employee/services/employee.service.ts");
    /* harmony import */


    var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/post-login/post-login.service */
    "./src/app/post-login/post-login.service.ts");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card-bottom/card-bottom.component */
    "./src/app/shared/component/boxes/card-bottom/card-bottom.component.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */
    "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
    /* harmony import */


    var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/component/buttons/form-buttons/form-buttons.component */
    "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/fesm2015/icon.js");
    /* harmony import */


    var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/directives/tool-tip.directive */
    "./src/app/shared/directives/tool-tip.directive.ts");
    /* harmony import */


    var _new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../new-employee/new-employee.component */
    "./src/app/post-login/employee/new-employee/new-employee.component.ts");

    var _c0 = ["searchCard"];

    function EmployeeManagementComponent_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r1147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeManagementComponent_button_2_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1147);

          var ctx_r1146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1146.addNewClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "person_add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Add New Employee ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeManagementComponent_button_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r1149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeManagementComponent_button_12_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1149);

          var ctx_r1148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1148.backToListClick();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "keyboard_return");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back to Employee List ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeManagementComponent_app_new_employee_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r1151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-new-employee", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSaveSuccess", function EmployeeManagementComponent_app_new_employee_15_Template_app_new_employee_onSaveSuccess_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1151);

          var ctx_r1150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1150.onSaveSuccess($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changeModeId", ctx_r1144.Id)("isViewMode", ctx_r1144.showViewPage);
      }
    }

    function EmployeeManagementComponent_button_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r1153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeManagementComponent_button_18_Template_button_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1153);

          var ctx_r1152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1152.deleteEmployeePermanently();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "delete_forever");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Delete And Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EmployeeManagementComponent =
    /*#__PURE__*/
    function () {
      function EmployeeManagementComponent(fb, sharedService, employeeService, plService) {
        _classCallCheck(this, EmployeeManagementComponent);

        this.fb = fb;
        this.sharedService = sharedService;
        this.employeeService = employeeService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.editPermissions = false;
        this.showViewPage = false;
        this.showAddChangePage = false;
        this.showListPage = true;
        this.showDeleteButton = false;
        this.isLoading = false;
        this.Id = null;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.searchConfig = [{
          isViewMode: false,
          type: "input",
          label: "First Name",
          inputType: "text",
          name: "firstName",
          icon: "accessibility_new"
        }, {
          isViewMode: false,
          type: "input",
          label: "Last Name",
          inputType: "text",
          name: "lastName",
          icon: "accessibility"
        }, {
          isViewMode: false,
          type: "date",
          label: "DOB",
          name: "dob"
        }, {
          isViewMode: false,
          type: "select",
          label: "Gender",
          name: "genderId",
          options: this.masterData.genders
        }, {
          isViewMode: false,
          type: "select",
          label: "Religion",
          name: "religionId",
          options: this.masterData.religions
        }, {
          isViewMode: false,
          type: "select",
          label: "Cast",
          name: "castId",
          options: this.masterData.casts
        }];
        this.editPermissions = this.plService.getPageEntitlements(5, 1) == 2;
        this.searchForm = this.fb.group({});
      }

      _createClass(EmployeeManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSearchClick",
        value: function onSearchClick() {
          this._ListPage.searchParams = this.searchForm.value;
          this._ListPage.paging.pageIndex = 0;

          this._ListPage.getList();

          this.searchCard.hide();
        }
      }, {
        key: "addNewClick",
        value: function addNewClick() {
          this.Id = null;
          this.showAddChangePage = true;
          this.showViewPage = this.showListPage = false;
        }
      }, {
        key: "backToListClick",
        value: function backToListClick() {
          this.showListPage = true;
          this.showViewPage = this.showAddChangePage = false;
        }
      }, {
        key: "onSaveSuccess",
        value: function onSaveSuccess(event) {
          this.backToListClick();

          if (this._ListPage) {
            this._ListPage.getList();
          }
        }
      }, {
        key: "viewButtonEvent",
        value: function viewButtonEvent(event) {
          this.Id = event;
          this.showViewPage = true;
          this.showListPage = this.showAddChangePage = false;
        }
      }, {
        key: "editButtonEvent",
        value: function editButtonEvent(event) {
          this.showAddChangePage = true;
          this.Id = event;
          this.showViewPage = this.showListPage = false;
        }
      }, {
        key: "deleteButtonEvent",
        value: function deleteButtonEvent(event) {
          this.viewButtonEvent(event);
          this.showDeleteButton = true;
        }
      }, {
        key: "deleteEmployeePermanently",
        value: function deleteEmployeePermanently() {
          var _this2 = this;

          var dialogRef = this.sharedService.openConfirmDialog("You want to delete this 'Employee'?");
          dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (confirmed) {
            if (confirmed) {
              _this2.isLoading = true;

              _this2.employeeService.deleteEmployee(_this2.Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this2.unsubscribe$)).subscribe(function (result) {
                _this2.backToListClick();

                _this2._ListPage.getList();

                _this2.isLoading = false;
              }, function (error) {
                _this2.isLoading = false;
              });
            }
          }, function (error) {
            _this2.isLoading = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unsubscribe$.next(true);
          this.unsubscribe$.complete();
        }
      }]);

      return EmployeeManagementComponent;
    }();

    EmployeeManagementComponent.ɵfac = function EmployeeManagementComponent_Factory(t) {
      return new (t || EmployeeManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"]));
    };

    EmployeeManagementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeManagementComponent,
      selectors: [["app-employee-management"]],
      viewQuery: function EmployeeManagementComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeListComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._ListPage = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchCard = _t.first);
        }
      },
      decls: 19,
      vars: 14,
      consts: [["colGap", "50px"], ["fxFlex", "30"], ["type", "button", "mat-raised-button", "", "class", "btn", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], ["fxFlex", ""], [3, "form", "hidden", "title"], ["searchCard", ""], [3, "header"], [3, "formGroup", "ngSubmit"], [3, "form", "fields"], [3, "form", "isSearchForm", "onReset"], ["type", "button", "class", "btn", "mat-raised-button", "", "appToolTip", "'Go back to Employee List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click", 4, "ngIf"], [3, "changeModeId", "isViewMode", "onSaveSuccess", 4, "ngIf"], [3, "hidden", "viewButtonEvent", "deleteButtonEvent", "editButtonEvent"], ["mat-raised-button", "", "class", "delete-button padding", "type", "button", 3, "click", 4, "ngIf"], ["type", "button", "mat-raised-button", "", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], ["type", "button", "mat-raised-button", "", "appToolTip", "'Go back to Employee List'", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 1, "btn", 3, "click"], [3, "changeModeId", "isViewMode", "onSaveSuccess"], ["mat-raised-button", "", "type", "button", 1, "delete-button", "padding", 3, "click"]],
      template: function EmployeeManagementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmployeeManagementComponent_button_2_Template, 4, 0, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "card-bottom", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "card", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EmployeeManagementComponent_Template_form_ngSubmit_7_listener($event) {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "dynamic-form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form-buttons", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onReset", function EmployeeManagementComponent_Template_form_buttons_onReset_9_listener($event) {
            return ctx.onSearchClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "responsive");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, EmployeeManagementComponent_button_12_Template, 4, 0, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmployeeManagementComponent_app_new_employee_15_Template, 1, 2, "app-new-employee", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-employee-list", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("viewButtonEvent", function EmployeeManagementComponent_Template_app_employee_list_viewButtonEvent_16_listener($event) {
            return ctx.viewButtonEvent($event);
          })("deleteButtonEvent", function EmployeeManagementComponent_Template_app_employee_list_deleteButtonEvent_16_listener($event) {
            return ctx.deleteButtonEvent($event);
          })("editButtonEvent", function EmployeeManagementComponent_Template_app_employee_list_editButtonEvent_16_listener($event) {
            return ctx.editButtonEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, EmployeeManagementComponent_button_18_Template, 4, 0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showListPage && ctx.editPermissions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("hidden", !ctx.showListPage)("title", "Search Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("fields", ctx.searchConfig);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx.searchForm)("isSearchForm", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showAddChangePage || ctx.showViewPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.showListPage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDeleteButton && ctx.showViewPage);
        }
      },
      directives: [_shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_component_boxes_card_bottom_card_bottom_component__WEBPACK_IMPORTED_MODULE_12__["CardBottomComponent"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_14__["DynamicFormComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_15__["FormButtonsComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_18__["ToolTipDirective"], _new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_19__["NewEmployeeComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZW1wbG95ZWUvZW1wbG95ZWUtbWFuYWdlbWVudC9lbXBsb3llZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeManagementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-employee-management',
          templateUrl: './employee-management.component.html',
          styleUrls: ['./employee-management.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _services_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"]
        }, {
          type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"]
        }];
      }, {
        _ListPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeListComponent"]]
        }],
        searchCard: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['searchCard']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/employee/employee-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/post-login/employee/employee-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: EmployeeRoutingModule */

  /***/
  function srcAppPostLoginEmployeeEmployeeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function () {
      return EmployeeRoutingModule;
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


    var _employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./employee-management/employee-management.component */
    "./src/app/post-login/employee/employee-management/employee-management.component.ts");
    /* harmony import */


    var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./my-profile/my-profile.component */
    "./src/app/post-login/employee/my-profile/my-profile.component.ts");

    var routes = [{
      path: 'empmgmt',
      component: _employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeManagementComponent"],
      outlet: 'postLoginOutlet'
    }, {
      path: 'myProfile',
      component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_3__["MyProfileComponent"],
      outlet: 'postLoginOutlet'
    }];

    var EmployeeRoutingModule = function EmployeeRoutingModule() {
      _classCallCheck(this, EmployeeRoutingModule);
    };

    EmployeeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmployeeRoutingModule
    });
    EmployeeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmployeeRoutingModule_Factory(t) {
        return new (t || EmployeeRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeRoutingModule, [{
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
  "./src/app/post-login/employee/employee.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/post-login/employee/employee.module.ts ***!
    \********************************************************/

  /*! exports provided: EmployeeModule */

  /***/
  function srcAppPostLoginEmployeeEmployeeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () {
      return EmployeeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _employee_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./employee-routing.module */
    "./src/app/post-login/employee/employee-routing.module.ts");
    /* harmony import */


    var _new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./new-employee/new-employee.component */
    "./src/app/post-login/employee/new-employee/new-employee.component.ts");
    /* harmony import */


    var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employee-list/employee-list.component */
    "./src/app/post-login/employee/employee-list/employee-list.component.ts");
    /* harmony import */


    var _employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./employee-management/employee-management.component */
    "./src/app/post-login/employee/employee-management/employee-management.component.ts");
    /* harmony import */


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./services/employee.service */
    "./src/app/post-login/employee/services/employee.service.ts");
    /* harmony import */


    var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-profile/my-profile.component */
    "./src/app/post-login/employee/my-profile/my-profile.component.ts");

    var EmployeeModule = function EmployeeModule() {
      _classCallCheck(this, EmployeeModule);
    };

    EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmployeeModule
    });
    EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmployeeModule_Factory(t) {
        return new (t || EmployeeModule)();
      },
      providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]],
      imports: [[_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmployeeRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeModule, {
        declarations: [_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_2__["NewEmployeeComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"], _employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeManagementComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__["MyProfileComponent"]],
        imports: [_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmployeeRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_2__["NewEmployeeComponent"], _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"], _employee_management_employee_management_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeManagementComponent"], _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_7__["MyProfileComponent"]],
          imports: [_employee_routing_module__WEBPACK_IMPORTED_MODULE_1__["EmployeeRoutingModule"], _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]],
          providers: [_services_employee_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/employee/my-profile/my-profile.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/post-login/employee/my-profile/my-profile.component.ts ***!
    \************************************************************************/

  /*! exports provided: MyProfileComponent */

  /***/
  function srcAppPostLoginEmployeeMyProfileMyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyProfileComponent", function () {
      return MyProfileComponent;
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


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");
    /* harmony import */


    var _new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../new-employee/new-employee.component */
    "./src/app/post-login/employee/new-employee/new-employee.component.ts");

    var MyProfileComponent =
    /*#__PURE__*/
    function () {
      function MyProfileComponent(sharedService) {
        _classCallCheck(this, MyProfileComponent);

        this.sharedService = sharedService;
        this.Id = null;
        this.isViewMode = true;
        this.entity = "'Your Profile'";
      }

      _createClass(MyProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var isStudent = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"].studentRoleId['$oid'] === this.sharedService.currentUserRoleId()['$oid'];
          var isGuardian = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"].guardianRoleId['$oid'] === this.sharedService.currentUserRoleId()['$oid'];

          if (!isGuardian && !isStudent) {
            var data = JSON.parse(this.sharedService.loggedInData());
            this.Id = this.sharedService.serializeMongoObjectId(data["_id"]);
          }
        }
      }]);

      return MyProfileComponent;
    }();

    MyProfileComponent.ɵfac = function MyProfileComponent_Factory(t) {
      return new (t || MyProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]));
    };

    MyProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MyProfileComponent,
      selectors: [["app-my-profile"]],
      decls: 1,
      vars: 4,
      consts: [[3, "changeModeId", "isComingFromMyProfile", "entity", "isViewMode"]],
      template: function MyProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-new-employee", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("changeModeId", ctx.Id)("isComingFromMyProfile", true)("entity", ctx.entity)("isViewMode", false);
        }
      },
      directives: [_new_employee_new_employee_component__WEBPACK_IMPORTED_MODULE_3__["NewEmployeeComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZW1wbG95ZWUvbXktcHJvZmlsZS9teS1wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-my-profile',
          templateUrl: './my-profile.component.html',
          styleUrls: ['./my-profile.component.css']
        }]
      }], function () {
        return [{
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/post-login/employee/new-employee/new-employee.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/post-login/employee/new-employee/new-employee.component.ts ***!
    \****************************************************************************/

  /*! exports provided: NewEmployeeComponent */

  /***/
  function srcAppPostLoginEmployeeNewEmployeeNewEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewEmployeeComponent", function () {
      return NewEmployeeComponent;
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


    var _services_employee_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/employee.service */
    "./src/app/post-login/employee/services/employee.service.ts");
    /* harmony import */


    var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/post-login/post-login.service */
    "./src/app/post-login/post-login.service.ts");
    /* harmony import */


    var _app_shared_pipe_user_role_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/shared/pipe/user-role.pipe */
    "./src/app/shared/pipe/user-role.pipe.ts");
    /* harmony import */


    var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/component/boxes/card/card.component */
    "./src/app/shared/component/boxes/card/card.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/component/boxes/responsive/responsive.component */
    "./src/app/shared/component/boxes/responsive/responsive.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_profile_pic_form_profile_pic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/form-profile-pic/form-profile-pic.component */
    "./src/app/shared/component/form-templates/form-profile-pic/form-profile-pic.component.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/esm2015/flex.js");
    /* harmony import */


    var _shared_component_dropdowns_ddl_status_ddl_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../../shared/component/dropdowns/ddl-status/ddl-status.component */
    "./src/app/shared/component/dropdowns/ddl-status/ddl-status.component.ts");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/fesm2015/expansion.js");
    /* harmony import */


    var _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../shared/component/boxes/smart-div/smart-div.component */
    "./src/app/shared/component/boxes/smart-div/smart-div.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_basic_info_form_user_basic_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/form-user-basic-info/form-user-basic-info.component */
    "./src/app/shared/component/form-templates/form-user-basic-info/form-user-basic-info.component.ts");
    /* harmony import */


    var _shared_component_dropdowns_ddl_role_ddl_role_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../shared/component/dropdowns/ddl-role/ddl-role.component */
    "./src/app/shared/component/dropdowns/ddl-role/ddl-role.component.ts");
    /* harmony import */


    var _shared_module_transport_route_ddl_route_ddl_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../../shared/module/transport/route-ddl/route-ddl.component */
    "./src/app/shared/module/transport/route-ddl/route-ddl.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_contact_info_form_contact_info_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/form-contact-info/form-contact-info.component */
    "./src/app/shared/component/form-templates/form-contact-info/form-contact-info.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_medical_info_form_user_medical_info_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/form-user-medical-info/form-user-medical-info.component */
    "./src/app/shared/component/form-templates/form-user-medical-info/form-user-medical-info.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_government_ids_form_user_government_ids_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/form-user-government-ids/form-user-government-ids.component */
    "./src/app/shared/component/form-templates/form-user-government-ids/form-user-government-ids.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_address_info_form_address_info_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/form-address-info/form-address-info.component */
    "./src/app/shared/component/form-templates/form-address-info/form-address-info.component.ts");
    /* harmony import */


    var _shared_component_form_templates_form_user_credentials_form_user_credentials_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../../shared/component/form-templates/form-user-credentials/form-user-credentials.component */
    "./src/app/shared/component/form-templates/form-user-credentials/form-user-credentials.component.ts");
    /* harmony import */


    var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../../shared/component/buttons/form-buttons/form-buttons.component */
    "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");

    function NewEmployeeComponent_responsive_2_mat_expansion_panel_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "smart-div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Credential Details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-user-credentials", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1156.mainForm.controls["credentialInfo"])("icon", "security");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1156.mainForm.controls["credentialInfo"])("isViewMode", ctx_r1156.isViewMode)("initialFormValues", ctx_r1156.initialFormValues == null ? null : ctx_r1156.initialFormValues.credentialInfo);
      }
    }

    function NewEmployeeComponent_responsive_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "responsive");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-profile-pic", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-ddl-status", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-accordion", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-expansion-panel", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "smart-div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Basic Details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-user-basic-info", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-ddl-role", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NewEmployeeComponent_responsive_2_mat_expansion_panel_12_Template, 6, 5, "mat-expansion-panel", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-expansion-panel", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "smart-div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Transport Details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-route-ddl", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-expansion-panel", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "smart-div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Contact Details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "form-contact-info", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-expansion-panel", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "smart-div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Medical Details ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "form-user-medical-info", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-expansion-panel", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "smart-div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Government Ids ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "form-user-government-ids", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-expansion-panel", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-expansion-panel-header");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-panel-title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "smart-div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Address ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "form-address-info", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm)("isViewMode", ctx_r1154.isViewMode);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm)("isViewMode", ctx_r1154.isViewMode)("value", ctx_r1154.initialFormValues && (ctx_r1154.initialFormValues == null ? null : ctx_r1154.initialFormValues.status));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx_r1154.masterData.expendMultiple);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["basicInfo"])("icon", "face");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["basicInfo"])("isViewMode", ctx_r1154.isViewMode)("initialFormValues", ctx_r1154.initialFormValues == null ? null : ctx_r1154.initialFormValues.basicInfo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm)("isViewMode", ctx_r1154.isViewMode || !ctx_r1154.canChangeHisOwnRole)("initialFormValues", ctx_r1154.initialFormValues);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1154.canSeeSensitiveInfo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["transportInfo"])("icon", "directions_bus");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["transportInfo"])("isViewMode", ctx_r1154.isViewMode)("initialFormValues", ctx_r1154.initialFormValues == null ? null : ctx_r1154.initialFormValues.transportInfo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["contactInfo"])("icon", "contact_phone");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["contactInfo"])("isViewMode", ctx_r1154.isViewMode)("initialFormValues", ctx_r1154.initialFormValues == null ? null : ctx_r1154.initialFormValues.contactInfo)("Required", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["medicalInfo"])("icon", "local_hospital");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["medicalInfo"])("isViewMode", ctx_r1154.isViewMode)("initialFormValues", ctx_r1154.initialFormValues == null ? null : ctx_r1154.initialFormValues.medicalInfo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["governmentIds"])("icon", "local_activity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["governmentIds"])("isViewMode", ctx_r1154.isViewMode)("initialFormValues", ctx_r1154.initialFormValues == null ? null : ctx_r1154.initialFormValues.governmentIds);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm.controls["addressInfo"])("icon", "room");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1154.mainForm["controls"].addressInfo)("initialFormValues", ctx_r1154.initialFormValues == null ? null : ctx_r1154.initialFormValues.addressInfo)("isViewMode", ctx_r1154.isViewMode);
      }
    }

    function NewEmployeeComponent_form_buttons_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-buttons", 14);
      }

      if (rf & 2) {
        var ctx_r1155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1155.mainForm)("isChangeMode", ctx_r1155.changeModeId);
      }
    }

    var NewEmployeeComponent =
    /*#__PURE__*/
    function () {
      function NewEmployeeComponent(fb, changeDetector, sharedService, employeeService, plService, userRolePipe) {
        _classCallCheck(this, NewEmployeeComponent);

        this.fb = fb;
        this.changeDetector = changeDetector;
        this.sharedService = sharedService;
        this.employeeService = employeeService;
        this.plService = plService;
        this.userRolePipe = userRolePipe;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.onSaveSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeModeId = null;
        this.isViewMode = false;
        this.open = true;
        this.stayOnPage = true;
        this.isComingFromMyProfile = false;
        this.entity = 'Employee';
        this.mainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.isPopulatingFormDb = false;
        this.isLoading = false;
        this.initialFormValues = null;
        this.noOfActiveEmployee = 0;
        this.noOfActive = 0;
        this.title = "Add ".concat(this.entity, " Details.");
        this.subTitle = "Please provide following details of ".concat(this.entity, ".");
        this.employeeSubTitle = "Please add following details of '".concat(this.entity, "'.");
        this.addressSubTitle = "Please add following details of 'Address'.";
        this.canChangeHisOwnRole = false;
      }

      _createClass(NewEmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkCanChangeHisOwnRoles();
          this.checkSensitiveInfoPermissions();
          this.setTitleMessages();
          this.mainForm = this.fb.group({
            basicInfo: this.fb.group({}),
            credentialInfo: this.fb.group({}),
            transportInfo: this.fb.group({}),
            contactInfo: this.fb.group({}),
            medicalInfo: this.fb.group({}),
            governmentIds: this.fb.group({}),
            addressInfo: this.fb.group({})
          });
          this.sharedService.setFormCommonFields(this.mainForm);

          if (this.changeModeId) {
            this.populateFromDB();
          }
        }
      }, {
        key: "checkCanChangeHisOwnRoles",
        value: function checkCanChangeHisOwnRoles() {
          var user = JSON.parse(this.sharedService.loggedInData());
          var currentUserRoleId = this.sharedService.currentUserRoleId();
          var isanyadmin = this.userRolePipe.transform(currentUserRoleId, 'isanyadmin');
          this.canChangeHisOwnRole = isanyadmin || this.changeModeId != user["_id"]["$oid"];
        }
      }, {
        key: "checkSensitiveInfoPermissions",
        value: function checkSensitiveInfoPermissions() {
          var user = JSON.parse(this.sharedService.loggedInData());
          this.canSeeSensitiveInfo = this.plService.getPageEntitlements(5, 1) == 2 || this.changeModeId === user["_id"]["$oid"];
        }
      }, {
        key: "setTitleMessages",
        value: function setTitleMessages() {
          if (this.changeModeId) {
            this.title = "Update ".concat(this.entity, ".");
            this.subTitle = "Please update following details of ".concat(this.entity, ".");

            if (this.isViewMode) {
              this.title = "View ".concat(this.entity, ".");
              this.subTitle = "View following details of ".concat(this.entity, ".");
            }
          }
        }
      }, {
        key: "populateFromDB",
        value: function populateFromDB() {
          var _this3 = this;

          //--- Fill employees and  information for View/Edit mode from Database
          this.isPopulatingFormDb = true;
          this.isLoading = true;
          this.employeeService.getEmployee(this.changeModeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (result) {
            _this3.isPopulatingFormDb = false;
            _this3.isLoading = false;
            result.forEach(function (element) {
              _this3.initialFormValues = element;

              _this3.mainForm.get('_id').setValue(_this3.initialFormValues._id);

              _this3.mainForm.get('status').setValue(_this3.initialFormValues.status);
            });
          }, function (error) {
            _this3.isPopulatingFormDb = false;
            _this3.isLoading = false;
            console.log(error);
          });
        }
      }, {
        key: "deactivateRecord",
        value: function deactivateRecord(control, fieldName) {
          var _this4 = this;

          var dialogRef = this.sharedService.openConfirmDialog();
          dialogRef.afterClosed().subscribe(function (confirmed) {
            if (confirmed) {
              control.setValue(0);

              _this4.sharedService.pageLevelDelete(fieldName);
            }
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(event) {
          var _this5 = this;

          this.mainForm.markAllAsTouched();
          event.preventDefault();
          event.stopPropagation();

          if (this.mainForm.valid) {
            this.isLoading = true;
            this.employeeService.employeeRegistration(this.mainForm.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.unsubscribe$)).subscribe(function (result) {
              _this5.isLoading = false;

              if (result.isSuccess) {
                _this5.onSaveSuccess.emit(true);

                _this5.sharedService.openSnackBar("".concat(_this5.entity, " information get saved successfully."), "x", "success");

                if (!_this5.isComingFromMyProfile) {
                  _this5.sharedService.resetFormControls(_this5.mainForm);
                }
              } else {
                _this5.sharedService.openSnackBar(result.message, "x", "fail");
              }
            }, function (error) {
              _this5.isLoading = false;
              console.log(error);
            });
          } else {
            this.sharedService.openSnackBar("Some fields are invalid. Please fill them properly.", "x", "fail");
          }
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

      return NewEmployeeComponent;
    }();

    NewEmployeeComponent.ɵfac = function NewEmployeeComponent_Factory(t) {
      return new (t || NewEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_pipe_user_role_pipe__WEBPACK_IMPORTED_MODULE_8__["UserRolePipe"]));
    };

    NewEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewEmployeeComponent,
      selectors: [["app-new-employee"]],
      inputs: {
        changeModeId: "changeModeId",
        isViewMode: "isViewMode",
        open: "open",
        stayOnPage: "stayOnPage",
        roleId: "roleId",
        isComingFromMyProfile: "isComingFromMyProfile",
        entity: "entity"
      },
      outputs: {
        onSaveSuccess: "onSaveSuccess"
      },
      decls: 5,
      vars: 7,
      consts: [[3, "loading", "title", "subTitle", "cardButtons"], [3, "formGroup", "ngSubmit"], [4, "ngIf"], [3, "form", "isChangeMode", 4, "ngIf"], ["fxFlex", "", "fxLayoutAlign", "end", 3, "form", "isViewMode"], ["fxFlex", "2 2 auto"], [3, "form", "isViewMode", "value"], ["hideToggle", "true", 3, "multi"], [1, "no-shadow"], [3, "form", "icon"], [3, "form", "isViewMode", "initialFormValues"], ["class", "no-shadow", 4, "ngIf"], [3, "form", "isViewMode", "initialFormValues", "Required"], [3, "form", "initialFormValues", "isViewMode"], [3, "form", "isChangeMode"]],
      template: function NewEmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewEmployeeComponent_Template_form_ngSubmit_1_listener($event) {
            return ctx.onSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewEmployeeComponent_responsive_2_Template, 43, 41, "responsive", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NewEmployeeComponent_form_buttons_3_Template, 1, 2, "form-buttons", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("title", ctx.title)("subTitle", ctx.subTitle)("cardButtons", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isPopulatingFormDb);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isViewMode);
        }
      },
      directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_11__["ResponsiveComponent"], _shared_component_form_templates_form_profile_pic_form_profile_pic_component__WEBPACK_IMPORTED_MODULE_12__["FormProfilePicComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutAlignDirective"], _shared_component_dropdowns_ddl_status_ddl_status_component__WEBPACK_IMPORTED_MODULE_14__["DdlStatusComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_15__["MatExpansionPanelTitle"], _shared_component_boxes_smart_div_smart_div_component__WEBPACK_IMPORTED_MODULE_16__["SmartDivComponent"], _shared_component_form_templates_form_user_basic_info_form_user_basic_info_component__WEBPACK_IMPORTED_MODULE_17__["FormUserBasicInfoComponent"], _shared_component_dropdowns_ddl_role_ddl_role_component__WEBPACK_IMPORTED_MODULE_18__["DdlRoleComponent"], _shared_module_transport_route_ddl_route_ddl_component__WEBPACK_IMPORTED_MODULE_19__["RouteDdlComponent"], _shared_component_form_templates_form_contact_info_form_contact_info_component__WEBPACK_IMPORTED_MODULE_20__["FormContactInfoComponent"], _shared_component_form_templates_form_user_medical_info_form_user_medical_info_component__WEBPACK_IMPORTED_MODULE_21__["FormUserMedicalInfoComponent"], _shared_component_form_templates_form_user_government_ids_form_user_government_ids_component__WEBPACK_IMPORTED_MODULE_22__["FormUserGovernmentIdsComponent"], _shared_component_form_templates_form_address_info_form_address_info_component__WEBPACK_IMPORTED_MODULE_23__["FormAddressInfoComponent"], _shared_component_form_templates_form_user_credentials_form_user_credentials_component__WEBPACK_IMPORTED_MODULE_24__["FormUserCredentialsComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_25__["FormButtonsComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZW1wbG95ZWUvbmV3LWVtcGxveWVlL25ldy1lbXBsb3llZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-new-employee',
          templateUrl: './new-employee.component.html',
          styleUrls: ['./new-employee.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }, {
          type: _services_employee_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"]
        }, {
          type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"]
        }, {
          type: _app_shared_pipe_user_role_pipe__WEBPACK_IMPORTED_MODULE_8__["UserRolePipe"]
        }];
      }, {
        onSaveSuccess: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        changeModeId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isViewMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        open: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        stayOnPage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        roleId: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isComingFromMyProfile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        entity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/post-login/employee/services/employee.service.ts":
  /*!******************************************************************!*\
    !*** ./src/app/post-login/employee/services/employee.service.ts ***!
    \******************************************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppPostLoginEmployeeServicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
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
    /* harmony import */


    var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/shared/services/storage.service */
    "./src/app/shared/services/storage.service.ts");
    /* harmony import */


    var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/shared/services/shared.service */
    "./src/app/shared/services/shared.service.ts");

    var EmployeeService =
    /*#__PURE__*/
    function () {
      function EmployeeService(_http, _storage, _sharedService) {
        _classCallCheck(this, EmployeeService);

        this._http = _http;
        this._storage = _storage;
        this._sharedService = _sharedService;
        this.apiPrefix = "api/Employee/";
      }

      _createClass(EmployeeService, [{
        key: "employeeRegistration",
        value: function employeeRegistration(employeedata) {
          var isSuperAdmin = false;

          if (employeedata["_id"]['$oid'] === _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"].superAdminEmployeeId['$oid']) {
            isSuperAdmin = true;
          }

          if (isSuperAdmin) {
            return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "saveDevSuperAdmin", employeedata);
          } else {
            return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "saveEmployee", employeedata);
          }
        }
      }, {
        key: "getEmployeeList",
        value: function getEmployeeList(searchParams) {
          return this._http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getlist", searchParams);
        }
      }, {
        key: "getEmployee",
        value: function getEmployee(id) {
          var empId = this._sharedService.serializeMongoObjectId(id);

          var isSuperAdmin = false;

          if (empId === _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"].superAdminEmployeeId['$oid']) {
            isSuperAdmin = true;
          }

          if (isSuperAdmin) {
            return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getdevSuperAdmin?id=" + empId);
          } else {
            return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getEmployee?id=" + empId);
          }
        }
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(id) {
          return this._http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "DeleteEmployee?id=" + this._sharedService.serializeMongoObjectId(id));
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.ɵfac = function EmployeeService_Factory(t) {
      return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]));
    };

    EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmployeeService,
      factory: EmployeeService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]
        }, {
          type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=employee-employee-module-es5.js.map