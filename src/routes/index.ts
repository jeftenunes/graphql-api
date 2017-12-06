import * as graphqlHttp from "express-graphql";
import { NextFunction, Request, Response, Router } from "express";

import apiSchema from '../graphql/schema';

export class IndexRoute {
   /**
   * Create the routes.
   *
   * @class IndexRoute
   * @method create
   * @static
   */
  public static create(router: Router) {
    console.log("[IndexRoute::create] Creating index route.");

    router.get('/check-health', (req: Request, res: Response, next: NextFunction) => {
        res.send('It works, man');
    });
    
    router.use('/graphql', graphqlHttp({
      schema: apiSchema,
      graphiql: true
    }));
  }
}