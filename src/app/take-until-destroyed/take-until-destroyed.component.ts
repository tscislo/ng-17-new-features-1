import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-take-until-destroyed',
  standalone: true,
  imports: [],
  template: `
    <p>
      take-until-destroyed works!
    </p>
  `,
  styles: ``
})
export class TakeUntilDestroyedComponent implements OnInit {

  private destroyRef = inject(DestroyRef);

  constructor() {
    interval(1000)
        /**
         * Without DestroyRef can be used just in injection context such as a constructor, a factory function, a field initializer, or a function used with `runInInjectionContext`
         */
        .pipe(takeUntilDestroyed())
        .subscribe(
            () => console.log('tick constructor')
        )
  }

  ngOnInit() {
    interval(1000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(
        () => console.log('tick ngOnInit')
    )
  }
}
