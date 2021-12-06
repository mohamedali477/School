(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~post-login-dashboard-dashboard-module"],{

/***/ "./src/app/post-login/dashboard/dashboard-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/post-login/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _default_dashboard_default_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-dashboard/default-dashboard.component */ "./src/app/post-login/dashboard/default-dashboard/default-dashboard.component.ts");
/* harmony import */ var _notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notice-board/notice-board.component */ "./src/app/post-login/dashboard/notice-board/notice-board.component.ts");
/* harmony import */ var _time_table_time_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./time-table/time-table.component */ "./src/app/post-login/dashboard/time-table/time-table.component.ts");







const routes1 = [
    {
        path: "default",
        component: _default_dashboard_default_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DefaultDashboardComponent"],
        outlet: 'postLoginOutlet'
    },
    {
        path: "noticeBoard",
        component: _notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_3__["NoticeBoardComponent"],
        outlet: 'postLoginOutlet'
    },
    {
        path: "timeTable",
        component: _time_table_time_table_component__WEBPACK_IMPORTED_MODULE_4__["TimeTableComponent"],
        outlet: 'postLoginOutlet'
    }
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes1)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes1)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/post-login/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/post-login/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/post-login/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _default_dashboard_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./default-dashboard/default-dashboard.component */ "./src/app/post-login/dashboard/default-dashboard/default-dashboard.component.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notice-board/notice-board.component */ "./src/app/post-login/dashboard/notice-board/notice-board.component.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/dashboard.service */ "./src/app/post-login/dashboard/services/dashboard.service.ts");
/* harmony import */ var _time_table_time_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./time-table/time-table.component */ "./src/app/post-login/dashboard/time-table/time-table.component.ts");









class DashboardModule {
}
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, providers: [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
            _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_default_dashboard_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DefaultDashboardComponent"], _notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_5__["NoticeBoardComponent"], _time_table_time_table_component__WEBPACK_IMPORTED_MODULE_7__["TimeTableComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_default_dashboard_default_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DefaultDashboardComponent"], _notice_board_notice_board_component__WEBPACK_IMPORTED_MODULE_5__["NoticeBoardComponent"], _time_table_time_table_component__WEBPACK_IMPORTED_MODULE_7__["TimeTableComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                    _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                providers: [_services_dashboard_service__WEBPACK_IMPORTED_MODULE_6__["DashboardService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/post-login/dashboard/default-dashboard/default-dashboard.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/post-login/dashboard/default-dashboard/default-dashboard.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DefaultDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultDashboardComponent", function() { return DefaultDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/post-login/dashboard/services/dashboard.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _shared_component_boxes_dashboard_box_dashboard_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/component/boxes/dashboard-box/dashboard-box.component */ "./src/app/shared/component/boxes/dashboard-box/dashboard-box.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _shared_module_exam_exam_accordian_exam_accordian_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/module/exam/exam-accordian/exam-accordian.component */ "./src/app/shared/module/exam/exam-accordian/exam-accordian.component.ts");
/* harmony import */ var _shared_module_attendance_overall_attendance_count_chart_overall_attendance_count_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/module/attendance/overall-attendance-count-chart/overall-attendance-count-chart.component */ "./src/app/shared/module/attendance/overall-attendance-count-chart/overall-attendance-count-chart.component.ts");
/* harmony import */ var _shared_module_rating_overall_rating_count_chart_overall_rating_count_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/module/rating/overall-rating-count-chart/overall-rating-count-chart.component */ "./src/app/shared/module/rating/overall-rating-count-chart/overall-rating-count-chart.component.ts");
/* harmony import */ var _shared_component_chart_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../shared/component/chart/chart.component */ "./src/app/shared/component/chart/chart.component.ts");
/* harmony import */ var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/component/boxes/no-record-found/no-record-found.component */ "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/component/loader/loader.component */ "./src/app/shared/component/loader/loader.component.ts");





















function DefaultDashboardComponent_ng_container_1_mat_expansion_panel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " From ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " to ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r361 = ctx.$implicit;
    const idx_r362 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", idx_r362 + 1, ". ", event_r361.eventName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, event_r361.fromDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, event_r361.toDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r361.description, " ");
} }
function DefaultDashboardComponent_ng_container_1_no_record_found_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
} }
function DefaultDashboardComponent_ng_container_1_no_record_found_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
} }
function DefaultDashboardComponent_ng_container_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultDashboardComponent_ng_container_1_div_16_Template_mat_icon_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r364); const ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r363.countCardViewClicked("employee"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DefaultDashboardComponent_ng_container_1_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultDashboardComponent_ng_container_1_div_35_Template_mat_icon_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r366); const ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r365.countCardViewClicked("student"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DefaultDashboardComponent_ng_container_1_div_56_Template(rf, ctx) { if (rf & 1) {
    const _r368 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DefaultDashboardComponent_ng_container_1_div_56_Template_mat_icon_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r368); const ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r367.countCardViewClicked("guardian"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " visibility ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["Male", "Female", "Others"]; };
const _c1 = function (a0, a1, a2) { return [a0, a1, a2]; };
function DefaultDashboardComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "responsive", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "dashboard-box", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-accordion", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DefaultDashboardComponent_ng_container_1_mat_expansion_panel_4_Template, 16, 9, "mat-expansion-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DefaultDashboardComponent_ng_container_1_no_record_found_5_Template, 1, 0, "no-record-found", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "dashboard-box", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "exam-accordian", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DefaultDashboardComponent_ng_container_1_no_record_found_8_Template, 1, 0, "no-record-found", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "responsive", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "overall-attendance-count-chart", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "overall-rating-count-chart", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "responsive", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "dashboard-box", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DefaultDashboardComponent_ng_container_1_div_16_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Others ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-chart", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "dashboard-box", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DefaultDashboardComponent_ng_container_1_div_35_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Others ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "app-chart", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "responsive", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "dashboard-box", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, DefaultDashboardComponent_ng_container_1_div_56_Template, 3, 0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Male ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Female ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Others ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "app-chart", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gap", "20%")("colGap", "14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", true)("icon", "group_work")("title", "Upcoming events in next 10 days")("bgColor", "orangered")("color", "white");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx_r353.masterData.expendMultiple);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r353.schoolEvent);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r353.schoolEvent == null ? null : ctx_r353.schoolEvent.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", true)("icon", "local_library")("title", "Upcoming Exams in next 10 days")("bgColor", "#ff9999")("color", "#333");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schoolExam", ctx_r353.schoolExam);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r353.schoolExam == null ? null : ctx_r353.schoolExam.length) == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gap", "20%")("colGap", "14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", false)("eyeButton", ctx_r353.editPermissions)("title", "Today attendance status")("attendanceRawData", ctx_r353.attendanceData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", false)("title", "Current rating status")("ratingRawData", ctx_r353.studentRatingData);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gap", "20%")("colGap", "14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", false)("icon", "person")("title", "Total number of Employees")("value", ctx_r353.employeeCount.total)("bgColor", "#319E1C")("color", "white")("bgImage", "bg-call-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r353.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.employeeCount.maleCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.employeeCount.femaleCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.employeeCount.othersCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartLabels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](69, _c0))("chartData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](70, _c1, ctx_r353.employeeCount.maleCount, ctx_r353.employeeCount.femaleCount, ctx_r353.employeeCount.othersCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", false)("icon", "child_care")("title", "Total number of Students")("value", ctx_r353.studentCount.total)("bgColor", "#ff00e0")("color", "white")("bgImage", "bg-falling-kids");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r353.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.studentCount.maleCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.studentCount.femaleCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.studentCount.othersCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartLabels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](74, _c0))("chartData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](75, _c1, ctx_r353.studentCount.maleCount, ctx_r353.studentCount.femaleCount, ctx_r353.studentCount.othersCount));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("gap", "20%")("colGap", "14%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("open", false)("icon", "wc")("title", "Total number of Guardians")("value", ctx_r353.guardianCount.total)("bgColor", "#2D4059")("color", "white")("bgImage", "bg-yee");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r353.editPermissions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.guardianCount.maleCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.guardianCount.femaleCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r353.guardianCount.othersCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("chartLabels", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](79, _c0))("chartData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](80, _c1, ctx_r353.guardianCount.maleCount, ctx_r353.guardianCount.femaleCount, ctx_r353.guardianCount.othersCount));
} }
function DefaultDashboardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DefaultDashboardComponent {
    constructor(dashboardService, plService, sharedService, router) {
        this.dashboardService = dashboardService;
        this.plService = plService;
        this.sharedService = sharedService;
        this.router = router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoading = false;
        this.guardianCount = null;
        this.studentCount = null;
        this.employeeCount = null;
        this.schoolEvent = null;
        this.schoolExam = null;
        this.editPermissions = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.editPermissions = this.plService.getPageEntitlements(1, 1) === 2;
    }
    ngOnInit() {
        this.getStuGuardianEmpCount();
        this.configureAutoRefresh();
    }
    configureAutoRefresh() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(3000 * 1000) // calling function after every 3000 seconds
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((val) => {
            if (!this.isLoading) {
                // this.getStuGuardianEmpCount();
            }
        });
    }
    getStuGuardianEmpCount() {
        this.isLoading = true;
        this.dashboardService.getCounts()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.attendanceData = result["attendanceCount"];
            this.segregateStrengthCountResults(result["strengthCount"]);
            this.studentRatingData = result["studentRatingCount"];
            this.schoolEvent = result["schoolEvent"];
            this.schoolExam = result["schoolExam"];
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    segregateStrengthCountResults(result) {
        result.forEach(item => {
            switch (item["data"]) {
                case "guardian":
                    {
                        this.guardianCount = this.calculateGenderWiseCount(item["count"]);
                        break;
                    }
                case "student":
                    {
                        this.studentCount = this.calculateGenderWiseCount(item["count"]);
                        break;
                    }
                case "employee":
                    {
                        this.employeeCount = this.calculateGenderWiseCount(item["count"]);
                        break;
                    }
            }
        });
    }
    calculateGenderWiseCount(source) {
        let obj = {};
        obj["femaleCount"] = 0;
        obj["maleCount"] = 0;
        obj["othersCount"] = 0;
        let totalCount = 0;
        source.forEach(element => {
            switch (element["_id"]["genderId"]) {
                case 0:
                    {
                        obj["femaleCount"] = element["count"];
                        totalCount = totalCount + element["count"];
                        break;
                    }
                case 1:
                    {
                        obj["maleCount"] = element["count"];
                        totalCount = totalCount + element["count"];
                        break;
                    }
                case 2:
                    {
                        obj["othersCount"] = element["count"];
                        totalCount = totalCount + element["count"];
                        break;
                    }
            }
        });
        obj["total"] = totalCount;
        return obj;
    }
    countCardViewClicked(type) {
        switch (type) {
            case "guardian": {
                this.router.navigateByUrl("pl/secure/studentguardian/(postLoginOutlet:guardianMgmt)");
                break;
            }
            case "student": {
                this.router.navigateByUrl("pl/secure/studentguardian/(postLoginOutlet:studentMgmt)");
                break;
            }
            case "employee": {
                this.router.navigateByUrl("pl/secure/employee/(postLoginOutlet:empmgmt)");
                break;
            }
            case "studentAttendance": {
                this.router.navigateByUrl("pl/secure/attendance/(postLoginOutlet:markStuAttendance)");
                break;
            }
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
DefaultDashboardComponent.ɵfac = function DefaultDashboardComponent_Factory(t) { return new (t || DefaultDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_5__["PostLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
DefaultDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DefaultDashboardComponent, selectors: [["app-default-dashboard"]], decls: 3, vars: 2, consts: [[1, "dashboard-container"], [4, "ngIf"], [3, "gap", "colGap"], ["fxFlex", "", 3, "open", "icon", "title", "bgColor", "color"], ["hideToggle", "true", 3, "multi"], ["class", "no-shadow", 4, "ngFor", "ngForOf"], [3, "schoolExam"], [1, "box-row-gap"], [1, "center-boxes", 3, "gap", "colGap"], ["fxFlex", "", 3, "open", "eyeButton", "title", "attendanceRawData"], ["fxFlex", "", 3, "open", "title", "ratingRawData"], ["fxFlex", "", 3, "open", "icon", "title", "value", "bgColor", "color", "bgImage"], ["fxLayout", "row", 1, "countDetails"], ["fxFlex", ""], [3, "chartLabels", "chartData"], [1, "no-shadow"], [2, "font-size", "12px", "text-align", "left"], ["mat-icon-button", "", 1, "pointer", 3, "click"], ["src", "https://cdn.dribbble.com/users/1047147/screenshots/3304587/school-trips-icons-dribbble-trimmed_1.gif", 1, "loadingImage"]], template: function DefaultDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DefaultDashboardComponent_ng_container_1_Template, 75, 84, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DefaultDashboardComponent_div_2_Template, 6, 0, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _shared_component_boxes_dashboard_box_dashboard_box_component__WEBPACK_IMPORTED_MODULE_10__["DashboardBoxComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_module_exam_exam_accordian_exam_accordian_component__WEBPACK_IMPORTED_MODULE_13__["ExamAccordianComponent"], _shared_module_attendance_overall_attendance_count_chart_overall_attendance_count_chart_component__WEBPACK_IMPORTED_MODULE_14__["OverallAttendanceCountChartComponent"], _shared_module_rating_overall_rating_count_chart_overall_rating_count_chart_component__WEBPACK_IMPORTED_MODULE_15__["OverallRatingCountChartComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _shared_component_chart_chart_component__WEBPACK_IMPORTED_MODULE_16__["ChartComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_12__["MatExpansionPanelTitle"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_17__["NoRecordFoundComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_19__["LoaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".dashboard-container[_ngcontent-%COMP%]{\r\n  padding: 25px;\r\n  margin: -25px;\r\n}\r\n\r\n.center-boxes[_ngcontent-%COMP%]{\r\n  text-align: -webkit-center;\r\n}\r\n\r\n.countDetails[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n\r\n.color1[_ngcontent-%COMP%]{\r\n  background-color: floralwhite;\r\n}\r\n\r\n.color2[_ngcontent-%COMP%]{\r\n  background-color: rgb(248, 255, 240);\r\n}\r\n\r\n.color3[_ngcontent-%COMP%]{\r\n  background-color: rgb(211, 236, 238);\r\n}\r\n\r\n.medium-box[_ngcontent-%COMP%]{\r\n  min-width: 280px;\r\n  width: 20%;\r\n}\r\n\r\n.loadingImage[_ngcontent-%COMP%]{\r\n  width: 100vw;\r\n  height: auto;\r\n  max-width: none;\r\n  max-height: 100vh;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n}\r\n\r\n.event-box[_ngcontent-%COMP%]{\r\n  padding: 0px 8px 12px 8px;\r\n  background-color: royalblue;\r\n}\r\n\r\n.event-box-header[_ngcontent-%COMP%]{\r\n  background-color: royalblue;\r\n  padding: 8px 0px 8px 0px;\r\n  color: white;\r\n  font-size: 18px;\r\n  border-style: solid;\r\n  border-width: 0px 0px 2px 0px;\r\n  border-color: var(--main-color);\r\n}\r\n\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]{\r\n  height: 35px !important;\r\n  border-style: none;\r\n  border-color: #555;\r\n  border-width: 0px 0px 2px 0px;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n}\r\n\r\n.box-row-gap[_ngcontent-%COMP%]{\r\n  min-height: 50px;\r\n  display:inline-block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9kYXNoYm9hcmQvZGVmYXVsdC1kYXNoYm9hcmQvZGVmYXVsdC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBbUI7S0FBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1sb2dpbi9kYXNoYm9hcmQvZGVmYXVsdC1kYXNoYm9hcmQvZGVmYXVsdC1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgbWFyZ2luOiAtMjVweDtcclxufVxyXG5cclxuLmNlbnRlci1ib3hlc3tcclxuICB0ZXh0LWFsaWduOiAtd2Via2l0LWNlbnRlcjtcclxufVxyXG5cclxuLmNvdW50RGV0YWlsc3tcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jb2xvcjF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZmxvcmFsd2hpdGU7XHJcbn1cclxuXHJcbi5jb2xvcjJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwgMjU1LCAyNDApO1xyXG59XHJcblxyXG4uY29sb3Ize1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTEsIDIzNiwgMjM4KTtcclxufVxyXG5cclxuLm1lZGl1bS1ib3h7XHJcbiAgbWluLXdpZHRoOiAyODBweDtcclxuICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ubG9hZGluZ0ltYWdle1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWF4LXdpZHRoOiBub25lO1xyXG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn1cclxuXHJcbi5ldmVudC1ib3h7XHJcbiAgcGFkZGluZzogMHB4IDhweCAxMnB4IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByb3lhbGJsdWU7XHJcbn1cclxuLmV2ZW50LWJveC1oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcm95YWxibHVlO1xyXG4gIHBhZGRpbmc6IDhweCAwcHggOHB4IDBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDJweCAwcHg7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xyXG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICM1NTU7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDJweCAwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbntcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5ib3gtcm93LWdhcHtcclxuICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DefaultDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-default-dashboard',
                templateUrl: './default-dashboard.component.html',
                styleUrls: ['./default-dashboard.component.css']
            }]
    }], function () { return [{ type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_4__["DashboardService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_5__["PostLoginService"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/dashboard/notice-board/notice-board.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/post-login/dashboard/notice-board/notice-board.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NoticeBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeBoardComponent", function() { return NoticeBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/component/dynamic-form/field.interface */ "./src/app/shared/component/dynamic-form/field.interface.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _services_dashboard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/dashboard.service */ "./src/app/post-login/dashboard/services/dashboard.service.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/component/dynamic-form/dynamic-form/dynamic-form.component */ "./src/app/shared/component/dynamic-form/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/component/buttons/form-buttons/form-buttons.component */ "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");
















function NoticeBoardComponent_dynamic_form_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dynamic-form", 4);
} if (rf & 2) {
    const ctx_r369 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("onlyColumn", true)("form", ctx_r369.mainForm)("fields", ctx_r369.fieldsConfig)("addEmptyDiv", false);
} }
function NoticeBoardComponent_form_buttons_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-buttons", 5);
} if (rf & 2) {
    const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r370.mainForm);
} }
class NoticeBoardComponent {
    constructor(sharedService, plService, dashboardService) {
        this.sharedService = sharedService;
        this.plService = plService;
        this.dashboardService = dashboardService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.hide = true;
        this.isLoading = false;
        this.mainForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.editPermissions = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.editPermissions = this.plService.getPageEntitlements(1, 2) === 2;
        this.fetchNoticeBoard();
    }
    ngOnInit() { }
    setupNoticeConfig(data) {
        console.log(data);
        this.fieldsConfig = [
            {
                isViewMode: !this.editPermissions,
                type: "richTextBox",
                label: "",
                inputType: "richTextBox",
                name: "notice",
                value: data,
                validations: [_app_shared_component_dynamic_form_field_interface__WEBPACK_IMPORTED_MODULE_2__["validationType"].required()]
            }
        ];
    }
    fetchNoticeBoard() {
        this.isLoading = true;
        this.dashboardService.getNoticeBoard()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            console.log(result);
            this.isLoading = false;
            let data = result[0] ? result[0]["notice"] : null;
            this.setupNoticeConfig(data);
        }, (error) => {
            this.isLoading = false;
            this.sharedService.openSnackBar("Sorry! Notice Board didn't get fetched.", "x", "fail");
        });
    }
    onSubmit(event) {
        this.mainForm.markAllAsTouched();
        event.preventDefault();
        event.stopPropagation();
        if (this.mainForm.valid) {
            this.isLoading = true;
            this.dashboardService.saveNoticeBoard(this.mainForm.value)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.unsubscribe$))
                .subscribe((result) => {
                this.isLoading = false;
                this.sharedService.openSnackBar("Notice Board get saved successfully.", "x", "success");
            }, (error) => {
                this.isLoading = false;
                this.sharedService.openSnackBar("Sorry! Notice Board didn't get saved.", "x", "fail");
            });
        }
        else {
            this.sharedService.openSnackBar("Please enter something in message or notice.", "x", "fail");
        }
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
NoticeBoardComponent.ɵfac = function NoticeBoardComponent_Factory(t) { return new (t || NoticeBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DashboardService"])); };
NoticeBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NoticeBoardComponent, selectors: [["app-notice-board"]], decls: 5, vars: 9, consts: [["fxFlex", "", 3, "icon", "title", "subTitle", "bgImage", "loading", "cardButtons"], [3, "formGroup", "ngSubmit"], [3, "onlyColumn", "form", "fields", "addEmptyDiv", 4, "ngIf"], [3, "form", 4, "ngIf"], [3, "onlyColumn", "form", "fields", "addEmptyDiv"], [3, "form"]], template: function NoticeBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NoticeBoardComponent_Template_form_ngSubmit_1_listener($event) { return ctx.onSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NoticeBoardComponent_dynamic_form_3_Template, 1, 4, "dynamic-form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NoticeBoardComponent_form_buttons_4_Template, 1, 1, "form-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", "gradient")("title", "Notice Board")("subTitle", "Please give any message or notice for whole school.")("bgImage", "bg-google-phone")("loading", ctx.isLoading)("cardButtons", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fieldsConfig);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editPermissions);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_component_dynamic_form_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_12__["DynamicFormComponent"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_13__["FormButtonsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vZGFzaGJvYXJkL25vdGljZS1ib2FyZC9ub3RpY2UtYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NoticeBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notice-board',
                templateUrl: './notice-board.component.html',
                styleUrls: ['./notice-board.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_7__["PostLoginService"] }, { type: _services_dashboard_service__WEBPACK_IMPORTED_MODULE_8__["DashboardService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/dashboard/services/dashboard.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/post-login/dashboard/services/dashboard.service.ts ***!
  \********************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




class DashboardService {
    constructor(http) {
        this.http = http;
        this.apiPrefix = "api/dashboard/";
    }
    getCounts() {
        return this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "schoolStrengthAndAttendanceCount");
    }
    saveNoticeBoard(data) {
        return this.http.post(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "saveNoticeBoard", data);
    }
    getNoticeBoard() {
        return this.http.get(_env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + this.apiPrefix + "getNoticeBoard");
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/dashboard/time-table/time-table.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/post-login/dashboard/time-table/time-table.component.ts ***!
  \*************************************************************************/
/*! exports provided: TimeTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeTableComponent", function() { return TimeTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/fesm2015/button-toggle.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/component/user-small-pic/user-small-pic.component */ "./src/app/shared/component/user-small-pic/user-small-pic.component.ts");
/* harmony import */ var _shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/pipe/master-data.pipe */ "./src/app/shared/pipe/master-data.pipe.ts");
/* harmony import */ var _shared_pipe_subject_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/pipe/subject.pipe */ "./src/app/shared/pipe/subject.pipe.ts");














function TimeTableComponent_ng_container_9_mat_button_toggle_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-button-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "masterData");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sectionId_r377 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", sectionId_r377);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Section ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 2, sectionId_r377, "classsections"), "");
} }
function TimeTableComponent_ng_container_9_th_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "wb_sunny");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimeTableComponent_ng_container_9_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimeTableComponent_ng_container_9_th_18_span_1_Template, 3, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r378 = ctx.$implicit;
    const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r378.id === ctx_r375.today);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r378.fullName, " ");
} }
function TimeTableComponent_ng_container_9_ng_container_20_tr_1_ng_container_4_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "user-small-pic", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", sub_r380.fromTime, " - ", sub_r380.toTime, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", sub_r380.teacherId);
} }
function TimeTableComponent_ng_container_9_ng_container_20_tr_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimeTableComponent_ng_container_9_ng_container_20_tr_1_ng_container_4_ng_container_2_span_1_Template, 3, 3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const teachingDayId_r385 = ctx.$implicit;
    const day_r383 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r383.id === teachingDayId_r385);
} }
const _c0 = function (a0) { return { "today-tt": a0 }; };
function TimeTableComponent_ng_container_9_ng_container_20_tr_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimeTableComponent_ng_container_9_ng_container_20_tr_1_ng_container_4_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const day_r383 = ctx.$implicit;
    const sub_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, day_r383.id === ctx_r382.today));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_r380.teachingDays);
} }
function TimeTableComponent_ng_container_9_ng_container_20_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimeTableComponent_ng_container_9_ng_container_20_tr_1_ng_container_4_Template, 3, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, sub_r380._id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r381.masterData.days);
} }
function TimeTableComponent_ng_container_9_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimeTableComponent_ng_container_9_ng_container_20_tr_1_Template, 5, 4, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sub_r380 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r373 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_r380.sectionId === _r373.value);
} }
function TimeTableComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-button-toggle-group", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TimeTableComponent_ng_container_9_mat_button_toggle_10_Template, 4, 5, "mat-button-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "table", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "thead", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "menu_book");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TimeTableComponent_ng_container_9_th_18_Template, 3, 2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TimeTableComponent_ng_container_9_ng_container_20_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const cls_r372 = ctx.$implicit;
    const ctx_r371 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cls_r372.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", cls_r372.classSection[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cls_r372.classSection);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r371.masterData.days);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cls_r372.subject);
} }
class TimeTableComponent {
    constructor(sharedApiService) {
        this.sharedApiService = sharedApiService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.today = (new Date()).getDay();
        this.getClasses();
    }
    ngOnInit() {
    }
    getClasses() {
        this.isLoading = true;
        this.sharedApiService.getClassSubjectSectionDdl()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.classes = result;
            this.isLoading = false;
        }, (error) => {
            this.isLoading = false;
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
TimeTableComponent.ɵfac = function TimeTableComponent_Factory(t) { return new (t || TimeTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["SharedApiService"])); };
TimeTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimeTableComponent, selectors: [["app-time-table"]], decls: 10, vars: 2, consts: [[1, "custom-page-mainDiv"], [1, "custom-page-header"], ["hideToggle", "true", 3, "multi"], [4, "ngFor", "ngForOf"], [1, "no-shadow", "mycustom-panel"], [1, "tt-title"], [1, "section-tabs"], [3, "value"], ["selectedSectionToggleButton", "matButtonToggleGroup"], [3, "value", 4, "ngFor", "ngForOf"], [1, "section-details"], [1, "table"], [1, "thead"], ["style", "min-width: 100px;", 4, "ngFor", "ngForOf"], [1, "section-name"], [2, "min-width", "100px"], ["class", "blink-animate", 4, "ngIf"], [1, "blink-animate"], ["class", "tr appear-animate", 4, "ngIf"], [1, "tr", "appear-animate"], [1, "td", "bold"], [1, "td", 3, "ngClass"], [4, "ngIf"], [3, "userId"]], template: function TimeTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "watch_later");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Class wise Time Table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-accordion", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TimeTableComponent_ng_container_9_Template, 21, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx.masterData.expendMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classes);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionPanelTitle"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_10__["UserSmallPicComponent"]], pipes: [_shared_pipe_master_data_pipe__WEBPACK_IMPORTED_MODULE_11__["MasterDataPipe"], _shared_pipe_subject_pipe__WEBPACK_IMPORTED_MODULE_12__["SubjectPipe"]], styles: [".section-tabs[_ngcontent-%COMP%]{\r\n    margin: 0px; \r\n    overflow: auto;\r\n}\r\n\r\n.section-details[_ngcontent-%COMP%]{\r\n    border-style: solid;\r\n    border-width: 0px 10px 10px 10px;\r\n    border-color: var(--main-color);\r\n    margin-top: -1px;\r\n    margin-bottom: 40px;\r\n    border-radius: 5px;\r\n    overflow: auto;\r\n    padding: 0px;\r\n}\r\n\r\n.mat-button-toggle-group-appearance-standard[_ngcontent-%COMP%], .mat-button-toggle-standalone.mat-button-toggle-appearance-standard[_ngcontent-%COMP%]{\r\n    border-color: var(--main-color);\r\n    border-bottom-left-radius: 0px !important;\r\n    border-bottom-right-radius: 0px !important;\r\n}\r\n\r\n.mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expanded), .mat-accordion[_ngcontent-%COMP%]   .mat-expansion-panel[_ngcontent-%COMP%]:not(.mat-expansion-panel-spacing){\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.mat-expansion-panel-header[_ngcontent-%COMP%]{\r\n    padding: 0% 1% 1% 1% !important;\r\n}\r\n\r\n.mycustom-panel[_ngcontent-%COMP%]     .mat-expansion-panel-body{\r\n    padding: 0% 1% 1% 1% !important;\r\n}\r\n\r\n.td[_ngcontent-%COMP%]{\r\n    border-color: #00000073;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    padding-bottom: 2px;\r\n    padding-top: 2px;\r\n}\r\n\r\n.tt-title[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n}\r\n\r\n.today-tt[_ngcontent-%COMP%]{\r\n    background-color: #96ff405c;\r\n    color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9kYXNoYm9hcmQvdGltZS10YWJsZS90aW1lLXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHlDQUF5QztJQUN6QywwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1sb2dpbi9kYXNoYm9hcmQvdGltZS10YWJsZS90aW1lLXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi10YWJze1xyXG4gICAgbWFyZ2luOiAwcHg7IFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5zZWN0aW9uLWRldGFpbHN7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQsIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmR7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtYWNjb3JkaW9uIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSwgLm1hdC1hY2NvcmRpb24gLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5zaW9uLXBhbmVsLXNwYWNpbmcpe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJ7XHJcbiAgICBwYWRkaW5nOiAwJSAxJSAxJSAxJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXljdXN0b20tcGFuZWwgOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWJvZHl7XHJcbiAgICBwYWRkaW5nOiAwJSAxJSAxJSAxJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGR7XHJcbiAgICBib3JkZXItY29sb3I6ICMwMDAwMDA3MztcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xyXG59XHJcblxyXG4udHQtdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi50b2RheS10dHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5NmZmNDA1YztcclxuICAgIGNvbG9yOiBibGFjaztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimeTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-time-table',
                templateUrl: './time-table.component.html',
                styleUrls: ['./time-table.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["SharedApiService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~post-login-dashboard-dashboard-module-es2015.js.map