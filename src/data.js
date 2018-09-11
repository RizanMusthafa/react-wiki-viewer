import Axios from 'axios';

export default class Data {
  url = '';

  setAllUrl(sw) {
    this.url = `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&list=search&srsearch=${sw}&origin=*`;
  }

  setOneUrl(id) {
    this.url = `https://en.wikipedia.org/w/api.php?action=query&pageids=${id}&prop=revisions&rvprop=content&format=json&formatversion=2&origin=*`
  }

  fetchAll(term) {
    this.setAllUrl(term);
    return Axios.get(this.url);
  }

  fetchOne(id) {
    this.setOneUrl(id);
    return Axios.get(this.url);
  }

}
