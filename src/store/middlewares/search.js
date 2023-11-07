const ignoreSpacesInSearch = () =>  (next) => (action) => {
    if (action.type === 'search/toggleSearch') {
        action.payload = action.payload.replaceAll(' ','')
    }
    next(action)
}

export default function getSearchMidlewares() {
    return [
        ignoreSpacesInSearch
    ]
}