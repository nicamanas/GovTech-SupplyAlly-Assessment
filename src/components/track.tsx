import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import { ITrackingResult } from "../types/trackingTypes"
import Status from "../reusables/status"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../reusables/layout"

function Track() {
	const navigate = useNavigate()
	const { user } = useContext(UserContext)
	const [trackingId, setTrackingId] = useState<string>("")
	const [trackingData, setTrackingData] = useState<null | ITrackingResult>(
		null
	)
	const [isChecked, setIsChecked] = useState<boolean>(false)

	useEffect(() => {
		if (!user) {
			navigate("/")
			alert("Please login before using this feature!")
		}
	}, [user, navigate])

	function handleCheckedChange(e: any) {
		setIsChecked(e.target.checked)
	}

	async function getTrackingData(e: any) {
		e.preventDefault()

		setTrackingId(e.target.trackingId.value)

		const trackingResult = await axios.get(
			process.env.PUBLIC_URL + "/mockTrackingData.json"
		)

		// mock the api where we normally query with tracking id and return result
		if (e.target.trackingId.value == "1234567000T") {
			setTrackingData(trackingResult.data)
		} else {
			alert("Invalid Tracking ID received. Please try a different ID.")
		}
	}

	return (
		<div className="background flex flex-col items-center justify-center">
			{trackingData ? (
				<div className="my-4 track-expand">
					<div className="card-expand">
						<div className="card-expand-top">
							<div className="card-expand-top-boxemoji">
								&#x1F381;
							</div>
							<div className="px-3">
								<p className="card-expand-top-label">
									Tracking ID
								</p>
								<p className="card-expand-top-id">
									{trackingId}
								</p>
							</div>
						</div>
						<div>
							<Status
								trackingId={trackingId}
								trackingResults={trackingData}
							/>
						</div>
					</div>

					<div className="my-4">
						<form>
							<div className="content-start">
								<input
									type="checkbox"
									name="tracked"
									id="tracked"
									onChange={handleCheckedChange}
								/>{" "}
								<label htmlFor="tracked">
									Marked as tracked.
								</label>
							</div>
							<div className="my-6"></div>
						</form>

						<div className="inline-flex w-full my-3 justify-between">
							<button
								onClick={() => {
									setTrackingId("")
									setTrackingData(null)
									navigate("/track")
								}}
								className="track-back-button">
								Back
							</button>
							<button
								onClick={() => {
									alert(
										isChecked
											? "Package tracked"
											: "Package not tracked"
									)
									setTrackingId("")
									setTrackingData(null)
									navigate("/track")
								}}
								className="track-submit-button">
								Submit
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="card">
					<div className="track-header-text">Track parcel</div>
					<div className="track-text">
						Key in individual package number to track
					</div>
					<form onSubmit={getTrackingData}>
						<label className="track-text track-label">
							Tracking ID
						</label>
						<br />
						<input
							type="text"
							name="trackingId"
							className="login-field my-1"
						/>
						<input
							type="submit"
							value="Track"
							className="login-button justify-center text-white mt-5"
						/>
					</form>
				</div>
			)}
		</div>
	)
}

export default Track
