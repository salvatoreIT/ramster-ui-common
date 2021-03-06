import co from 'co'
import {Injectable} from '@angular/core'
import {HttpHeaders} from '@angular/common/http'

import {GlobalEventsService} from './globalEvents/globalEvents.service'
import {RequestService} from './request.service'

@Injectable()
export class BaseRESTService {
	headers = new HttpHeaders({'Content-Type': 'application/json'})
	baseUrl = '/'

	constructor(
		public globalEventsService: GlobalEventsService,
		public requestService: RequestService
	) {}

	handleError(err): void {
		this.globalEventsService.notify('error', err && err.error && err.error.error || 'An error has occurred.')
	}

	create(params): Promise<any> {
		const instance = this
		return new Promise((resolve, reject) => {
			co(function*() {
				yield instance.requestService.run('post', `${instance.baseUrl}`, {
					headers: instance.headers,
					body: params
				})
				return {success: true}
			}).then((res) => resolve(res), (err) => {
				instance.handleError(err)
				reject({error: true})
			})
		})
	}

	read(params): Promise<any> {
		const instance = this
		return new Promise((resolve, reject) => {
			co(function*() {
				return yield instance.requestService.run('get', `${instance.baseUrl}/item`, {
					headers: instance.headers,
					params
				})
			}).then((res) => resolve(res), (err) => {
				instance.handleError(err)
				reject({error: true})
			})
		})
	}

	readList(params): Promise<any> {
		const instance = this
		return new Promise((resolve, reject) => {
			co(function*() {
				return yield instance.requestService.run('get', `${instance.baseUrl}`, {
					headers: instance.headers,
					params
				})
			}).then((res) => resolve(res), (err) => {
				instance.handleError(err)
				reject({error: true})
			})
		})
	}

	readSelectList(params): Promise<any> {
		const instance = this
		return new Promise((resolve, reject) => {
			co(function*() {
				return yield instance.requestService.run('get', `${instance.baseUrl}/selectList`, {
					headers: instance.headers,
					params
				})
			}).then((res) => resolve(res), (err) => {
				instance.handleError(err)
				reject({error: true})
			})
		})
	}

	update(params): Promise<any> {
		const instance = this
		return new Promise((resolve, reject) => {
			co(function*() {
				return yield instance.requestService.run('patch', `${instance.baseUrl}/item/${params.id}`, {
					headers: instance.headers,
					body: params
				})
			}).then((res) => resolve(res), (err) => {
				instance.handleError(err)
				reject({error: true})
			})
		})
	}

	bulkUpsert(params): Promise<any> {
		const instance = this
		return new Promise((resolve, reject) => {
			co(function*() {
				return yield instance.requestService.run('put', `${instance.baseUrl}`, {
					headers: instance.headers,
					body: params
				})
			}).then((res) => resolve(res), (err) => {
				instance.handleError(err)
				reject({error: true})
			})
		})
	}

	delete(params): Promise<any> {
		const instance = this
		return new Promise((resolve, reject) => {
			co(function*() {
				return yield instance.requestService.run('delete', `${instance.baseUrl}/${params.id}`, {
					headers: instance.headers,
					body: params
				})
			}).then((res) => resolve(res), (err) => {
				instance.handleError(err)
				reject({error: true})
			})
		})
	}
}
