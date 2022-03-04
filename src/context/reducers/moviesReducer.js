function moviesReducer(state,action){
    switch(action.type){
        case 'addMovie':
        return {moviesList:[...state.moviesList,action.payload]};
      case 'removeMovie':
        return {moviesList:state.moviesList.filter(movie=>movie.id!==action.payload)};
      default:
        throw new Error();
    }
}

export default(moviesReducer)