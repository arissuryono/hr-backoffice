import { NgModule } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [MatTableModule],
  exports: [MatTableModule],
  providers: [],
})
export class MaterialModule {}
