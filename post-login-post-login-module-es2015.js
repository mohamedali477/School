(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["post-login-post-login-module"],{

/***/ "./src/app/post-login/components/agenda-calendar/agenda-calendar.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/post-login/components/agenda-calendar/agenda-calendar.component.ts ***!
  \************************************************************************************/
/*! exports provided: AgendaCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaCalendarComponent", function() { return AgendaCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _shared_component_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/component/calendar/calendar.component */ "./src/app/shared/component/calendar/calendar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/component/boxes/responsive/responsive.component */ "./src/app/shared/component/boxes/responsive/responsive.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _holiday_calendar_holiday_calendar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../holiday-calendar/holiday-calendar.component */ "./src/app/post-login/components/holiday-calendar/holiday-calendar.component.ts");
/* harmony import */ var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/component/boxes/no-record-found/no-record-found.component */ "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");














function AgendaCalendarComponent_no_record_found_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
} }
function AgendaCalendarComponent_mat_expansion_panel_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const event_r1226 = ctx.$implicit;
    const idx_r1227 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", idx_r1227 + 1, ". ", event_r1226.eventName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 5, event_r1226.fromDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 7, event_r1226.toDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", event_r1226.description, " ");
} }
class AgendaCalendarComponent {
    constructor(changeDetector, sharedApiService) {
        this.changeDetector = changeDetector;
        this.sharedApiService = sharedApiService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.editEventId = null;
        this.showAddEventDetailsPopUp = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.isLoading = false;
        this.dateValue = null;
        this.events = null;
    }
    ngOnInit() {
    }
    dateClicked(event) {
        this.dateValue = event;
        this.loadAgendaFromDB();
    }
    loadAgendaFromDB() {
        this.isLoading = true;
        this.sharedApiService.getSchoolEventByDate(this.dateValue)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.isLoading = false;
            this.events = result["schoolEvent"];
        }, (error) => {
            this.isLoading = false;
            console.log(error);
        });
    }
    ngAfterViewChecked() {
        this.changeDetector.detectChanges();
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
AgendaCalendarComponent.ɵfac = function AgendaCalendarComponent_Factory(t) { return new (t || AgendaCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["SharedApiService"])); };
AgendaCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgendaCalendarComponent, selectors: [["agenda-calendar"]], decls: 21, vars: 10, consts: [[3, "loading", "childCard", "header"], [3, "selectedDate"], [1, "agenda-box"], [1, "agenda-date"], [4, "ngIf"], ["hideToggle", "true", 3, "multi"], ["class", "no-shadow", 4, "ngFor", "ngForOf"], ["fxFlex", ""], [1, "no-shadow"]], template: function AgendaCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-calendar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedDate", function AgendaCalendarComponent_Template_app_calendar_selectedDate_1_listener($event) { return ctx.dateClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Agenda ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "for ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AgendaCalendarComponent_no_record_found_12_Template, 1, 0, "no-record-found", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-accordion", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AgendaCalendarComponent_mat_expansion_panel_14_Template, 17, 9, "mat-expansion-panel", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "responsive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "holiday-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("loading", ctx.isLoading)("childCard", true)("header", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 7, ctx.dateValue, "fullDate"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.events == null ? null : ctx.events.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx.masterData.expendMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"], _shared_component_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_6__["CalendarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_component_boxes_responsive_responsive_component__WEBPACK_IMPORTED_MODULE_9__["ResponsiveComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _holiday_calendar_holiday_calendar_component__WEBPACK_IMPORTED_MODULE_11__["HolidayCalendarComponent"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_12__["NoRecordFoundComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionPanelTitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".mat-expansion-panel-header[_ngcontent-%COMP%]{\r\n    height: 35px !important;\r\n    border-style: none;\r\n    border-color: #555;\r\n    border-width: 0px 0px 2px 0px;\r\n}\r\n\r\n.agenda-box[_ngcontent-%COMP%]{\r\n    margin-top: 1px;\r\n    color: black;\r\n}\r\n\r\n.agenda-date[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\r\n\r\n.note-highlight[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    background-color: yellow;\r\n    padding: 5px 0px 5px 2px;\r\n    font-size: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9jb21wb25lbnRzL2FnZW5kYS1jYWxlbmRhci9hZ2VuZGEtY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxvZ2luL2NvbXBvbmVudHMvYWdlbmRhLWNhbGVuZGFyL2FnZW5kYS1jYWxlbmRhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVye1xyXG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6ICM1NTU7XHJcbiAgICBib3JkZXItd2lkdGg6IDBweCAwcHggMnB4IDBweDtcclxufVxyXG5cclxuLmFnZW5kYS1ib3h7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5hZ2VuZGEtZGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm5vdGUtaGlnaGxpZ2h0e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AgendaCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'agenda-calendar',
                templateUrl: './agenda-calendar.component.html',
                styleUrls: ['./agenda-calendar.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["SharedApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/components/exam-calendar/exam-calendar.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/post-login/components/exam-calendar/exam-calendar.component.ts ***!
  \********************************************************************************/
/*! exports provided: ExamCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamCalendarComponent", function() { return ExamCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_module_exam_exam_accordian_exam_accordian_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/module/exam/exam-accordian/exam-accordian.component */ "./src/app/shared/module/exam/exam-accordian/exam-accordian.component.ts");






class ExamCalendarComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.schoolExam = null;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_2__["MasterData"];
        this.isLoading = false;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
ExamCalendarComponent.ɵfac = function ExamCalendarComponent_Factory(t) { return new (t || ExamCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"])); };
ExamCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamCalendarComponent, selectors: [["exam-calendar"]], inputs: { schoolExam: "schoolExam" }, decls: 1, vars: 1, consts: [[3, "schoolExam"]], template: function ExamCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "exam-accordian", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("schoolExam", ctx.schoolExam);
    } }, directives: [_shared_module_exam_exam_accordian_exam_accordian_component__WEBPACK_IMPORTED_MODULE_4__["ExamAccordianComponent"]], styles: [".mat-expansion-panel-header[_ngcontent-%COMP%]{\r\n    height: 35px !important;\r\n    border-style: none;\r\n    border-color: #555;\r\n    border-width: 0px 0px 2px 0px;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9jb21wb25lbnRzL2V4YW0tY2FsZW5kYXIvZXhhbS1jYWxlbmRhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vY29tcG9uZW50cy9leGFtLWNhbGVuZGFyL2V4YW0tY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntcclxuICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTU1O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDJweCAwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'exam-calendar',
                templateUrl: './exam-calendar.component.html',
                styleUrls: ['./exam-calendar.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }]; }, { schoolExam: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/components/holiday-calendar/holiday-calendar.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/post-login/components/holiday-calendar/holiday-calendar.component.ts ***!
  \**************************************************************************************/
/*! exports provided: HolidayCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolidayCalendarComponent", function() { return HolidayCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _shared_component_boxes_section_section_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/component/boxes/section/section.component */ "./src/app/shared/component/boxes/section/section.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/fesm2015/expansion.js");
/* harmony import */ var _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/component/boxes/no-record-found/no-record-found.component */ "./src/app/shared/component/boxes/no-record-found/no-record-found.component.ts");












function HolidayCalendarComponent_no_record_found_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "no-record-found");
} }
function HolidayCalendarComponent_mat_expansion_panel_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const holiday_r1230 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 3, holiday_r1230.holidayDate, "fullDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](holiday_r1230.holidayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", holiday_r1230.description, " ");
} }
class HolidayCalendarComponent {
    constructor(sharedApiService, sharedService) {
        this.sharedApiService = sharedApiService;
        this.sharedService = sharedService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.isLoading = false;
    }
    ngOnInit() {
        this.loadHolidayDataFromDB();
    }
    loadHolidayDataFromDB() {
        let holidayYear = new Date().getFullYear();
        this.sectionTitle = "Holiday list for year " + holidayYear;
        this.startDate = new Date(2020, 0, 1);
        this.endDate = new Date(2020, 11, 31);
        this.startDate = this.startDate.setHours(0, 0, 0, 0);
        this.endDate = this.endDate.setHours(0, 0, 0, 0);
        this.isLoading = true;
        this.sharedApiService.getSchoolHolidayByDateRange(this.startDate, this.endDate)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.isLoading = false;
            this.schoolHolidays = result["schoolHoliday"];
        }, (error) => {
            this.isLoading = false;
            console.log(error);
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
HolidayCalendarComponent.ɵfac = function HolidayCalendarComponent_Factory(t) { return new (t || HolidayCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["SharedApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"])); };
HolidayCalendarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HolidayCalendarComponent, selectors: [["holiday-calendar"]], decls: 5, vars: 7, consts: [[3, "header", "childCard", "loading"], ["icon", "deck", 3, "title"], [4, "ngIf"], ["hideToggle", "true", 3, "multi"], ["class", "no-shadow", 4, "ngFor", "ngForOf"], [1, "no-shadow"], [1, "description"]], template: function HolidayCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HolidayCalendarComponent_no_record_found_2_Template, 1, 0, "no-record-found", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-accordion", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HolidayCalendarComponent_mat_expansion_panel_4_Template, 11, 6, "mat-expansion-panel", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("header", false)("childCard", true)("loading", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.sectionTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.schoolHolidays == null ? null : ctx.schoolHolidays.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("multi", ctx.masterData.expendMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schoolHolidays);
    } }, directives: [_shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _shared_component_boxes_section_section_component__WEBPACK_IMPORTED_MODULE_7__["SectionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_component_boxes_no_record_found_no_record_found_component__WEBPACK_IMPORTED_MODULE_10__["NoRecordFoundComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".mat-expansion-panel-header[_ngcontent-%COMP%]{\r\n    height: 35px !important;\r\n    border-style: none;\r\n    border-color: #555;\r\n    border-width: 0px 0px 2px 0px;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9jb21wb25lbnRzL2hvbGlkYXktY2FsZW5kYXIvaG9saWRheS1jYWxlbmRhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vY29tcG9uZW50cy9ob2xpZGF5LWNhbGVuZGFyL2hvbGlkYXktY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcntcclxuICAgIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNTU1O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwcHggMHB4IDJweCAwcHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HolidayCalendarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'holiday-calendar',
                templateUrl: './holiday-calendar.component.html',
                styleUrls: ['./holiday-calendar.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_4__["SharedApiService"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/components/select-school-branch/select-school-branch.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/post-login/components/select-school-branch/select-school-branch.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SelectSchoolBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectSchoolBranchComponent", function() { return SelectSchoolBranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");











function SelectSchoolBranchComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const school_r1223 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", school_r1223._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", school_r1223.name, " ");
} }
class SelectSchoolBranchComponent {
    constructor(sharedApiService, sharedService) {
        this.sharedApiService = sharedApiService;
        this.sharedService = sharedService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.isLoading = false;
        this.schools = [];
        this.viewUser = false;
    }
    ngOnInit() {
        this.getList();
    }
    getList() {
        this.isLoading = true;
        this.sharedApiService.getSchoolBranchDdl()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.isLoading = false;
            this.schools = result;
        }, (error) => {
            this.isLoading = false;
            console.log(error);
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
    schoolBranchClicked(schoolId, schoolBranchId) {
        this.sharedService.currentSchoolId(schoolId);
        this.sharedService.currentSchoolBranchId(schoolBranchId);
    }
}
SelectSchoolBranchComponent.ɵfac = function SelectSchoolBranchComponent_Factory(t) { return new (t || SelectSchoolBranchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["SharedApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"])); };
SelectSchoolBranchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectSchoolBranchComponent, selectors: [["app-select-school-branch"]], decls: 4, vars: 1, consts: [["fxFlex", ""], [2, "text-align", "center"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectSchoolBranchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SelectSchoolBranchComponent_mat_option_3_Template, 2, 2, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.schools);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MatOption"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vY29tcG9uZW50cy9zZWxlY3Qtc2Nob29sLWJyYW5jaC9zZWxlY3Qtc2Nob29sLWJyYW5jaC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectSchoolBranchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-school-branch',
                templateUrl: './select-school-branch.component.html',
                styleUrls: ['./select-school-branch.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_3__["SharedApiService"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/components/user-settings/user-settings.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/post-login/components/user-settings/user-settings.component.ts ***!
  \********************************************************************************/
/*! exports provided: UserSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSettingsComponent", function() { return UserSettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm2015/divider.js");
/* harmony import */ var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/component/boxes/row/row.component */ "./src/app/shared/component/boxes/row/row.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _shared_pipe_user_role_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/pipe/user-role.pipe */ "./src/app/shared/pipe/user-role.pipe.ts");















function UserSettingsComponent_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r1237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSettingsComponent_mat_icon_1_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1237); const ctx_r1236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1236.masterData.websiteZoom = ctx_r1236.masterData.websiteZoom - 10; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "zoom_out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UserSettingsComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    const _r1239 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSettingsComponent_mat_icon_6_Template_mat_icon_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1239); const ctx_r1238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1238.masterData.websiteZoom = ctx_r1238.masterData.websiteZoom + 10; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "zoom_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
function UserSettingsComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    const _r1243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSettingsComponent_ng_container_14_Template_mat_option_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1243); const ctx_r1242 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1242.changeBgImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bgImage_r1240 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", bgImage_r1240.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, bgImage_r1240.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bgImage_r1240.name, " ");
} }
function UserSettingsComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    const _r1245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-slide-toggle", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_ng_container_27_Template_mat_slide_toggle_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1245); const ctx_r1244 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1244.masterData.showJson = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Show JSON ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1235 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1235.masterData.showJson);
} }
class UserSettingsComponent {
    constructor(sharedService) {
        this.sharedService = sharedService;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
        this.sharedService.sortObject(this.masterData.bgImages, "name");
        this.CurrentUserId = this.sharedService.CurrentUserId();
        this.currentUserRoleId = this.sharedService.currentUserRoleId();
    }
    ngOnInit() {
    }
    changeWebsiteTheme() {
        document.documentElement.style.setProperty('--main-color', this.masterData.websiteMainColor);
    }
    changeBgImage() {
        document.documentElement.style.setProperty('--main-bg-image', this.masterData.websiteBgImage);
    }
}
UserSettingsComponent.ɵfac = function UserSettingsComponent_Factory(t) { return new (t || UserSettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"])); };
UserSettingsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSettingsComponent, selectors: [["app-user-settings"]], decls: 45, vars: 16, consts: [[1, "info-items"], ["class", "pointer zoom-buttons", 3, "click", 4, "ngIf"], [1, "pointer", "zoom-value", 3, "click"], ["gap", "10px"], ["fxFlex", "108px"], ["fxFlex", "", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["type", "color", 3, "ngModel", "ngModelChange"], ["type", "color", 3, "ngModel", "ngModelChange", "change"], ["color", "primary", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "pointer", "zoom-buttons", 3, "click"], [3, "value", "click"], [1, "bgImagePreview", "shadow", 3, "ngStyle"]], template: function UserSettingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UserSettingsComponent_mat_icon_1_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSettingsComponent_Template_span_click_2_listener($event) { return ctx.masterData.websiteZoom = 100; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Zoom ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserSettingsComponent_mat_icon_6_Template, 2, 0, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "row", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Background:-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_mat_select_ngModelChange_13_listener($event) { return ctx.masterData.websiteBgImage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UserSettingsComponent_ng_container_14_Template, 6, 5, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_input_ngModelChange_17_listener($event) { return ctx.masterData.lineChartBgColor = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Line Chart background color\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_input_ngModelChange_21_listener($event) { return ctx.masterData.websiteMainColor = $event; })("change", function UserSettingsComponent_Template_input_change_21_listener($event) { return ctx.changeWebsiteTheme(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Website color\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_mat_slide_toggle_ngModelChange_25_listener($event) { return ctx.masterData.formAnimation = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Form animations");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, UserSettingsComponent_ng_container_27_Template, 5, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "userRole");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_mat_slide_toggle_ngModelChange_31_listener($event) { return ctx.masterData.showErrorMessages = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Show error messages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_mat_slide_toggle_ngModelChange_35_listener($event) { return ctx.masterData.outlineFields = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Outlined fields");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_mat_slide_toggle_ngModelChange_39_listener($event) { return ctx.masterData.expendMultiple = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Expend multiple panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-slide-toggle", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserSettingsComponent_Template_mat_slide_toggle_ngModelChange_43_listener($event) { return ctx.masterData.multipleMenuOpen = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Kepp multiple menu open ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.masterData.websiteZoom > 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.masterData.websiteZoom, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.masterData.websiteZoom < 150);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterData.websiteBgImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.masterData.bgImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterData.lineChartBgColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterData.websiteMainColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterData.formAnimation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 13, ctx.currentUserRoleId, "isSuperAdmin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterData.showErrorMessages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterData.outlineFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterData.expendMultiple);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.masterData.multipleMenuOpen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDivider"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_5__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggle"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_12__["DefaultStyleDirective"]], pipes: [_shared_pipe_user_role_pipe__WEBPACK_IMPORTED_MODULE_13__["UserRolePipe"]], styles: [".info-items[_ngcontent-%COMP%]{\r\n    padding: 10px 0px 10px 0px;\r\n    color: black;\r\n  }\r\n\r\n.zoom-buttons[_ngcontent-%COMP%]{\r\n  font-size: 30px;\r\n}\r\n\r\n.zoom-value[_ngcontent-%COMP%]{\r\n  padding: 20px;\r\n  vertical-align: super;\r\n}\r\n\r\n.custom-dropdown[_ngcontent-%COMP%]\r\n{\r\n  padding: 5px;\r\n}\r\n\r\n.custom-dropdown-item[_ngcontent-%COMP%]\r\n{\r\n  padding: 5px;\r\n}\r\n\r\n.bgImagePreview[_ngcontent-%COMP%]{\r\n  height: 50px;\r\n  width: 100px;\r\n  border-width: 1px;\r\n  border-style: solid;\r\n  border-color: gray;\r\n  background-size: contain;\r\n  display: inline-block;\r\n  margin-right: 5px;\r\n}\r\n\r\nmat-select[_ngcontent-%COMP%]{\r\n  border-width: 2px;\r\n  border-style: solid;\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9jb21wb25lbnRzL3VzZXItc2V0dGluZ3MvdXNlci1zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7RUFDZDs7QUFFRjtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxvZ2luL2NvbXBvbmVudHMvdXNlci1zZXR0aW5ncy91c2VyLXNldHRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mby1pdGVtc3tcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbi56b29tLWJ1dHRvbnN7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uem9vbS12YWx1ZXtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxufVxyXG5cclxuLmN1c3RvbS1kcm9wZG93blxyXG57XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWRyb3Bkb3duLWl0ZW1cclxue1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5cclxuLmJnSW1hZ2VQcmV2aWV3e1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItY29sb3I6IGdyYXk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxubWF0LXNlbGVjdHtcclxuICBib3JkZXItd2lkdGg6IDJweDtcclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSettingsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-settings',
                templateUrl: './user-settings.component.html',
                styleUrls: ['./user-settings.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/post-login/post-login-footer/post-login-footer.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/post-login/post-login-footer/post-login-footer.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PostLoginFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLoginFooterComponent", function() { return PostLoginFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/component/boxes/large-screen/large-screen.component */ "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");



class PostLoginFooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PostLoginFooterComponent.ɵfac = function PostLoginFooterComponent_Factory(t) { return new (t || PostLoginFooterComponent)(); };
PostLoginFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostLoginFooterComponent, selectors: [["post-login-footer"]], decls: 2, vars: 0, consts: [[1, "appFooter", "contentBgImage"]], template: function PostLoginFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "large-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_1__["LargeScreenComponent"]], styles: [".appFooter[_ngcontent-%COMP%]{\r\n    min-height: 100px;\r\n    background-color: whitesmoke;\r\n    color: black;\r\n    padding: 20px 10px 20px 10px;\r\n    margin-bottom: -20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9wb3N0LWxvZ2luLWZvb3Rlci9wb3N0LWxvZ2luLWZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vcG9zdC1sb2dpbi1mb290ZXIvcG9zdC1sb2dpbi1mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBGb290ZXJ7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHggMjBweCAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostLoginFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'post-login-footer',
                templateUrl: './post-login-footer.component.html',
                styleUrls: ['./post-login-footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/post-login/post-login-header/post-login-header.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/post-login/post-login-header/post-login-header.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PostLoginHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLoginHeaderComponent", function() { return PostLoginHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _post_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/directives/tool-tip.directive */ "./src/app/shared/directives/tool-tip.directive.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _shared_component_show_on_scroll_show_on_scroll_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/component/show-on-scroll/show-on-scroll.component */ "./src/app/shared/component/show-on-scroll/show-on-scroll.component.ts");
/* harmony import */ var _components_select_school_branch_select_school_branch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/select-school-branch/select-school-branch.component */ "./src/app/post-login/components/select-school-branch/select-school-branch.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/component/boxes/large-screen/large-screen.component */ "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
/* harmony import */ var _shared_component_buttons_button_fullscreen_button_fullscreen_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/component/buttons/button-fullscreen/button-fullscreen.component */ "./src/app/shared/component/buttons/button-fullscreen/button-fullscreen.component.ts");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/component/user-small-pic/user-small-pic.component */ "./src/app/shared/component/user-small-pic/user-small-pic.component.ts");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/fesm2015/badge.js");
/* harmony import */ var _shared_component_boxes_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/component/boxes/info-box/info-box.component */ "./src/app/shared/component/boxes/info-box/info-box.component.ts");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/fesm2015/divider.js");
/* harmony import */ var _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shared/component/boxes/card/card.component */ "./src/app/shared/component/boxes/card/card.component.ts");
/* harmony import */ var _components_agenda_calendar_agenda_calendar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/agenda-calendar/agenda-calendar.component */ "./src/app/post-login/components/agenda-calendar/agenda-calendar.component.ts");
/* harmony import */ var _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../components/user-settings/user-settings.component */ "./src/app/post-login/components/user-settings/user-settings.component.ts");
/* harmony import */ var _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../shared/component/buttons/form-buttons/form-buttons.component */ "./src/app/shared/component/buttons/form-buttons/form-buttons.component.ts");
/* harmony import */ var _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../shared/component/loader/loader.component */ "./src/app/shared/component/loader/loader.component.ts");
































function PostLoginHeaderComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 0, ["#schoolBranchName", ""]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostLoginHeaderComponent_app_select_school_branch_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-select-school-branch");
} }
const _c0 = function (a0) { return { "clicked": a0 }; };
function PostLoginHeaderComponent_mat_toolbar_row_4_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_mat_toolbar_row_4_span_14_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r283); const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r282.headerInfoBoxClicked("messages"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "message");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r280.showMessageBox))("matBadge", ctx_r280.countMessages > 999 ? "1k+" : ctx_r280.countMessages);
} }
function PostLoginHeaderComponent_mat_toolbar_row_4_span_15_Template(rf, ctx) { if (rf & 1) {
    const _r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_mat_toolbar_row_4_span_15_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r285); const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r284.headerInfoBoxClicked("notifications"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r281 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r281.showNotificationBox))("matBadge", ctx_r281.countNotifications > 999 ? "1k+" : ctx_r281.countNotifications);
} }
function PostLoginHeaderComponent_mat_toolbar_row_4_Template(rf, ctx) { if (rf & 1) {
    const _r287 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_mat_toolbar_row_4_Template_mat_icon_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r287); const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r286.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "large-screen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-button-fullscreen");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_mat_toolbar_row_4_Template_button_click_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r287); const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r288.calendarClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "today");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostLoginHeaderComponent_mat_toolbar_row_4_span_14_Template, 4, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PostLoginHeaderComponent_mat_toolbar_row_4_span_15_Template, 4, 4, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_mat_toolbar_row_4_Template_button_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r287); const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r289.myProfile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "user-small-pic", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_mat_toolbar_row_4_Template_button_click_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r287); const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r290.headerInfoBoxClicked("settings"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r273.showCalendar));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("userId", ctx_r273.CurrentUserId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx_r273.showSettingsBox));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r276);
} }
function PostLoginHeaderComponent_app_info_box_5_Template(rf, ctx) { if (rf & 1) {
    const _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-info-box", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Message list will show here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_app_info_box_5_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r292); const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r291.showMessageBox = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Messages");
} }
function PostLoginHeaderComponent_app_info_box_6_Template(rf, ctx) { if (rf & 1) {
    const _r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-info-box", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Notifications will show here ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_app_info_box_6_Template_button_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r294); const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r293.showNotificationBox = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isNotification", true)("title", "Notificatios");
} }
function PostLoginHeaderComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_button_9_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r296); const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r295.changeRole(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "account_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Change Role ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostLoginHeaderComponent_card_13_Template(rf, ctx) { if (rf & 1) {
    const _r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteCardEvent", function PostLoginHeaderComponent_card_13_Template_card_deleteCardEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r298); const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r297.showCalendar = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "agenda-calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popUpMode", true)("icon", "today")("title", "View Calendar and Agenda")("refreshButton", false);
} }
function PostLoginHeaderComponent_card_14_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostLoginHeaderComponent_card_14_Template(rf, ctx) { if (rf & 1) {
    const _r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteCardEvent", function PostLoginHeaderComponent_card_14_Template_card_deleteCardEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r301); const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r300.showSettingsBox = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-user-settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostLoginHeaderComponent_card_14_span_4_Template, 2, 0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PostLoginHeaderComponent_card_14_Template_form_ngSubmit_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r301); const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r302.saveSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form-buttons", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onReset", function PostLoginHeaderComponent_card_14_Template_form_buttons_onReset_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r301); const ctx_r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r303.resetSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popUpMode", true)("icon", "settings")("title", "Settings")("refreshButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r279.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r279.settingsForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r279.settingsForm)("resetLabel", "Restore")("resetMessage", "Dow you want to restore the default settings?");
} }
const _c1 = ["*"];
class PostLoginHeaderComponent {
    constructor(_storage, sharedService, sharedApiService, plService) {
        this._storage = _storage;
        this.sharedService = sharedService;
        this.sharedApiService = sharedApiService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.toggleSideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.showCalendar = false;
        this.showNotificationBox = false;
        this.showMessageBox = false;
        this.showSettingsBox = false;
        this.isLoading = false;
        this.isUserLogin = true;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_3__["MasterData"];
        this.showSchoolBranchDropdown = false;
        this.settingsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({});
        this.hasMultipleRoles = false;
        this.countMessages = 0;
        this.countNotifications = 10000;
        this.CurrentUserId = this.sharedService.CurrentUserId();
        this.currentUserRoleId = this.sharedService.currentUserRoleId();
        this.hasMultipleRoles = plService.hasMultipleRoles();
    }
    ngOnInit() {
        this._storage.logIn$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((isLogin) => {
            this.isUserLogin = isLogin;
        });
    }
    toggleMenu() {
        this.showCalendar = false;
        this.closeAllNotificationBoxes();
        this.toggleSideMenu.emit(null);
    }
    logOut() {
        let dialogRef = this.sharedService.openConfirmDialog("You want to Logout.", "Yes", "No");
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((confirmed) => {
            if (confirmed) {
                this._storage.logOut();
            }
        });
    }
    headerInfoBoxClicked(src) {
        this.showCalendar = false;
        switch (src) {
            case 'messages': {
                this.showMessageBox = !this.showMessageBox;
                this.showNotificationBox = this.showSettingsBox = false;
                break;
            }
            case 'notifications': {
                this.showNotificationBox = !this.showNotificationBox;
                this.showMessageBox = this.showSettingsBox = false;
                break;
            }
            case 'settings': {
                this.showSettingsBox = !this.showSettingsBox;
                this.showNotificationBox = this.showMessageBox = false;
                break;
            }
        }
    }
    calendarClicked() {
        this.showCalendar = !this.showCalendar;
        this.closeAllNotificationBoxes();
    }
    myProfile() {
        this.plService.navigateToMyProfile();
    }
    closeAllNotificationBoxes() {
        this.showNotificationBox = this.showMessageBox = this.showSettingsBox = false;
    }
    saveSettings() {
        this.isLoading = true;
        let data = {
            "_id": this.CurrentUserId,
            "showErrorMessages": this.masterData.showErrorMessages,
            "outlineFields": this.masterData.outlineFields,
            "expendMultiple": this.masterData.expendMultiple,
            "multipleMenuOpen": this.masterData.multipleMenuOpen,
            "formAnimation": this.masterData.formAnimation,
            "lineChartBgColor": this.masterData.lineChartBgColor,
            "lineChartPointRadius": this.masterData.lineChartPointRadius,
            "websiteMainColor": this.masterData.websiteMainColor,
            "websiteBgImage": this.masterData.websiteBgImage
        };
        this.plService.saveUserSettings(data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.sharedService.openSnackBar('Settings get saved successfully.', 'x', 'success', 5000);
            this.isLoading = false;
            this.showSettingsBox = false;
        }, (error) => {
            this.isLoading = false;
            console.log(error);
        });
    }
    resetSettings() {
        this.isLoading = true;
        let userId = this.sharedService.serializeMongoObjectId(this.CurrentUserId);
        this.plService.restoreDefaultSettings(userId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((result) => {
            this.sharedApiService.mapUserSettings(result);
            this.sharedService.openSnackBar('Settings restored successfully.', 'x', 'success', 5000);
            this.isLoading = false;
            this.showSettingsBox = false;
        }, (error) => {
            this.isLoading = false;
            console.log(error);
        });
    }
    changeRole() {
        let dialogRef = this.sharedService.openConfirmDialog("You want to change the role. Any unsaved data will be removed.", "Yes", "No");
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.unsubscribe$))
            .subscribe((confirmed) => {
            if (confirmed) {
                this._storage.switchRole();
            }
        });
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
PostLoginHeaderComponent.ɵfac = function PostLoginHeaderComponent_Factory(t) { return new (t || PostLoginHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_7__["SharedApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"])); };
PostLoginHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostLoginHeaderComponent, selectors: [["post-login-header"]], outputs: { toggleSideMenu: "toggleSideMenu" }, ngContentSelectors: _c1, decls: 18, vars: 8, consts: [[1, "schoolInfo", "appHeaderTitle"], ["class", "orgName", 4, "ngIf"], [4, "ngIf"], [1, "fixedHeader_temp", "appHeader"], [3, "title", 4, "ngIf"], [3, "isNotification", "title", 4, "ngIf"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", "appToolTip", "'Log out'", 3, "click"], [1, "logout"], [3, "popUpMode", "icon", "title", "refreshButton", "deleteCardEvent", 4, "ngIf"], ["position", "120"], [1, "jump-animate", "top-left", "special-icon", "pointer", 2, "z-index", "500", 3, "click"], [1, "orgName"], ["mat-icon-button", "", "appToolTip", "'Menu'"], [3, "click"], [1, "fill-space"], [1, "bounce-in-animate"], ["fxFlex", ""], ["mat-icon-button", "", 3, "click"], [3, "ngClass"], ["fxFlex", "", 4, "ngIf"], [3, "userId"], ["mat-icon-button", "", "appToolTip", "'Settings'", 3, "click"], ["mat-icon-button", "", "aria-label", "Example icon-button with a menu", 3, "matMenuTriggerFor"], ["mat-icon-button", "", "appToolTip", "'Messages: '+ countMessages", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click"], ["matBadgePosition", "after", "matBadgeColor", "warn", 3, "ngClass", "matBadge"], ["mat-icon-button", "", "appToolTip", "'Notifications: '+ countNotifications", "matTooltipShowDelay", "100", "matTooltipHideDelay", "100", 3, "click"], [3, "title"], [1, "info-items"], [1, "closeButton"], ["mat-button", "", "type", "button", 1, "btn-cancel", "padding", 3, "click"], [3, "isNotification", "title"], ["mat-menu-item", "", 3, "click"], [3, "popUpMode", "icon", "title", "refreshButton", "deleteCardEvent"], ["style", "margin: 5px;", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [3, "form", "resetLabel", "resetMessage", "onReset"], [2, "margin", "5px"]], template: function PostLoginHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostLoginHeaderComponent_span_1_Template, 2, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostLoginHeaderComponent_app_select_school_branch_2_Template, 1, 0, "app-select-school-branch", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-toolbar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostLoginHeaderComponent_mat_toolbar_row_4_Template, 27, 10, "mat-toolbar-row", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PostLoginHeaderComponent_app_info_box_5_Template, 9, 1, "app-info-box", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostLoginHeaderComponent_app_info_box_6_Template, 9, 2, "app-info-box", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-menu", null, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PostLoginHeaderComponent_button_9_Template, 4, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_Template_button_click_10_listener($event) { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Log out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PostLoginHeaderComponent_card_13_Template, 3, 4, "card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PostLoginHeaderComponent_card_14_Template, 7, 9, "card", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "show-on-scroll", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginHeaderComponent_Template_mat_icon_click_16_listener($event) { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showSchoolBranchDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSchoolBranchDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin && ctx.showMessageBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin && ctx.showNotificationBox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasMultipleRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin && ctx.showCalendar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin && ctx.showSettingsBox);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbar"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _shared_directives_tool_tip_directive__WEBPACK_IMPORTED_MODULE_12__["ToolTipDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _shared_component_show_on_scroll_show_on_scroll_component__WEBPACK_IMPORTED_MODULE_14__["ShowOnScrollComponent"], _components_select_school_branch_select_school_branch_component__WEBPACK_IMPORTED_MODULE_15__["SelectSchoolBranchComponent"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_10__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_17__["DefaultFlexDirective"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_18__["LargeScreenComponent"], _shared_component_buttons_button_fullscreen_button_fullscreen_component__WEBPACK_IMPORTED_MODULE_19__["ButtonFullscreenComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_20__["DefaultClassDirective"], _shared_component_user_small_pic_user_small_pic_component__WEBPACK_IMPORTED_MODULE_21__["UserSmallPicComponent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_22__["MatBadge"], _shared_component_boxes_info_box_info_box_component__WEBPACK_IMPORTED_MODULE_23__["InfoBoxComponent"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_24__["MatDivider"], _shared_component_boxes_card_card_component__WEBPACK_IMPORTED_MODULE_25__["CardComponent"], _components_agenda_calendar_agenda_calendar_component__WEBPACK_IMPORTED_MODULE_26__["AgendaCalendarComponent"], _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_27__["UserSettingsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _shared_component_buttons_form_buttons_form_buttons_component__WEBPACK_IMPORTED_MODULE_28__["FormButtonsComponent"], _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_29__["LoaderComponent"]], styles: [".appHeader[_ngcontent-%COMP%]{  \r\n  background-color: var(--main-color);\r\n  color: white;\r\n}\r\n\r\n.schoolInfo[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  padding: 10px;\r\n  z-index: 100;\r\n  background-size: 200px 60px;\r\n}\r\n\r\n.orgName[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n  font-style: italic;\r\n  color: var(--main-color) !important;\r\n}\r\n\r\n.clicked[_ngcontent-%COMP%]{\r\n  color: greenyellow;\r\n  font-size: 30px;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%]{\r\n  color: var(--cross-icon-color);\r\n}\r\n\r\n.mat-badge-content[_ngcontent-%COMP%]{\r\n  opacity: 0.8;\r\n}\r\n\r\n.info-items[_ngcontent-%COMP%]{\r\n  padding: 10px 0px 10px 0px;\r\n}\r\n\r\n.closeButton[_ngcontent-%COMP%]{\r\n  margin: 10px 0px 10px 0px;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9wb3N0LWxvZ2luLWhlYWRlci9wb3N0LWxvZ2luLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUdBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcG9zdC1sb2dpbi9wb3N0LWxvZ2luLWhlYWRlci9wb3N0LWxvZ2luLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcEhlYWRlcnsgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNjaG9vbEluZm97XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwcHggNjBweDtcclxufVxyXG5cclxuLm9yZ05hbWV7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogdmFyKC0tbWFpbi1jb2xvcikgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsaWNrZWR7XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuXHJcbi5sb2dvdXR7XHJcbiAgY29sb3I6IHZhcigtLWNyb3NzLWljb24tY29sb3IpO1xyXG59XHJcbi5tYXQtYmFkZ2UtY29udGVudHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5pbmZvLWl0ZW1ze1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcblxyXG4uY2xvc2VCdXR0b257XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostLoginHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'post-login-header',
                templateUrl: './post-login-header.component.html',
                styleUrls: ['./post-login-header.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }, { type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_7__["SharedApiService"] }, { type: _post_login_service__WEBPACK_IMPORTED_MODULE_8__["PostLoginService"] }]; }, { toggleSideMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/post-login-menu/menu-user-profile/menu-user-profile.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/post-login/post-login-menu/menu-user-profile/menu-user-profile.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: MenuUserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuUserProfileComponent", function() { return MenuUserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/post-login/post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/component/boxes/row/row.component */ "./src/app/shared/component/boxes/row/row.component.ts");
/* harmony import */ var _shared_component_form_templates_form_profile_pic_form_profile_pic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/component/form-templates/form-profile-pic/form-profile-pic.component */ "./src/app/shared/component/form-templates/form-profile-pic/form-profile-pic.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");










class MenuUserProfileComponent {
    constructor(sharedService, plService) {
        this.sharedService = sharedService;
        this.plService = plService;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.toggleSideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadUserProfilePic();
    }
    ngOnInit() {
    }
    loadUserProfilePic() {
        this.profilePicPath = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].ftpUrl + this.sharedService.getUserProflePicDirectory() +
            this.sharedService.serializeMongoObjectId(this.sharedService.CurrentUserId()) + ".png" + "?update=" + Date.now();
    }
    closeSideMenu(value = null) {
        this.toggleSideMenu.emit(value);
    }
    onProfilePicChange(event) {
        if (event) {
            this.profilePicPath = this.profilePicPath + "?update=" + Date.now();
            this.closeSideMenu("profilePicUpdated");
        }
    }
    myProfile() {
        this.plService.navigateToMyProfile();
        this.closeSideMenu('true');
    }
}
MenuUserProfileComponent.ɵfac = function MenuUserProfileComponent_Factory(t) { return new (t || MenuUserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_4__["PostLoginService"])); };
MenuUserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuUserProfileComponent, selectors: [["app-menu-user-profile"]], outputs: { toggleSideMenu: "toggleSideMenu" }, decls: 12, vars: 0, consts: [[1, "sideNavHeader", "contentBgImage"], [1, "fill-space"], [1, "userPic"], [3, "picChange"], ["color", "primary", "mat-raised-button", "", "type", "button", 1, "myProfleLink", "pointer", "rt", 3, "click"]], template: function MenuUserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form-profile-pic", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("picChange", function MenuUserProfileComponent_Template_form_profile_pic_picChange_4_listener($event) { return ctx.onProfilePicChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuUserProfileComponent_Template_button_click_7_listener($event) { return ctx.myProfile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " My Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_5__["ROWComponent"], _shared_component_form_templates_form_profile_pic_form_profile_pic_component__WEBPACK_IMPORTED_MODULE_6__["FormProfilePicComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: [".sideNavClose[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n  text-align: right;\r\n  height: 20px;\r\n  background-color: white;\r\n}\r\n.sideNavClose[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]:hover{\r\n  color: var(--cross-icon-color);\r\n}\r\n.sideNavHeader[_ngcontent-%COMP%]{  \r\n  background-color: white;\r\n  height: 200px;\r\n  font-size: 14px;  \r\n  text-align: center;\r\n}\r\n.userPic[_ngcontent-%COMP%]{\r\n  zoom: 70% !important;\r\n}\r\n.myProfleLink[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  color: white;\r\n  background-color: var(--main-color);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9wb3N0LWxvZ2luLW1lbnUvbWVudS11c2VyLXByb2ZpbGUvbWVudS11c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQ0FBbUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9wb3N0LWxvZ2luL3Bvc3QtbG9naW4tbWVudS9tZW51LXVzZXItcHJvZmlsZS9tZW51LXVzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGVOYXZDbG9zZXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5zaWRlTmF2Q2xvc2UgbWF0LWljb246aG92ZXJ7XHJcbiAgY29sb3I6IHZhcigtLWNyb3NzLWljb24tY29sb3IpO1xyXG59XHJcblxyXG4uc2lkZU5hdkhlYWRlcnsgIFxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4OyAgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi51c2VyUGlje1xyXG4gIHpvb206IDcwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubXlQcm9mbGVMaW5re1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuUserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu-user-profile',
                templateUrl: './menu-user-profile.component.html',
                styleUrls: ['./menu-user-profile.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }, { type: _app_post_login_post_login_service__WEBPACK_IMPORTED_MODULE_4__["PostLoginService"] }]; }, { toggleSideMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/post-login-menu/post-login-menu.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/post-login/post-login-menu/post-login-menu.component.ts ***!
  \*************************************************************************/
/*! exports provided: PostLoginMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLoginMenuComponent", function() { return PostLoginMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _post_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/fesm2015/icon.js");











function PostLoginMenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PostLoginMenuComponent_ng_template_2_li_0_span_1_ng_container_3_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "keyboard_arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostLoginMenuComponent_ng_template_2_li_0_span_1_ng_container_3_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-icon", 11);
} }
function PostLoginMenuComponent_ng_template_2_li_0_span_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostLoginMenuComponent_ng_template_2_li_0_span_1_ng_container_3_mat_icon_2_Template, 2, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostLoginMenuComponent_ng_template_2_li_0_span_1_ng_container_3_mat_icon_3_Template, 1, 0, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menu_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", menu_r323.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !menu_r323.showSubfolders);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", menu_r323.showSubfolders);
} }
const _c0 = function (a0) { return { "openedParentMenu": a0 }; };
function PostLoginMenuComponent_ng_template_2_li_0_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginMenuComponent_ng_template_2_li_0_span_1_Template_span_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r333); const menu_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r332.closeAllMenus() && (menu_r323.showSubfolders = !menu_r323.showSubfolders); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostLoginMenuComponent_ng_template_2_li_0_span_1_ng_container_3_Template, 4, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, menu_r323.showSubfolders));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r323.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r324.onlyIcons);
} }
function PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_a_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menu_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r323.name);
} }
const _c1 = function (a0) { return { "activeMenu": a0 }; };
const _c2 = function (a0) { return [a0]; };
const _c3 = function (a0) { return { postLoginOutlet: a0 }; };
const _c4 = function (a0) { return { outlets: a0 }; };
const _c5 = function (a0, a1) { return [a0, a1]; };
function PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_a_0_Template(rf, ctx) { if (rf & 1) {
    const _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_a_0_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r342); const ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r341.closeSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_a_0_ng_container_3_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const modelUrl_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]()._modelUrl;
    const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r336.router.url.includes(menu_r323.url) && ctx_r336.router.url.includes(modelUrl_r321)))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c5, modelUrl_r321, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, menu_r323.url)))));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r323.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r336.onlyIcons);
} }
function PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const menu_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r323.name);
} }
function PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r348 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_ng_template_1_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r348); const ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r347.closeSideMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_ng_template_1_ng_container_3_Template, 2, 1, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r338.router.url.includes(menu_r323.url)))("routerLink", menu_r323.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r323.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r338.onlyIcons);
} }
function PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_a_0_Template, 4, 15, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_ng_template_1_Template, 4, 6, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const modelUrl_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2)._modelUrl;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", modelUrl_r321)("ngIfElse", _r337);
} }
function PostLoginMenuComponent_ng_template_2_li_0_ul_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
const _c6 = function (a0, a1) { return { _menus: a0, _modelUrl: a1 }; };
function PostLoginMenuComponent_ng_template_2_li_0_ul_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostLoginMenuComponent_ng_template_2_li_0_ul_4_ng_container_1_Template, 1, 0, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r323 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    const _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r318)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c6, menu_r323.children, menu_r323.modelUrl));
} }
const _c7 = function (a0) { return { "openedSection": a0 }; };
function PostLoginMenuComponent_ng_template_2_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostLoginMenuComponent_ng_template_2_li_0_span_1_Template, 4, 5, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostLoginMenuComponent_ng_template_2_li_0_ng_template_2_Template, 3, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostLoginMenuComponent_ng_template_2_li_0_ul_4_Template, 2, 5, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menu_r323 = ctx.$implicit;
    const _r325 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c7, menu_r323.showSubfolders));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (menu_r323.children == null ? null : menu_r323.children.length) > 0)("ngIfElse", _r325);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (menu_r323.children == null ? null : menu_r323.children.length) > 0 && menu_r323.showSubfolders);
} }
function PostLoginMenuComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostLoginMenuComponent_ng_template_2_li_0_Template, 5, 6, "li", 2);
} if (rf & 2) {
    const menus_r320 = ctx._menus;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", menus_r320);
} }
class PostLoginMenuComponent {
    constructor(router, sharedService, sharedApiService, plService) {
        this.router = router;
        this.sharedService = sharedService;
        this.sharedApiService = sharedApiService;
        this.plService = plService;
        this.toggleSideMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onlyIcons = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["MasterData"];
        this.AllDefaultMenuData = _env_environment__WEBPACK_IMPORTED_MODULE_1__["defaultMenuListAndEntitlements"];
        this.menuList = [];
    }
    ngOnInit() {
        this.sharedApiService.getUserRoleDdl()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe((result) => {
            let currentRoleEntitlements = result.filter(x => x["_id"]["$oid"] === this.sharedService.currentUserRoleId()['$oid']);
            this.setRoleWiseMenu(currentRoleEntitlements[0]["entitlements"]);
        }, (error) => {
            console.log(error);
        });
        this.closeAllMenus();
    }
    setRoleWiseMenu(roleEntitlements) {
        this.plService.currentUserRoleEntitlements = roleEntitlements;
        if (this.sharedService.currentUserRoleId()['$oid'] === this.masterData.superAdminRoleId['$oid']) {
            this.isSuperAdmin = true;
            roleEntitlements = this.AllDefaultMenuData;
        }
        else {
            roleEntitlements = roleEntitlements.filter(x => x.accessTypeId != 0);
        }
        roleEntitlements.forEach(validMenu => {
            let filteredMenu = this.filterMenusAndSubmenu(validMenu);
            this.menuList.push(filteredMenu);
        });
    }
    filterMenusAndSubmenu(validRoleMenu) {
        let menu = {};
        let defaultMenu = this.AllDefaultMenuData.find(x => x.pageId === validRoleMenu.pageId);
        menu['name'] = defaultMenu.menu.name;
        menu['icon'] = defaultMenu.menu.icon;
        menu['modelUrl'] = defaultMenu.menu.modelUrl;
        menu['children'] = [];
        if (this.sharedService.currentUserRoleId()['$oid'] === this.masterData.superAdminRoleId['$oid']) {
            console.log("yes i here hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh..........");
            menu['children'] = defaultMenu.subPage.map(x => x.menu);
        }
        else {
            validRoleMenu.subPage.filter(x => x.accessTypeId != 0)
                .forEach(element => {
                let validSubMenu = defaultMenu.subPage.find(x => x.subPageId === element.subPageId);
                if (validSubMenu) {
                    menu['children'].push(validSubMenu.menu);
                }
            });
        }
        return menu;
    }
    closeAllMenus(object = this.menuList) {
        if (!this.masterData.multipleMenuOpen) {
            object.forEach(element => {
                if (element["children"] && element["children"].length > 0) {
                    this.closeAllMenus(element["children"]);
                    element["showSubfolders"] = false;
                }
            });
        }
        return true;
    }
    closeSideMenu() {
        this.toggleSideMenu.emit(false);
    }
    superAdminButtonClicked() {
        let url = "pl/secure/school/(postLoginOutlet:schoolmgmt)";
        this.router.navigateByUrl(url);
    }
}
PostLoginMenuComponent.ɵfac = function PostLoginMenuComponent_Factory(t) { return new (t || PostLoginMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"])); };
PostLoginMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostLoginMenuComponent, selectors: [["app-post-login-menu"]], inputs: { onlyIcons: "onlyIcons" }, outputs: { toggleSideMenu: "toggleSideMenu" }, decls: 4, vars: 4, consts: [[4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["menuTemplate", ""], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"], ["class", "parentLink", 3, "ngClass", "click", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["class", "appear-animate", 4, "ngIf"], [1, "parentLink", 3, "ngClass", "click"], [1, "icons"], [4, "ngIf"], ["class", "arrows", 4, "ngIf"], [1, "arrows"], ["class", "link submenuName", 3, "ngClass", "routerLink", "click", 4, "ngIf", "ngIfElse"], ["noModelUrl", ""], [1, "link", "submenuName", 3, "ngClass", "routerLink", "click"], [1, "link", 3, "ngClass", "routerLink", "click"], [1, "appear-animate"]], template: function PostLoginMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PostLoginMenuComponent_ng_container_1_Template, 1, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PostLoginMenuComponent_ng_template_2_Template, 1, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", _r318)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c6, ctx.menuList));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["ul[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n  cursor: pointer !important;\r\n}\r\n\r\n.parentLink[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]{\r\n  display: block;\r\n  color: white;\r\n  padding: 12px ;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  opacity: 0.7;\r\n}\r\n\r\n.parentLink[_ngcontent-%COMP%]:hover, .link[_ngcontent-%COMP%]:hover{\r\n  background-color: #222;\r\n  opacity: 0.9;\r\n}\r\n\r\n.arrows[_ngcontent-%COMP%]{  \r\n  vertical-align: middle;\r\n}\r\n\r\n.icons[_ngcontent-%COMP%]{\r\n  vertical-align: sub;\r\n  opacity: 0.8;\r\n}\r\n\r\n.openedSection[_ngcontent-%COMP%]{\r\n  background-color: #222;\r\n  border-style: solid;\r\n  border-width: 0px 4px 4px 4px;\r\n  border-color: var(--main-color);\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.openedParentMenu[_ngcontent-%COMP%]{\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  background-color: var(--main-color) !important;\r\n  color: white;\r\n  opacity: 0.9 !important;\r\n}\r\n\r\nul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{\r\n  margin-left: 0px;\r\n  border-width: 1px;\r\n  border-color: whitesmoke;\r\n}\r\n\r\n.openedParentMenu[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{\r\n  opacity: 1;\r\n}\r\n\r\n.activeMenu[_ngcontent-%COMP%], .activeMenu[_ngcontent-%COMP%] > .mat-icon[_ngcontent-%COMP%]{\r\n  color: greenyellow;\r\n  opacity: 1;\r\n}\r\n\r\n.submenuName[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9wb3N0LWxvZ2luLW1lbnUvcG9zdC1sb2dpbi1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUUsY0FBYztFQUNkLFlBQVk7RUFDWixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsOENBQThDO0VBQzlDLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTs7RUFFRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vcG9zdC1sb2dpbi1tZW51L3Bvc3QtbG9naW4tbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG5saXtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhcmVudExpbmssXHJcbi5saW5re1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxMnB4IDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLnBhcmVudExpbms6aG92ZXIsXHJcbi5saW5rOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgb3BhY2l0eTogMC45O1xyXG59XHJcblxyXG4uYXJyb3dzeyAgXHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4uaWNvbnN7XHJcbiAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5vcGVuZWRTZWN0aW9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMjI7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDBweCA0cHggNHB4IDRweDtcclxuICBib3JkZXItY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLm9wZW5lZFBhcmVudE1lbnV7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG9wYWNpdHk6IDAuOSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG51bD5saT51bHtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIGJvcmRlci13aWR0aDogMXB4O1xyXG4gIGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLm9wZW5lZFBhcmVudE1lbnU+Lm1hdC1pY29ue1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLmFjdGl2ZU1lbnUsXHJcbi5hY3RpdmVNZW51PiAubWF0LWljb257XHJcbiAgY29sb3I6IGdyZWVueWVsbG93O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zdWJtZW51TmFtZXtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostLoginMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-login-menu',
                templateUrl: './post-login-menu.component.html',
                styleUrls: ['./post-login-menu.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }, { type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_5__["SharedApiService"] }, { type: _post_login_service__WEBPACK_IMPORTED_MODULE_6__["PostLoginService"] }]; }, { toggleSideMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onlyIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/post-login/post-login-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/post-login/post-login-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PostLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLoginRoutingModule", function() { return PostLoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _post_login_post_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-login/post-login.component */ "./src/app/post-login/post-login/post-login.component.ts");
/* harmony import */ var _app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/services/authorization.service */ "./src/app/shared/services/authorization.service.ts");






const routes = [
    {
        path: 'secure',
        component: _post_login_post_login_component__WEBPACK_IMPORTED_MODULE_2__["PostLoginComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | dashboard-dashboard-module */ "default~dashboard-dashboard-module~post-login-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/post-login/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
                canActivate: [_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"]]
            },
            {
                path: 'studentguardian',
                loadChildren: () => __webpack_require__.e(/*! import() | student-guardian-student-guardian-module */ "student-guardian-student-guardian-module").then(__webpack_require__.bind(null, /*! ./student-guardian/student-guardian.module */ "./src/app/post-login/student-guardian/student-guardian.module.ts")).then(m => m.StudentGuardianModule),
                canActivate: [_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"]]
            },
            {
                path: 'school',
                loadChildren: () => __webpack_require__.e(/*! import() | school-school-module */ "school-school-module").then(__webpack_require__.bind(null, /*! ./school/school.module */ "./src/app/post-login/school/school.module.ts")).then(m => m.SchoolModule),
                canActivate: [_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"]]
            },
            {
                path: 'exam',
                loadChildren: () => __webpack_require__.e(/*! import() | exam-exam-module */ "exam-exam-module").then(__webpack_require__.bind(null, /*! ./exam/exam.module */ "./src/app/post-login/exam/exam.module.ts")).then(m => m.ExamModule),
                canActivate: [_app_shared_services_authorization_service__WEBPACK_IMPORTED_MODULE_3__["AuthorizationService"]]
            },
            {
                path: 'transport',
                loadChildren: () => __webpack_require__.e(/*! import() | transport-transport-module */ "transport-transport-module").then(__webpack_require__.bind(null, /*! ./transport/transport.module */ "./src/app/post-login/transport/transport.module.ts")).then(m => m.TransportModule),
            },
            {
                path: 'employee',
                loadChildren: () => __webpack_require__.e(/*! import() | employee-employee-module */ "employee-employee-module").then(__webpack_require__.bind(null, /*! ./employee/employee.module */ "./src/app/post-login/employee/employee.module.ts")).then(m => m.EmployeeModule),
            },
            {
                path: 'attendance',
                loadChildren: () => __webpack_require__.e(/*! import() | attendance-attendance-module */ "attendance-attendance-module").then(__webpack_require__.bind(null, /*! ./attendance/attendance.module */ "./src/app/post-login/attendance/attendance.module.ts")).then(m => m.AttendanceModule),
            },
            {
                path: 'rating',
                loadChildren: () => __webpack_require__.e(/*! import() | rating-rating-module */ "rating-rating-module").then(__webpack_require__.bind(null, /*! ./rating/rating.module */ "./src/app/post-login/rating/rating.module.ts")).then(m => m.RatingModule),
            },
            {
                path: 'finance',
                loadChildren: () => __webpack_require__.e(/*! import() | finance-finance-module */ "finance-finance-module").then(__webpack_require__.bind(null, /*! ./finance/finance.module */ "./src/app/post-login/finance/finance.module.ts")).then(m => m.FinanceModule),
            }
        ]
    }
];
class PostLoginRoutingModule {
}
PostLoginRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostLoginRoutingModule });
PostLoginRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostLoginRoutingModule_Factory(t) { return new (t || PostLoginRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostLoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostLoginRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/post-login/post-login.module.ts":
/*!*************************************************!*\
  !*** ./src/app/post-login/post-login.module.ts ***!
  \*************************************************/
/*! exports provided: PostLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLoginModule", function() { return PostLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _post_login_post_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post-login/post-login.component */ "./src/app/post-login/post-login/post-login.component.ts");
/* harmony import */ var _post_login_menu_post_login_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post-login-menu/post-login-menu.component */ "./src/app/post-login/post-login-menu/post-login-menu.component.ts");
/* harmony import */ var _post_login_header_post_login_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./post-login-header/post-login-header.component */ "./src/app/post-login/post-login-header/post-login-header.component.ts");
/* harmony import */ var _post_login_footer_post_login_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./post-login-footer/post-login-footer.component */ "./src/app/post-login/post-login-footer/post-login-footer.component.ts");
/* harmony import */ var _post_login_menu_menu_user_profile_menu_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./post-login-menu/menu-user-profile/menu-user-profile.component */ "./src/app/post-login/post-login-menu/menu-user-profile/menu-user-profile.component.ts");
/* harmony import */ var _post_login_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./post-login-routing.module */ "./src/app/post-login/post-login-routing.module.ts");
/* harmony import */ var _components_select_school_branch_select_school_branch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/select-school-branch/select-school-branch.component */ "./src/app/post-login/components/select-school-branch/select-school-branch.component.ts");
/* harmony import */ var _post_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post-login.service */ "./src/app/post-login/post-login.service.ts");
/* harmony import */ var _components_agenda_calendar_agenda_calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/agenda-calendar/agenda-calendar.component */ "./src/app/post-login/components/agenda-calendar/agenda-calendar.component.ts");
/* harmony import */ var _components_holiday_calendar_holiday_calendar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/holiday-calendar/holiday-calendar.component */ "./src/app/post-login/components/holiday-calendar/holiday-calendar.component.ts");
/* harmony import */ var _components_exam_calendar_exam_calendar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/exam-calendar/exam-calendar.component */ "./src/app/post-login/components/exam-calendar/exam-calendar.component.ts");
/* harmony import */ var _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user-settings/user-settings.component */ "./src/app/post-login/components/user-settings/user-settings.component.ts");















class PostLoginModule {
}
PostLoginModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PostLoginModule });
PostLoginModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PostLoginModule_Factory(t) { return new (t || PostLoginModule)(); }, providers: [
        _post_login_service__WEBPACK_IMPORTED_MODULE_9__["PostLoginService"]
    ], imports: [[
            _post_login_routing_module__WEBPACK_IMPORTED_MODULE_7__["PostLoginRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PostLoginModule, { declarations: [_post_login_post_login_component__WEBPACK_IMPORTED_MODULE_2__["PostLoginComponent"], _post_login_menu_post_login_menu_component__WEBPACK_IMPORTED_MODULE_3__["PostLoginMenuComponent"], _post_login_header_post_login_header_component__WEBPACK_IMPORTED_MODULE_4__["PostLoginHeaderComponent"], _post_login_footer_post_login_footer_component__WEBPACK_IMPORTED_MODULE_5__["PostLoginFooterComponent"],
        _post_login_menu_menu_user_profile_menu_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["MenuUserProfileComponent"], _components_select_school_branch_select_school_branch_component__WEBPACK_IMPORTED_MODULE_8__["SelectSchoolBranchComponent"], _components_agenda_calendar_agenda_calendar_component__WEBPACK_IMPORTED_MODULE_10__["AgendaCalendarComponent"], _components_holiday_calendar_holiday_calendar_component__WEBPACK_IMPORTED_MODULE_11__["HolidayCalendarComponent"], _components_exam_calendar_exam_calendar_component__WEBPACK_IMPORTED_MODULE_12__["ExamCalendarComponent"], _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_13__["UserSettingsComponent"]], imports: [_post_login_routing_module__WEBPACK_IMPORTED_MODULE_7__["PostLoginRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostLoginModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _post_login_routing_module__WEBPACK_IMPORTED_MODULE_7__["PostLoginRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
                ],
                declarations: [_post_login_post_login_component__WEBPACK_IMPORTED_MODULE_2__["PostLoginComponent"], _post_login_menu_post_login_menu_component__WEBPACK_IMPORTED_MODULE_3__["PostLoginMenuComponent"], _post_login_header_post_login_header_component__WEBPACK_IMPORTED_MODULE_4__["PostLoginHeaderComponent"], _post_login_footer_post_login_footer_component__WEBPACK_IMPORTED_MODULE_5__["PostLoginFooterComponent"],
                    _post_login_menu_menu_user_profile_menu_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["MenuUserProfileComponent"], _components_select_school_branch_select_school_branch_component__WEBPACK_IMPORTED_MODULE_8__["SelectSchoolBranchComponent"], _components_agenda_calendar_agenda_calendar_component__WEBPACK_IMPORTED_MODULE_10__["AgendaCalendarComponent"], _components_holiday_calendar_holiday_calendar_component__WEBPACK_IMPORTED_MODULE_11__["HolidayCalendarComponent"], _components_exam_calendar_exam_calendar_component__WEBPACK_IMPORTED_MODULE_12__["ExamCalendarComponent"], _components_user_settings_user_settings_component__WEBPACK_IMPORTED_MODULE_13__["UserSettingsComponent"]
                ],
                exports: [],
                providers: [
                    _post_login_service__WEBPACK_IMPORTED_MODULE_9__["PostLoginService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/post-login/post-login/post-login.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/post-login/post-login/post-login.component.ts ***!
  \***************************************************************/
/*! exports provided: PostLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostLoginComponent", function() { return PostLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/services/shared-api.service */ "./src/app/shared/services/shared-api.service.ts");
/* harmony import */ var _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/shared/services/storage.service */ "./src/app/shared/services/storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm2015/extended.js");
/* harmony import */ var _post_login_header_post_login_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../post-login-header/post-login-header.component */ "./src/app/post-login/post-login-header/post-login-header.component.ts");
/* harmony import */ var _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/component/boxes/large-screen/large-screen.component */ "./src/app/shared/component/boxes/large-screen/large-screen.component.ts");
/* harmony import */ var _post_login_footer_post_login_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../post-login-footer/post-login-footer.component */ "./src/app/post-login/post-login-footer/post-login-footer.component.ts");
/* harmony import */ var _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/component/boxes/row/row.component */ "./src/app/shared/component/boxes/row/row.component.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm2015/flex.js");
/* harmony import */ var _post_login_menu_menu_user_profile_menu_user_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../post-login-menu/menu-user-profile/menu-user-profile.component */ "./src/app/post-login/post-login-menu/menu-user-profile/menu-user-profile.component.ts");
/* harmony import */ var _post_login_menu_post_login_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../post-login-menu/post-login-menu.component */ "./src/app/post-login/post-login-menu/post-login-menu.component.ts");
/* harmony import */ var _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/component/loader/loader.component */ "./src/app/shared/component/loader/loader.component.ts");
/* harmony import */ var _shared_pipe_school_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/pipe/school.pipe */ "./src/app/shared/pipe/school.pipe.ts");





















const _c0 = ["header"];
function PostLoginComponent_div_0_app_menu_user_profile_3_Template(rf, ctx) { if (rf & 1) {
    const _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menu-user-profile", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideMenu", function PostLoginComponent_div_0_app_menu_user_profile_3_Template_app_menu_user_profile_toggleSideMenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r312); const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r311.toggleSideMenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostLoginComponent_div_0_app_post_login_menu_6_Template(rf, ctx) { if (rf & 1) {
    const _r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-post-login-menu", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideMenu", function PostLoginComponent_div_0_app_post_login_menu_6_Template_app_post_login_menu_toggleSideMenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r314); const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r313.toggleSideMenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostLoginComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Please Wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We are loading Menu for you.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PostLoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r316 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "row");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PostLoginComponent_div_0_app_menu_user_profile_3_Template, 1, 0, "app-menu-user-profile", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostLoginComponent_div_0_app_post_login_menu_6_Template, 1, 0, "app-post-login-menu", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PostLoginComponent_div_0_div_7_Template, 8, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PostLoginComponent_div_0_Template_div_click_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r316); const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r315.showShideNav = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx_r304.showShideNav);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r304.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r304.isLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r304.isLoading);
} }
function PostLoginComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "school");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r306 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r306.currentSchoolBranchId, "branch"), " ");
} }
function PostLoginComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "disable-pointer": a0 }; };
class PostLoginComponent {
    constructor(sharedService, sharedApiService, _storageService, router) {
        this.sharedService = sharedService;
        this.sharedApiService = sharedApiService;
        this._storageService = _storageService;
        this.router = router;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isUserLogin = true;
        this.showShideNav = false;
        this.masterData = _env_environment__WEBPACK_IMPORTED_MODULE_4__["MasterData"];
        this.isLoading = false;
        this.isLoadingPage = false;
        this.isLoading = true;
        this.currentSchoolBranchId = this.sharedService.currentSchoolBranchId();
        this.sharedApiService.reloadAllMasterDataFromDB().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1))
            .subscribe((result) => {
            this.allMasterDataLoaded(result);
        }, (error) => {
        });
        this.menuClickShowLoading();
    }
    ngOnInit() {
        this._storageService.logIn$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.unsubscribe$))
            .subscribe((isLogin) => {
            this.isUserLogin = isLogin;
        });
    }
    allMasterDataLoaded(isSuccess) {
        this.isLoading = false;
        this.deactivateRoute();
    }
    // When user click on the menu and another module is loading then it will show loading animation,
    // Other user thing that nothing happen on click on menu
    menuClickShowLoading() {
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                this.isLoadingPage = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"]) {
                this.isLoadingPage = false;
            }
        });
    }
    deactivateRoute() {
        this.router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationStart"] && e.snapshot.outlet === "postLoginOutlet")
                this.outlet.deactivate();
        });
    }
    toggleSideMenu(event) {
        if (event === "profilePicUpdated") {
            // User profile pic uploaded
            this.header.profilePicPath = _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].ftpUrl + this.sharedService.getUserProflePicDirectory() +
                this.sharedService.serializeMongoObjectId(this.sharedService.CurrentUserId()) + ".png?updated=" + Date.now();
        }
        else {
            this.showShideNav = !this.showShideNav;
        }
    }
    schoolDdlChange(schoolId) {
        this.sharedService.currentSchoolId(schoolId);
        location.reload();
    }
    isLargeScreen() {
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (width > 1280) {
            return true;
        }
        else {
            return false;
        }
    }
    openSnackBar(message, action) {
        this.sharedService.openSnackBar(message, action);
    }
    ngOnDestroy() {
        this.unsubscribe$.next(true);
        this.unsubscribe$.complete();
    }
}
PostLoginComponent.ɵfac = function PostLoginComponent_Factory(t) { return new (t || PostLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
PostLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PostLoginComponent, selectors: [["app-post-login"]], viewQuery: function PostLoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.outlet = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
    } }, decls: 15, vars: 7, consts: [["class", "sideNavDiv", 3, "hidden", 4, "ngIf"], [1, "sideNavContent", 3, "ngClass"], [3, "toggleSideMenu"], ["header", ""], ["schoolBranchName", "", 4, "ngIf"], [1, "postLoginContent", "contentBgImage"], ["class", "card-fullscreen loadingPage", 4, "ngIf"], ["name", "postLoginOutlet", 3, "hidden"], [1, "sideNavDiv", 3, "hidden"], ["fxFlex", "300px", 1, "sideNav", "sideMenuColors", "shadow"], [3, "toggleSideMenu", 4, "ngIf"], ["class", "loadingData", 4, "ngIf"], ["fxFlex", "", 1, "closeSideNavDiv", 3, "click"], [1, "loadingData"], ["schoolBranchName", ""], [1, "card-fullscreen", "loadingPage"]], template: function PostLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PostLoginComponent_div_0_Template, 13, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "post-login-header", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleSideMenu", function PostLoginComponent_Template_post_login_header_toggleSideMenu_2_listener($event) { return ctx.toggleSideMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PostLoginComponent_span_4_Template, 3, 4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PostLoginComponent_div_6_Template, 6, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "large-screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "post-login-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUserLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.showShideNav));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoadingPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isLoadingPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _post_login_header_post_login_header_component__WEBPACK_IMPORTED_MODULE_10__["PostLoginHeaderComponent"], _shared_component_boxes_large_screen_large_screen_component__WEBPACK_IMPORTED_MODULE_11__["LargeScreenComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _post_login_footer_post_login_footer_component__WEBPACK_IMPORTED_MODULE_12__["PostLoginFooterComponent"], _shared_component_boxes_row_row_component__WEBPACK_IMPORTED_MODULE_13__["ROWComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_14__["DefaultFlexDirective"], _post_login_menu_menu_user_profile_menu_user_profile_component__WEBPACK_IMPORTED_MODULE_15__["MenuUserProfileComponent"], _post_login_menu_post_login_menu_component__WEBPACK_IMPORTED_MODULE_16__["PostLoginMenuComponent"], _shared_component_loader_loader_component__WEBPACK_IMPORTED_MODULE_17__["LoaderComponent"]], pipes: [_shared_pipe_school_pipe__WEBPACK_IMPORTED_MODULE_18__["SchoolPipe"]], styles: [".postLoginContent[_ngcontent-%COMP%]{\r\n    background-color: var(--main-bg-color);\r\n    color: black;\r\n    padding: 20px 2% 80px 2%;\r\n    min-height: 80vh;\r\n    overflow: auto;\r\n  }\r\n    \r\n  .sidenavContainer[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0px;\r\n    bottom: 0px;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n    \r\n  .sideNavContent[_ngcontent-%COMP%]{\r\n  color: var(--main-bg-color);\r\n  }\r\n    \r\n  .sideNavDiv[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 999;\r\n  }\r\n    \r\n  .sideNav[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 100;\r\n    height: 100%;\r\n    overflow: auto;\r\n  }\r\n    \r\n  .closeSideNavDiv[_ngcontent-%COMP%]{\r\n    background-color: #000000a1;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n  }\r\n    \r\n  .sideMenuColors[_ngcontent-%COMP%]{\r\n    background-color: var(--sidemenu-color);\r\n    color: var(--sidemenu-text-color);\r\n  }\r\n    \r\n  .loadingData[_ngcontent-%COMP%]{\r\n    padding: 50px 20px 50px 25px;\r\n  }\r\n    \r\n  .loadingPage[_ngcontent-%COMP%]{\r\n    background-color: #000000b8;\r\n  }\r\n    \r\n  .lowOpacity[_ngcontent-%COMP%]{\r\n    opacity: 0.5 !important;\r\n  }\r\n    \r\n  .hide-overflow[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    height: 100vh;\r\n    width: 100%;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1sb2dpbi9wb3N0LWxvZ2luL3Bvc3QtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQztJQUNHLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsT0FBTztJQUNQLFFBQVE7RUFDVjs7RUFFQTtFQUNBLDJCQUEyQjtFQUMzQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHVDQUF1QztJQUN2QyxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSx1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL3Bvc3QtbG9naW4vcG9zdC1sb2dpbi9wb3N0LWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLnBvc3RMb2dpbkNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJnLWNvbG9yKTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6IDIwcHggMiUgODBweCAyJTtcclxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9XHJcbiAgICBcclxuICAuc2lkZW5hdkNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlTmF2Q29udGVudHtcclxuICBjb2xvcjogdmFyKC0tbWFpbi1iZy1jb2xvcik7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlTmF2RGl2e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgfVxyXG5cclxuICAuc2lkZU5hdntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2xvc2VTaWRlTmF2RGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGExO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgfVxyXG5cclxuICAuc2lkZU1lbnVDb2xvcnN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlbWVudS1jb2xvcik7XHJcbiAgICBjb2xvcjogdmFyKC0tc2lkZW1lbnUtdGV4dC1jb2xvcik7XHJcbiAgfVxyXG5cclxuICAubG9hZGluZ0RhdGF7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHggNTBweCAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmxvYWRpbmdQYWdle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGI4O1xyXG4gIH1cclxuXHJcbiAgLmxvd09wYWNpdHl7XHJcbiAgICBvcGFjaXR5OiAwLjUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5oaWRlLW92ZXJmbG93e1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-post-login',
                templateUrl: './post-login.component.html',
                styleUrls: ['./post-login.component.css']
            }]
    }], function () { return [{ type: _app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"] }, { type: _app_shared_services_shared_api_service__WEBPACK_IMPORTED_MODULE_6__["SharedApiService"] }, { type: _app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { outlet: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]]
        }], header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['header']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=post-login-post-login-module-es2015.js.map