/**
 * @Author: Nicolas Fazio <webmaster-fazio>
 * @Date:   25-09-2017
 * @Email:  contact@nicolasfazio.ch
 * @Last modified by:   webmaster-fazio
 * @Last modified time: 25-10-2017
 */

import { NgModule } from '@angular/core';
import { FilterByPipe } from './../pipes/filter-by/filter-by';
import { UrlToHttpsPipe } from './url-to-https/url-to-https';
import { ReplaceByPipe } from './replace-by/replace-by';
@NgModule({
	declarations: [FilterByPipe,
    UrlToHttpsPipe,
    ReplaceByPipe
	],
	imports: [],
	exports: [FilterByPipe,
    UrlToHttpsPipe,
    ReplaceByPipe
	]
})
export class PipesModule {}
