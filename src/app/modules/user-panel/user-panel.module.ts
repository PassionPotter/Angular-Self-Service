import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPanelRoutingModule } from './user-panel-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularMaterialImports } from '../shared/angular-material-imports.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ContainerComponent } from './_layout/container/container.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';
import { ToolbarComponent } from './_layout/toolbar/toolbar.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    DashboardComponent,
    ContainerComponent,
    SidebarComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    UserPanelRoutingModule,
    ReactiveFormsModule,
    AngularMaterialImports,
    ChartsModule,
  ],
})
export class UserPanelModule {}
