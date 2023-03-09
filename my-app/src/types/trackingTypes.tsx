export interface IStatus {
	datetime: number
	status: string
}

export interface ITrackingResult {
	[trackingId: string]: IStatus[]
}
