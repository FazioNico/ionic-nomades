import { NgModule } from '@angular/core';
import { FilterByPipe } from './../pipes/filter-by/filter-by';
import { UrlToHttpsPipe } from './url-to-https/url-to-https';
@NgModule({
	declarations: [FilterByPipe,
    UrlToHttpsPipe],
	imports: [],
	exports: [FilterByPipe,
    UrlToHttpsPipe]
})
export class PipesModule {}
