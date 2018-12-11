import {Component, OnChanges, Input, SimpleChanges, Output, EventEmitter} from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{

    accessChildComponentDirectlyTest:string='Success';
    accessChildComponentDirectlyTest2:string='Strongly types access';

    ngOnChanges(changes:SimpleChanges): void {
       this.starWidth=this.rating*75/5;
    }
    @Input() rating :number;
    starWidth: number;

    @Output() noifyParent :EventEmitter<string> = new EventEmitter<string>();
    onClicked():void{

        this.noifyParent.emit(`Selected rating is ${this.rating}`);
    }
}