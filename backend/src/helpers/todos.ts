/* import { TodosAccess } from './todosAcess'
import { AttachmentUtils } from './attachmentUtils';
import { TodoItem } from '../models/TodoItem'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'
import { UpdateTodoRequest } from '../requests/UpdateTodoRequest'
import { createLogger } from '../utils/logger'
import * as uuid from 'uuid'
import * as createError from 'http-errors'

// TODO: Implement businessLogic
 */
import { APIGatewayProxyEvent } from 'aws-lambda'
//import { APIGateway } from 'aws-sdk'
import * as uuid from 'uuid'
import { getUserId } from '../lambda/utils'
import { TodoItem } from '../models/TodoItem'
//import { getUserId } from '../utils'
//import { createTodo } from '../../helpers/todosAcess'
import { CreateTodoRequest } from '../requests/CreateTodoRequest'

export function todoBuilder(todoRequest: CreateTodoRequest, event: APIGatewayProxyEvent):TodoItem
{
    const todoID = uuid.v4()
    const todo = {
      userId: getUserId(event),
      todoId: todoID,
      createdAt: new Date().toISOString(),
      //name: string
      //dueDate: string
      done: false,
      attachmentUrl: "",
      ...todoRequest
   }
   return todo as TodoItem
}