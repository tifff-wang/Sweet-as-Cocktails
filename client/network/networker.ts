/* eslint-disable @typescript-eslint/no-unused-vars */
import request from 'superagent'

const host = '/api/v1'

export async function get<Response>(path: string): Promise<Response> {
  const response = await request.get(`${host}/${path}`).set('myHeader', 'value')

  return response.body
}

export async function post<Response>(
  path: string,
  body?: string | object
): Promise<Response> {
  const response = await request
    .post(`${host}/${path}`)
    .set('myHeader', 'value')
    .send(body)

  return response.body
}

export async function deleteRequest<Response>(path: string): Promise<Response> {
  const response = await request
    .delete(`${host}/${path}`)
    .set('myHeader', 'value')

  return response.body
}

export async function patch<Response>(
  path: string,
  body?: string | object
): Promise<Response> {
  const response = await request
    .patch(`${host}/${path}`)
    .set('myHeader', 'value')
    .send(body)

  return response.body
}
