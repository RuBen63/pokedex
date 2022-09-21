import { Observable, of } from 'rxjs';

export abstract class BaseService {

  protected handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.log(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        console.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
  }
}
