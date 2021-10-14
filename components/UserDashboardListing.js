import Card from './Card'

const UserDashboardListing = () => {
    return (
        <Card className='card-user-listing'>
            <h2>Claim your listing!</h2>

            <ul>
                <li>Excited about advertising your practice as a licensed Tax Expert for free?</li>
                <li>Show your practice before thousands of potential clients by claiming your listing.</li>
                <li>Attract customers seeking your services in their area.</li>
            </ul>

            <form action="" method="post">
                <label for="state" className="form-label">State<span className='text-danger'>*</span></label>
                <input className="form-control" list="stateList" id="state" placeholder="-Select state-" />
                <datalist id="stateList">
                    <option value="San Francisco" />
                    <option value="New York" />
                    <option value="Seattle" />
                    <option value="Los Angeles" />
                    <option value="Chicago" />
                </datalist>
                <label for="lname" className="form-label">Enter last name<span className='text-danger'>*</span></label>
                <input type="text" name="lname" id="lname" className="form-control" placeholder='' />
                <button type="submit">Claim my profile</button>
            </form>
        </Card>
    )
}

export default UserDashboardListing
