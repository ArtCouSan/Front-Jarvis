import { NgModule } from '@angular/core';
import { MatButtonModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule, MatTableModule, MatTabsModule, MatToolbarModule } from '@angular/material';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [],
  imports: [],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: []
})
export class MaterialModule { }
