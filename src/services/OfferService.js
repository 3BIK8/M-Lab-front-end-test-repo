import axios from "axios";

const OFFER_API_BASE_URL = "http://localhost:8080/mlab/engineering/offer/";

class OfferService {
    getOffers() {
        return axios.get(OFFER_API_BASE_URL);
    }
}

export default new OfferService()