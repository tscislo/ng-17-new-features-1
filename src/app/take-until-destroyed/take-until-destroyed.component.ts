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

  ngOnInit() {
    interval(1000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(
        () => console.log('tick')
    )
  }
}
