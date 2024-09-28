export default class Bus {
	private static instance: Bus | undefined
	private subscriptions: Record<string, Array<Function>>

	private constructor() {
		this.subscriptions = {}
	}

	public static create(): Bus {
		if (!Bus.instance) {
			Bus.instance = new Bus()
		}

		return Bus.instance
	}

	public publish(event: string, payload?: Object) {
		console.log('Event published: ' + event, payload)
		if (event in this.subscriptions) {
			this.subscriptions[event].forEach(callback => {
				console.log('Calling callback')
				callback(payload)
			})
		}
	}

	public subscribe(event: string, callback: Function) {
		if (!(event in this.subscriptions)) {
			this.subscriptions[event] = []
		}
		if (!this.subscriptions[event].includes(callback)) {
			this.subscriptions[event].push(callback)
		}
	}

	public isSubscribed(event: string, callback: Function): Boolean {
		return this.subscriptions[event].includes(callback)
	}

	public static destroy(): void {
		Bus.instance = undefined
	}
}
