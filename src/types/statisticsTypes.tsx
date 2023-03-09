export interface ITrackedPackage {
	trackingId: string
	lastUpdatedDate: number
}

export interface IStatistic {
	totalPackages: number
	trackedPackages: ITrackedPackage[]
}
