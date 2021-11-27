const https = require('https');

class Request {
	constructor() {}
	
	async getJSON(url) {
		if (!url) throw new Error('Missing URL');
		if (!url.startsWith('https://')) throw new TypeError('URL must be starts with https');
		return new Promise((res, rej) => {
			return https.get(url, (got) => {
				let data = '';
				got.on('data', (chunk) => {
					data += chunk;
				})
				.on('end', () => {
					return res(JSON.parse(data));
				})
				.on('error', (e) => rej(e))
			}).on('error', (e) => rej(e));
		})
	}
	
	async getText(url) {
		if (!url) throw new Error('Missing URL');
		if (!url.startsWith('https://')) throw new TypeError('URL must be starts with https');
		return new Promise((res, rej) => {
			return https.get(url, (got) => {
				let data = '';
				got.on('data', (chunk) => {
					data += chunk;
				})
				.on('end', () => {
					return res(data);
				})
				.on('error', (e) => rej(e))
			}).on('error', (e) => rej(e));
		})
	}
	
	async getBuffer(url) {
		if (!url) throw new Error('Missing URL');
		if (!url.startsWith('https://')) throw new TypeError('URL must be starts with https');
		return new Promise((res, rej) => {
			return https.get(url, (got) => {
				let data = [];
				got.on('data', (chunk) => {
					data.push(chunk);
				})
				.on('end', () => {
					let buf = Buffer.concat(data);
					return res(Buffer.from(buf));
				})
				.on('error', (e) => rej(e))
			}).on('error', (e) => rej(e));
		})
	}
	
	async getBase64(url) {
		if (!url) throw new Error('Missing URL');
		if (!url.startsWith('https://')) throw new TypeError('URL must be starts with https');
		return new Promise((res, rej) => {
			return https.get(url, (got) => {
				let data = [];
				got.on('data', (chunk) => {
					data.push(chunk);
				})
				.on('end', () => {
					let buf = Buffer.concat(data);
					return res(buf.toString('base64'));
				})
				.on('error', (e) => rej(e))
			}).on('error', (e) => rej(e));
		})
	}
	
	async getBufferType(url, type) {
		if (!url) throw new Error('Missing URL');
		if (!url.startsWith('https://')) throw new TypeError('URL must be starts with https');
		return new Promise((res, rej) => {
			return https.get(url, (got) => {
				let data = [];
				got.on('data', (chunk) => {
					data.push(chunk);
				})
				.on('end', () => {
					let buf = Buffer.concat(data);
					return res(buf.toString(type ? type : 'utf-8'));
				})
				.on('error', (e) => rej(e))
			}).on('error', (e) => rej(e));
		})
	}
}
module.exports = Request;
