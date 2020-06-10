import { Directive,OnInit, ViewContainerRef ,Input, TemplateRef} from '@angular/core';
import { UserService } from './user/service/user.service';

@Directive({
  selector: '[appShowAuthed]'
})
export class ShowAuthedDirective implements OnInit {

  constructor(private userService :UserService, private templateRef: TemplateRef<any>,
    private viewContainer:ViewContainerRef) { }
condition:boolean
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.userService.currentUser.subscribe(
    (isAuthenticated) => {
      if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }
  );
}
@Input() set appShowAuthed(condition: boolean) {
  this.condition = condition;
}

}
