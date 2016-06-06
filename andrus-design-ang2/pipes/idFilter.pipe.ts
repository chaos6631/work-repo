import {Injectable, Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'idFilter'
})
@Injectable()
export class IdFilterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        return items.filter(item => item.id.indexOf(args[0]) !== -1);
    }
}