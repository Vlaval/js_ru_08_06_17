import { DATE_RANGE, SELECT } from '../constants'

const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (filters = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT:
      return {...filters, selected: payload.selectedArr}
    case DATE_RANGE:
      return {...filters, dateRange: payload.range}
  }

  return filters
}