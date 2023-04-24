import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { FeatureFlagService } from '../services/feature-flag.service';
import { take, tap } from 'rxjs';

@Directive({ selector: '[featureFlag]' })
export class FeatureFlagDirective implements OnInit {
  @Input() featureFlag: string | null = null;
  @Input() featureFlagElse: TemplateRef<any> | null = null;
  constructor(
    private _featureFlagService: FeatureFlagService,
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if (this.featureFlag) {
      this._featureFlagService.getAll().pipe(
        take(1),
        tap(flags => {
            if (flags.find(flag => flag.name === this.featureFlag)) {
                this._viewContainer.createEmbeddedView(this._templateRef)
            } else if(this.featureFlagElse) {
                this._viewContainer.createEmbeddedView(this.featureFlagElse)
            } else {
                this._viewContainer.clear()
            }
        })
        ).subscribe();
    } else {
        this._viewContainer.clear()
    }
  }
}
