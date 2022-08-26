import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-canvas-mock'

import Dashboard from './Dashboard'
import { act } from 'react-dom/test-utils'
import { getDashboardData } from '../basic-ui/ApiCalls'

jest.mock('../basic-ui/ApiCalls')

window.matchMedia = window.matchMedia || (() => {
    return {
        matches: false,
        addListener() { },
        removeListener() { },
    }
})

describe('Dashboard test case', () => {
    beforeEach(()=>{
        getDashboardData.mockReturnValue([{one: 1}])
    })
    it('render the Dashboard component properly', async () => {
        await act(async () =>
<<<<<<< HEAD
            await render(<Dashboard />)
=======
            await render(<Dashboard /> )
>>>>>>> fe3063c20d15ed981374a94071e7ab479caf5cbf
        )
    })
})