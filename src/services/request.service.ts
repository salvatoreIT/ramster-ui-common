import {Injectable} from '@angular/core'
import {HttpClient, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http'


@Injectable()
export class RequestService {
	constructor(public client: HttpClient) {}

	run(method: string, url: string, options?: {[x: string]: any}) {
		return new Promise((resolve, reject) => {
			try {
				let runOptions = {} as any,
					requestOptions = {} as any,
					body = null
				if (options && (typeof options === 'object')) {
					let {resolveWithFullResponse, ... otherOptions} = options
					requestOptions = otherOptions
					runOptions = {resolveWithFullResponse}
				}
				if (method.toLowerCase() === 'get') {
					if (!requestOptions || (typeof requestOptions !== 'object')) {
						requestOptions = {}
					}
					const optionsParams = requestOptions.params || {}
					let httpParams = new HttpParams()
					for (const key in optionsParams) {
						const optParam = optionsParams[key]
						if ((typeof optParam === 'object') && (optParam !== null)) {
							if (optParam instanceof Array) {
								optParam.forEach((item) => {
									if ((typeof item === 'object') && (item !== null)) {
										for (const innerKey in item) {
											httpParams = httpParams.set(`${key}[${innerKey}]`, item[innerKey])
										}
										return
									}
									httpParams = httpParams.set(`${key}[]`, item)
								})
								continue
							}
							for (const innerKey in optParam) {
								httpParams = httpParams.set(`${key}[${innerKey}]`, optParam[innerKey])
							}
							continue
						}
						httpParams = httpParams.set(key, optParam)
					}
					httpParams = httpParams.set('_', (new Date()).getTime().toString())
					requestOptions.params = httpParams
				} else {
					if (!requestOptions || (typeof requestOptions !== 'object')) {
						requestOptions = {}
					}
					body = (!requestOptions.body || (typeof requestOptions.body !== 'object')) ? {} : requestOptions.body
					body._ = (new Date()).getTime()
					delete requestOptions.body
				}
				if (!requestOptions.responseType) {}
				this.client.request(new HttpRequest(method, url, body, requestOptions)).toPromise().then(
					(response: HttpResponse<any>) => runOptions.resolveWithFullResponse ? resolve(response) : resolve(response.body),
					(error: any) => reject(error)
				)
			} catch(error) {
				reject(error)
			}
		})
	}
}
