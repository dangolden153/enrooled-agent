import React from 'react'

const CardListTwo = ({ children }) => {

    let groupBy2 = (data) => {
        let result = []
        for (let i = 0; i < data.length; i += 2) result.push(data.slice(i, i + 2))
        return result
    }

    const childGroups = groupBy2(children)

    return (
        <>
            {
                childGroups.map(( group, index) => (
                    <div key={index} className="card-list d-flex flex-column flex-lg-row w-100 align-items-center justify-content-center">
                        {group.map((item, index) => (
                            <div key={index} className="d-flex flex-column col-sm-12 col-md-12 col-lg-6 justify-content-center align-items-center">
                                {item}
                            </div>
                        )
                        )}
                    </div>
                ))
            }
        </>
    )
}

export default CardListTwo
