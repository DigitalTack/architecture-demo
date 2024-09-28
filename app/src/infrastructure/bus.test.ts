import { beforeEach, describe, expect, it, vi } from 'vitest'
import Bus from './bus'

describe('An event bus', () => {
	beforeEach(() => {
		Bus.destroy()
	})

	it('always has the same instance', () => {
		const bus = Bus.create()
		const secondBus = Bus.create()

		expect(bus === secondBus).toBeTruthy()
	})

	it('can destroy the bus', () => {
		const bus = Bus.create()
		expect(bus).toBeTruthy()

		Bus.destroy()
		const secondBus = Bus.create()

		expect(bus === secondBus).toBeFalsy()
	})

	it('we can subscribe to an event', () => {
		const bus = Bus.create()
		const event = 'EVENT'

		function callback() {
			// do nothing
		}

		bus.subscribe(event, callback)

		expect(bus.isSubscribed(event, callback)).toBeTruthy()
	})

	it('can publish an event', () => {
		const bus = Bus.create()
		const event = 'EVENT'

		const mockCallback = vi.fn()

		bus.subscribe(event, mockCallback)

		bus.publish(event)

		expect(mockCallback).toHaveBeenCalled()
	})
})
