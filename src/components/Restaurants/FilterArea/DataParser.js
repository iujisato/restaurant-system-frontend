class RestaurantsDataParser {
  constructor(response) {
    const { data } = response;

    this.data = data;
  }

  parse() {
    return this.data.map(item => {
      const { id, name } = item;

      return {
        value: id,
        label: name,
      }
    })

  }
}

export default RestaurantsDataParser;
