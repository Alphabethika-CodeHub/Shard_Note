import { ObjectId } from 'mongodb';

import { ITodo, ITodoNoDocumentExtends } from '../database/models/todo.model';
import connectToDatabase from '../database/mongoose';

export async function createTodo(todo: ITodo): Promise<ITodoNoDocumentExtends> {
    const { db } = await connectToDatabase();
    const result = await db.collection('todos').insertOne(todo);
    return { ...todo, _id: result.insertedId };
}

export async function getTodos(): Promise<ITodo[]> {
    const { db } = await connectToDatabase();
    const todos = await db.collection('todos').find().toArray();
    return todos;
}

export async function getTodoById(id: string): Promise<ITodo | null> {
    const { db } = await connectToDatabase();
    const todo = await db.collection('todos').findOne({ _id: new ObjectId(id) });
    return todo;
}

export async function updateTodo(id: string, todo: Partial<ITodo>): Promise<ITodo | null> {
    const { db } = await connectToDatabase();
    const result = await db.collection('todos').updateOne(
        { _id: new ObjectId(id) },
        { $set: todo }
    );
    if (result.modifiedCount === 1) {
        return getTodoById(id);
    }
    return null;
}

export async function deleteTodo(id: string): Promise<boolean> {
    const { db } = await connectToDatabase();
    const result = await db.collection('todos').deleteOne({ _id: new ObjectId(id) });
    return result.deletedCount === 1;
}
