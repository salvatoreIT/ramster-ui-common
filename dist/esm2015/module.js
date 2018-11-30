/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
'use strict';
// angular dependencies
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseLayoutComponent } from './components/base-layout.component';
import { BasePageComponent } from './components/base-page.component';
import { BaseRESTService } from './services/baseREST.service';
import { FilesRESTService } from './services/filesREST.service';
import { getNested, setNested } from './utils/toolbelt';
import { GlobalEventsService } from './services/globalEvents/globalEvents.service';
import { RequestService } from './services/request.service';
class RamsterUICoreModule {
}
RamsterUICoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ]
            },] }
];
export { BasePageComponent, BaseLayoutComponent, BaseRESTService, FilesRESTService, getNested, GlobalEventsService, RequestService, setNested };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vcmFtc3Rlci11aS1jb3JlLyIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxZQUFZLENBQUE7O0FBR1osT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFBO0FBQzVDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUE7QUFFdEMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sb0NBQW9DLENBQUE7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sa0NBQWtDLENBQUE7QUFDbEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDZCQUE2QixDQUFBO0FBQzNELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDhCQUE4QixDQUFBO0FBQzdELE9BQU8sRUFBQyxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sa0JBQWtCLENBQUE7QUFDckQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOENBQThDLENBQUE7QUFDaEYsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFBO0FBR3pELE1BS00sbUJBQW1COzs7WUFMeEIsUUFBUSxTQUFDO2dCQUNULE9BQU8sRUFBRTtvQkFDUixZQUFZO2lCQUNaO2FBQ0Q7O0FBR0QsT0FBTyxFQUFDLGlCQUFpQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsY0FBYyxFQUF1QixTQUFTLEVBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8gYW5ndWxhciBkZXBlbmRlbmNpZXNcclxuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbidcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcclxuXHJcbmltcG9ydCB7QmFzZUxheW91dENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Jhc2UtbGF5b3V0LmNvbXBvbmVudCdcclxuaW1wb3J0IHtCYXNlUGFnZUNvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnRzL2Jhc2UtcGFnZS5jb21wb25lbnQnXHJcbmltcG9ydCB7QmFzZVJFU1RTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2Jhc2VSRVNULnNlcnZpY2UnXHJcbmltcG9ydCB7RmlsZXNSRVNUU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9maWxlc1JFU1Quc2VydmljZSdcclxuaW1wb3J0IHtnZXROZXN0ZWQsIHNldE5lc3RlZH0gZnJvbSAnLi91dGlscy90b29sYmVsdCdcclxuaW1wb3J0IHtHbG9iYWxFdmVudHNTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL2dsb2JhbEV2ZW50cy9nbG9iYWxFdmVudHMuc2VydmljZSdcclxuaW1wb3J0IHtSZXF1ZXN0U2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2UnXHJcbmltcG9ydCB7U2VsZWN0TGlzdEludGVyZmFjZX0gZnJvbSAnLi9pbnRlcmZhY2VzL3NlbGVjdExpc3QuaW50ZXJmYWNlJ1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHRDb21tb25Nb2R1bGVcclxuXHRdXHJcbn0pXHJcbmNsYXNzIFJhbXN0ZXJVSUNvcmVNb2R1bGUge31cclxuXHJcbmV4cG9ydCB7QmFzZVBhZ2VDb21wb25lbnQsIEJhc2VMYXlvdXRDb21wb25lbnQsIEJhc2VSRVNUU2VydmljZSwgRmlsZXNSRVNUU2VydmljZSwgZ2V0TmVzdGVkLCBHbG9iYWxFdmVudHNTZXJ2aWNlLCBSZXF1ZXN0U2VydmljZSwgU2VsZWN0TGlzdEludGVyZmFjZSwgc2V0TmVzdGVkfVxyXG4iXX0=