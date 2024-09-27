import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: true
})
export class StatusPipe implements PipeTransform {

  transform(status: unknown, ...args: unknown[]): unknown {
    const errorStatus = !args.length ? 'bg-red-500' : 'Deleted';
    const draftStatus = !args.length ? 'bg-accent-500' : 'Draft';
    const publishStatus = !args.length ? 'bg-teal-500' : 'Published';
    switch (status) {
      case 'error':
        return errorStatus;
      case 'success':
        return 'bg-green-500';
      case 'draft':
        return draftStatus;
      case 'publish':
        return publishStatus;
      default:
        return '';
    }
  }

}
